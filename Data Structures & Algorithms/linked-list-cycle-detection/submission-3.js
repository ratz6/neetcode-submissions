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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow= head;
        let fast = head?.next;

        if(fast == null) return false;

        while(slow!=fast){
            slow = slow?.next;
            fast = fast?.next?.next;
            if(fast==null || fast?.next == null) return false;
        }
        return true;
    }
}
