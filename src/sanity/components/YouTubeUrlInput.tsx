"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  set,
  unset,
  useClient,
  useFormValue,
  type StringInputProps,
} from "sanity";
import { Stack, Text, Card, Flex, Spinner, TextInput } from "@sanity/ui";

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
  } catch {
    /* invalid url */
  }
  return null;
}

interface OEmbedData {
  title: string;
  thumbnail_url: string;
}

async function fetchOEmbed(url: string): Promise<OEmbedData | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default function YouTubeUrlInput(props: StringInputProps) {
  const { onChange, value = "", elementProps } = props;
  const [loading, setLoading] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [fetchedTitle, setFetchedTitle] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const documentId = useFormValue(["_id"]) as string | undefined;
  const currentTitle = useFormValue(["title"]) as string | undefined;
  const client = useClient({ apiVersion: "2024-01-01" });
  const prevUrlRef = useRef(value);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = e.currentTarget.value;
      onChange(newVal ? set(newVal) : unset());
    },
    [onChange]
  );

  useEffect(() => {
    if (!value) {
      setThumbnail(null);
      setFetchedTitle(null);
      setError(null);
      return;
    }

    const videoId = extractVideoId(value);
    if (!videoId) {
      setThumbnail(null);
      setFetchedTitle(null);
      setError("Not a valid YouTube URL");
      return;
    }

    setLoading(true);
    setError(null);

    const urlChanged = prevUrlRef.current !== value;
    prevUrlRef.current = value;

    fetchOEmbed(value).then((data) => {
      setLoading(false);
      if (data) {
        setThumbnail(data.thumbnail_url);
        setFetchedTitle(data.title);

        if (urlChanged && !currentTitle && documentId && data.title) {
          const id = documentId.startsWith("drafts.")
            ? documentId
            : `drafts.${documentId}`;
          client
            .patch(id)
            .set({ title: data.title })
            .commit()
            .catch(() => {});
        }
      } else {
        setThumbnail(null);
        setFetchedTitle(null);
        setError("Could not fetch video info");
      }
    });
  }, [value, currentTitle, documentId, client]);

  return (
    <Stack space={3}>
      <TextInput {...elementProps} value={value} onChange={handleChange} />

      {loading && (
        <Flex align="center" gap={2}>
          <Spinner muted />
          <Text size={1} muted>
            Fetching video info…
          </Text>
        </Flex>
      )}

      {error && (
        <Text size={1} style={{ color: "#e53e3e" }}>
          {error}
        </Text>
      )}

      {fetchedTitle && (
        <Card padding={3} radius={2} tone="primary">
          <Text size={1} weight="semibold">
            Video title: {fetchedTitle}
          </Text>
          {!currentTitle && (
            <Text size={1} muted style={{ marginTop: 4 }}>
              This title will be auto-filled when you paste a new URL.
            </Text>
          )}
        </Card>
      )}

      {thumbnail && (
        <Card
          radius={2}
          overflow="hidden"
          style={{ maxWidth: 480, position: "relative" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt="YouTube thumbnail"
            style={{ width: "100%", display: "block" }}
          />
        </Card>
      )}
    </Stack>
  );
}
