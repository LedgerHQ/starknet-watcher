# Starknet watcher

![Quality checks](https://github.com/ledgerhq/starknet-watcher/actions/workflows/quality.yml/badge.svg?branch=main)

Open source watcher for Starknet. This module is expected to respond to predetermined events by monitoring a dynamic list of issuers. It is used by [Ledger Fresh](https://github.com/LedgerHQ/ledger-fresh-management), our open source web wallet based on the account abstraction.

Wanna chat with us? Join our [Telegram channel](https://t.me/+_cZcU5wZvyhmM2U0)

## Setup

Install the dependencies using pnpm

```sh
pnpm install
```

Install the pre-push hook

```sh
npx lefthook install
```

## Testing

Start a database locally

## Getting Started

First, mount the database image using docker-compose:

```sh
docker-compose up -d
```

Update your .env file by adding the database url

```sh
DATABASE_URL=mysql://root:default_password@localhost:3306/checkpoint
```

Then start the indexing script with the following command:

```sh
pnpm dev
```
