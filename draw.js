var rastafy = require('./index')

function drawRect (y, x, color) {
  return '<rect x="' + x +'" y="' + y +'" width="1" height="1" ' +
    'fill="' + color +'"></rect>'
}

function collapse (h, w, accu) {
  return '<svg width="' + w + '" height="' + h + '">\n' +
    accu.join('\n') + '\n</svg>'
}

function draw (rasta, opts, callback) {
  if (!rasta || !opts) throw Error('missing arguments')

  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  }

  var h = rasta.length, w = rasta[0].length, accu = Array(h * w), n = 0

  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++, n++) {
      accu[n] = drawRect(i, j, rasta[i][j])
    }
  }
  // svg = '<svg width="' + w + '" height="' + h + '">' + accu.join('\n') + '</svg>'
  callback(null, collapse(h, w, accu))
}

module.exports = draw
