import { LinkedList } from "./linkedList.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.removeAt(2)
list.insertAt('zebra',4);
list.pop();
list.prepend('rabbit')
console.log(list.toString());