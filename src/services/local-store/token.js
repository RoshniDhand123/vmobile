import { retrieveData, removeData, storeData } from ".";

const KEYS = { token: "AUTH" };

const saveToken = async (token) => {
  const resp = await storeData(KEYS.token, token);
  return resp;
};

const getToken = async (key = null) => {
  const resp = await retrieveData(KEYS.token);
  if (resp && key) return resp[key];
  return resp;
};

const deleteToken = async () => {
  const resp = await removeData(KEYS.token);
  return resp;
};

export { saveToken, getToken, deleteToken };
