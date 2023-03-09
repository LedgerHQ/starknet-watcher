import { CheckpointConfig } from "@snapshot-labs/checkpoint";
import accountABI from './abis/accountABI.json';
import deployerABI from './abis/deployerABI.json';

const config: CheckpointConfig = {
    network_node_url: process.env.RPC_URL as string,
    sources: [
        {
            contract: process.env.DEPLOYER_CONTRACT as string,
            abi: JSON.stringify(deployerABI),
            events: [{ name: "wallet_deployed", fn: "handleDeploy", }],
            // TODO: this one should be dynamic
            start: 779875,
        },
        {
            // TODO: this one should be dynamic
            contract: "0x50eb7745e3108d3e5ec6937a83a974929fcc7af94d5eaba7b4acf674c77f7ff",
            abi: JSON.stringify(accountABI),
            events: [{ name: "signer_add", fn: "handleSignerAdd", }],
            // TODO: this one should be dynamic
            start: 779875,
        }
    ]
};

export default config;
