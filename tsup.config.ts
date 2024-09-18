import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  dts: true,
  format: ["esm"],
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildOptions(options, context) {
    options.banner = {
      js: `import * as requireReact from 'react';
         import * as requireReactDom from 'react-dom';

         function require(m) {
           if (m === 'react') return requireReact;
           if (m === 'react-dom') return requireReactDom;
           throw new Error(\`Unknown module \${m}\`);
         }`,
    };
  },
});
