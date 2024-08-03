import type { Plugin, ViteDevServer } from "vite";
import _localtunnel, { TunnelConfig } from "localtunnel";
import pc from "picocolors";
import type { AddressInfo } from "node:net";

export const localtunnel = (config?: TunnelConfig): Plugin => {
  return {
    name: 'localtunnel',
    configureServer(server: ViteDevServer) {
      const { httpServer } = server;

      httpServer?.on('listening', async () => {
        const address = httpServer.address();
        const port = (address as AddressInfo).port;

        try {
          const tunnel = await _localtunnel({ port, ...config });
          const password = await (await fetch('https://loca.lt/mytunnelpassword')).text();

          if (tunnel.url) {
            server.config.logger.info(
              pc.green('  ➜') +
                pc.blue('  localtunnel:  ') +
                pc.cyan(tunnel.url) +
                pc.white(`  -  password : ${password}`),
            );
          }

          httpServer?.on('close', async () => tunnel?.close());
        } catch (error) {
          server.config.logger.info(
            pc.green('  ➜') + pc.blue('  localtunnel:  ') + pc.red('can not start localtunnel'),
          );
        }
      });
    },
  };
};
