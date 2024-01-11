class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}



class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

 
  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
    
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return current.val;
  }

  
  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    const removedValue = this.head.val;
    this.head = this.head.next;
    this.length--;

    if (!this.head) {
      // List is now empty
      this.tail = null;
    }

    return removedValue;
  }

 
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    return current.val;
  }

 
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;
  }


  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }

      const newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid index");
    }

    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }

      const removedValue = current.next.val;
      current.next = current.next.next;
      this.length--;

      return removedValue;
    }
  }

  average() {
    if (this.length === 0) {
      return 0;
    }

    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;