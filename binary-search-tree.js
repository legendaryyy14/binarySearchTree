// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val)
    if (!this.root) {
      this.root = newNode;
    } else if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode
        return
      } else {
        this.insert(val, currentNode.left)
      }

    } else {
      if (!currentNode.right) {
        currentNode.right = newNode
        return
      } else {
        this.insert(val, currentNode.right)
      }
    }

    // iteration
  //   while(currentNode) {
  //    if (val < currentNode.val) {
  //       if (!currentNode.left) {
  //         currentNode.left = newNode
  //         return
  //       } else {
  //         currentNode = currentNode.left
  //       }
  //     }
  //     if (val > currentNode.val) {
  //       if (!currentNode.right) {
  //         currentNode.right = newNode
  //       return
  //     } else {
  //       currentNode = currentNode.right
  //     }
  //   }
  // }
}

  search(val, currentNode = this.root) {
   if (!currentNode) return false

   //recursive
  //  if (currentNode.val === val) return true
  //  if (val < currentNode.val) return this.search(val, currentNode.left)
  //  if (val > currentNode.val) return this.search(val, currentNode.right)


  // iteration
    while(currentNode) {
      if (currentNode.val === val) return true
      if (val < currentNode.val) {
        if (!currentNode.left) return false;
        else currentNode = currentNode.left
      }
      if (val > currentNode.val) {
        if (!currentNode.left) return false;
        else currentNode = currentNode.right
      }
    }
  }






  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}



bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

// bst.search(1)
// bst.search(2)
// bst.search(3)
// bst.search(4)
// bst.search(5)
// bst.search(6)
bst.search(7)

module.exports = { BinarySearchTree, TreeNode };
