// --- Broken version ---

import { Point } from "./shapes";

function example1(p1: Point, p2: Point) {
  return Point.distance(p1, p2);
}

example1(
  Point.create(0, 0),
  Point.create(5, 5),
);


// --- Working verbose version ---

import * as Shapes from "./shapes";

function example2(p1: Shapes.Point, p2: Shapes.Point) {
  return Shapes.Point.distance(p1, p2);
}

example2(
  Shapes.Point.create(0, 0),
  Shapes.Point.create(5, 5),
);
