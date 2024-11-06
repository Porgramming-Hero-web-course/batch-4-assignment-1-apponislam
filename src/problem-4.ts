type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    return 0;
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 6 });
console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 10,
    height: 20,
});
console.log(rectangleArea);
