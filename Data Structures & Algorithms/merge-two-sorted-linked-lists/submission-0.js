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
        let dummy = new ListNode(0);
        let current = dummy;
        // 同時有值 就繼續接 到current(listnode)
        while(list1&&list2){
            // 如果list1比較小 就先接上 然後移動到下一個節點
            if(list1.val <= list2.val){
                current.next = list1;
                list1 = list1.next;
            }else{ // 如果list2比較小 就先接上 然後移動到下一個節點
                current.next = list2;
                list2 = list2.next;
            }
            // 每輪的current節點都會往後走 代表下一個要接上的位置
            current = current.next;
        }
        // 因為前面條件是同時有值 所以這邊要補 最後落單的
        current.next = list1 || list2;
        // 回傳next 因為dummy 第一個是0
        return dummy.next;
    }
}
