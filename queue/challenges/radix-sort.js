import Queue from '../queue.es6';

/**
 * Distribute numbers in queues depends on digit
 * @param nums - array of numbers to sort
 * @param queues - array of queues
 * @param digit - represents either the 1s or 10s place
 */
function distribute(nums, queues, digit) {
    for (const num of nums) {
        const index = digit === 1 ? num % 10 : Math.floor(num / 10);
        
        queues[index].enqueue(num);
    }
}

/**
 * Collecting numbers from the queues
 * @param queues - array of queues in which numbers were distributed before
 * @param nums
 */
function collect(queues, nums) {
    let i = 0;
    
    for (const queue of queues) {
        while(!queue.empty()) {
            nums[i++] = queue.dequeue();
        }
    }
}

const queues = [];
for (let i = 0; i < 10; i++) {
    queues[i] = new Queue();
}
const nums = [];
for (let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}

console.log('Before radix sort:', nums.join(' '));
distribute(nums, queues, 1);
collect(queues, nums);
distribute(nums, queues, 10);
collect(queues, nums);
console.log('After radix sort:', nums.join(' '));

