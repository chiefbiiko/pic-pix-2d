function sim (pixelA, pixelB) { // for now similarity is simply strict
  return pixelA === pixelB
}

function neighborsTopAndLeft (y, x, matrix) {
  var top = matrix[y - 1]
  var left = matrix[y][x - 1]
  return [ top ? top[x] : null, left ? left[x - 1] : null ]
  // return [ matrix[y - 1][x], matrix[y][x - 1] ]
}

function clusterNeighborPixels(matrix) {
  var supercluster = new Set()

  var h = matrix.length, w = matrix[0].length

  for (var i = 0; i < h; i++) {
    for (var j = 0; j < w; j++) {
      // console.log('i', i, 'j', j)
      var neighbors = neighborsTopAndLeft(i, j, matrix)
      // consider finding multiple similars ... ???
      var similarNeighbor = neighbors.find(sim.bind(null, matrix[i][j]))
      // console.log('similar', similarNeighbor)
      if (!supercluster.size || !similarNeighbor) {
        var newCluster = new Set([ { y: i, x: j } ])
        newCluster.color = matrix[i][j]
        supercluster.add(newCluster)
        console.log(newCluster)
      } else {
        console.log('supercluster',supercluster)
        for (var oldCluster of supercluster) {
          if (oldCluster.has(similarNeighbor)) {
            
          }
        }
        // supercluster.forEach(function (val) {
        //   if (similarNeighbor && val.has(similarNeighbor)) {
        //     val.add({ y: i, x: j })
        //     console.log(val)
        //   } else {
        //     var newCluster = new Set([ { y: i, x: j } ])
        //     newCluster.color = matrix[i][j]
        //     supercluster.add(newCluster)
        //     console.log(newCluster)
        //   }
        // })
      }
    }
  }

  console.log('similarNeighborsCluster', supercluster)

  return supercluster
}

module.exports = clusterNeighborPixels

clusterNeighborPixels([ [ 1, 2 ], [ 1, 2 ] ])
