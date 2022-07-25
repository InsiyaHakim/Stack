class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
        this.headOfMinValueStack = null;
        this.tailOfMinValueStack = null;
    }

    push(value){
        if(!value) return value;

        let newNode = new Node(value);
        let minNode = new Node(value);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;

            this.headOfMinValueStack = minNode;
            this.tailOfMinValueStack = minNode;
        }
        else{
            let preHead = this.head;

            this.head = newNode;
            newNode.next = preHead;

            if(this.headOfMinValueStack.value > value){
                let preMinNode = this.headOfMinValueStack;

                this.headOfMinValueStack = minNode;
                minNode.next = preMinNode;
            }else{
                let newNode = new Node(this.headOfMinValueStack.value);
                let preMinNode = this.headOfMinValueStack;

                this.headOfMinValueStack = newNode;
                newNode.next = preMinNode;
            }
        }
        this.size++;
    }

    pop(){
        //deleting value from stack
        let newHead = this.head.next;
        let deletedValue = this.head.value;

        this.head.next = null;
        this.head = newHead;

        //deleting value from min stack
        let newMinHead = this.headOfMinValueStack.next;
        let deletedMinValue = this.headOfMinValueStack.value;

        this.headOfMinValueStack.next = null;
        this.headOfMinValueStack = newMinHead;

        this.size--;
        return `${deletedValue} ${deletedMinValue}`;
    }

    getMin(){return this.headOfMinValueStack.value;}

    top(){return this.head.value;}

    isEmpty(){return this.size === 0;}
}

const stack = new Stack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
console.log(stack.top());
console.log(stack.getMin());
console.log(stack.isEmpty());