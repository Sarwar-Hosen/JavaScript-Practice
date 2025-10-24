let companies = [ 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix' ];
console.log("Original Array:", companies);

//remove the first company
let removecompanies = companies.shift();
console.log("Array after Shift:", companies);
console.log("Removed Company:", removecompanies);

//remove the second company and add a new company in its place
let removecompanies2 = companies.splice(1, 1, 'Ola');
console.log("Array after Splice with new item:", companies);

//add a new company at the end
let addcompanies = companies.push('Amazon');
console.log("Array after Push:", companies);