const filterGenap = (x) => {
    return x.filter(num => num % 2 === 0);
};

console.log(filterGenap([1,2,3,4,5,6]));