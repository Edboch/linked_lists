import { Node } from "./node.js";

export class LinkedList {

    constructor(head = null) {
        this.list = head;
    }

    append(value) {
        if (this.list == null) {
            this.list = new Node(value);
        } else {
            let cur = this.list;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = new Node(value);
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
        let cur = this.list;
        if(cur == null) return null;
        while (cur.next != null) cur = cur.next;
        return cur;
    }

    at(index) {
        if (index<0) {
            console.log('index cannot be less than 0!')
            return null;
        }
        let count = 0;
        let node = this.list;
        while (count<index) {
            node = node.next;
            count++;
        }
        return node;
    }

    pop() {
        if (this.list == null) {
            throw new Error('Cannot pop empty list');
        }
        if (this.list.next == null) {
            this.list = null;
            return
        }
        let cur = this.list;
        let prev = null;

        while (cur.next != null) {
            prev = cur;
            cur = cur.next;
        }
        prev.next = null;
    }

    contains(value) {
        let cur = this.list;
        if (value == null) {
            console.log('value cannot be null');
            return
        }
        while (cur.next != null && cur.value != value) {
            cur = cur.next;
        }
        return cur.value == value;
    }

    find(value) {
        let count = 0;
        let cur = this.list;
        if (cur == null || value == null) {
            console.log('Cannot find');
            return null
        }
        while (cur.next != null && cur.value != value) {
            count++
            cur = cur.next;
        }
        return cur.value==value?count:null;
    }

    toString() {
        let cur = this.list;
        let str = '';
        while (cur!=null){
            str = str.concat(`( ${cur.value} ) ->`);
            cur = cur.next;
        }
        str = str.concat(" null");
        return str
    }

    insertAt(value,index) {
        if (index > this.size() || index < 0) {
            console.log('Index out of range');
            return;
        }
        if (index == this.size()) {
            this.append(value);
            return
        }
        if (index == 0) {
            this.prepend(value);
            return 
        }
        let count = 1;
        let prev = this.list;
        let cur = prev.next;
        while (count < index) {
            prev = cur;
            cur = cur.next;
            count++
        }
        let newVal = new Node(value,cur)
        prev.next = newVal;
    }

    removeAt(index) {
        if (index > this.size() || index < 0) {
            console.log('Index out of range');
            return;
        }
        if (index == this.size()) {
            this.pop()
            return;
        }
        if (index == 0 && this.size() > 1) {
            this.list = this.list.next;
        }
        let count = 1;
        let prev = this.list;
        let cur = prev.next;
        while (count < index) {
            prev = cur;
            cur = cur.next;
            count++;
        }
        prev.next = cur.next;
    }
}

