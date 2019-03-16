let myBook = {
    title: 'The Prince of Nothing',
    author: 'R Scott Bakker',
    pageCount: 375
}

let otherBook = {
    title: 'Miyamoto Musashi',
    author: 'Eiji Yoshikawa',
    pageCount: 1000
}

let getSummary = function (book) {
    return {
       summary: `${book.title} by ${book.author}`,
       pageCountSummary:  `${book.title} is ${book.pageCount} pages long`
    }

}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
console.log(otherBookSummary.pageCountSummary)

//Create a function - take fahrenheir in - return an object with all 3

let temperature = {
    fahrenheit: 100,
    celsius: (fahrenheit - 32)*(5/9),
    kelvin: celsius + 273.15
}

let getTemperature = function(temperature) {
    return {
        summary: `${temperature.fahrenheit} degrees fahrenheit is ${temperature.celsius} degrees celsius and ${temperature.kelvin} degrees kelvin`
    }
}

let tempSummary = getSummary(temperature)

console.log(tempSummary.fahrenheit)
console.log(tempSummary.celsius)
console.log(tempSummary.kelvin)