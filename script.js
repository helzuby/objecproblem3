

const car = {
    make : 'BMW',
    year : 2021,
    color : 'red'
};


function findObjLength(obj) {
    return Object.keys(obj).length;
}


console.log(findObjLength(car));


