class Node{
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    enqueue(value){
        const newNode = new Node(value);
        debugger;
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.size++;
    }

    dequeue(){
        if(this.head === null) return this.head;
        debugger;
        let deletedNode = this.head;

        this.head = this.head.next;
        deletedNode.next = null;
        this.size--;
        return deletedNode.value;
    }

    peek() { return this.head; }

    empty() { return this.size === 0; }
}


class Stack{
    constructor(props) {
        this.queue = new Queue();
    }
    //in push method we will first need to enqueue all items and then dequeue
    // as dequeueing will remove the first element in list and we want to push that element on bottom.
    //This will allow us to pop latest element in stack
    push(value){ //0(n)
        let size = this.queue.size;
        this.queue.enqueue(value);

        while (size){
            debugger;
            this.queue.enqueue(this.queue.dequeue());
            size--;
        }
    }

    pop() {return this.queue.dequeue(); } //0(1)

    top() {return this.queue.peek(); } //0(1)

    empty() {return this.queue.empty() } //0(1)
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.peek());
// console.log(queue.isEmpty());

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.top())
console.log(stack.empty());