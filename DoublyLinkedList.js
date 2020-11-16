
class DoublyList {
    
    constructor() {
      this.list = null;
    }

    length() {
        let temp = this.list;
        let i;
        for(i=0;temp!==null;i++)
         temp = temp.next;
        return i;
    }
    
    firstElem() {
        return this.list && this.list.data;
    }
    
    lastElem() {
        let temp = this.list;
        for(let i=0;temp!==null;i++)
         temp = temp.next;
        return temp.data;
    }
    
    isEmpty() {
        return this.list === null;
    }
    
    display() {
        let temp = this.list;
        while( temp!==null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    insert(value, pos) {
        let node = { 
            prev : null,
            data : value,
            next : null
        };
        
        //if(pos < 0 || this.list || pos > this.list.length()) return this.list;
        let temp;        
        if(pos === 0)  {   //insert at begin
          if(this.list === null) {
            this.list = node;
            return;
          }
          node.next = this.list;
          this.list.prev = node;
          this.list = node;
        }
        
        else {
          temp = this.list;
          for(let i=0;i<pos-1;i++) {
            temp = temp.next;    
          }
          temp.next = node;
          node.prev = temp;
        }
    }
}

let myList = new DoublyList();

myList.insert(40,0);
myList.insert(20,1);

myList.insert(30,0);

myList.insert(10,2);
myList.display();
//myList.insert(25,1);
myList.display();