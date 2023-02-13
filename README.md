# Starknet watcher

![Quality checks](https://github.com/ledgerhq/starknet-watcher/actions/workflows/quality.yml/badge.svg?branch=main)

Open source watcher for Starknet. This module is expected to respond to predetermined events by monitoring a dynamic list of issuers. It is used by [Ledger Fresh](https://github.com/LedgerHQ/ledger-fresh-management), our open source web wallet based on the account abstraction.

Wanna chat with us? Join our [Discord channel](https://discord.com/channels/885256081289379850/1053266126953529374)

## Setup

Install the dependencies using pnpm

```sh
pnpm install
```

Install the pre-push hook

```sh
npx lefhook install
```

## Testing

Start a database locally

## Getting Started

First, run the database:

```sh
docker run \
    -it -p 3306:3306 \
    -e MYSQL_ROOT_PASSWORD="default_password" \
    -e MYSQL_DATABASE="checkpoint" mysql:8.0 \
    "--default-authentication-plugin=mysql_native_password"
```

Then start the indexing script with the following command:

```sh
pnpm dev
```
