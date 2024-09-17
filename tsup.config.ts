import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  dts: true,
  format: ["cjs"],
  clean: false,
  external: ["react", "react-dom"],
});
