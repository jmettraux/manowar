
import { Manifold } from 'manifold-3d/manifoldCAD';

const { sphere, cube, cylinder, union, hull } = Manifold;


const height = 5.6;
const radius = 3;
const dz = 0.05;
const da = 5;
const dr = -0.049;
const csegs = 6;

let sph = sphere(0.2, csegs, true);

let spha, sphb;
let items = [];
  //
for (
  let z = 0, a = 0, r = radius;
  z <= height;
  z += dz, a += da, r += dr
) {

  if (r < 0) r = 0;

  let sph0 = sph.translate([ 0, 0, z ]);
  let sph1 = sph0.translate([ r, 0, 0 ]).rotate([ 0, 0, a ]);

  //items.push(sph0);
  //items.push(sph1);
  items.push(hull(spha || sph0, sphb || sph1, sph0, sph1));

  spha = sph0; sphb = sph1;
}

export default union(items)
  .add(
    cylinder(height, radius, 0.01, 36, true)
      .translate([ 0, 0, 0.5 * height ]));

