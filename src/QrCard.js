/**
 * AuthCard.js
 * 
 * A card that's used for authentication.
 *  its issued by some entity, and signed with its pub key.
 */
import {text2ua, ua2text} from './utils'

 export const AuthTypes = {
    'TOKEN_CARD': 0x01,   // Single-use throwaway Key Card
    'AUTH_CARD': 0x02,    // User&Password combination,
    'PUB_CARD': 0x03,     // Pub Key
    'PRIV_CARD': 0x04     // Private key
}


export class QrCard {
    constructor( mdata , mtype=AuthTypes.AUTH_CARD ,
                 missuer = ''){
        this.data = mdata       // Data
        this.type =  mtype      // Data format
        this.issuer = missuer   // Domain Of issuer
    }
 
    /**
     * String form of this card.
     */
    toJson() {
        return JSON.stringify({d: this.data,
                               t: this.type,
                               i: this.issuer})
    }

    /**
     * From string to AuthCard
     * @param {String} data 
     */
    static fromJSON( data ) {
        let card = JSON.parse(data)
        return new QrCard( card.data, card.type , card.issuer)
    }

    static fromBinary( data ) {

    }

    static toBinary( data ) {

    }
}

export default { AuthTypes, QrCard };