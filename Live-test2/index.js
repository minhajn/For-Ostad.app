//1. Print even numbers
for(var i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//2. String in reverse
function reverseString(str){
    return str.split('').reverse().join('');
}

//3. Remove duplicates
function removeDuplicates(arr){
    return [...new Set(arr)];
}

//4. Count vowels
function countVowels(str){
    const vowels = "AEIOUaeiou";
    var count = 0;
    for(var char of str){
        if(vowels.includes(char)){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}

console.log("The reverse string is : ",reverseString("Hello_this_is_khan"));
console.log("After removed all duplicates : ",removeDuplicates([5,5,5,6,7,8,8,8,9,10]));
console.log("Numbers of vowels is : ",countVowels("My name is Ripon Ali"));