import CryptoJS from 'crypto-js';

export const useCryptoJS = () => {
    // let's pretend this are secret keys stored in a .env file
    const secretKey = CryptoJS.enc.Utf8.parse('1234567890123456');
    const fixedIV = CryptoJS.enc.Utf8.parse('1234567890123456');

    // Encrypt function
    const encryptAES = (text: string) => {
        const encrypted = CryptoJS.AES.encrypt(text, secretKey, {
            iv: fixedIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    };

    // Decrypt function
    const decryptAES = (cipherText: string) => {
        const decrypted = CryptoJS.AES.decrypt(cipherText, secretKey, {
            iv: fixedIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    };

    return { encryptAES, decryptAES };
};