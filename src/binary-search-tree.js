const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {
    if (!this.base) {this.base = null; return null;}
    return this.base;
  }

  add(n) {
    this.base = addNumber(this.base, n);

    function addNumber(node, num) {
      if (!node) {
        return new Node(num);
      }
      if (node.data == num) {
        return node;
      }
      if (node.data > num) {
        node.left = addNumber(node.left, num);
      }
      else {
        node.right = addNumber(node.right, num);
      }
      return node;
    }
  }

  has(n) {
    return searchNum(this.base, n);

    function searchNum(node, n) {
      if (!node) return false;
      if (node.data == n) return true;
      if (node.data > n) {
        return searchNum(node.left, n);
      }
      else {
        return searchNum(node.right, n);
      }
    }
  }

  find(n) {
    if (!this.base) return false;
    if (this.base.data == n) return this.base;
    let node = this.base;
    while(node) {
      if (node.data > n) {node = node.left;}
      else if (node.data < n) {node = node.right;}
      else {
        if (node.data == n) return node;
      }
    }
    return null;
  }

  remove(n) {
    this.base = removeNum(this.base, n);

    function removeNum(node, n) {
      if (!node) {return null};
      if (node.data > n) {
        node.left = removeNum(node.left, n);
        return node;
      }
      else if (node.data < n) {
        node.right = removeNum(node.right, n);
        return node;
      }
      else {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeNum(node.left, maxLeft.data);
        return node;
      }
    }
  }

  min() {
    if (this.base == null) return false;
    let node = this.base;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.base == null) return false;
    let node = this.base;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};