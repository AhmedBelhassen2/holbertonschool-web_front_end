function countPrimeNumbers() {
    let count = 0;

    for (let i = 2; i <= 100; i++){
        let j = true;
    
    for (let n = 2; n <= i; n++) {
    
    if (n % i == 0){
            j = false;
    }
}
if (j){
    count += 1;
}
}
    return count + 1;
}
var time1 = performance.now();
let i;
for (i = 0; i < 100; i++) {
  countPrimeNumbers();
}
var time2 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${time2 - time1} milliseconds`);