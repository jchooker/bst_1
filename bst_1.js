class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST { //much of this created referencing freeCodeCamp.org's Binary Search Tree video
    constructor() {
        this.root = null;
    }
    add(val) {
        const node = this.root;
        if (node === null) {
            this.root = new BTNode(val);
            return;
        } else {
            const searchTree = function(node) {
                if (val <= node.val) {
                    if (node.left === null) {
                        node.left = new BTNode(val);
                        console.log(node.left.val)
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    } 
                } else if (val > node.val) {
                    if (node.right === null) {
                        node.right = new BTNode(val);
                        console.log(node.right.val)
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    } else {
                        return null;
                    }
                }
            };
            return searchTree(node);
        }
    }
    contains(val) {
        let currCheck = this.root;
        while (currCheck) {
            if (val === currCheck.val) {
                return true;
            } else if (val < currCheck.val) {
                currCheck = currCheck.left;
            } else {
                currCheck = currCheck.right;
            }
        }
        return false;
    }

    min() {
        let currCheck = this.root;
        while (currCheck) {
            currCheck = currCheck.left;
        }
        return currCheck;
    }

    max() {
        let currCheck = this.root;
        while (currCheck) {
            currCheck = currCheck.right;
        }
        return currCheck;
    }

    size() {
        return size(this.root);
    }

    // size() {
    //     let currCheck = this.root;
    //     let nodeCt = 0;
    //     if (currCheck === null) {
    //         return;
    //     }
    //     if (currCheck.left) {
    //         currCheck.size()
    //     }
    //     nodeCt++;
    //     if (currCheck.right) {
    //         currCheck.size()
    //     }
    //     return nodeCt;
    // }
}
function size(mTreeRoot) {
    if (mTreeRoot) {
        return size(mTreeRoot.left) + 1 + size(mTreeRoot.right);
    }
    return 0;
}

let bstTest = new BST();
bstTest.add(44);
bstTest.add(20);
bstTest.add(55);
bstTest.add(-2);
bstTest.add(12);
bstTest.add(56);
bstTest.add(35);

// console.log(size(bstTest.root))
console.log(bstTest.size());