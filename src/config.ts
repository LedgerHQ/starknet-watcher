import { CheckpointConfig } from '@snapshot-labs/checkpoint';

// TODO: this one should be dynamic
const STARTING_BLOCK = 779875;

const config: CheckpointConfig = {
  network_node_url: process.env.RPC_URL as string,
  sources: [
    {
      contract: process.env.DEPLOYER_CONTRACT as string,
      abi: 'Deployer',
      events: [{ name: 'wallet_deployed', fn: 'handleDeploy' }],
      start: STARTING_BLOCK,
    },
  ],
  // dynamic template to track all the accounts deployed by the deployer contract
  templates: {
    Account: {
      abi: 'Account',
      events: [{ name: 'signer_add', fn: 'handleSignerAdd' }],
    },
  },
};

export default config;
