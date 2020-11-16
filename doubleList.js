class DoublyList {
  constructor() {
    this.list = null
  }

  reverse() {
    let first = this.list
    let last
    let x
    for (last = this.list; last.next !== null; last = last.next);

    for (let i = 0; i < this.length() / 2; i++) {
      x = first.data
      first.data = last.data
      last.data = x
      first = first.next
      last = last.prev
    }
  }

  length() {
    let temp = this.list
    let i
    for (i = 0; temp !== null; i++) temp = temp.next
    return i
  }

  firstElem() {
    return this.list && this.list.data
  }

  lastElem() {
    let temp
    for (temp = this.list; temp && temp.next !== null; temp = temp.next);
    return temp && temp.data
  }

  isEmpty() {
    return this.list === null
  }

  indexOf(value) {
    let temp,
      i = 0
    for (temp = this.list; temp !== null; temp = temp.next) {
      if (temp.data === value) return i
      i++
    }
    return -1
  }
  display() {
    let temp = this.list
    while (temp !== null) {
      console.log(temp.data)
      temp = temp.next
    }
  }

  insert(value, pos) {
    let node = {
      prev: null,
      data: value,
      next: null,
    }

    if (pos < 0 || pos > this.length()) return
    let temp
    //insert at begin
    if (pos === 0) {
      if (this.list === null) {
        this.list = node
        return
      }
      node.next = this.list
      this.list.prev = node
      this.list = node
    } else if (pos === this.length()) {
      //insert at end
      temp = this.list
      for (let i = 0; i < pos - 1; i++) {
        temp = temp.next
      }
      temp.next = node
      node.prev = temp
    } else {
      //insert in middle
      temp = this.list
      let i
      for (i = 0; i < pos - 1; i++) {
        temp = temp.next
      }
      node.next = temp.next
      temp.next.prev = node
      node.prev = temp
      temp.next = node
    }
  }
}

let myList = new DoublyList()
console.log(
  myList.isEmpty(),
  myList.firstElem(),
  myList.lastElem(),
  myList.length(),
  myList.indexOf(9),
)
myList.display()
myList.insert(40, 0)
myList.insert(20, 1)
myList.insert(30, 0)
myList.insert(10, 2)
myList.insert(25, 1)
myList.insert(60, 5)
myList.insert(60, 7)
myList.display()
console.log(
  myList.firstElem(),
  myList.lastElem(),
  myList.isEmpty(),
  myList.length(),
  myList.indexOf(10),
  myList.indexOf(-60),
)

myList.reverse()
myList.display()

// output::
// true null null 0 -1
// 30
// 25
// 40
// 10
// 20
// 60
// 30 60 false 6 3 -1
// 60
// 20
// 10
// 40
// 25
// 30
