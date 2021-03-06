function sim (pixelA, pixelB) { // for now similarity is simply strict
  return pixelA === pixelB
}

function tandemify (arr) {
  return arr.reduce(function (acc, item, j, arr) {
    if (item !== arr[j - 1]) acc.push([ { color: item, cluster: null } ])
    else acc[acc.length - 1].push({ color: item, cluster: null })
    return acc
  }, [])
}

function clusterNeighborPixels (matrix) {
  var supercluster = {}
  var h = matrix.length, w = matrix[0].length
  var prev = [] // init like this [ { color: null, super: null } , ...n ]  
//var bridgecluster = []

  var row = Array(), processed = false

  for (var i = 0; i < h; i++) {
    row = tandemify(matrix[i])
    console.log('row' + i + '\n', row)

    // compare localcluster against prev
    // actuly each item of prev should hold a pixel value and
    // point to the respective cluster in supercluster
    // so we either assign to that or make a new cluster
    var j = 0
    for (var tandem of row) { // comparing pixel by pixel
      assigned = false
      for (var pixel of tandem) {
        if (!assigned && pixel.color === prev[j].color) {
	  assigned = true
	  pixel.cluster = prev[j].cluster
	  // WRITE TO SUPERCLUSTER!!!
	}
	j++
      }
    }

    // make sure bridgecluster looks like:
    // [ { color: item, super: index } ]
    prev = row // FLATTEN THE ROW!!!!
  }

}

// function neighborsTopAndLeft (y, x, matrix) {
//   var top = matrix[y - 1]
//   var left = matrix[y][x - 1]
//   return [ top ? top[x] : null, left ? left[x - 1] : null ]
//   // return [ matrix[y - 1][x], matrix[y][x - 1] ]
// }
//
// function clusterNeighborPixels(matrix) {
//   var supercluster = new Set()
//
//   var h = matrix.length, w = matrix[0].length
//
//   for (var i = 0; i < h; i++) {
//     for (var j = 0; j < w; j++) {
//       // console.log('i', i, 'j', j)
//       var neighbors = neighborsTopAndLeft(i, j, matrix)
//       // consider finding multiple similars ... ???
//       var similarNeighbor = neighbors.find(sim.bind(null, matrix[i][j]))
//       // console.log('similar', similarNeighbor)
//       if (!supercluster.size || !similarNeighbor) {
//         var newCluster = new Set([ { y: i, x: j } ])
//         newCluster.color = matrix[i][j]
//         supercluster.add(newCluster)
//         // console.log('newcluster', newCluster)
//       } else {
//         // console.log('supercluster',supercluster)
//         for (var oldCluster of supercluster) {
//           if (oldCluster.has(similarNeighbor)) {
//             oldCluster.add({ y: i, x: j })
//             // console.log('updated oldcluster', oldCluster)
//           }
//         }
//       }
//     }
//   }
//
//   return supercluster
// }

module.exports = clusterNeighborPixels
