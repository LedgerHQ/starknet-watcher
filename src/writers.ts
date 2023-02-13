// import { hexStrArrToStr, toAddress } from './utils';
import type { CheckpointWriter } from '@snapshot-labs/checkpoint';

// Function that will get called on account creation
export const handleDeploy: CheckpointWriter = async (args) => {
  if (!args.rawEvent || !args.event) return;
  console.info(args);
};

// Function that will get called on every additional signer
export const handleSignerAdd: CheckpointWriter = async (args) => {
  if (!args.rawEvent || !args.event) return;
  console.info(args);
};

// Function that will get called on every removal of signer
export const handleSignerRemove: CheckpointWriter = async (args) => {
  if (!args.rawEvent || !args.event) return;
  console.info(args);
};

// Function that will get called on every start of challenge period
export const handleChallengePeriodStart: CheckpointWriter = async (args) => {
  if (!args.rawEvent || !args.event) return;
  console.info(args);
};

// Function that will get called on every end of challenge period
export const handleChallengePeriodEnd: CheckpointWriter = async (args) => {
  if (!args.rawEvent || !args.event) return;
  console.info(args);
};
