## Usage

To start using the library, install it in your project:

```bash
npm install @amindevs/vite-tsconfig-localtunnel
```

Add `localtunnel()` to your vite plugins, start server and that it!

```ts
import { localtunnel } from '@amindevs/vite-tsconfig-localtunnel';

export default defineConfig({
  plugins: [..., localtunnel()],
});

```
