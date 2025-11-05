
// test.js

//let result = Manowar
//  .slicedCylinder(10, 42, 35, 180 + 20, 8, true);
//export default result;

let ps = [ [ 0, 0, 0 ], [ 70, 10, 0 ], [ 60, 20, 0 ], [ 100, 100, 10 ] ];
let ps1 = Manowar.bezierPoints(ps, 10);

export default Manifold.union(
  ps1.map(function(p, i) {
    //console.log(`${i} > ${JSON.stringify(p)}`);
    return Manifold.cylinder(5, 2, 2, 6, true).translate(p);
  }));

