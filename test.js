var tape = require('tape')

var pix = require('./index')

tape('data should be a 2d array', function (t) {

  pix('./pic.png', function (err, matrix) {
    if (err) t.end(err)

    var outer = Array.isArray(matrix)
    var inner = matrix.every(function (y) { return Array.isArray(y) })
    var items = matrix.every(function (y) {
      return y.every(function (item) {
        return Object.getPrototypeOf(item) === Object.prototype
      })
    })

    t.ok(outer, '1st dimension')
    t.ok(inner, '2nd dimension')
    t.ok(items, 'inner items')

    t.end()
  })

})
