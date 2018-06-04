/**
 * Augment NodeList to be iterable
 */
if(process.browser && NodeList != undefined) {
    NodeList.prototype.map = Array.prototype.map;
    NodeList.prototype.forEach = Array.prototype.forEach;
}


/**
 * $ querySelector helper
 * @param {String} selector
 * @param {DOMNode} document 
 */
export function $( selector , domain=document ) {
    let d = domain.querySelectorAll( selector )
    return (d.length == 1 ? d[0] : d)
}


/**
 * retrieve raw-bitmap from ´img` element
 *  Returns ImageData UInt8 Buffers
 */
export function extractBitmap( image , width, height){
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    ctx.drawImage( image, 0,0, width, height )
    return ctx.getImageData( 0,0, width, height )
}

// string to uint array
export function text2ua(s) {
    var escstr = encodeURIComponent(s);
    var binstr = escstr.replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    });
    var ua = new Uint8Array(binstr.length);
    Array.prototype.forEach.call(binstr, function (ch, i) {
        ua[i] = ch.charCodeAt(0);
    });
    return ua;
}

// uint array to string
export function ua2text(ua) {
    var binstr = Array.prototype.map.call(ua, function (ch) {
        return String.fromCharCode(ch);
    }).join('');
    var escstr = binstr.replace(/(.)/g, function (m, p) {
        var code = p.charCodeAt(p).toString(16).toUpperCase();
        if (code.length < 2) {
            code = '0' + code;
        }
        return '%' + code;
    });
    return decodeURIComponent(escstr);
}

module.exports = {
    text2ua,
    ua2text,
    $,
    extractBitmap
}