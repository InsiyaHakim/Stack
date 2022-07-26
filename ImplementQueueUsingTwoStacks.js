class Stack{
    constructor() {
        this.stack = [];
    }

    push(value){
        if(!value) return value;

        this.stack.push(value);
        return this.stack;
    }

    pop(){return  this.stack.pop();}

    top(){return this.stack[this.stack.length -1];}

    empty(){
        return this.stack.length === 0
    }
}

class Queue{
    constructor() {
        this.pushStack = new Stack();
        this.popStack = new Stack();
    }

    enqueue(value){
        this.pushStack.push(value);
    }

    addValuesInPopStack(){
        while (this.pushStack.stack.length > 0) {
            this.popStack.push(this.pushStack.pop())
        }
    }

    dequeue() {
        if (this.popStack.stack.length === 0) {
            this.addValuesInPopStack();
        }
        return this.popStack.pop();
    }

    peek() {
        if (this.popStack.stack.length === 0) {
            this.addValuesInPopStack();
        }
        return this.popStack.top();
    }

    empty(){return this.popStack.empty() && this.pushStack.empty();}


}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.empty());
