
# manowar

A foolbox for ManifoldCAD .js


## `Manowar.slicedCylinder(h, r0, r1, angle, circularSegs, center)`

Returns a truncated Manifold Cylinder.

```js
let result = Manowar.slicedCylinder(10, 42, 35, 180 + 20, 8, true);
export default result;
```

## `Manowar.bezierPoints(pointArray, stepCount)`

Returns an array of points `[ x, y, z ]`

```js
let ps = [ [ 0, 0, 0 ], [ 70, 10, 0 ], [ 60, 20, 0 ], [ 100, 100, 10 ] ];
let ps1 = Manowar.bezierPoints(ps, 10);

export default Manifold.union(
  ps1.map(function(p, i) {
    //console.log(`${i} > ${JSON.stringify(p)}`);
    return Manifold.cylinder(5, 2, 2, 6, true).translate(p);
  }));
```

## `Manowar.chainedHulls(manifoldArray)`

Returns an array of hulls.

```js
let ps = [ [ 0, 0, 0 ], [ 70, 10, 10 ], [ 60, 20, 0 ], [ 100, 100, 40 ] ];
let ps1 = Manowar.bezierPoints(ps, 5);

export default Manifold.union(
  Manowar.chainedHulls(
    ps1.map(function(p, i) {
      return Manifold.sphere(2, 36, true).translate(p); })));
```


## `Manowar.chainedHull(manifoldArray)`

Returns a Manifold hull.

```js
let ps = [ [ 0, 0, 0 ], [ 70, 10, 10 ], [ 60, 20, 0 ], [ 100, 100, 40 ] ];
let ps1 = Manowar.bezierPoints(ps, 5);

export default Manowar.chainedHull(
  ps1.map(function(p, i) {
    return Manifold.sphere(2, 36, true).translate(p); }));
```

It's simply:
```js
let chainedHull =
  function(eltArray) { return Manifold.union(chainedHulls(eltArray)); };
```


## LICENSE

MIT, see [LICENSE.txt](LICENSE.txt)

