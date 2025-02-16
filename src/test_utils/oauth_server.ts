import { log } from '../log';
import { OAuth2Server } from 'oauth2-mock-server';

export const startOauthServer = async () => {
  const server = new OAuth2Server();
  await server.issuer.keys.generate('RS256');
  await server.start(7777, 'localhost');
  log.info('Started OAuth server');
  return server;
};
