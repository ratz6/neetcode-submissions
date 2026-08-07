/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let size = 0;
        while(curr){
            size+=1;
            curr = curr?.next;
        }
        let p = size - n;

        let list = new ListNode();
        list.next = head;

        let dummy = list;

        for(let i=0; i <p; i++){
            dummy = dummy?.next;
        }
        dummy.next = dummy?.next?.next;
        return list.next;
    }
}
