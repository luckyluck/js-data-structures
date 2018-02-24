/**
 * The problem is described here
 * https://www.hackerrank.com/challenges/equal-stacks/problem
 * You can see solution below with one of the custom cases for demonstration
 * If you have installed Node.js you can use command
 *  node stack\challenges\equal-stacks.js
 * to launch the script
 */

function subtractStacks(height1, height2, height3, stack1, stack2, stack3) {
    while (height1 > height2 || height1 > height3) {
        height1 -= stack1.shift();
    }
    while (height2 > height1 || height2 > height3) {
        height2 -= stack2.shift();
    }
    while (height3 > height1 || height3 > height2) {
        height3 -= stack3.shift();
    }

    if (height1 === height2 && height2 === height3) {
        console.log(height1);
    } else {
        subtractStacks(height1, height2, height3, stack1, stack2, stack3);
    }
}

let height1 = 8;
let height2 = 9;
let height3 = 7;

// Here we are using arrays as stacks to be able to concentrate on the task itself
const stack1 = [3, 2, 1, 1, 1];
const stack2 = [4, 3, 2];
const stack3 = [1, 1, 4, 1];

subtractStacks(height1, height2, height3, stack1, stack2, stack3);
