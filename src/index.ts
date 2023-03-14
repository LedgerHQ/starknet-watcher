import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import Checkpoint, { LogLevel } from '@snapshot-labs/checkpoint';
import accountABI from './abis/accountABI.json';
import deployerABI from './abis/deployerABI.json';

import config from './config';
import * as writers from './writers';

// TODO: split the configuration of the express server and the configuration of checkpoint

// load the configuration file
// TODO: import the schema directly by supoorting this file extension
// https://dev.to/open-graphql/how-to-resolve-import-for-the-graphql-file-with-typescript-and-webpack-35lf
const dir = __dirname.endsWith('dist/src') ? '../' : '';
const schemaFile = path.join(__dirname, `${dir}../src/schema.gql`);
const schema = fs.readFileSync(schemaFile, 'utf8');

const checkpointOptions = {
  logLevel: LogLevel.Info,
  prettifyLogs: process.env.NODE_ENV === 'development' ? true : false,
  dbConnection: process.env.DATABASE_URL as string,
  abis: {
    Deployer: deployerABI,
    Account: accountABI,
  },
};

// Initialize checkpoint
const checkpoint = new Checkpoint(config, writers, schema, checkpointOptions);

// reset the indexer in development mode only, than start it
if (process.env.NODE_ENV === 'development') {
  console.info('Resetting checkpoint');
  checkpoint.reset().then(() => {
    checkpoint.start();
  });
} else {
  checkpoint.start();
}

// setup express server
const app = express();
app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ limit: '4mb', extended: false }));
app.use(cors({ maxAge: 86400 }));

// mount Checkpoint's GraphQL API on path /
app.use('/', checkpoint.graphql);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
