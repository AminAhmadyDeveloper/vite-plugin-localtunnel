## Usage

To start using the library, install it in your project:

```bash
npm install -D vite-localtunnel-plugin
```

Add `localtunnel()` to your vite plugins, start server and that it!

```ts
import { localtunnel } from 'vite-localtunnel-plugin';

export default defineConfig({
  plugins: [..., localtunnel()],
});

```
