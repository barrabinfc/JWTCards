/**
 * JWTCard web library
 * 
 * Read QR Codes and decode jwt payloads.
 * You should always verify and create the tokens on the server side.
 */
 import { JWTCard } from './JWTCard'
 import { readQR ,  jwtDecode } from './utils'

/**
 * Decode data retrieved from a JWTCard
 * @param rawCard 
 */
function decode( rawData : string ){
    return jwtDecode( rawData )
}



/**
 * Library Interface
 */
const JWTCards = {
    readQR,
    decode
}
export = JWTCards