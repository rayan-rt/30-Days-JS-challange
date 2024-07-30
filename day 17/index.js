console.clear();

// Activity 01
//  - Task 01
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const node_one = new Node(2);
const node_two = new Node(3);
const node_three = new Node(4);

node_one.next = node_two;
node_two.next = node_three;
console.log(`Node One : ${node_one.next.value}`);

//  - Task 02
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addNode(value) {
		const new_node = new Node(value);
		if (!this.head) {
			this.head = new_node;
			this.tail = new_node;
		} else {
			this.tail.next = new_node;
			this.tail = new_node;
		}
	}

	removeNode() {
		let current_node = this.head;
		while (current_node.next !== this.tail) {
			current_node = current_node.next;
		}
		current_node.next = null;
		this.tail = current_node;
	}

	displayNodes() {
		let current_node = this.head;
		while (current_node) {
			console.log(current_node.value);
			current_node = current_node.next;
		}
	}
}

const linkedList = new LinkedList();
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);
linkedList.displayNodes();
linkedList.removeNode();
linkedList.displayNodes();

// Activity 02
//  - Task 03
class Stack {
	constructor() {
		this.stack = [];
	}

	// push method
	push(value) {
		this.stack[this.stack.length] = value;
	}

	pop() {
		this.stack.length = this.stack.length - 1;
	}

	peek() {
		console.log(this.stack[this.stack.length - 1]);
	}
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.peek();
stack.pop();
stack.peek();

//  - Task 04
class Stack2 {
	constructor() {
		this.stack = [];
		this.reverse = "";
	}

	getString(value) {
		for (let index of value) {
			this.stack.push(index);
		}
	}

	reverseString() {
		let length = this.stack.length;

		while (length > 0) {
			this.reverse += this.stack.pop();
			length--;
		}
		console.log(this.reverse);
	}
}

const reverse = new Stack2();
reverse.getString("rayan");
reverse.reverseString();

// Activity 03
//  - Task 05
class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(value) {
		this.queue[this.queue.length] = value;
	}

	dequeue() {
		for (let index = 1; index < this.queue.length; index++) {
			this.queue[index - 1] = this.queue[index];
		}
		this.queue.length = this.queue.length - 1;
	}

	front() {
		console.log(this.queue[0]);
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.front();
console.log(queue);
queue.dequeue();
queue.front();
console.log(queue);

//  - Task 06
class PrinterQueue {
	constructor() {
		this.queue = [];
	}

	addJobToTheQueue(value) {
		this.queue.push(value);
	}

	processJobInTheQueue() {
		let length = this.queue.length;
		while (length > 0) {
			console.log(this.queue.shift());
			length--;
		}
	}
}

const printer = new PrinterQueue();
printer.addJobToTheQueue("Queue Job One");
printer.addJobToTheQueue("Queue Job Two");
printer.addJobToTheQueue("Queue Job Three");
printer.processJobInTheQueue();

// Activity 04
//  - Task 07
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const TreeNodeOne = new TreeNode(2);
const TreeNodeTwo = new TreeNode(3);
const TreeNodeThree = new TreeNode(4);
TreeNodeOne.right = TreeNodeTwo;
TreeNodeOne.left = TreeNodeThree;
console.log(TreeNodeOne);

//  - Task 08
class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new TreeNode(value);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root, newNode) {
		if (newNode.value < root.value) {
			if (root.left !== null) {
				this.insertNode(root.left, newNode);
			} else {
				root.left = newNode;
			}
		} else {
			if (root.right !== null) {
				this.insertNode(root.right, newNode);
			} else {
				root.right = newNode;
			}
		}
	}

	inOrder(node) {
		if (node) {
			this.inOrder(node.left);
			console.log(node.value);
			this.inOrder(node.right);
		}
	}
}

const tree = new BinaryTree();
tree.insert(15);
tree.insert(7);
tree.insert(19);
tree.insert(4);
tree.inOrder(tree.root);
