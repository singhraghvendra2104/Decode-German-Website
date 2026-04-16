"use client";

import { Drawer } from "@mantine/core";
import Image from "@/components/ui/ImageWithSkeleton";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/lib/sanity";
import ArticleBody from "./ArticleBody";

interface Props {
  post: Post | null;
  opened: boolean;
  onClose: () => void;
}

export default function ArticleDrawer({ post, opened, onClose }: Props) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      position="right"
      size={640}
      title=""
      overlayProps={{ backgroundOpacity: 0.4, blur: 2 }}
      styles={{
        content: {
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        },
        header: {
          padding: "8px 16px",
          borderBottom: "1px solid #eee",
          flexShrink: 0,
        },
        body: {
          flex: 1,
          padding: 0,
          overflow: "hidden",
        },
      }}
    >
      {post && (
        <div data-lenis-prevent className="h-full overflow-y-auto [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.3)_transparent] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black/30 [&::-webkit-scrollbar-thumb]:rounded">
          {post.image ? (
            <div className="w-full aspect-[2/1] relative overflow-hidden">
              <Image
                src={urlFor(post.image).width(900).height(450).url()}
                alt={post.image.alt || post.title}
                fill
                className="object-cover"
              />
            </div>
          ) : post.youtubeThumbnail ? (
            <div className="w-full aspect-[2/1] relative overflow-hidden">
              <Image
                src={post.youtubeThumbnail}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="px-5 md:px-8 py-5 md:py-6">
            {post.body && post.body.length > 0 ? (
              <ArticleBody body={post.body} />
            ) : (
              <p className="text-gray-400 italic">
                This article has no content yet.
              </p>
            )}
          </div>
        </div>
      )}
    </Drawer>
  );
}
