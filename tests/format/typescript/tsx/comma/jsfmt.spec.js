const code = "const A = <T,>() => {}";

run_spec(
  {
    importMeta: import.meta,
    snippets: [
      "test.js",
      "test.cjs",
      "test.mjs",
      "test.ts",
      "test.jsx",
      "test.mts",
      "test.cts",
      "test.tsx",
      "test.unknown",
      undefined,
    ].map((filename) => ({ code, filename, name: filename ?? "unnamed" })),
  },
  ["typescript"]
);
