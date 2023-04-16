const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (value) {
    this.data = value;
    this.left = null;
    this.right = null;  
  }
} 

class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }
  
  root() {
   return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addWithin(this.treeRoot, data);
    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value  === value)
      return node;

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } 
      else {
        node.right = addWithin(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.treeRoot, data);
    function searchWithin (node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      if (value < node.data) {
        return searchWithin(node.left, value);
      }
      if (value > node.data) {
        return searchWithin(node.right, value);
      }
    }
  }

  find(data) {
    return findWithin(this.treeRoot, data);
    function findWithin(node, value) { 
    if (!node) return null;
      if (node.data === value) return node;
      if (value < node.data) {
        return findWithin(node.left, value);
      }
      if (value > node.data) {
        return findWithin(node.right, value);
      }
    }
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data);
    function removeNode(node, value) {
      if (!node) return null;
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      }
      else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } 
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right; 
        }

        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data );
        return node;

      }
    }
  }

  min() {
    let node = this.treeRoot;
    while (node.left) {
      node = node.left; 
    }
    return node.data;
  }

  max() {
    let node = this.treeRoot;
    while (node.right) {
      node = node.right; 
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};