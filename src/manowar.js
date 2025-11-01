
// manowar.js

var Manowar = (function() {

  "use strict";

  let self = this;

  // protected

  let slicedCylinder = function(
    height, radiusLo, radiusHi, angle, circularSegments, center
  ) {

    let h1 = 2 * height;
    let rr = radiusLo + radiusHi;

    let cub0 = Manifold.cube([ rr, rr, h1 ], true)
      .translate([ rr / 2, rr / 2, 0 ]);
    let cub1 = Manifold.cube([ rr, rr, h1 ], true)
      .translate([ rr / 2, - rr / 2, 0 ]);
    let cub2 = Manifold.cube([ rr, rr, h1 ], true)
      .translate([ - rr / 2, - rr / 2, 0 ]);

    let cyl = Manifold.cylinder(
      height, radiusLo, radiusHi, circularSegments, center);

    let cub = cub0.add(cub1).add(cub2);

    return Manifold.intersection(cub, cyl);
  };

  // public

  this.slice = slice;

  return this;

}).apply({}); // end Manowar

