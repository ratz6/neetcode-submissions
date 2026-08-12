// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let curr = head;
        if (!head) return null;
        let store = new Map();

        while(curr){
            store.set(curr,new Node(curr.val));
            curr = curr?.next;
        }

        curr = head;

        while(curr){
            let copy = store.get(curr);
            copy.next = curr?.next ? store.get(curr?.next) : null;
            copy.random = curr?.random ? store.get(curr.random) : null;
            curr = curr.next;
        }
        return store.get(head);

    }
}
