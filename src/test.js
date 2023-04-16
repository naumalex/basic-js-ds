
class ListNode {
    constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  
  
  let head = l;
  while ((l) && (l.value === k)) {
    if (l.next) l = l.next
    else l = null;
  }
  while ((l)&&(l.next))  {
    if (l.next.value === k) {
      l.next = l.next.next;
    }
    l = l.next;
  }
  return l;
}

let list = new ListNode (5);
console.log(removeKFromList(list, 5));
 
