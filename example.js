var rastafy = require('./index')
var draw = require('./naiveDraw')

rastafy('./pic.png', { encoding: 'hex' }, function (err, matrix) {
  if (err) return console.error(err)
  console.log(matrix)

  draw(matrix, function (err, svg) {
    if (err) return console.error(err)
    console.log(svg)
  })

})
