import Vue from 'vue'
import { Hashes } from 'crypto-js'
import * as crypto from 'crypto-js'
export const Cipher: Hashes = crypto
export class U8intArrayEnc {
  fromWordArray = (wordArray: crypto.DecryptedMessage): Uint8Array => {
    return <Uint8Array>(<any>wordArray.toString(<crypto.Encoder>(<any>this)))
  }
  stringify = (wordArray: crypto.LibWordArray): Uint8Array => {
    // Shortcuts
    const words = wordArray.words
    const sigBytes = wordArray.sigBytes
    // Convert
    const u8 = new Uint8Array(sigBytes)
    for (let i = 0; i < sigBytes; i++) {
      u8[i] = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff
    }
    return u8
  }
  parse = (u8arr: Uint8Array): crypto.LibWordArray => {
    // Shortcut
    const len = u8arr.length
    const words: number[] = []
    for (var i = 0; i < len; i++) {
      words[i >>> 2] |= (u8arr[i] & 0xff) << (24 - (i % 4) * 8)
    }
    return Cipher.lib.WordArray.create(words)
  }
}

export const U8ArrayEnc = new U8intArrayEnc()
let VueCrypto = function(Vue: any, options: any) {
  Object.defineProperties(Vue.prototype, {
    $crypto: {
      get() {
        return Cipher
      }
    }
  })
  Vue.crypto = Cipher
}
Vue.use(VueCrypto)
