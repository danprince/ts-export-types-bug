export type Point = { x: number, y: number };

export function create(x: number, y: number): Point {
  return { x, y };
}

export function distance(p1: Point, p2: Point): number {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
