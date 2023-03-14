import type { CheckpointWriter } from '@snapshot-labs/checkpoint';
import AccountORM from './utils/account';
import SignerORM from './utils/signer';

// TODO: rework error handling

// function that will get called on account creation
export const handleDeploy: CheckpointWriter = async (args) => {
  if (!args.event) {
    console.error(args);
    throw new Error(
      `PANIC: no parsed event received. Block number:${args.block.block_number}`
    );
  }

  const { signer, wallet_address: walletAddress } = args.event;

  // start tracking events from this new deployed account contract
  args.instance.executeTemplate('Account', {
    contract: walletAddress,
    start: args.block.block_number,
  });

  try {
    // store the signer in the database if it doesn't exist
    await SignerORM.set(signer, args.mysql);

    // we assume at this point the account doesn't exist
    // TODO: double-check this assumption
    await AccountORM.set(walletAddress, signer, args.mysql);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

// Function that will get called on every additional signer
export const handleSignerAdd: CheckpointWriter = async (args) => {
  if (!args.event) {
    console.error(args);
    throw new Error(
      `PANIC: no parsed event received. Block number:${args.block.block_number}`
    );
  }
};

// Function that will get called on every removal of signer
export const handleSignerRemove: CheckpointWriter = async (args) => {
  if (!args.event) {
    console.error(args);
    throw new Error(
      `PANIC: no parsed event received. Block number:${args.block.block_number}`
    );
  }
};

// Function that will get called on every start of challenge period
export const handleChallengePeriodStart: CheckpointWriter = async (args) => {
  if (!args.event) {
    console.error(args);
    throw new Error(
      `PANIC: no parsed event received. Block number:${args.block.block_number}`
    );
  }
};

// Function that will get called on every end of challenge period
export const handleChallengePeriodEnd: CheckpointWriter = async (args) => {
  if (!args.event) {
    console.error(args);
    throw new Error(
      `PANIC: no parsed event received. Block number:${args.block.block_number}`
    );
  }
};
