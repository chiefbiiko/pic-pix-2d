var clusterNeighborPixels = require('./index')

var matrix = [ [ 1, 2 ], [ 1, 2 ] ]
var supercluster = clusterNeighborPixels(matrix)

// somethings wrong here!!
console.log('supercluster', supercluster)
