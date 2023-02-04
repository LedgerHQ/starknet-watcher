import { hexStrArrToStr, toAddress } from './utils';
import type { CheckpointWriter } from '@snapshot-labs/checkpoint';


export async function handleDeploy() {
  // Run logic as at the time Contract was deployed.
}

// Function that will get called on every additional signer
export const handleSignerAdd: CheckpointWriter = async ({ block, tx, rawEvent, event, mysql }) => {
  if (!rawEvent || !event) return;

}

// Function that will get called on every removal of signer
export const handleSignerRemove: CheckpointWriter = async ({ block, tx, rawEvent, event, mysql }) => {
  if (!rawEvent || !event) return;

}

// Function that will get called on every start of challenge period
export const handleChallengePeriodStart: CheckpointWriter = async ({ block, tx, rawEvent, event, mysql }) => {
  if (!rawEvent || !event) return;

}

// Function that will get called on every end of challenge period
export const handleChallengePeriodEnd: CheckpointWriter = async ({ block, tx, rawEvent, event, mysql }) => {
  if (!rawEvent || !event) return;

}