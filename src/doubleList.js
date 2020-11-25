export class DoublyList {
  constructor() {
    this.list = undefined
  }

  findNode(pos) {
    let temp = this.list
    for (let i = 0; i < pos; i++) {
      temp = temp.next
    }
    return temp
  }

  reverse() {
    let first = this.list
    while (first !== undefined) {
      const x = first.next
      if (x === undefined) {
        this.list = first
      }
      first.next = first.prev
      first.prev = x
      first = x
    }
  }

  length() {
    let temp = this.list
    let i
    for (i = 0; temp !== undefined; i++) {
      temp = temp.next
    }
    return i
  }

  firstElem() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.list.data
  }

  lastElem() {
    if (this.isEmpty()) {
      return undefined
    }
    const temp = this.findNode(this.length() - 1)
    return temp.data
  }

  isEmpty() {
    return this.list === undefined
  }

  indexOf(value) {
    let temp,
      i = 0
    for (temp = this.list; temp !== undefined; temp = temp.next) {
      if (temp.data === value) {
        return i
      }
      i++
    }
    return -1
  }

  display() {
    let temp = this.list
    while (temp !== undefined) {
      console.log(temp.data)
      temp = temp.next
    }
  }

  insert(value, pos) {
    const node = { prev: undefined, data: value, next: undefined }

    if (pos < 0 || pos > this.length()) {
      return
    }
    let temp
    // insert at begin
    if (pos === 0) {
      if (this.list === undefined) {
        this.list = node
        return
      }
      node.next = this.list
      this.list.prev = node
      this.list = node
    } else if (pos === this.length()) {
      // insert at end
      temp = this.findNode(pos - 1)
      temp.next = node
      node.prev = temp
    } else {
      // insert in middle
      temp = this.findNode(pos - 1)
      node.next = temp.next
      temp.next.prev = node
      node.prev = temp
      temp.next = node
    }
  }

  remove(pos) {
    if (pos < 0 || pos > this.length() - 1) {
      return
    }
    let temp = this.list

    if (pos === 0) {
      // remove first element
      if (this.length() === 1) {
        // if list has only one element
        this.list = undefined
      } else {
        this.list = this.list.next
        this.list.prev = undefined
      }
    } else if (pos === this.length() - 1) {
      // remove last element
      temp = this.findNode(pos - 1)
      temp.next = undefined
    } else {
      // remove from middle
      temp = this.findNode(pos - 1)
      temp.next = temp.next.next
      temp.next.prev = temp
    }
  }
}

export const myList = new DoublyList()
