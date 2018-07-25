'use strict';

class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    // starting of an address
    this.head = 0;
  }
  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    // setting start to 0
    let start = this.head;

    this.head += size;

    // is the beginning of the memory 
    return start;
  }

  free(ptr) {}

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  get(ptr) { // 3
    return this.memory[ptr]; // this.memory[3]
  }

  set(ptr, value) { // value -> 'tauhida'
    this.memory[ptr] = value; // this.memory[3 + 1] = 'tauhida'
  }
}
module.exports = Memory;