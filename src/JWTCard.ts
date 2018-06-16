/**
 * AuthCard.js
 * 
 * A card that's used for authentication.
 *  its issued by some entity, and signed with its pub key.
 */

export interface JWTCard {
    /** Data encoded as JWT */
    payload: Object;
    /** Format of data */
    format:  string;
    /** FQDN of issuer */
    issuer:  string;
}