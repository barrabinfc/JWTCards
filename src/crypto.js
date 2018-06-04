/**
 * Sign, encrypt&decrypt functions
 *    with pub/priv keys
 * 
 * Helper utilities over Web Crypto API
 */

const ENCRYPT_ALGO = {
    name: "AES-CBC",
    length: 128
}
const SIGN_ALGO = {
    name: "HMAC",
    length: 256
}

export default {SIGN_ALGO}