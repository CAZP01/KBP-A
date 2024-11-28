var bilPositif = [1,2,3,4,5,6,'dst'];
console.log(bilPositif);
var bilNegatif = ['dst',-6,-5,-4,-3,-2,-1];
console.log(bilNegatif);
var bilBulat = [...bilNegatif,0,...bilPositif];
console.log(bilBulat);