let items = [100, 200, 300, 400, 500]; // Example prices for items

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
}
console.log("The items after discount: ", items);