class Stack{
    constructor() {
        this.stack = [];
        this.minValue = []
    }

    push(value){ //0(1)
        if(!this.stack.length){
            this.minValue.push(value)
        }
        else{
            if(this.minValue[this.minValue.length -1] > value){
                this.minValue.push(value);
            }else{
                this.minValue.push(this.minValue[this.minValue.length -1]);
            }
        }
        this.stack.push(value);
    }

    pop(){//0(1)
        if(!this.stack.length) return null;

        this.minValue.pop();
        this.stack.pop();
    }

    top(){return this.stack[this.stack.length -1]} //0(1)

    getMin(){return this.minValue[this.minValue.length -1]} //0(1)
}

const stack = new Stack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(stack.getMin());
stack.pop();
console.log(stack.top());
console.log(stack.getMin());