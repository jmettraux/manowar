
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

  let padd = function(pa, pb) { return pa.map((n, i) => n + pb[i]); };
  let pmul = function(factor, p) { return p.map(n => factor * n); };

  let bezierChoose = function (n, k) {
    return k === 0 ? 1 : (n * bezierChoose(n - 1, k -1)) / k;
  };

  let bezierPoint = function(points, t, i, c) {

    let pl = points.length;
    if (pl === i) return c;

    return bezierPoint(
      points,
      t,
      i + 1,
      padd(
        c,
        pmul(
          bezierChoose(pl - 1, i) *
          Math.pow(t, i) *
          Math.pow(1 - t, pl - i - 1),
          points[i])));
  };

  // inspiration:
  // https://climberg.de/post/openscad_bezier_curves_of_any_degrees
  //
  let bezierPoints = function(controlPoints, sampleCount) {

    let a = [];
    for (let t = 0, d = 1.0 / sampleCount; t <= 1.0; t += d) {
      a.push(bezierPoint(controlPoints, t, 0, [ 0, 0, 0 ]));
    }

    return a;
  };

  let chainedHulls = function(elts) {

    let r = [];
    for (let i = 0, l = elts.length - 1; i < l; i++) {
      r.push(Manifold.hull([ elts[i], elts[i + 1] ]));
    }

    return r;
  };

  let chainedHull = function(elts) {

    return Manifold.union(chainedHulls(elts));
  };

  // public

  this.slicedCylinder = slicedCylinder;

  this.bezierPoints = bezierPoints;

  this.chainedHulls = chainedHulls;
  this.chainedHull = chainedHull;

  // done.

  return this;

}).apply({}); // end Manowar

