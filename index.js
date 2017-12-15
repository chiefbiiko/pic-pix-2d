var getPixels = require('get-pixels')

function rgb2Hex (r, g, b) {
  return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}

function rastafy (file, opts, callback) { // opts.encoding, opts.mime
  if (!file || !opts) throw Error('missing arguments')

  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  }

  var _opts = { hex: opts.encoding === 'hex', mime: opts.mime }

  getPixels(file, _opts.mime, function (err, pixels) {
    if (err) return callback(err)
    var h = pixels.shape[0], w = pixels.shape[1], o =  0
    var rasta = Array(h), d = pixels.data
    for (var i = 0; i < h; i++) {
      rasta[i] = Array(w)
      for (var j = 0; j < w; j++, o += 4) {
        var p = { r: d[ o + 0 ], g: d[ o + 1 ], b: d[ o + 2 ], a: d[ o + 3 ] }
        rasta[i][j] = _opts.hex ? rgb2Hex(p.r, p.g, p.b) : p
      }
    }
    callback(null, rasta)
  })

}

module.exports = rastafy
