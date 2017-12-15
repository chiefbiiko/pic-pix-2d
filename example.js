var rastafy = require('./index')

rastafy('./pic.png', { encoding: 'hex' }, function (err, matrix) {
  if (err) return console.error(err)
  console.log(matrix)
})
