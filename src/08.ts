// Structural Typing

// type User = { id: string };
// type Product = { id: string };

// let user: User = { id: 'user-asfef23' };
// let product: Product = { id: 'product-fwefw575' };

// Types compatibility as both have the same structure:
// user = product;
// product = user;

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 0 };
let point3D: Point3D = { x: 0, y: 0, z: 0 };

// Extra info ok
point2D = point3D;

function takesPoint2D(point: Point2D) {
  /** ... */
}

takesPoint2D(point3D);

// Won't work:
// point3D = point2D;

function takesPoint3D(point: Point3D) {
  /** ... */
}

// Won't work:
// takesPoint3D(point2D);
