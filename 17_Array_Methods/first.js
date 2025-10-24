////Push Method

// let fooditems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
// fooditems.push("Ice Cream");
// console.log(fooditems);


////Pop Method

// let fooditems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
// console.log(fooditems);
// let deltedItems = fooditems.pop();
// console.log(fooditems);
// console.log("Deleted Item:", deltedItems);


////toString Method

// let fooditems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
// console.log(fooditems);
// console.log("String converted from array:", fooditems.toString());
// console.log(fooditems);


////Concat Method

// let book = ['Machine Learning', 'Data Science', 'Artificial Intelligence'];
// let moreBooks = ['Deep Learning', 'Neural Networks'];
// let Teachers = ['Mr. Smith', 'Ms. Johnson'];
// let allBooks = book.concat(moreBooks, Teachers);
// console.log("All Books:", allBooks);


////Join Method

// let fooditems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];         
// console.log("Array Items:", fooditems);
// let joinedString = fooditems.join(" - ");
// console.log("Joined String:", joinedString);


////Unshift Method

// let fooditems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
// console.log("Original Array:", fooditems);
// fooditems.unshift("Ice Cream", "Fries");
// console.log("Array after unshift:", fooditems);


////Shift Method

// let fooditems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
// console.log("Original Array:", fooditems);
// let removedItem1 = fooditems.shift();
// let removedItem2 = fooditems.shift();
// let removedItems = [removedItem1, removedItem2];
// console.log("Array after shifts:", fooditems);
// console.log("Removed Item:",removedItems); 


////Slice Method

// let fooditems = [ 'Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi', 'Ice Cream', 'Fries'];
// console.log("Original Array:", fooditems);

// let sliceitems = fooditems.slice(0, 2);
// console.log("Sliced Array:", sliceitems);


////Splice Method

let fooditems = [ 'Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi', 'Ice Cream', 'Fries'];
console.log("Original Array:", fooditems);

let Splice = fooditems.splice(2, 3);
console.log("Array after Splice:", Splice);
console.log("Modified Original Array:", fooditems);
let Splice2 = fooditems.splice(1, 2, "Sandwich", "Wraps");
console.log("Array after Splice with new items:", Splice2);
console.log("Modified Original Array after adding new items:", fooditems);