// Napisz funkcję filterArray(numbers, value), która jako parametry przyjmuje 
// tablicę liczb (numbers) 
// i wartość (value). 
// Funkcja powinna zwrócić nową tablicę zawierającą tylko te liczby z tablicy numbers, które są większe niż value.



// Wewnątrz funkcji:

// Utwórz pustą tablicę, do której będziesz dodawać pasujące liczby.
// Użyj pętli do iteracji przez każdy element tablicy numbers.
// Użyj warunkowej instrukcji if wewnątrz pętli, aby sprawdzić każdy element i dodać go do tablicy.
// Zwróć nową tablicę z pasującymi liczbami jako wynik.



function filterArray(numbers, value) {
    const newArray = [];
    for (const number of numbers) {
        if (number > value) {
            newArray.push(number);
        }
    }
    return newArray;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]