/**
 * Base 64 characters
 */

var BASE64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

/**
 * Make a Uint8Array into a string
 *
 * @param {Uint8Array}
 * @returns {String}
 * @api private
 */

function tostr(bytes) {
  var r, i;

  r = [];
  for (i = 0; i < bytes.length; i++) {
    r.push(BASE64[bytes[i] % 64]);
  }

  return r.join('');
}

/**
 * Generate an unique id
 *
 * @param {Number} The number of chars of the uid
 * @api public
 */

function uid(length) {
  if (typeof window.crypto != 'undefined') {
    return tostr(crypto.getRandomValues(new Uint8Array(length)));
  } else {
    var a = new Array(length);
    for (var i = 0; i < length; i++) {
      a[i] = Math.floor(Math.random() * 256);
    }
    return tostr(a);
  }
}

/**
 * Exports
 */

module.exports = uid;
