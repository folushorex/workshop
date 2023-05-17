let arr1= [3, 1, 7, 9];
let arr2 = [2, 4, 1, 9, 3];
let sum=0;
let unique1 = arr1.filter((o) => arr2.indexOf(o) === -1);
let unique2 = arr2.filter((o) => arr1.indexOf(o) === -1);

let unique = unique1.concat(unique2);

for (let i = 0; i < unique.length; i++ ) {
  sum += unique[i];
}
 
 console.log(sum)