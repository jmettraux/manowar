
//import { CrossSection, Manifold } from 'manifold-3d/manifoldCAD';
import { Manifold } from 'manifold-3d/manifoldCAD';

const { cube, cylinder, extrude } = Manifold;
//const {circle} = CrossSection;

let bar = cube([ 10, 1, 1 ], true);
let res = extrude(bar.slice(0), 5, 100, 1 * 360, 0.01);
let cyl = cylinder(5, 4.5, 0.01, 36, true).translate([ 0, 0, 2.5 ]);

export default res.add(cyl);

