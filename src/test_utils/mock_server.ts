import emocks from 'emocks';
import express from 'express';
import { Server } from 'node:http';
import { AddressInfo } from 'node:net';
import { join } from 'node:path';
import { log } from '../log';

export const runMockServer = async (mockDir: string) =>
  new Promise<Server>((resolve) => {
    const app = express();
    app.use(express.json());
    app.use('/', emocks(join(process.cwd(), 'mocks', mockDir)));

    const server = app.listen(0);
    server.on('listening', () => {
      log.info(
        'Mock server listening at %d',
        (server.address() as AddressInfo).port
      );
    });
    resolve(server);
  });
