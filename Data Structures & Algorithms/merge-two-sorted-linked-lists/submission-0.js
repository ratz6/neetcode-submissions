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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let sentinelNode = new ListNode();
        let dummy = sentinelNode;

        let p1 = list1;
        let p2 = list2;

        while(p1 && p2){
            if(p1.val <= p2.val) {
                dummy.next = p1;
                dummy = dummy.next;
                p1 = p1?.next;
            } else {
                dummy.next = p2;
                dummy = dummy.next;
                p2= p2?.next;
            }
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
