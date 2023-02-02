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
    if (currentNode !== null) {
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }
  }


  inOrderTraversal(currentNode = this.root) {
    if (currentNode !== null) {
      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode !== null) {
      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root]

    while (queue.length) {
      let node = queue.shift()
      console.log(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root]

    while (stack.length) {
      let node = stack.pop()
      console.log(node.val)
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
    }
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
