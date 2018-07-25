'use strict';

const Memory = require('./memory.js');

class Array {
  constructor() {
    this.length = 0; // this.length of array is 0
    this.ptr = Memory.allocate(this.length); // this.ptr points to the start last operation finished

  }

  // pass in a value to push to the array - done
  // increase this.length by 1 - done
  // move this.ptr - done
  push(value) {
    this._resize(this.length + 1);
    Memory.set(this.ptr, value);
    this.length++;
  }

  // increase size of this.length += size
  // possibly change the value of this.pointer?
  _resize(size) {
    const oldPtr = this.ptr;


    // if there's not enough contiguous space,
    // copy this array to another place
    if (this.ptr === null) {
        
    }

    // Memory.copy(this.ptr, oldPtr, size)
  }

  get(index) {

  }

  pop() {

  }
  
  insert(index, value) {

  }

  remove(index) {

  }

}

