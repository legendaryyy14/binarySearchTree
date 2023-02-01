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
    this.left = null;
    this.right = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      currentNode = new TreeNode(val);
      console.log(currentNode)
    } else if (val < currentNode.val) {
      currentNode.left = TreeNode(val);
    } else {
      currentNode.right = TreeNode(val);
    }

  }

  search(val) {
    // Your code here
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



// bst = new BinarySearchTree();

// console.log(bst.insert(4));
// console.log(bst.insert(2));


module.exports = { BinarySearchTree, TreeNode };
