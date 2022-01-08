const triangle = {
    side_1: 3.2,
    side_2: 4,
    side_3: 5.6
};

function triangleArea(obj) {
    let s = (obj.side_1 + obj.side_2 + obj.side_3) / 2;
    return (Math.sqrt(s * (s - obj.side_1) * (s - obj.side_2) * (s - obj.side_3)).toPrecision(3));
}

console.log(`Area of the triagle with sides: ${triangle.side_1}, ${triangle.side_2}, ${triangle.side_3} is : ${triangleArea(triangle)} !`);
