const names = ["Premium", "Tosin", "Ego", "Feyi", "Gbajabiamila"];
console.log("First name:", names [0]);
console.log("Second name:", names [2]);
console.log("Last name:", names [names.length - 1]);
console.log("All names:");
for (let i=0; i < names.length; i++) {console.log(names[i])};

const numbers = [4, 7, 10, 13, 16, 19, 22];
console.log("even numbers:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

const scores = [11, 13, 35, 72, 34]
let totalscore = 0;
console.log("total score =")
for (let i = 0; i < scores.length; i++) {totalscore = totalscore + scores[i]};
console.log(totalscore)


const figures = [12, 45, 7, 89, 23, 56]
let largest = figures [0];
for (let i = 0; i < figures.length; i++) {
    if (figures[i] > largest) {largest = figures[i];}
}
console.log("largest number =", largest);

console.log("original figures:", figures);
figures.push(10);
console.log("After push:", figures)

figures.pop();
console.log("after pop:", figures)

figures.unshift(1)
console.log("after unshift:", figures)

figures.shift();
console.log("after shift:", figures)


/*
What I learned:

1. Arrays are useful because they allow us to store
   multiple values in one variable.

2. Loops and arrays work well together because loops
   allow us to process each item without writing
   separate instructions for every item.
 3. One thing that confused me was trying to get the largest number without knowing if "largest" is a valid variable

 */