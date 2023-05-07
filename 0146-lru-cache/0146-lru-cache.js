/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

function ListNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

LRUCache.prototype.removeFromList = function(node) {
    if (node.prev) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }
    if (node.next) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }
};

LRUCache.prototype.moveToFront = function(node) {
    if (this.head === node) {
        return;
    }
    this.removeFromList(node);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
        return -1;
    }
    const node = this.map.get(key);
    this.moveToFront(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key);
        node.value = value;
        this.moveToFront(node);
        return;
    }
    const node = new ListNode(key, value);
    this.map.set(key, node);
    if (this.head) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
    } else {
        this.head = node;
        this.tail = node;
    }
    if (this.map.size > this.capacity) {
        const nodeToRemove = this.tail;
        this.removeFromList(nodeToRemove);
        this.map.delete(nodeToRemove.key);
    }
};
