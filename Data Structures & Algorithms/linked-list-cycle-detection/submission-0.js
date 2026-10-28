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
		// 怎麼往下走 quick 指定到 head 每次移動兩隔
		let quick = head;
		let slow = head;
		while(quick&&quick.next){
			slow = slow.next;
			quick = quick.next.next;
			if(quick == slow){
				return true;
			}
		}
		return false;
	}
}
