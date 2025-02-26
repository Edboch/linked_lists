class LinkedList {

    constructor(head = null) {
        this.list = head;
    }

    append(value) {
        if (this.list == null) {
            this.list = new Node(value);
        } else {
            let tmp = this.list;
            while (tmp.next != null) {
                tmp = tmp.next;
            }
            tmp.next = new Node(value);
        }
    }

    prepend(value) {
        if (this.list == null) {
            this.list = new Node(value);
        } else {
            this.list = new Node(value,this.list);
        }
    }

    size() {
        let count = 0;
        let cur = this.list;
        while (cur != null) {
            count++;
            cur = cur.next;
        }
        return count;
    }

    head() {
        return this.list;
    }

    tail() {
        let tmp = this.list;
        while (tmp.next != null) tmp = tmp.next;
        return tmp;
    }
}

class Node { 
    constructor(value,next = null) {
        this.value = value;
        this.next = next;
    }
}

let list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.head());