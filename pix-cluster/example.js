var rastafy = require('./../index')
var pixCluster = require('./index')

rastafy('./../pic.png', function (err, rasta) {
  if (err) return console.error(err)

  var supercluster = pixCluster(rasta)

  console.log('rasta', rasta)
  console.log('supercluster', supercluster)

})
