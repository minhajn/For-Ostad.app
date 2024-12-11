function calculateDifference(a, b) {
    return a - b;
}
function isOdd(a) {
    return a % 2 !== 0;
}
function findMin(arr) {
    return Math.min(...arr);
}
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}
function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toLowerCase() + str.slice(1);
}
function findAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log("Difference in between two numbers is = ", calculateDifference(40, 27));
console.log("This number is odd = ", isOdd(401));
console.log("The minimum number of this array is = ", findMin([5, 3, 8, 1]));
console.log("The even numbers of this array is = ", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("The array in decending order is = ", sortArrayDescending([4, 2, 8, 6]));
console.log("Lowercased First Letter: ", lowercaseFirstLetter("Ripon ali"));
console.log("Average number of this array is = ", findAverage([35, 20, 25, 45]));
console.log("Is this year a leap_year = ", isLeapYear(2024));