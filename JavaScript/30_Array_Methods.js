let foodItems = ["Apple", "Mango", "Banana"];
console.log(foodItems);
console.log(typeof foodItems);
foodItems.push("Potato");       // push(): add to end
console.log(foodItems);

let deleted = foodItems.pop();  // pop(): delete from end & return
console.log(foodItems);
console.log("Deleted item is:", deleted);

let items = foodItems.toString();           // toString(): converts array to string
console.log(typeof items);

{
    let marvelHeros = ["thor", "spiderman", "ironman"];
    let dcHeros = ["superman", "batman"];
    let indianHeros = ["Shaktiman", "Krish"];

    let heros = marvelHeros.concat(dcHeros, indianHeros);    // concat(): joins multiple arrays and returns result.
    console.log(heros);
};

{
    let marvelHeros = ["thor", "spiderman", "ironman"];
    console.log(marvelHeros);
    marvelHeros.unshift("Antman")   // unshift(): add to start
    console.log(marvelHeros);

    let a = marvelHeros.shift();    // shift(): delete from start and return
    console.log("Deleted", a);
    console.log(marvelHeros);
};

{
    let marvelHeros = ["thor", "spiderman", "ironman", "Dr.Strange"];
    console.log(marvelHeros.slice(1, 3));   // slice(startIndex, endIndex): returns a piece of the array. 
};

{
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arr.splice(1, 3, 101, 102);     // splice(): change original array(add, remove, replace);
    console.log(arr);

    arr.splice(5, 0, 103);
    console.log(arr);
};
