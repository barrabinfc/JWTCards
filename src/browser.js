/**
 * Browser index
 */
import utils from './utils'
import {QrCard} from "./QrCard"

/** QR Reader and Writer */
const  AwesomeQR = require("./assets/Awesome-qr.js/dist/awesome-qr.min")()
import QRReader from "jsqr"

export default {
    QrCard,
    AwesomeQR,
    QRReader,
    utils
};

/**
 * Export globals for browser
 */
window.QrCard = QrCard
window.AwesomeQR = AwesomeQR
window.QRReader = QRReader
window.u = utils
window.$ = u.$