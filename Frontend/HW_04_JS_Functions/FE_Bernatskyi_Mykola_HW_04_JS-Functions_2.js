const triangle = {
    side_1: 30,
    side_2: 40,
    side_3: 50
};

function triangleArea(obj){
    let s = (obj.side_1 + obj.side_2 + obj.side_3)/2;
    return (Math.sqrt(s*(s-obj.side_1)*(s-obj.side_2)*(s-obj.side_3)));
}

console.log(`Area of the triagle with sides: ${triangle.side_1}, ${triangle.side_2}, ${triangle.side_3} is - ${triangleArea(triangle)} !`);