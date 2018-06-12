/**
 * According to legend, the first-century Jewish historian Flavius Josephus was about
 * to be captured along with a band of 40 compatriots by Roman soldiers during the
 * Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being
 * captured and devised a plan for their demise. They were to form a circle and kill
 * every third soldier until they were all dead. Josephus and one other decided they
 * wanted no part of this and quickly calculated where they needed to place themselves
 * so they would be the last survivors. Write a program that allows you to place n
 * people in a circle and specify that every mth person will be killed. The program
 * should determine the number of the last two people left in the circle. Use a circularly
 * linked list to solve the problem.
 */

import CLList from '../circularly-linked-list';


function indicateServivals(n, m) {
    const list = new CLList();
    let prevElement = 'head';
    let amount = n;
    
    for (let i = 1; i <= n; i++) {
        const name = `Name_${i}`;
        list.insert(name, prevElement);
        prevElement = name;
    }
    console.log('list1:', list);
    
    while (amount > m) {
        let element = 'head';
        let count = 0;
        let killed = 0;
        for (let i = 0; i < amount; i++) {
            element = list.find(element).element;
            count++;
            if (count === m) {
                list.remove(element);
                killed++;
                count = 0;
            }
        }
        console.log('killed:', killed);
        amount -= killed;
        killed = 0;
    }
    console.log('list2:', list);
}

indicateServivals(35, 3);
