'use strict';

const mem = require('./memory.js');
const Memory = new mem();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = Memory.allocate(this.length);

  }

  push(value) { // value = 'tauhida'
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    Memory.set(this.ptr + this.length, value); // (3 + 0) 'tauhida'
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    Memory.copy(this.ptr, oldPtr, this.length);
    Memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return Memory.get(this.ptr + index); // (3 + 0)
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = Memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length+ 1) * Array.SIZE_RATIO);
    }

    Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    Memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}
Array.SIZE_RATIO = 3;

const main = () => {
  Array.SIZE_RATIO = 3;
  let arr = new Array();

  arr.push(3);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  // What is the length?
  // 5

  // Capacity?
  // 12

  // Memory address?
  // 3

  arr.pop();
  arr.pop();
  arr.pop();

  // What is the length?
  // 2

  // Capacity?
  // 12

  // Memory address?
  // 3

  // console.log(arr.get(0));

  while (arr.length > 0) {
    arr.remove(0);
  }

  arr.push('tauhida');

  console.log(arr.get(0));
  console.log(arr);
};

main();