
import { Manifold } from 'manifold-3d/manifoldCAD';

const { cube, union } = Manifold;


const height = 5.6;
const dz = 0.2;
const da = 10;

let cub = cube([ 5.6, 0.4, 0.2 ], true);

let items = [];
for (let z = 0, a = 0; z <= height; z += dz, a += da) {
  //console.log({ z, a });
  items.push(cub.rotate([ 0, 0, a ]).translate([ 0, 0, z ]));
}

export default union(items);

