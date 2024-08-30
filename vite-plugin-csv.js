import { parse } from 'csv-parse/sync';

export default () => {
  let config = null;

  return {
    name: 'vite:db-plugin-csv',
    //apply: 'serve', // when should use this plugin: 'serve': local development, 'build': only on production build.
    configResolved(resolvedConfig) { // use when you need to use config in other hooks
      config = resolvedConfig
    },
    async transform(src, path) {
      const columns = config.command === 'serve';
      if (/\.csv$/.test(path)) {
        const records = parse(src, { columns })
        const code = `export default ${JSON.stringify(records)}`
        return { code };
      }
    },
    // transformIndexHtml(html) {
    //   return '<span>Hello world</span>'
    // }
    configureServer (server) {
      server.ws.on(
        'connection',
        () => server.ws.send('connected', 'Conntection stable')
      )

      server.ws.on('ping', (message, client) => {
        console.log(message);
        client.send('pong', 'Hello client');
      })
    },
    async handleHotUpdate(contenxt) {
      if (/\.csv$/.test(contenxt.file)) {
        contenxt.server.ws.send({
          type: 'custom',
          event: 'csv-update',
          data: {
            url: contenxt.modules[0].url,
            data: parse(await contenxt.read(), { columns: true }),
          }
        });
      }

      return [];
    }
  }
}