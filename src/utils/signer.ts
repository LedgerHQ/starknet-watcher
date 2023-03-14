export type SignerType = { id: string };

// TODO: better manager error management
const get = async (id: string, mysql): Promise<SignerType> => {
  try {
    // fetch the signers that match the provider id
    const signers: SignerType = await mysql.queryAsync(
      `SELECT * FROM signers WHERE id='${id}' LIMIT 1`
    );
    // return the first result (should be the only one)
    return signers[0];
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const set = async (id: string, mysql) => {
  try {
    // store the signer in the database if it doesn't exist
    // if it does, ignore it
    await mysql.queryAsync(`INSERT IGNORE INTO signers VALUES(${id});`);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const SignerORM = {
  get,
  set,
};

export default SignerORM;
