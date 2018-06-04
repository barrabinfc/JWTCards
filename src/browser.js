/**
 * Browser index
 */
import utils from './utils'
import {QrCard} from "./QrCard"

const jose = require(`node-jose`)

/** QR Reader and Writer */
const  AwesomeQR = require("./assets/Awesome-qr.js/dist/awesome-qr.min")()
import QRReader from "jsqr"

export default {
    QrCard,
    AwesomeQR,
    QRReader,
    utils,
    jose
};

/**
 * Export globals for browser
 */
window.QrCard = QrCard
window.jose = jose
window.AwesomeQR = AwesomeQR
window.QRReader = QRReader
window.u = utils
window.$ = u.$
