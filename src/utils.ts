import jsQR from "jsqr"

import * as parseJWT from "jwt-decode"

export function jwtDecode( data : string ) {
    return parseJWT( data )
}

/**
 * retrieve raw-bitmap from ´img` element
 *  Returns ImageData UInt8 Buffers
 */
export function extractBitmap( image: HTMLImageElement , 
                               width: number, 
                               height: number){
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    ctx.drawImage( image, 0,0, width, height )
    return ctx.getImageData( 0,0, width, height )
}

/**
 * Read QR Code from a Image and return its data as string 
 * @param img 
 */
export function readQR( img: HTMLImageElement ) {
    let bitmap = extractBitmap( img, img.width, img.height )
    return jsQR( bitmap.data, bitmap.width, bitmap.height)
}

