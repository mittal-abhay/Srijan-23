import CryptoJS from "crypto-js";

const secretPass = "SRIJAN23";
export const encryptData = (object) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(object),
    secretPass
  ).toString();
  return data;
};

export const decryptData = (string) => {
  const bytes = CryptoJS.AES.decrypt(string, secretPass);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return data;
};
