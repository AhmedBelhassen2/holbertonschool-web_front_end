console.log('Start of the execution queue');
setTimeout(function () { console.log('Final code block to be executed'); }, 0);
for (let j = 0; j <= 100; j++) {
    console.log(j);
}
console.log('End of the loop printing');