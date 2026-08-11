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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head.next;

        if(!head || !head.next) return head;

        while(fast?.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        let curr = slow.next;
        slow.next = null;
        let prev = null; 

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        slow = prev;
        console.log('@@@slow',slow,head);
        let sentinelNode = new ListNode();
        let dummy = sentinelNode;
        let p1 = head;
        let p2 = slow;  
        console.log('@@@p1,p2',p1,p2);
        while(p1 && p2){
            dummy.next = p1;
            dummy = dummy.next;
            p1 = p1?.next;
            dummy.next = p2;
            dummy = dummy.next;
            p2 = p2?.next;
        }
        if(p1){
            dummy.next = p1;
        }
        if(p2){
            dummy.next = p2;
        }

        return sentinelNode.next;
    }
}
