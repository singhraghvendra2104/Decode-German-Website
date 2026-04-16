"use client";

import { useCallback, useState } from "react";
import { type ObjectInputProps, set } from "sanity";
import { uuid } from "@sanity/uuid";
import {
  Stack,
  Button,
  Card,
  Text,
  TextArea,
  Flex,
  Dialog,
  Box,
} from "@sanity/ui";
import { ClipboardIcon } from "@sanity/icons";

function parseTSV(text: string) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trimEnd())
    .filter((l) => l.length > 0);
  if (lines.length === 0) return null;

  const rows = lines.map((line) => line.split("\t").map((cell) => cell.trim()));
  const maxCols = Math.max(...rows.map((r) => r.length));
  return rows.map((r) => {
    while (r.length < maxCols) r.push("");
    return r;
  });
}

function buildTableValue(parsed: string[][]) {
  return {
    _type: "table" as const,
    rows: parsed.map((cells) => ({
      _type: "tableRow" as const,
      _key: uuid(),
      cells,
    })),
  };
}

export default function PasteTableInput(props: ObjectInputProps) {
  const { onChange, renderDefault, value } = props;
  const [open, setOpen] = useState(false);
  const [pasteText, setPasteText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const hasTable = !!(value as Record<string, unknown>)?.table;

  const handlePaste = useCallback(() => {
    const parsed = parseTSV(pasteText);
    if (!parsed || parsed.length === 0) {
      setError("Could not parse any rows. Paste tab-separated text.");
      return;
    }
    if (parsed[0].length < 2) {
      setError(
        "Only 1 column detected. Make sure columns are separated by tabs (copy from a spreadsheet or use Tab key)."
      );
      return;
    }

    const tableData = buildTableValue(parsed);
    const current = (value ?? {}) as Record<string, unknown>;
    onChange(set({ ...current, table: tableData }));
    setOpen(false);
    setPasteText("");
    setError(null);
  }, [pasteText, onChange, value]);

  return (
    <Stack space={3}>
      <Flex gap={2}>
        <Button
          icon={ClipboardIcon}
          text={hasTable ? "Replace table from paste" : "Paste table"}
          tone="primary"
          mode="ghost"
          fontSize={1}
          padding={3}
          onClick={() => {
            setOpen(true);
            setError(null);
            setPasteText("");
          }}
        />
      </Flex>

      {open && (
        <Dialog
          header="Paste Table Data"
          id="paste-table-dialog"
          onClose={() => setOpen(false)}
          zOffset={1000}
          width={1}
        >
          <Box padding={4}>
            <Stack space={3}>
              <Text size={1} muted>
                Paste tab-separated text below (e.g. copied from Google Sheets,
                Excel, or a two-column list with Tab between columns).
              </Text>
              <Card border padding={2} radius={2}>
                <Text size={0} muted style={{ fontFamily: "monospace" }}>
                  German → Tab → English ↵<br />
                  die Anmeldung → Tab → registration ↵
                </Text>
              </Card>
              <TextArea
                rows={10}
                value={pasteText}
                onChange={(e) => setPasteText(e.currentTarget.value)}
                placeholder={
                  "German\tEnglish\ndie Anmeldung\tregistration\ndas Bürgeramt\tcitizen's office"
                }
                style={{ fontFamily: "monospace" }}
              />
              {error && (
                <Text size={1} style={{ color: "#e53e3e" }}>
                  {error}
                </Text>
              )}
              {pasteText && !error && (
                <Text size={1} muted>
                  Preview: {parseTSV(pasteText)?.length ?? 0} rows,{" "}
                  {parseTSV(pasteText)?.[0]?.length ?? 0} columns
                </Text>
              )}
              <Flex gap={2} justify="flex-end">
                <Button
                  text="Cancel"
                  mode="ghost"
                  onClick={() => setOpen(false)}
                />
                <Button
                  text="Create Table"
                  tone="primary"
                  onClick={handlePaste}
                  disabled={!pasteText.trim()}
                />
              </Flex>
            </Stack>
          </Box>
        </Dialog>
      )}

      {renderDefault(props)}
    </Stack>
  );
}
