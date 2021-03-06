var tape = require('tape')
var rastafy = require('./../index')
var pixCluster = require('./index')

tape('clustering baby steps', function (t) {

  rastafy('./../pic.png', function (err, rasta) {
    if (err) return console.error(err)

    var supercluster = pixCluster(rasta)

    t.ok(Object.getPrototypeOf(supercluster) === Set.prototype,
         'supercluster should be a superset')

    t.end()
  })

})
