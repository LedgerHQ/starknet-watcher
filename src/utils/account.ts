export type AccountType = {
  id: string;
  signers: string;
};

// TODO: better manage error management
const get = async (id: string, mysql): Promise<AccountType> => {
  try {
    // fetch the accounts that match the provider id
    const accounts: AccountType = await mysql.queryAsync(
      `SELECT * FROM accounts WHERE id='${id}' LIMIT 1`
    );
    // return the first result (should be the only one)
    return accounts[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const set = async (id: string, signer: string, mysql) => {
  try {
    // store the account in the database if it doesn't exist
    // if it does, ignore it
    await mysql.queryAsync(
      `INSERT IGNORE INTO accounts SET id='${id}', signers='${signer}'`
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const update = async (id: string, signer: string, mysql) => {
  try {
    // TODO: Manage multi-signers update as soon as the many-to-many relationship is implemented
    // update the account
    await mysql.queryAsync(
      `UPDATE accounts SET signers='${signer}' WHERE id='${id}'`
    );
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const AccountORM = {
  get,
  set,
  update,
};

export default AccountORM;
