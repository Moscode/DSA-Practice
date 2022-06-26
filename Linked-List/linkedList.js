// Implement classes Node and Linked List
class Node{
    constructor(data, next_node){
        this.data = data;
        this.next_node = next_node;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    unshift(data){
        const newHead = new Node(data, this.head);
        this.length++;
        this.head = newHead;
    }
    getFirst(){
        return this.head;
    }
    getLast(){
        let currentNode = this.head;

        while (currentNode && currentNode.next_node){
            currentNode = currentNode.next_node;
        }
        return currentNode;
    }
    clear(){
        this.head = null;
        this.length = 0;
    }
    shift(){
        if (!this.head){
            return;
        }
        const oldHead = this.head;
        this.head = this.head.next_node;
        this.length--;
        return oldHead;
    }
    pop(){
        if(!this.head){
            return;
        }
        if (this.length == 1){
            return this.shift;
        }
        const last = this.getLast();
        let current = this.head;

        while(current.next_node !== last){
            current = current.next_node;
        }
        current.next_node = null;
        this.length--;
        return last;
    }
}










mocha.setup("bdd");
const { assert } = chai;

describe("A Node", () => {
    it("has attributes 'data' and 'next_node'", () => {
        const node = new Node(1, 2);
        assert.equal(node.data, 1);
        assert.equal(node.next_node, 2);
    });
});

mocha.run()