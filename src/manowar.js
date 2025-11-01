
// manowar.js

var Manowar = (function() {

  "use strict";

  let self = this;

  // protected

  let slicedCylinder = function(
    height, radiusLo, radiusHi, angle, circularSegments, center
  ) {

    let h1 = 1.5 * height;
    let rr = Math.max(radiusLo, radiusHi) + 0.2;

    let cyl = Manifold.cylinder(
      height, radiusLo, radiusHi, circularSegments, center);

    let cub = Manifold.cube([ rr, rr, h1 ], true)
      .translate([ rr / 2, rr / 2, 0 ]);
    let qua = Manifold.intersection(cyl, cub);

    let sli = angle % 90;
    let ang = angle - sli;

    let pieces = [];

    let a = 0;
    for (; a < ang; a += 90) {
      pieces.push(qua.rotate([ 0, 0, a ]));
    }
    if (sli > 0) {
      let slc = qua.subtract(cub.rotate([ 0, 0, sli ]));
      pieces.push(slc.rotate([ 0, 0, a ]));
    }

    return Manifold.union(pieces);
  };

  // public

  this.slicedCylinder = slicedCylinder;

  return this;

}).apply({}); // end Manowar

