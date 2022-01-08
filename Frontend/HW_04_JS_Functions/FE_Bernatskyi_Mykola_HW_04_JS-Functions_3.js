const triangle = {
    side_1: 3.2,
    side_2: 4,
    side_3: 5.6
};

function isConvertedObjFieldsToArray(obj) {
    let rez = [];
    Object.values(obj).forEach(val => {
        rez.push(val);
    });
    return rez;
}

console.log(isConvertedObjFieldsToArray(triangle));
console.log(isConvertedObjFieldsToArray({a:2, b:4, c:5, d:6, e:7}));
