class DoublyList {
  constructor() {
    this.list = null
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
     while(first !== null) {
      let x = first.next;
      if(x===null) this.list = first;
      first.next = first.prev;
      first.prev = x;
      first = x;
    }
  }

  length() {
    let temp = this.list
    let i
    for (i = 0; temp !== null; i++) temp = temp.next
    return i
  }

  firstElem() {
    if (this.isEmpty()) return null
    return this.list.data
  }

  lastElem() {
    if (this.isEmpty()) return null
    let temp = this.findNode(this.length() - 1)
    return temp.data
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
      temp = this.findNode(pos - 1)
      temp.next = node
      node.prev = temp
    } else {
      //insert in middle
      temp = this.findNode(pos - 1)
      node.next = temp.next
      temp.next.prev = node
      node.prev = temp
      temp.next = node
    }
  }

  remove(pos) {
    if (pos < 0 || pos > this.length() - 1) return
    let temp = this.list

    if (pos === 0) {
      //remove first element
      if (this.length() == 1) {
        //if list has only one element
        this.list = null
      } else {
        this.list = this.list.next
        this.list.prev = null
      }
    } else if (pos === this.length() - 1) {
      //remove last element
      temp = this.findNode(pos - 1)
      temp.next = null
    } else {
      //remove from middle
      temp = this.findNode(pos - 1)
      temp.next = temp.next.next
      temp.next.prev = temp
    }
  }
}

let myList = new DoublyList()
//checking empty cases
console.log(
  myList.isEmpty(),
  myList.firstElem(),
  myList.lastElem(),
  myList.length(),
  myList.indexOf(9),
)
myList.display()
myList.insert(10, 0)
myList.insert(20, 1)
myList.insert(30, 1)
myList.insert(40, 2)
myList.insert(50, 0)
myList.insert(60, 5)
myList.insert(60, 7) //wont insert
console.log('After insertions list is ')
myList.display()

//checking other functions
console.log(
  myList.firstElem(),
  myList.lastElem(),
  myList.isEmpty(),
  myList.length(),
  myList.indexOf(10),
  myList.indexOf(-60),
)

myList.reverse()
console.log('hello After reversal list is ')
myList.display()

myList.remove(0)
myList.remove(2)
myList.remove(3)
myList.remove(0)
myList.remove(4) //wont execute
console.log('After removals list is ')
myList.display()

//output:
// true null null 0 -1
// After insertions list is
// 50
// 10
// 30
// 40
// 20
// 60
// 50 60 false 6 1 -1
// After reversal list is
// 60
// 20
// 40
// 30
// 10
// 50
// After removals list is
// 40
// 10