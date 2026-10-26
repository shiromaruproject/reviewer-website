/* Question banks. Each question: id, type, topic, source, difficulty, question, options[4], answer (A-D), explanation. */
window.QUESTION_BANKS = {
 "datastruc": [
  {
   "id": "DS-01",
   "type": "def",
   "topic": "Tree Terminology",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which statement best defines a binary tree?",
   "options": [
    "A tree in which every node must have exactly two children.",
    "A linear structure in which each node links only to the next node.",
    "A tree in which all values in the left subtree are smaller than the root.",
    "A tree in which each node has at most two children, called the left child and the right child."
   ],
   "answer": "D",
   "explanation": "Reviewer 1.1: a binary tree is a tree where each node has at most two children (left and right). The 'smaller/greater' rule belongs to a binary search tree."
  },
  {
   "id": "DS-02",
   "type": "def",
   "topic": "Tree Terminology",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "In this class, what is the height of a node?",
   "options": [
    "The number of edges from the root down to the node.",
    "The number of edges on the longest path from the node down to a leaf.",
    "The number of nodes on the path from the root to the node.",
    "The number of children the node has."
   ],
   "answer": "B",
   "explanation": "Reviewer 1.2: height looks DOWN to the farthest leaf and is counted in edges. Distance from the root is depth; number of children is degree."
  },
  {
   "id": "DS-03",
   "type": "def",
   "topic": "Tree Terminology",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which description matches the depth of a node?",
   "options": [
    "The number of edges from the root down to that node.",
    "The number of edges on the longest path from the node down to a leaf.",
    "The total number of nodes in the node's subtree.",
    "The number of siblings the node has."
   ],
   "answer": "A",
   "explanation": "Reviewer 1.2: depth looks UP ('How far am I from the root?'); the root always has depth 0."
  },
  {
   "id": "DS-04",
   "type": "code",
   "topic": "Tree Terminology",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Consider this tree: A is the root with children B (left) and C (right); B has children D (left) and E (right); C has only a right child F; E has only a left child G. What are the height of node B and the depth of node G?",
   "options": [
    "Height of B = 1; depth of G = 3",
    "Height of B = 2; depth of G = 2",
    "Height of B = 2; depth of G = 3",
    "Height of B = 3; depth of G = 4"
   ],
   "answer": "C",
   "explanation": "B's longest path down is B-E-G (2 edges). G is reached from the root by A-B-E-G (3 edges). The reviewer counts edges, not nodes."
  },
  {
   "id": "DS-05",
   "type": "def",
   "topic": "Tree Terminology",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which term refers to nodes that share the same parent?",
   "options": [
    "Ancestors",
    "Descendants",
    "Siblings",
    "Subtree nodes"
   ],
   "answer": "C",
   "explanation": "Reviewer 1.2: siblings are nodes with the same parent (for example D and E, or B and C)."
  },
  {
   "id": "DS-06",
   "type": "con",
   "topic": "Tree Terminology",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Consider this tree: A is the root with children B (left) and C (right); B has children D (left) and E (right); C has only a right child F; E has only a left child G. Which nodes are the ancestors of G?",
   "options": [
    "E, C and A",
    "E, B and A",
    "D, B and A",
    "D, E and B"
   ],
   "answer": "B",
   "explanation": "An ancestor is any node on the path from the root to the node. The path to G is A, B, E, G, so G's ancestors are E, B and A."
  },
  {
   "id": "DS-07",
   "type": "def",
   "topic": "Types of Binary Trees",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "A binary tree in which every node has either 0 or 2 children (never exactly 1) is called:",
   "options": [
    "A full (strict) binary tree",
    "A perfect binary tree",
    "A complete binary tree",
    "A skewed binary tree"
   ],
   "answer": "A",
   "explanation": "Reviewer 1.3: Full = 'no lonely children'. Perfect also requires all leaves on the same level; complete requires levels filled left to right."
  },
  {
   "id": "DS-08",
   "type": "def",
   "topic": "Types of Binary Trees",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Which definition describes a perfect binary tree?",
   "options": [
    "Every node has 0 or 2 children, but leaves may be on different levels.",
    "All internal nodes have 2 children and all leaves are on the same level.",
    "All levels are full except possibly the last, which is filled from left to right.",
    "The heights of the left and right subtrees differ by at most 1 for every node."
   ],
   "answer": "B",
   "explanation": "Reviewer 1.3 defines perfect as 'a neat triangle, completely filled'. The other options define full, complete and balanced trees."
  },
  {
   "id": "DS-09",
   "type": "def",
   "topic": "Types of Binary Trees",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "A tree in which every node has only one child, so that it behaves like a linked list, is called:",
   "options": [
    "Full",
    "Perfect",
    "Skewed (degenerate)",
    "Balanced"
   ],
   "answer": "C",
   "explanation": "Reviewer 1.3: Skewed = 'a stick (a linked list)'."
  },
  {
   "id": "DS-10",
   "type": "con",
   "topic": "Types of Binary Trees",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Which statement about full, perfect and complete binary trees is correct according to the reviewer?",
   "options": [
    "Every complete tree is also perfect.",
    "Every full tree is also complete.",
    "Every perfect tree is both full and complete.",
    "A perfect tree may have a node with exactly one child."
   ],
   "answer": "C",
   "explanation": "Reviewer 1.3 comparison table: 'Every perfect tree is full and complete.' The reverse is not true."
  },
  {
   "id": "DS-11",
   "type": "con",
   "topic": "Types of Binary Trees",
   "source": "Reviewer Part 1",
   "difficulty": 3,
   "question": "Consider this tree: A is the root with children B (left) and C (right); B has children D (left) and E (right); C has only a right child F; E has only a left child G. Which statement about this tree is correct?",
   "options": [
    "It is full because every node has two children.",
    "It is balanced even though it is not full, perfect or complete.",
    "It is perfect because all leaves are on the same level.",
    "It is complete because the last level is filled from left to right."
   ],
   "answer": "B",
   "explanation": "C and E each have only one child (not full); leaves D, G, F are on different levels (not perfect); C has a right child but no left child (not complete). Every node's subtree heights differ by at most 1, so it is balanced."
  },
  {
   "id": "DS-12",
   "type": "con",
   "topic": "Tree Properties",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "A binary tree has 15 nodes. How many edges does it have?",
   "options": [
    "15",
    "16",
    "7",
    "14"
   ],
   "answer": "D",
   "explanation": "Reviewer 1.2/1.4: a tree with n nodes always has n - 1 edges."
  },
  {
   "id": "DS-13",
   "type": "con",
   "topic": "Tree Properties",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "What is the maximum number of nodes a binary tree of height 4 can have?",
   "options": [
    "15",
    "16",
    "31",
    "32"
   ],
   "answer": "C",
   "explanation": "Reviewer 1.4: maximum nodes = 2^(h+1) - 1 = 2^5 - 1 = 31."
  },
  {
   "id": "DS-14",
   "type": "con",
   "topic": "Tree Properties",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "What is the largest possible height of a binary tree with 10 nodes?",
   "options": [
    "9",
    "10",
    "4",
    "3"
   ],
   "answer": "A",
   "explanation": "Reviewer 1.4: maximum height is n - 1, reached by the skewed tree with one node per level."
  },
  {
   "id": "DS-15",
   "type": "con",
   "topic": "Tree Properties",
   "source": "Reviewer Part 1",
   "difficulty": 3,
   "question": "A full binary tree has 8 internal nodes. How many leaves does it have?",
   "options": [
    "8",
    "7",
    "16",
    "9"
   ],
   "answer": "D",
   "explanation": "Reviewer 1.4: in a full binary tree, leaves = internal nodes + 1."
  },
  {
   "id": "DS-16",
   "type": "def",
   "topic": "Tree Representation",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "In the array representation of a binary tree (0-based), where is the left child of the node at index i?",
   "options": [
    "Index 2i",
    "Index 2i + 1",
    "Index 2i + 2",
    "Index (i - 1) / 2"
   ],
   "answer": "B",
   "explanation": "Reviewer 1.5: left child = 2i+1, right child = 2i+2, parent = (i-1)/2 using integer division."
  },
  {
   "id": "DS-17",
   "type": "code",
   "topic": "Tree Representation",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "In an array-stored binary tree (0-based indexing), what is the index of the parent of the node at index 5?",
   "options": [
    "1",
    "2",
    "3",
    "4"
   ],
   "answer": "B",
   "explanation": "Reviewer 1.5: parent = (i - 1) / 2 = (5 - 1) / 2 = 2."
  },
  {
   "id": "DS-18",
   "type": "def",
   "topic": "Traversal",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "What does traversing a tree mean?",
   "options": [
    "Visiting every node exactly once in a fixed order.",
    "Removing every leaf from the tree.",
    "Counting only the leaves of the tree.",
    "Visiting only the nodes on one root-to-leaf path."
   ],
   "answer": "A",
   "explanation": "Reviewer 1.6: traversal means visiting every node exactly once in a fixed order."
  },
  {
   "id": "DS-19",
   "type": "def",
   "topic": "Traversal",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which visiting order describes an inorder traversal?",
   "options": [
    "Root, then left subtree, then right subtree",
    "Left subtree, then root, then right subtree",
    "Left subtree, then right subtree, then root",
    "Level by level from left to right"
   ],
   "answer": "B",
   "explanation": "Reviewer 1.6: the names tell when the root is visited: pre = before its children, in = in between, post = after."
  },
  {
   "id": "DS-20",
   "type": "def",
   "topic": "Traversal",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "In a postorder traversal, when is the root of a (sub)tree visited?",
   "options": [
    "Before either of its children.",
    "Between its left and right subtrees.",
    "Only when it is a leaf.",
    "After both of its children have been finished."
   ],
   "answer": "D",
   "explanation": "Reviewer 1.6: postorder = Left, Right, Root, so 'the root is always last'."
  },
  {
   "id": "DS-21",
   "type": "code",
   "topic": "Traversal",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Consider this tree: A is the root with children B (left) and C (right); B has children D (left) and E (right); C has only a right child F; E has only a left child G. What is the preorder traversal of this tree?",
   "options": [
    "A B D E G C F",
    "D B G E A C F",
    "D G E B F C A",
    "A B C D E F G"
   ],
   "answer": "A",
   "explanation": "Preorder is Root, Left, Right: A, then B, D, E, G on the left, then C, F on the right. The other sequences are the inorder, postorder and level-order results."
  },
  {
   "id": "DS-22",
   "type": "con",
   "topic": "Traversal",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Which pairing of a traversal with a common use is correct?",
   "options": [
    "Preorder - deleting a tree by freeing children before parents",
    "Postorder - making a copy of a tree",
    "Level order - producing sorted output from a binary search tree",
    "Inorder - produces sorted output from a binary search tree"
   ],
   "answer": "D",
   "explanation": "Reviewer: inorder on a BST gives sorted values; preorder is used to copy a tree; postorder is used for deleting a tree, height and size."
  },
  {
   "id": "DS-23",
   "type": "sit",
   "topic": "Traversal",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "A program must print the nodes of a binary tree one level at a time, from left to right. Which approach should it use?",
   "options": [
    "Inorder traversal using recursion",
    "Postorder traversal using the call stack",
    "Preorder traversal using a stack of arrays",
    "Level-order traversal using a queue"
   ],
   "answer": "D",
   "explanation": "Reviewer 1.6: level order (BFS) visits nodes level by level and uses a queue (first in, first out)."
  },
  {
   "id": "DS-24",
   "type": "con",
   "topic": "Rebuilding Trees",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Which information is enough to rebuild a unique binary tree when all values are different?",
   "options": [
    "Its preorder and inorder traversals together",
    "Its preorder traversal alone",
    "Its inorder traversal alone",
    "Any one traversal of the tree"
   ],
   "answer": "A",
   "explanation": "Reviewer 1.7: one traversal is NOT enough; preorder + inorder (or postorder + inorder) is enough."
  },
  {
   "id": "DS-25",
   "type": "sit",
   "topic": "Rebuilding Trees",
   "source": "Reviewer Part 1",
   "difficulty": 3,
   "question": "A tree has preorder A B D E C F and inorder D B E A F C. Which statement is correct?",
   "options": [
    "B is the root, and D is the only node in its right subtree.",
    "A is the root, and F, C form its left subtree.",
    "D is the root because it is first in the inorder list.",
    "A is the root, and D, B, E form its left subtree."
   ],
   "answer": "D",
   "explanation": "The first item in preorder is the root (A). Everything left of A in the inorder list (D, B, E) is the left subtree; F, C is the right subtree."
  },
  {
   "id": "DS-26",
   "type": "con",
   "topic": "Rebuilding Trees",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "The inorder traversal of a tree is 10 20 30 40 50 60 65 70 80, which is in sorted order. What does this indicate?",
   "options": [
    "The tree is a perfect binary tree.",
    "The tree is a skewed tree.",
    "The tree has no leaves.",
    "The tree is a binary search tree."
   ],
   "answer": "D",
   "explanation": "Reviewer 1.7: the sorted inorder output is 'the clue that the tree is a binary search tree'."
  },
  {
   "id": "DS-27",
   "type": "def",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 1,
   "question": "Which rule defines a binary search tree (BST) in this class?",
   "options": [
    "Every node has exactly two children and all leaves are on the same level.",
    "For every node, all values in the left subtree are smaller and all values in the right subtree are greater.",
    "Each node is greater than its parent but smaller than its children.",
    "Values are stored in level order from smallest to largest."
   ],
   "answer": "B",
   "explanation": "Reviewer 2.2: BST property = left subtree < node < right subtree for every node (no duplicates in this class)."
  },
  {
   "id": "DS-28",
   "type": "con",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 3,
   "question": "In a tree, 10 is the root, 5 and 15 are its children, and 2 and 12 are the children of 5. Why is this NOT a BST?",
   "options": [
    "12 is in the left subtree of 10 but is greater than 10.",
    "5 is smaller than its parent 10.",
    "12 is greater than its parent 5.",
    "The tree has more nodes on the left than on the right."
   ],
   "answer": "A",
   "explanation": "Reviewer 2.4 [WATCH OUT]: checking only parent and child is not enough; the rule applies to the whole subtree. 12 sits in 10's left subtree but is greater than 10."
  },
  {
   "id": "DS-29",
   "type": "def",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "What is the inorder successor of a node in a BST?",
   "options": [
    "The smallest value in the node's right subtree.",
    "The largest value in the node's left subtree.",
    "The node's parent.",
    "The rightmost leaf of the entire tree."
   ],
   "answer": "A",
   "explanation": "Reviewer 2.2: the inorder successor is the next bigger value, the smallest value in the right subtree. The largest value in the left subtree is the predecessor."
  },
  {
   "id": "DS-30",
   "type": "def",
   "topic": "Tree Operations",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "In the recursive height() method of this class, what does the base case return for an empty subtree (null)?",
   "options": [
    "0",
    "1",
    "-1",
    "null"
   ],
   "answer": "C",
   "explanation": "Reviewer 2.3 [WATCH OUT]: the base case returns -1, not 0, because heights are counted in edges. This makes a leaf's height 1 + max(-1, -1) = 0."
  },
  {
   "id": "DS-31",
   "type": "sit",
   "topic": "Tree Operations",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "An office stores records in a general binary tree whose values are in no particular order. In the worst case, how many nodes may have to be checked to find a record?",
   "options": [
    "Only about half of the nodes, O(log n).",
    "Only the nodes on one path, O(h).",
    "All n nodes, so the cost is O(n).",
    "Exactly one node, O(1)."
   ],
   "answer": "C",
   "explanation": "Reviewer 2.3: in a normal binary tree with no ordering, search must check every node in the worst case, O(n) - the same as linear search. A BST improves this to O(h)."
  },
  {
   "id": "DS-32",
   "type": "code",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "A BST has 50 at the root, 30 and 70 as its children, 20 and 40 under 30, and 60 and 80 under 70. What happens when searching for 45?",
   "options": [
    "Go right at 50, left at 70, then find 45 under 60.",
    "Go left at 50, left at 30, then find 45 under 20.",
    "Go left at 50, right at 30, then find 45 at 40.",
    "Go left at 50, right at 30, right at 40, then reach null: not found."
   ],
   "answer": "D",
   "explanation": "Reviewer 2.4: 45 < 50 so go left to 30; 45 > 30 so go right to 40; 45 > 40 and the right child is null, so 45 is not found (3 comparisons)."
  },
  {
   "id": "DS-33",
   "type": "sit",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "Using the same BST (50; 30 and 70; 20, 40, 60, 80), where is the new value 35 inserted?",
   "options": [
    "As the right child of 40",
    "As the right child of 20",
    "As the left child of 40",
    "As the left child of 60"
   ],
   "answer": "C",
   "explanation": "Reviewer 2.4: 35 < 50 go left; 35 > 30 go right; 35 < 40 so it becomes the left child of 40. A new value is always added as a leaf."
  },
  {
   "id": "DS-34",
   "type": "def",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 1,
   "question": "Where is a new value always placed when it is inserted into a BST?",
   "options": [
    "As a new leaf",
    "As the new root",
    "As a replacement for an existing internal node",
    "As the leftmost node of the tree"
   ],
   "answer": "A",
   "explanation": "Reviewer 2.4: 'a new value is always added as a leaf.'"
  },
  {
   "id": "DS-35",
   "type": "sit",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "The keys 10, 20, 30, 40, 50 are inserted into an empty BST in that order. What shape results?",
   "options": [
    "A skewed chain to the right, like a linked list, with height 4",
    "A perfect tree with height 2",
    "A balanced tree with height 3",
    "A chain to the left with height 5"
   ],
   "answer": "A",
   "explanation": "Reviewer 2.4: sorted input makes a BST look like a linked list. Each larger key goes to the right, giving height n - 1 = 4."
  },
  {
   "id": "DS-36",
   "type": "def",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 1,
   "question": "In a BST, how do you find the minimum value?",
   "options": [
    "Keep going right until there is no right child.",
    "Read the value stored at the root.",
    "Keep going left until there is no left child.",
    "Visit the last node in level order."
   ],
   "answer": "C",
   "explanation": "Reviewer 2.5 [TIP]: Min = leftmost, Max = rightmost."
  },
  {
   "id": "DS-37",
   "type": "con",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "When deleting a BST node that has two children, what does the reviewer say to do?",
   "options": [
    "Remove the node and attach both children to its parent.",
    "Replace the node with the root of the tree.",
    "Simply set the node's value to null.",
    "Copy its inorder successor's value into the node, then delete the successor."
   ],
   "answer": "D",
   "explanation": "Reviewer 2.5: Case 3 (two children) - replace its value with the inorder successor (smallest value in the right subtree), then delete the successor. The predecessor is an acceptable alternative."
  },
  {
   "id": "DS-38",
   "type": "sit",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "In a BST, node 40 has only one child, 35, and its parent is 30. When 40 is deleted, what is done?",
   "options": [
    "35 is removed together with 40.",
    "30's left link becomes null.",
    "30 is linked directly to 35.",
    "40 is replaced by its inorder successor from the right subtree."
   ],
   "answer": "C",
   "explanation": "Reviewer 2.5, Case 2 (one child): replace the node with its only child. The BST rule still holds because 35 > 30."
  },
  {
   "id": "DS-39",
   "type": "sit",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 3,
   "question": "In the BST built from 50, 30, 70, 20, 40, 60, 80, 35, the root 50 is deleted. Which value replaces 50 at the root?",
   "options": [
    "40",
    "60",
    "70",
    "35"
   ],
   "answer": "B",
   "explanation": "Reviewer 2.5, Case 3: the successor is the smallest value in 50's right subtree - go right to 70, then left as far as possible to 60. Copy 60 to the root and delete the old 60."
  },
  {
   "id": "DS-40",
   "type": "sit",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 3,
   "question": "Student numbers arrive in this order and are inserted into an empty BST: 45, 25, 65, 15, 35, 55, 75, 30, 60. How many comparisons are needed to find 60 in the BST?",
   "options": [
    "9",
    "3",
    "2",
    "4 (45, 65, 55, 60)"
   ],
   "answer": "D",
   "explanation": "Reviewer 2.7: the path is 45 -> 65 -> 55 -> 60 = 4 comparisons, whereas a linear search on the arrival list reaches 60 as the 9th item (9 comparisons)."
  },
  {
   "id": "DS-41",
   "type": "sit",
   "topic": "Binary Search Trees",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "Which real-life software feature does the reviewer say is built on a self-balancing BST (a red-black tree)?",
   "options": [
    "Java's ArrayList",
    "Java's TreeMap and TreeSet",
    "A stack of undo operations",
    "A printer queue"
   ],
   "answer": "B",
   "explanation": "Reviewer 2.7: 'Java TreeMap and TreeSet: sorted maps and sets built on a self-balancing BST (red-black tree).'"
  },
  {
   "id": "DS-42",
   "type": "def",
   "topic": "Expression Trees",
   "source": "Week 15 slides",
   "difficulty": 1,
   "question": "In an expression tree, what do the leaves and the internal nodes hold?",
   "options": [
    "Leaves hold operators; internal nodes hold operands.",
    "Both hold operands only.",
    "Leaves hold operands; internal nodes hold operators.",
    "Leaves hold parentheses; internal nodes hold numbers."
   ],
   "answer": "C",
   "explanation": "Week 15 slides: an expression tree stores an arithmetic expression with operands in the leaves and operators in the internal nodes."
  },
  {
   "id": "DS-43",
   "type": "con",
   "topic": "Expression Trees",
   "source": "Week 15 slides",
   "difficulty": 2,
   "question": "Which traversal of an expression tree produces postfix (Reverse Polish) notation, and which produces prefix notation?",
   "options": [
    "Preorder gives postfix; postorder gives prefix.",
    "Inorder gives postfix; preorder gives infix.",
    "Postorder gives postfix; preorder gives prefix.",
    "Level order gives postfix; inorder gives prefix."
   ],
   "answer": "C",
   "explanation": "Week 15 slides: preorder -> prefix (Polish), inorder -> infix, postorder -> postfix (Reverse Polish)."
  },
  {
   "id": "DS-44",
   "type": "code",
   "topic": "Expression Trees",
   "source": "Week 15 slides",
   "difficulty": 3,
   "question": "What value does the expression tree built from the postfix expression  3 4 + 5 2 - *  evaluate to?",
   "options": [
    "14",
    "17",
    "21",
    "9"
   ],
   "answer": "C",
   "explanation": "The tree is (3 + 4) * (5 - 2): 7 * 3 = 21. Evaluation uses a postorder pattern (left, right, then apply the operator)."
  },
  {
   "id": "DS-45",
   "type": "con",
   "topic": "Expression Trees",
   "source": "Week 15 slides",
   "difficulty": 3,
   "question": "When building an expression tree from postfix with a stack, an operator is read. How are the two popped nodes used?",
   "options": [
    "The first node popped becomes the left child and the second becomes the right child.",
    "The first node popped becomes the right child and the second becomes the left child.",
    "Both popped nodes become leaves of the same parent in random order.",
    "Only one node is popped and it becomes the left child."
   ],
   "answer": "B",
   "explanation": "Week 15 slides: 'Pop order matters: the first pop is the right child.'"
  },
  {
   "id": "DS-46",
   "type": "con",
   "topic": "Expression Trees",
   "source": "Week 15 slides",
   "difficulty": 2,
   "question": "Why can reading a plain inorder traversal of an expression tree give a wrong meaning?",
   "options": [
    "Inorder visits the operators before the operands.",
    "Inorder omits the parentheses that the tree's shape expresses.",
    "Inorder skips the leaf nodes.",
    "Inorder always produces postfix notation."
   ],
   "answer": "B",
   "explanation": "Week 15 slides: plain inorder gives 3 + 4 * 5 - 2, which is read differently; the fix is to add parentheses around every operator subtree. Prefix and postfix never need parentheses."
  },
  {
   "id": "DS-47",
   "type": "con",
   "topic": "Efficiency and Balance",
   "source": "Week 15 slides",
   "difficulty": 2,
   "question": "For a BST with n nodes, between which values does the height h lie, and what is the cost of search, insert and delete?",
   "options": [
    "1 <= h <= n / 2, and the cost is O(n).",
    "h is always log2 n, and the cost is O(1).",
    "floor(log2 n) <= h <= n - 1, and the cost is O(h).",
    "n <= h <= 2n, and the cost is O(n log n)."
   ],
   "answer": "C",
   "explanation": "Week 15 slides: BST operations follow one path, so cost is O(h), and h ranges from log2 n (balanced) to n - 1 (skewed)."
  },
  {
   "id": "DS-48",
   "type": "sit",
   "topic": "Efficiency and Balance",
   "source": "Week 15 slides",
   "difficulty": 3,
   "question": "A registrar's list of student IDs is always added to a plain BST in increasing order. What problem will occur, and what does the Week 15 lesson suggest?",
   "options": [
    "The BST becomes perfectly balanced; no change is needed.",
    "The BST becomes skewed with O(n) operations; a self-balancing tree such as an AVL or red-black tree keeps the height at O(log n).",
    "The BST cannot store increasing keys at all; use a queue instead.",
    "Search becomes O(1); use an unsorted array instead."
   ],
   "answer": "B",
   "explanation": "Week 15 slides: sorted insertion gives the worst case (height n - 1, O(n)); self-balancing BSTs (AVL, red-black) keep h at O(log n)."
  },
  {
   "id": "DS-49",
   "type": "def",
   "topic": "Efficiency and Balance",
   "source": "Week 15 slides",
   "difficulty": 2,
   "question": "In an AVL tree, how is the balance factor of a node computed and what values are allowed?",
   "options": [
    "height(right subtree) + height(left subtree); allowed values are 0 and 1.",
    "height(left subtree) - height(right subtree); allowed values are -1, 0 and +1.",
    "Number of leaves minus number of internal nodes; any value is allowed.",
    "The depth of the node; allowed values are 0 to h."
   ],
   "answer": "B",
   "explanation": "Week 15 slides: balance factor = height(left) - height(right); allowed -1, 0, +1. If any node reaches +2 or -2, the tree rotates to fix it."
  },
  {
   "id": "DS-50",
   "type": "sit",
   "topic": "Efficiency and Balance",
   "source": "Week 15 slides",
   "difficulty": 3,
   "question": "Keys 30, 20, 10 are inserted in that order into an AVL tree, so node 30 has a balance factor of +2 (left-left case). What fixes it?",
   "options": [
    "A right rotation at 30, making 20 the new root with 10 and 30 as its children.",
    "Deleting 30 and inserting it again at the end.",
    "A left rotation at 10.",
    "No change is needed because the inorder is already sorted."
   ],
   "answer": "A",
   "explanation": "Week 15 slides: rotate right at 30; 20 moves up and 30 becomes the right child of 20. It is still a valid BST (inorder 10, 20, 30)."
  },
  {
   "id": "DS-51",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 1,
   "question": "Commuters line up at an MRT station ticket booth. The first person in line is the first one served. Which data structure models this?",
   "options": [
    "Stack",
    "Binary search tree",
    "Array of sorted values",
    "Queue"
   ],
   "answer": "D",
   "explanation": "Additional Notes (Stack or Queue): the first in line is the first served, which is First In, First Out - a queue."
  },
  {
   "id": "DS-52",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 1,
   "question": "A text editor has an Undo button. Each press reverses the most recent change first. Which structure supports this behavior?",
   "options": [
    "Queue",
    "Binary search tree",
    "Level-order traversal",
    "Stack"
   ],
   "answer": "D",
   "explanation": "Additional Notes: the most recent change is undone first - Last In, First Out, which is a stack."
  },
  {
   "id": "DS-53",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 1,
   "question": "A printer in a computer lab receives print jobs from 30 students and prints the documents in the order they were sent. Which structure fits?",
   "options": [
    "Stack",
    "Queue",
    "Binary tree",
    "Priority heap based on document size"
   ],
   "answer": "B",
   "explanation": "Additional Notes: jobs are processed in arrival order (FIFO), so a queue is the right model."
  },
  {
   "id": "DS-54",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "You browse several web pages. When you click Back, you return to the page you visited just before the current one. Which structure models this?",
   "options": [
    "Stack",
    "Queue",
    "Sorted array",
    "Binary search tree"
   ],
   "answer": "A",
   "explanation": "Additional Notes: the last page visited is the first one you return to - Last In, First Out."
  },
  {
   "id": "DS-55",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "A program checks whether the brackets in { [ ( ) ] } are balanced. Each closing bracket must match the most recent unmatched opening bracket. Which structure should it use?",
   "options": [
    "Queue",
    "Complete binary tree",
    "Linked list used from the front only",
    "Stack"
   ],
   "answer": "D",
   "explanation": "Additional Notes: the last bracket opened must be the first one closed - LIFO, so a stack."
  },
  {
   "id": "DS-56",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "A fintech app must process payment requests in the exact order they were received so that no transaction is skipped or reordered. Which structure is appropriate?",
   "options": [
    "Queue",
    "Stack",
    "Binary search tree",
    "Hash of account numbers"
   ],
   "answer": "A",
   "explanation": "Additional Notes: requests are handled first in, first out, which is a queue."
  },
  {
   "id": "DS-57",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "When a Java method calls another method, which calls another, the program must return to each caller in reverse order as each method finishes. Which structure does this describe?",
   "options": [
    "Queue",
    "Binary search tree",
    "Stack (the call stack)",
    "Circular list"
   ],
   "answer": "C",
   "explanation": "Additional Notes: the last method called is the first to finish and return - Last In, First Out."
  },
  {
   "id": "DS-58",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "A student reverses the word JAVA to AVAJ by processing one letter at a time. Which structure makes this natural?",
   "options": [
    "Stack, because the last letter added is the first one removed.",
    "Queue, because the first letter added is the first removed.",
    "Binary search tree, because letters are sorted.",
    "Array, because letters must be searched."
   ],
   "answer": "A",
   "explanation": "Additional Notes: pushing J, A, V, A and popping gives A, V, A, J - the LIFO behavior of a stack."
  },
  {
   "id": "DS-59",
   "type": "sit",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "An operating system gives each running program a short CPU turn; afterward the program goes to the back of the line to wait for its next turn. Which structure describes this?",
   "options": [
    "Queue",
    "Stack",
    "Binary search tree",
    "Heap sorted by program name"
   ],
   "answer": "A",
   "explanation": "Additional Notes: programs take turns in order and return to the back of the line - First In, First Out."
  },
  {
   "id": "DS-60",
   "type": "def",
   "topic": "Stack vs Queue",
   "source": "Additional Notes",
   "difficulty": 1,
   "question": "Which pair correctly matches each structure with its principle?",
   "options": [
    "Stack - First In, First Out; Queue - Last In, First Out",
    "Stack - First In, First Out; Queue - First In, Last Out",
    "Stack - Last In, Last Out; Queue - Last In, First Out",
    "Stack - Last In, First Out; Queue - First In, First Out"
   ],
   "answer": "D",
   "explanation": "Additional Notes: stacks follow LIFO (Undo, Back button, brackets); queues follow FIFO (ticket line, print jobs, payments)."
  }
 ],
 "purpcom": [
  {
   "id": "PC-01",
   "type": "def",
   "topic": "Choosing a Topic",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "According to the lesson, which is NOT one of the characteristics of an ideal topic?",
   "options": [
    "The topic is timely.",
    "The topic is unique.",
    "The topic is well-defined.",
    "The topic has a high level of creativity."
   ],
   "answer": "B",
   "explanation": "Reviewer 1.2 (confirmed in the graded quiz): the three characteristics are Timely, Well-defined and a high level of creativity (T-W-C). 'Unique' is not one of them."
  },
  {
   "id": "PC-02",
   "type": "def",
   "topic": "Choosing a Topic",
   "source": "Reviewer",
   "difficulty": 1,
   "question": "A topic that is narrowed down to a very specific theme and is not too broad is described as:",
   "options": [
    "Well-defined",
    "Timely",
    "Creative",
    "Overused"
   ],
   "answer": "A",
   "explanation": "Reviewer 1.2: 'Well-defined' means narrowed to a very specific theme - focused, not too broad."
  },
  {
   "id": "PC-03",
   "type": "def",
   "topic": "Thesis Statement",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 1,
   "question": "Which of the following is NOT a feature of a well-crafted thesis statement?",
   "options": [
    "It states an opinion or attitude on the topic.",
    "It contains the main idea of the essay.",
    "It includes subtopics or sub-points.",
    "It is written as a question."
   ],
   "answer": "D",
   "explanation": "Reviewer 1.3 and Quiz Notes (Mod 4): a thesis states an assertion or central idea; it is not written as an interrogative sentence."
  },
  {
   "id": "PC-04",
   "type": "def",
   "topic": "Citing Sources",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 1,
   "question": "According to the lesson, when must you cite your sources?",
   "options": [
    "Whenever you use information from an author or a reference source.",
    "Only if your teacher tells you to.",
    "Only when you have time to do so.",
    "Never, if you change a few words."
   ],
   "answer": "A",
   "explanation": "Reviewer 1.5 and Quiz Notes: cite when you quote, paraphrase, or use ideas, data or processes from any written source."
  },
  {
   "id": "PC-05",
   "type": "def",
   "topic": "Citing Sources",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which type of information does NOT have to be cited?",
   "options": [
    "Direct quotes",
    "Summaries",
    "Paraphrases",
    "Common knowledge"
   ],
   "answer": "D",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer 1.5: quotes, summaries and paraphrases are cited; common knowledge is the type that does not have to be."
  },
  {
   "id": "PC-06",
   "type": "con",
   "topic": "Citing Sources",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 2,
   "question": "Which statement is NOT one of the reasons for citing sources in academic writing?",
   "options": [
    "Citing sources credits the authors of the information used.",
    "Citing sources lets readers verify the information.",
    "Citing sources gives writers reasons to look for other useful information.",
    "Citing sources lets readers replicate and expand the research."
   ],
   "answer": "C",
   "explanation": "Reviewer 1.5 lists three reasons: acknowledge authors, let readers verify information, and let readers replicate and expand the research."
  },
  {
   "id": "PC-07",
   "type": "con",
   "topic": "Quoting",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 3,
   "question": "Which statement about quoting matches the lesson's rules?",
   "options": [
    "Periods and commas always go outside the quotation marks, even before a parenthetical citation.",
    "Brackets are used to show omitted words, and ellipses are used to show additions.",
    "Question marks and exclamation points always go outside the quotation marks.",
    "Colons and semicolons are placed outside the quotation marks."
   ],
   "answer": "D",
   "explanation": "Reviewer 1.6: omissions use ellipses, additions or corrections use brackets, and periods/commas go inside the quotation marks (except before a parenthetical citation that ends the sentence). Colons and semicolons go outside."
  },
  {
   "id": "PC-08",
   "type": "con",
   "topic": "Quoting, Paraphrasing and Summarizing",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 2,
   "question": "How does a summary differ from a paraphrase?",
   "options": [
    "A summary uses the author's exact words, while a paraphrase does not.",
    "A summary gives only the main ideas in your own words, while a paraphrase restates the full thought in your own words.",
    "A summary needs no citation, while a paraphrase does.",
    "A summary is longer than the original, while a paraphrase is shorter."
   ],
   "answer": "B",
   "explanation": "Reviewer 1.7-1.8: paraphrase keeps the full thought; summary covers only the general aspect. Both need citation; only a quote uses quotation marks and exact words."
  },
  {
   "id": "PC-09",
   "type": "def",
   "topic": "Quoting, Paraphrasing and Summarizing",
   "source": "Reviewer",
   "difficulty": 1,
   "question": "Which type of source use is the only one that is marked with quotation marks?",
   "options": [
    "Quoting",
    "Paraphrasing",
    "Summarizing",
    "Citing common knowledge"
   ],
   "answer": "A",
   "explanation": "Reviewer 1.6/1.8 comparison table: quotation marks are used for quotes only; paraphrases and summaries are in your own words but still cited."
  },
  {
   "id": "PC-10",
   "type": "app",
   "topic": "Purpose, Audience and Context",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "A writer wants to convince lawmakers to protect cultural property from trafficking. Which genre and language fit best?",
   "options": [
    "A public service announcement in simple, vivid language",
    "A personal reflective essay in first-person narrative",
    "A position paper written in academic, formal language",
    "A technical report with no stance at all"
   ],
   "answer": "C",
   "explanation": "Reviewer 1.9: for lawmakers the genre is a position paper with academic, formal language; for raising public awareness it is a PSA with simple, vivid language."
  },
  {
   "id": "PC-11",
   "type": "con",
   "topic": "Purpose, Audience and Context",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "The question 'Does the writing task inform, instruct, teach or entertain the audience?' relates to which aspect of communication?",
   "options": [
    "Audience",
    "Genre",
    "Content",
    "Purpose"
   ],
   "answer": "D",
   "explanation": "Reviewer 1.9 and Quiz Notes (confirmed): Purpose asks what the writing task requires you to do (inform, instruct, entertain, persuade, meet an academic requirement)."
  },
  {
   "id": "PC-12",
   "type": "def",
   "topic": "Purpose, Audience and Context",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "What is the difference between mode and medium?",
   "options": [
    "Mode is the way meaning is represented (words, symbols, pictures); medium is the way it is transmitted (print, audio, digital).",
    "Mode is how meaning is transmitted; medium is how it is represented.",
    "Mode is the writer's attitude; medium is the intended audience.",
    "Mode is the genre of the text; medium is its length."
   ],
   "answer": "A",
   "explanation": "Reviewer 1.9 (Kress, 2000): Mode = how meaning is made; Medium = how meaning is carried."
  },
  {
   "id": "PC-13",
   "type": "con",
   "topic": "Academic Writing Style",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which statement is NOT true of academic writing?",
   "options": [
    "The language is informal, casual and may contain slang.",
    "Purpose, audience and context are important aspects.",
    "It needs a lot of preparation.",
    "It is clear, concise and structured."
   ],
   "answer": "A",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer Part 2: academic writing is formal, not casual or slang-filled."
  },
  {
   "id": "PC-14",
   "type": "def",
   "topic": "Academic Writing Style",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "Which of the following is NOT a distinctive feature of academic writing style?",
   "options": [
    "Formality",
    "Header",
    "Impersonality",
    "Structured and specific"
   ],
   "answer": "B",
   "explanation": "Reviewer 2.3 and Quiz Notes (confirmed): the four features are Formality, Impersonality, Structured and specific, and Hedging (FISH)."
  },
  {
   "id": "PC-15",
   "type": "def",
   "topic": "Academic Writing Style",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "Which pair correctly describes the FISH features?",
   "options": [
    "Formality - use contractions and idioms; Hedging - state claims as certain facts.",
    "Impersonality - no direct 'you' and no rhetorical questions; Hedging - cautious language to temper a claim.",
    "Impersonality - address the reader as 'you'; Formality - use slang.",
    "Structured and specific - use vague, general words; Hedging - avoid modal verbs."
   ],
   "answer": "B",
   "explanation": "Reviewer 2.3: formality avoids contractions and idioms; impersonality avoids 'you' and rhetorical questions; hedging uses cautious language."
  },
  {
   "id": "PC-16",
   "type": "app",
   "topic": "Academic Writing Style",
   "source": "Reviewer",
   "difficulty": 3,
   "question": "Which sentence is the best example of hedged, impersonal academic language?",
   "options": [
    "A repeat of terrorist attacks as massive as 9/11 is just a matter of time.",
    "It is possible that the threat of terrorism is more serious than ever before.",
    "You would think the government would address terrorism by now.",
    "Isn't it obvious that terrorism keeps getting worse?"
   ],
   "answer": "B",
   "explanation": "Reviewer 2.3: the unhedged claim about 9/11 is rewritten with cautious language such as 'It is possible that...'. 'You' and rhetorical questions break impersonality."
  },
  {
   "id": "PC-17",
   "type": "con",
   "topic": "Academic Writing Style",
   "source": "Reviewer",
   "difficulty": 3,
   "question": "Which sentence is a nominalized version of 'The economy did not perform well'?",
   "options": [
    "The economy performed poorly all year.",
    "The economy did not do well at all.",
    "The performance of the economy was dismal.",
    "Experts say the economy failed."
   ],
   "answer": "C",
   "explanation": "Reviewer 2.3: nominalization changes verbs to nouns (perform -> performance), which makes the sentence less active."
  },
  {
   "id": "PC-18",
   "type": "def",
   "topic": "Academic Writing Style",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "Which set of words are examples of hedging verbs listed in the lesson?",
   "options": [
    "prove, demand, insist, guarantee, force",
    "run, jump, walk, glide, move",
    "appear, indicate, seem, suggest, tend",
    "solve, perform, accomplish, collect, deliver"
   ],
   "answer": "C",
   "explanation": "Reviewer 2.3 hedging devices: other verbs include appear, assume, indicate, seem, suggest and tend."
  },
  {
   "id": "PC-19",
   "type": "def",
   "topic": "Academic Writing Style",
   "source": "Reviewer",
   "difficulty": 1,
   "question": "In the RAPF factors for writing, what does the letter P stand for?",
   "options": [
    "Perspective",
    "Purpose",
    "Paragraph",
    "Persuasion"
   ],
   "answer": "B",
   "explanation": "Reviewer 2.1: RAPF = Role, Audience, Purpose, Format."
  },
  {
   "id": "PC-20",
   "type": "def",
   "topic": "Types of Academic Papers",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which is a feature of a literary analysis?",
   "options": [
    "A clearly defined problem and solution",
    "An arguable thesis statement",
    "An intriguing topic with a personal narrative",
    "Purposeful information with no opinion"
   ],
   "answer": "B",
   "explanation": "Reviewer 3.3 and Quiz Notes (confirmed): a literary analysis argues that your interpretation is valid, so it needs an arguable thesis statement."
  },
  {
   "id": "PC-21",
   "type": "def",
   "topic": "Types of Academic Papers",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "What term means examining the words used, references to culture, history or other texts, and the structure of a text to gather evidence for a thesis?",
   "options": [
    "Arguable thesis statement",
    "Informative essay",
    "Problem analysis",
    "Close reading"
   ],
   "answer": "D",
   "explanation": "Reviewer 3.3 and Quiz Notes (confirmed): close reading produces the evidence for the thesis in a literary analysis."
  },
  {
   "id": "PC-22",
   "type": "app",
   "topic": "Types of Academic Papers",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "A writer aims to persuade the reader that the proposed solution is the best alternative after weighing all the options. What type of paper is this?",
   "options": [
    "Informative essay",
    "Literary analysis",
    "Personal reflective essay",
    "Problem-solution paper"
   ],
   "answer": "D",
   "explanation": "Reviewer 3.5 and Quiz Notes (confirmed): the problem-solution paper persuades readers it offers the best, feasible solution in an objective, reasonable tone."
  },
  {
   "id": "PC-23",
   "type": "con",
   "topic": "Types of Academic Papers",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 2,
   "question": "Which statement describes the purpose of a personal reflective essay?",
   "options": [
    "It gives facts about a topic unknown to most readers, with no opinion.",
    "It argues that an interpretation of a literary work is valid.",
    "It enhances the writer's perspective and inspires readers to explore their own thoughts about the subject.",
    "It analyzes a problem and recommends a feasible solution."
   ],
   "answer": "C",
   "explanation": "Reviewer 3.2: the goal of a reflective essay is to enhance perspective and inspire readers to explore their own thoughts. The other options describe the informative essay, literary analysis and problem-solution paper."
  },
  {
   "id": "PC-24",
   "type": "con",
   "topic": "Types of Academic Papers",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 2,
   "question": "Which step in the writing process belongs to the informative essay and NOT to the other paper types?",
   "options": [
    "Reading the literary work",
    "Brainstorming the significance of a personal experience",
    "Write about an assigned topic from an interesting angle or choose an engaging topic.",
    "Determining the perspective in analyzing the problem"
   ],
   "answer": "C",
   "explanation": "Reviewer 3.4: this step opens the informative essay. 'Reading the literary work' belongs to literary analysis, 'brainstorming' to the reflective essay, and the problem perspective to the problem-solution paper."
  },
  {
   "id": "PC-25",
   "type": "def",
   "topic": "Types of Academic Papers",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "Which feature characterizes an informative essay?",
   "options": [
    "It argues for a personal interpretation using an arguable thesis.",
    "It presents facts and evidence, ideally with no opinion, often beginning with a hook.",
    "It narrates a personal turning point and its lessons.",
    "It proposes a feasible solution to a clearly defined problem."
   ],
   "answer": "B",
   "explanation": "Reviewer 3.4: the writer acts as the expert, gives facts about real people and events, and ideally gives no opinion."
  },
  {
   "id": "PC-26",
   "type": "def",
   "topic": "Types of Academic Papers",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "Which citation style does a literary analysis usually follow, citing the author's surname and page number?",
   "options": [
    "MLA",
    "APA only, with no page numbers",
    "Chicago footnotes only",
    "No citation is needed for quoted lines"
   ],
   "answer": "A",
   "explanation": "Reviewer 3.3: quoted lines are cited; literary analyses usually follow MLA with the author's surname and the page number."
  },
  {
   "id": "PC-27",
   "type": "def",
   "topic": "Professional Correspondence",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "What are considered the two most common forms of professional correspondence?",
   "options": [
    "Reports and business letters",
    "Memos and reports",
    "Business letters and minutes of meetings",
    "Memos and business letters"
   ],
   "answer": "D",
   "explanation": "Reviewer 4.1 and Quiz Notes (confirmed): memos and business letters, not reports or minutes."
  },
  {
   "id": "PC-28",
   "type": "con",
   "topic": "Professional Correspondence",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "How does a business letter differ from a memo?",
   "options": [
    "A business letter is internal communication, while a memo goes outside the organization.",
    "A business letter needs no salutation, while a memo needs a signature block.",
    "A business letter is external communication, while a memo is internal within the same organization.",
    "A business letter is always shorter than a memo."
   ],
   "answer": "C",
   "explanation": "Reviewer 4.2 (Pfeiffer, 2013): the letter goes to someone outside the organization; the memo is written to members of the same organization and needs no salutation, complimentary close or signature block."
  },
  {
   "id": "PC-29",
   "type": "def",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 2,
   "question": "Which is the correct way to write the salutation of a business letter to Dr. Michael Santos?",
   "options": [
    "Dear Dr. Michael Santos,",
    "To Dr. Michael Santos:",
    "Dear Dr. Santos:",
    "Dear Dr. Santos,"
   ],
   "answer": "C",
   "explanation": "Reviewer 4.3 and Additional Notes: Dear + title + last name + colon."
  },
  {
   "id": "PC-30",
   "type": "def",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "How many lines does the inside address of a business letter have?",
   "options": [
    "3",
    "2",
    "4",
    "5"
   ],
   "answer": "A",
   "explanation": "Quiz Notes (graded, confirmed), Reviewer 4.3 and Additional Notes: line 1 is the recipient's complete name, line 2 the position, line 3 the company's complete address."
  },
  {
   "id": "PC-31",
   "type": "def",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which part of a business letter shows the appeal or call for action?",
   "options": [
    "Introduction",
    "Heading",
    "Body",
    "Conclusion"
   ],
   "answer": "D",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer 4.3: the conclusion carries the appeal for action."
  },
  {
   "id": "PC-32",
   "type": "def",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which part of a business letter contains the supporting details for the purpose of the letter?",
   "options": [
    "Body",
    "Salutation",
    "Introduction",
    "Conclusion"
   ],
   "answer": "A",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer 4.3: the introduction states the purpose; the body gives the supporting details."
  },
  {
   "id": "PC-33",
   "type": "def",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes",
   "difficulty": 1,
   "question": "Which part of a business letter addresses the recipient using the person's designation and surname?",
   "options": [
    "Inside address",
    "Salutation",
    "Heading",
    "Complimentary close"
   ],
   "answer": "B",
   "explanation": "Reviewer 4.3 and Additional Notes: the salutation is the abbreviation of the designation plus the surname, ending with a colon."
  },
  {
   "id": "PC-34",
   "type": "app",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 3,
   "question": "Julie is told to update a quarterly vendor letter. Which format settings should she use?",
   "options": [
    "Double line spacing, no blank lines between paragraphs, and a half-inch indent",
    "Single-line spacing, a blank line between paragraphs, and no indent",
    "Chicago style or a modified MLA format",
    "Single-line spacing with an indent at every paragraph"
   ],
   "answer": "B",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer 4.3 template: paragraphs are single-spaced with one blank line between them and no indent."
  },
  {
   "id": "PC-35",
   "type": "app",
   "topic": "Business Letter",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "Aleksandar must correct line spacing and indentation in a letter in Word. Where should he make these settings?",
   "options": [
    "In the Paragraph group of the Ribbon",
    "By pressing Enter and the spacebar repeatedly",
    "By using the Tab key and the spacebar",
    "By typing extra blank lines before every paragraph"
   ],
   "answer": "A",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer 4.3: spacing and indentation are set in the Paragraph group, not with Enter, Spacebar or Tab."
  },
  {
   "id": "PC-36",
   "type": "def",
   "topic": "Memo",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "Which parts does a memo NOT need?",
   "options": [
    "Date, addressee and sender",
    "Salutation, complimentary close and signature block",
    "Subject line",
    "Opening and closing paragraphs"
   ],
   "answer": "B",
   "explanation": "Reviewer 4.2: a memo immediately gives the date, addressee, sender and subject; it does not need a salutation, complimentary close or signature block."
  },
  {
   "id": "PC-37",
   "type": "con",
   "topic": "Meetings and Minutes",
   "source": "Reviewer",
   "difficulty": 2,
   "question": "How do modern minutes differ from traditional minutes?",
   "options": [
    "Modern minutes record every word of the discussion with everyone's name.",
    "Modern minutes are organized as old business and new business.",
    "Modern minutes contain no header or attendee list.",
    "Modern minutes are organized by agenda item and end with next steps listing the task, person responsible and deadline."
   ],
   "answer": "D",
   "explanation": "Reviewer 4.7: traditional minutes use old/new business and detailed accounts; modern minutes follow agenda items and list specific next steps."
  },
  {
   "id": "PC-38",
   "type": "def",
   "topic": "Mechanics and Design",
   "source": "Reviewer",
   "difficulty": 1,
   "question": "Which fonts does the lesson identify as best for business letters?",
   "options": [
    "Basic fonts such as Times New Roman, Arial, Calibri and Verdana",
    "Decorative script fonts",
    "Any font with bold effects on every line",
    "Fonts that change in every paragraph"
   ],
   "answer": "A",
   "explanation": "Reviewer 4.6: legibility matters; basic fonts such as Times New Roman, Arial, Calibri and Verdana are best for business letters."
  },
  {
   "id": "PC-39",
   "type": "con",
   "topic": "Workplace Communication",
   "source": "Lesson + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which is NOT a way to communicate effectively in the workplace?",
   "options": [
    "Speak your hearts out",
    "Be appreciative",
    "Avoid mumbling",
    "Gesticulate"
   ],
   "answer": "A",
   "explanation": "Quiz Notes (graded, confirmed) and the workplace lesson's list of 20 ways: 'Speak your hearts out' is not among them."
  },
  {
   "id": "PC-40",
   "type": "app",
   "topic": "Workplace Communication",
   "source": "Lesson + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "Katrina presented a report in the Marketing department and received many questions. What was most likely missing in her presentation?",
   "options": [
    "She did not use visuals.",
    "She displayed confidence.",
    "She made unnecessary repetition.",
    "She encouraged too much feedback."
   ],
   "answer": "A",
   "explanation": "Quiz Notes (graded, confirmed): the lesson lists using visuals as a way to communicate effectively; confidence is also listed, so it could not be the problem."
  },
  {
   "id": "PC-41",
   "type": "def",
   "topic": "Workplace Communication",
   "source": "Lesson",
   "difficulty": 2,
   "question": "According to Uychoco and Santos (2018), what is true of corporate culture?",
   "options": [
    "It may vary from one organization to another.",
    "It is identical in every company.",
    "It requires slang so that coworkers feel close.",
    "It has no effect on how people communicate."
   ],
   "answer": "A",
   "explanation": "Workplace lesson: corporate (workplace or professional) culture is the total sum of the values, customs, traditions and meanings that make a company unique, and it varies between organizations."
  },
  {
   "id": "PC-42",
   "type": "con",
   "topic": "Professional Style",
   "source": "Lesson + Quiz Notes",
   "difficulty": 2,
   "question": "Which sentence shows the 'you-attitude' of professional writing?",
   "options": [
    "If you have any questions, please ask.",
    "If I can answer any of your queries, I'm perfectly willing to do so.",
    "I'm happy to tell you that you are really doing well!",
    "We delivered the order to the provided address this morning."
   ],
   "answer": "A",
   "explanation": "Workplace lesson: the you-attitude looks at things from the reader's point of view; the other sentences are the lesson's I-attitude examples."
  },
  {
   "id": "PC-43",
   "type": "app",
   "topic": "Professional Style",
   "source": "Lesson",
   "difficulty": 3,
   "question": "Which rewrite best emphasizes the positive, as the lesson recommends, for 'We cannot process your reimbursement request because your documents are not complete'?",
   "options": [
    "Your documents are incomplete, so we cannot help you.",
    "We regret that your request is denied due to your mistake.",
    "Incomplete requests are never processed here.",
    "Your reimbursement request will be processed as soon as you submit all the required documents."
   ],
   "answer": "D",
   "explanation": "Workplace lesson: state information positively - what the reader can do - and shift the focus from the writer's refusal to the reader's benefit."
  },
  {
   "id": "PC-44",
   "type": "def",
   "topic": "Professional Style",
   "source": "Lesson",
   "difficulty": 2,
   "question": "Which is the bias-free alternative to 'stewardess' given in the lesson?",
   "options": [
    "Air hostess",
    "Female attendant",
    "Cabin girl",
    "Flight attendant"
   ],
   "answer": "D",
   "explanation": "Workplace lesson (bias-free language): stewardess -> flight attendant; chairman -> chairperson/chair; fireman -> firefighter; manpower -> labor force/personnel."
  },
  {
   "id": "PC-45",
   "type": "con",
   "topic": "Professional Style",
   "source": "Lesson + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "Business jargon such as 'as per your request' and 'enclosed please find' does what to the writer's meaning?",
   "options": [
    "It clarifies the meaning for busy readers.",
    "It adds warmth and personality.",
    "It obscures the meaning and adds clutter.",
    "It shortens the message."
   ],
   "answer": "C",
   "explanation": "Quiz Notes (graded, confirmed) and workplace lesson: jargon is overly technical, overused expression that obscures meaning and clutters writing; use 'as you requested' and 'here is' instead."
  },
  {
   "id": "PC-46",
   "type": "def",
   "topic": "Professional Style",
   "source": "Lesson + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which is an example of professional language?",
   "options": [
    "Emojis",
    "Overly friendly language",
    "Polite language",
    "Text-message shortcuts such as LOL"
   ],
   "answer": "C",
   "explanation": "Quiz Notes (graded, confirmed) and workplace lesson: professional language is polite, not overly personal, grammatically accurate, and free of jargon, emojis and shortcuts."
  },
  {
   "id": "PC-47",
   "type": "app",
   "topic": "Workplace Email",
   "source": "Reviewer + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "Mason finished writing an email announcing the employee softball team, and the planning made writing easy. Is he ready to send it?",
   "options": [
    "Yes, because planning already guarantees accuracy.",
    "Yes, because emails need no review.",
    "Only after he adds emojis to make it friendly.",
    "No, he still needs to review and revise it."
   ],
   "answer": "D",
   "explanation": "Quiz Notes (graded, confirmed) and Reviewer 4.8: review accuracy, tone, word choice and register, and check attachments, before sending."
  },
  {
   "id": "PC-48",
   "type": "def",
   "topic": "Purposive Writing",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which type of writing is reader-oriented, task-related and purposeful, and the result of conscientious effort?",
   "options": [
    "Essay writing",
    "Business writing",
    "Corporate writing",
    "Purposive writing"
   ],
   "answer": "D",
   "explanation": "Additional Notes and Quiz Notes (confirmed): purposive writing emphasizes objectivity, accuracy and restraint and has a utilitarian purpose."
  },
  {
   "id": "PC-49",
   "type": "def",
   "topic": "Purposive Writing",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 3,
   "question": "According to Ang (2023), which is NOT a characteristic of purposive writing?",
   "options": [
    "Formal",
    "Objective",
    "Clear",
    "Convincing"
   ],
   "answer": "A",
   "explanation": "Additional Notes (Ang, 2023): purposive writing is objective, clear, concise and convincing. 'Formal' is not in that list (confirmed by the graded quiz)."
  },
  {
   "id": "PC-50",
   "type": "def",
   "topic": "Purposive Writing",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "Which is NOT one of the properties of purposive writing?",
   "options": [
    "Subject matter",
    "Writing",
    "Expression",
    "Arrangement of materials"
   ],
   "answer": "B",
   "explanation": "Additional Notes (Magpayo and Tabor, 1996) and Quiz Notes (confirmed): the three properties are subject matter, expression and arrangement of materials."
  },
  {
   "id": "PC-51",
   "type": "def",
   "topic": "Purposive Writing",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "Which is NOT among the listed functions of purposive writing?",
   "options": [
    "To serve as basis for management decisions",
    "To sell products directly to consumers",
    "To give instructions",
    "To serve as basis for public relations"
   ],
   "answer": "B",
   "explanation": "Additional Notes: the seven functions include management decisions, furnishing information, giving instructions, recording and procuring business through proposals, public relations, and reports to stockholders."
  },
  {
   "id": "PC-52",
   "type": "def",
   "topic": "Purposive Writing",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "What are the tone and preferred point of view of purposive writing?",
   "options": [
    "Emotional and personal; first person",
    "Humorous and casual; second person",
    "Objective, unbiased or impersonal; third person",
    "Persuasive through emotion; first person plural"
   ],
   "answer": "C",
   "explanation": "Additional Notes (Purposive Writing summary): point of view prefers the third person (the proponent, researcher, writer); tone is objective, unbiased or impersonal."
  },
  {
   "id": "PC-53",
   "type": "def",
   "topic": "Purposive Letter",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 3,
   "question": "Which is NOT a tip for achieving the right style in purposive letters?",
   "options": [
    "Be courteous",
    "Be conversational",
    "Be formal",
    "Avoid insensitive language"
   ],
   "answer": "C",
   "explanation": "Additional Notes (Style): be conversational; be courteous; avoid formal, wordy, cliched and insensitive language. Quiz Notes (graded) confirm 'Be formal' as the exception."
  },
  {
   "id": "PC-54",
   "type": "def",
   "topic": "Purposive Letter",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 2,
   "question": "What is the maximum number of characters that a subject line should have?",
   "options": [
    "40",
    "50",
    "70",
    "60"
   ],
   "answer": "D",
   "explanation": "Quiz Notes (graded, confirmed): a subject line should have at most 60 characters. Note: this figure appears in the graded quiz notes rather than in the lesson text."
  },
  {
   "id": "PC-55",
   "type": "app",
   "topic": "Purposive Letter",
   "source": "Quiz Notes",
   "difficulty": 2,
   "question": "Which is an effective subject line for an email to staff?",
   "options": [
    "Payment",
    "Leave",
    "Dates for 2021 Training Sessions",
    "Your auto insurance"
   ],
   "answer": "C",
   "explanation": "Quiz Notes (Mod 6): an effective subject line is specific about the content; one-word or vague lines do not tell the reader what the message is about."
  },
  {
   "id": "PC-56",
   "type": "def",
   "topic": "Purposive Letter",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "How does the lesson say an effective letter should generally be organized?",
   "options": [
    "Into introduction, summary and signature",
    "Into situation, explanation and action",
    "Into greeting, joke and request",
    "Into heading, footer and attachments"
   ],
   "answer": "B",
   "explanation": "Additional Notes (Organization): as a general rule, organize your letter into situation, explanation and action."
  },
  {
   "id": "PC-57",
   "type": "def",
   "topic": "Professional Email",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 1,
   "question": "Which of the following is NOT a purpose of a professional e-mail?",
   "options": [
    "To share updates",
    "To chat",
    "To ask questions",
    "To send memos"
   ],
   "answer": "B",
   "explanation": "Additional Notes (Adler et al., 2023): professional emails exchange information, schedule meetings, ask quick questions, share updates or send memos; use a personal account for chatting."
  },
  {
   "id": "PC-58",
   "type": "def",
   "topic": "Professional Email",
   "source": "Additional Notes + Quiz Notes (graded)",
   "difficulty": 3,
   "question": "Which of these is an example of verbal deadwood that purposive writing should omit?",
   "options": [
    "Because",
    "To",
    "Now",
    "Accordingly"
   ],
   "answer": "D",
   "explanation": "Quiz Notes (graded, confirmed) and Additional Notes ('omit verbal deadwood'): 'accordingly' is wordy filler; the other words carry meaning."
  },
  {
   "id": "PC-59",
   "type": "app",
   "topic": "Professional Email",
   "source": "Additional Notes",
   "difficulty": 3,
   "question": "An employee receives a group email and wants to answer only the sender. What does the lesson recommend?",
   "options": [
    "Always use reply-all so everyone is informed.",
    "Forward the reply to the CEO for approval.",
    "Avoid reply-all unless the reply is relevant to every recipient.",
    "Delete the original message first."
   ],
   "answer": "C",
   "explanation": "Additional Notes (tip 11): think twice before using reply-all; use it only when your reply is relevant to every recipient or when group discussion or tracking is required."
  },
  {
   "id": "PC-60",
   "type": "def",
   "topic": "Professional Email",
   "source": "Additional Notes",
   "difficulty": 2,
   "question": "What should the closing line of a professional email do?",
   "options": [
    "Share a joke and a cute quotation",
    "State the sender's personal opinions",
    "Express gratitude and serve as a call-to-action (CTA)",
    "Repeat the subject line in capital letters"
   ],
   "answer": "C",
   "explanation": "Additional Notes (tip 9): include a closing line that expresses gratitude and motivates the recipient to respond."
  }
 ],
 "inforas": [
  {
   "id": "IA-01",
   "type": "def",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "What is the primary function of a firewall?",
   "options": [
    "It only detects suspicious activity and sends alerts.",
    "It controls network traffic based on security rules, allowing or blocking it.",
    "It sits between users and the Internet to cache pages.",
    "It encrypts all files on a computer."
   ],
   "answer": "B",
   "explanation": "Reviewer Part 1: Firewall = Gate. Traffic is checked against rules and then allowed or blocked."
  },
  {
   "id": "IA-02",
   "type": "def",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "An intrusion detection system (IDS) is best described as:",
   "options": [
    "A system that detects suspicious activity and sends an alert but does not block it by itself.",
    "A system that detects and automatically blocks attacks.",
    "A gateway that filters web access for students.",
    "A network area that holds public-facing servers."
   ],
   "answer": "A",
   "explanation": "Reviewer Part 1: IDS = CCTV / Detect. A camera records and warns, but it does not stop the intruder by itself."
  },
  {
   "id": "IA-03",
   "type": "def",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which description matches an intrusion prevention system (IPS)?",
   "options": [
    "It only records alerts for the security team.",
    "It divides one network into smaller networks.",
    "It detects suspicious activity and can automatically block it.",
    "It proves a user's identity with two factors."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 1: IPS = CCTV + Guard; IDS = Detect, IPS = Detect + Block."
  },
  {
   "id": "IA-04",
   "type": "con",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "Which capability separates an IPS from an IDS?",
   "options": [
    "An IPS automatically blocks detected threats; an IDS does not.",
    "An IPS sends alerts; an IDS does not.",
    "An IPS detects threats; an IDS does not.",
    "An IPS is placed outside the network; an IDS is always inside."
   ],
   "answer": "A",
   "explanation": "Reviewer IDS vs IPS table: both detect threats and send alerts; only the IPS automatically blocks."
  },
  {
   "id": "IA-05",
   "type": "def",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which control has the memory cue 'Middleman' because it sits between the user and the Internet?",
   "options": [
    "Firewall",
    "Proxy",
    "IDS",
    "DMZ"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 1: Proxy = Middleman (User -> Proxy -> Internet)."
  },
  {
   "id": "IA-06",
   "type": "app",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 9",
   "difficulty": 2,
   "question": "A security team wants to be alerted when one computer scans hundreds of university computers. Which control fits?",
   "options": [
    "Firewall",
    "IDS",
    "Proxy",
    "Network segmentation"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 1 and Part 9: the IDS notices the scanning and alerts the security team."
  },
  {
   "id": "IA-07",
   "type": "app",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 9",
   "difficulty": 2,
   "question": "A system detects a known malicious attack pattern and must automatically stop the connection. Which control is required?",
   "options": [
    "IDS",
    "DMZ",
    "DAC",
    "IPS"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 1: an IPS detects an attack pattern and blocks the connection."
  },
  {
   "id": "IA-08",
   "type": "app",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "A university routes student web requests through a server that blocks prohibited websites. Which control is this?",
   "options": [
    "Proxy",
    "Firewall",
    "IPS",
    "Rogue access point"
   ],
   "answer": "A",
   "explanation": "Reviewer Part 1: the proxy example is student web requests routed through a proxy that blocks prohibited websites."
  },
  {
   "id": "IA-09",
   "type": "app",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 2,
   "question": "A university lets students reach the school website but blocks direct access to the internal database. Which control does this?",
   "options": [
    "IDS",
    "Firewall",
    "Proxy",
    "MFA"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 1: the firewall example allows the school website and blocks direct access to the internal database."
  },
  {
   "id": "IA-10",
   "type": "con",
   "topic": "Network Security Controls",
   "source": "Reviewer Part 1",
   "difficulty": 1,
   "question": "Which memory cue describes an IPS?",
   "options": [
    "CCTV / Detect",
    "Gate",
    "CCTV + Guard",
    "Middleman"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 1: Firewall = Gate; IDS = CCTV / Detect; IPS = CCTV + Guard; Proxy = Middleman."
  },
  {
   "id": "IA-11",
   "type": "def",
   "topic": "Secure Network Architecture",
   "source": "Reviewer Part 2",
   "difficulty": 1,
   "question": "What is network segmentation, and why does it matter?",
   "options": [
    "Combining all departments into one flat network for easier access.",
    "Encrypting every packet that crosses the Internet.",
    "Dividing a large network into smaller separate networks so a compromised area gives attackers fewer systems to reach.",
    "Giving every user administrator rights."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 2: Segmentation = Separate (e.g., Student, Faculty, Finance and Server networks kept apart)."
  },
  {
   "id": "IA-12",
   "type": "def",
   "topic": "Secure Network Architecture",
   "source": "Reviewer Part 2",
   "difficulty": 1,
   "question": "What is a DMZ (Demilitarized Zone) in network design?",
   "options": [
    "A zone in which all traffic is blocked",
    "The network that stores student records",
    "A separate network area for public-facing systems",
    "A wireless network name (SSID)"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 2: DMZ = public systems separated. Path: Internet -> Firewall -> DMZ -> Internal Network."
  },
  {
   "id": "IA-13",
   "type": "app",
   "topic": "Secure Network Architecture",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "Where should the public university website and the student records database be placed?",
   "options": [
    "Both in the DMZ so that students can reach them.",
    "The website in the internal network; the database in the DMZ.",
    "The public website in the DMZ; the student records in the internal network.",
    "Both directly on the Internet side of the firewall."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 2: the public university website goes in the DMZ; student records/database stay in the internal network."
  },
  {
   "id": "IA-14",
   "type": "con",
   "topic": "Secure Network Architecture",
   "source": "Reviewer Part 2",
   "difficulty": 3,
   "question": "Why is placing public servers in a DMZ beneficial?",
   "options": [
    "If a public server is broken into, the attacker is still not inside the internal network.",
    "Public servers become invisible on the Internet.",
    "It lets the servers skip authentication.",
    "It removes the need for a firewall."
   ],
   "answer": "A",
   "explanation": "Reviewer Part 2 (added explanation): public servers are the most exposed, so a DMZ keeps a compromise from reaching the internal network."
  },
  {
   "id": "IA-15",
   "type": "app",
   "topic": "Secure Network Architecture",
   "source": "Reviewer Part 2",
   "difficulty": 2,
   "question": "Which applies the principle of least privilege to a student account?",
   "options": [
    "Allow the Internet and the LMS, but deny the payroll database and administrator settings.",
    "Allow every system so the student is never blocked.",
    "Allow only the payroll database.",
    "Deny everything including the LMS."
   ],
   "answer": "A",
   "explanation": "Reviewer Part 2: Least privilege = only what is needed: a student gets the Internet and LMS, not payroll or admin settings."
  },
  {
   "id": "IA-16",
   "type": "app",
   "topic": "Secure Network Architecture",
   "source": "Reviewer Part 9",
   "difficulty": 2,
   "question": "The university wants to separate the student network from the finance network. Which control should it use?",
   "options": [
    "Proxy",
    "Phishing awareness",
    "Ransomware backups",
    "Network segmentation"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 9 table: separating student and finance networks = network segmentation."
  },
  {
   "id": "IA-17",
   "type": "def",
   "topic": "OS Security",
   "source": "Reviewer Part 3",
   "difficulty": 1,
   "question": "What is the goal of OS hardening?",
   "options": [
    "Increase the number of running services.",
    "Give every user administrator access.",
    "Reduce the attack surface by removing unnecessary risks.",
    "Replace passwords with ones that never expire."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 3: hardening = reduce attack surface; the goal is fewer weak points for attackers."
  },
  {
   "id": "IA-18",
   "type": "def",
   "topic": "OS Security",
   "source": "Reviewer Part 3",
   "difficulty": 2,
   "question": "In the reviewer, what does 'attack surface' mean?",
   "options": [
    "The number of users who can log in to a system.",
    "The physical size of a data center.",
    "The amount of data stored on a server.",
    "All possible entry points into a system, such as open ports, unnecessary services, outdated software and weak passwords."
   ],
   "answer": "D",
   "explanation": "Reviewer Part 3: attack surface = all possible entry points; each is like a 'door' to close."
  },
  {
   "id": "IA-19",
   "type": "con",
   "topic": "OS Security",
   "source": "Reviewer Part 3",
   "difficulty": 2,
   "question": "Which action is NOT one of the common OS hardening steps listed in the reviewer?",
   "options": [
    "Install security patches",
    "Disable unnecessary services",
    "Enable logging",
    "Enable all optional services for convenience"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 3 hardening steps: patches, remove unnecessary software, disable unnecessary services, strong authentication, limit administrator access, enable firewall/security tools, enable logging."
  },
  {
   "id": "IA-20",
   "type": "def",
   "topic": "OS Security",
   "source": "Reviewer Part 3",
   "difficulty": 1,
   "question": "What does a patch do?",
   "options": [
    "It blocks all network traffic.",
    "It encrypts the user's files.",
    "It fixes bugs and security vulnerabilities.",
    "It creates a backup of the system."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 3: Patch = fixes bugs and vulnerabilities; memory cue: Patch closes doors."
  },
  {
   "id": "IA-21",
   "type": "def",
   "topic": "Access Control Models",
   "source": "Reviewer Part 4",
   "difficulty": 1,
   "question": "In Discretionary Access Control (DAC), who decides who gets access?",
   "options": [
    "The security classification labels",
    "The user's job role",
    "The owner of the resource",
    "The device and location conditions"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 4: DAC = Owner decides (example: a Google Drive file owner decides who can view or edit)."
  },
  {
   "id": "IA-22",
   "type": "app",
   "topic": "Access Control Models",
   "source": "Reviewer Part 4",
   "difficulty": 2,
   "question": "A confidential file is accessed by a user without the proper clearance, and access is denied by the system's rules. Which model is this?",
   "options": [
    "MAC (Mandatory Access Control)",
    "DAC",
    "RBAC",
    "ABAC"
   ],
   "answer": "A",
   "explanation": "Reviewer Part 4: MAC = security classifications and system rules decide: confidential file + no clearance = DENIED."
  },
  {
   "id": "IA-23",
   "type": "app",
   "topic": "Access Control Models",
   "source": "Reviewer Part 4",
   "difficulty": 2,
   "question": "Registrar staff can open student records, finance staff can open financial records, and IT admins manage systems. Which model is used?",
   "options": [
    "DAC",
    "RBAC (Role-Based Access Control)",
    "MAC",
    "ABAC"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 4: RBAC = role decides; User -> Role -> Permissions."
  },
  {
   "id": "IA-24",
   "type": "app",
   "topic": "Access Control Models",
   "source": "Reviewer Part 4",
   "difficulty": 3,
   "question": "An administrator is allowed in only when using a company laptop during work hours, and denied from an unknown device. Which model does this illustrate?",
   "options": [
    "RBAC",
    "DAC",
    "ABAC (Attribute-Based Access Control)",
    "MAC"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 4: ABAC = conditions decide (role, device, location, time, resource)."
  },
  {
   "id": "IA-25",
   "type": "con",
   "topic": "Access Control Models",
   "source": "Reviewer Part 4",
   "difficulty": 3,
   "question": "How does ABAC differ from RBAC?",
   "options": [
    "RBAC uses security labels; ABAC uses the owner's decision.",
    "RBAC considers conditions; ABAC considers only the job title.",
    "They are identical models with different names.",
    "RBAC stops at the user's role; ABAC also considers conditions such as device, location and time."
   ],
   "answer": "D",
   "explanation": "Reviewer Part 4 (easy-to-confuse pairs): in the ABAC example, the same admin role gets different results depending on the device."
  },
  {
   "id": "IA-26",
   "type": "con",
   "topic": "Access Control Models",
   "source": "Reviewer Part 4",
   "difficulty": 2,
   "question": "How does DAC differ from MAC?",
   "options": [
    "In DAC an individual owner chooses access; in MAC the system's security labels and rules decide.",
    "In DAC the system's labels decide; in MAC the owner chooses.",
    "DAC uses job roles while MAC uses device conditions.",
    "DAC is used only for passwords while MAC is used only for files."
   ],
   "answer": "A",
   "explanation": "Reviewer Part 4: DAC = Owner decides; MAC = security rules decide, regardless of what an individual would like."
  },
  {
   "id": "IA-27",
   "type": "def",
   "topic": "Identity and Access Management",
   "source": "Reviewer Part 5",
   "difficulty": 1,
   "question": "What does IAM (Identity and Access Management) manage?",
   "options": [
    "Who users are, how they prove identity, what they can access, and when access is removed.",
    "Only the passwords of administrators.",
    "Only the physical locks of server rooms.",
    "The speed of the Wi-Fi network."
   ],
   "answer": "A",
   "explanation": "Reviewer Part 5: IAM lifecycle = Create identity -> Authenticate -> Authorize -> Monitor."
  },
  {
   "id": "IA-28",
   "type": "con",
   "topic": "Identity and Access Management",
   "source": "Reviewer Part 5",
   "difficulty": 1,
   "question": "Which pair correctly matches authentication and authorization?",
   "options": [
    "Authentication - 'What can you access?'; Authorization - 'Who are you?'",
    "Authentication - 'Who are you?'; Authorization - 'What can you access?'",
    "Both mean 'What can you access?'",
    "Both mean 'Who are you?'"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 5: authentication deals with identity (username + password); authorization deals with permissions."
  },
  {
   "id": "IA-29",
   "type": "app",
   "topic": "Identity and Access Management",
   "source": "Reviewer Part 5",
   "difficulty": 3,
   "question": "A user logs in to the school portal successfully but is denied access to the payroll admin page. Which statement is correct?",
   "options": [
    "Login was authorization; the denial was authentication.",
    "Both were authentication.",
    "Login was authentication; the denial was authorization.",
    "Both were authorization."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 5 example: portal allowed and payroll admin denied is authorization; username + password is authentication."
  },
  {
   "id": "IA-30",
   "type": "def",
   "topic": "Identity and Access Management",
   "source": "Reviewer Part 5",
   "difficulty": 2,
   "question": "What is the difference between MFA and 2FA?",
   "options": [
    "MFA uses exactly one factor; 2FA uses two or more.",
    "MFA is for Wi-Fi only; 2FA is for passwords only.",
    "They are the same and always use passwords twice.",
    "MFA uses two or more factors; 2FA uses exactly two."
   ],
   "answer": "D",
   "explanation": "Reviewer Part 5: MFA = 2 or more authentication factors; 2FA = exactly 2."
  },
  {
   "id": "IA-31",
   "type": "app",
   "topic": "Identity and Access Management",
   "source": "Reviewer Part 5",
   "difficulty": 2,
   "question": "An employee must enter a password and a one-time password (OTP) sent to a phone. Which factors are used?",
   "options": [
    "Something you are and something you know",
    "Something you know and something you have (2FA)",
    "Two things you have",
    "Only something you know"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 5: Password + OTP -> 2FA; the OTP is typically something you have."
  },
  {
   "id": "IA-32",
   "type": "con",
   "topic": "Identity and Access Management",
   "source": "Reviewer Part 5",
   "difficulty": 3,
   "question": "Why does a password plus a second password not count as true two-factor authentication?",
   "options": [
    "Passwords can never be used as a factor.",
    "Two passwords count as three factors.",
    "Both are the same type of factor (something you know); two different types are required.",
    "MFA does not allow any knowledge factor."
   ],
   "answer": "C",
   "explanation": "Reviewer Part 5 (added explanation): two different types of factor are what count, so a password plus a second password is still one type."
  },
  {
   "id": "IA-33",
   "type": "def",
   "topic": "Wireless Security",
   "source": "Reviewer Part 6",
   "difficulty": 1,
   "question": "What are WPA2 and WPA3?",
   "options": [
    "The names of Wi-Fi networks",
    "Wi-Fi security standards for authentication and encryption",
    "Types of malware that spread over Wi-Fi",
    "Firewalls built into routers"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 6: SSID is the network name; WPA2/WPA3 are Wi-Fi security standards."
  },
  {
   "id": "IA-34",
   "type": "app",
   "topic": "Wireless Security",
   "source": "Reviewer Part 6",
   "difficulty": 2,
   "question": "The real network is University-WiFi, but an attacker sets up University_Free_WiFi and a user connects to it. What is the attacker's setup called?",
   "options": [
    "A DMZ",
    "A proxy server",
    "A rogue (fake) access point",
    "An IPS"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 6: a rogue access point is an unauthorized or fake Wi-Fi access point that may imitate a legitimate network."
  },
  {
   "id": "IA-35",
   "type": "con",
   "topic": "Wireless Security",
   "source": "Reviewer Part 6",
   "difficulty": 1,
   "question": "Which is a basic wireless defense listed in the reviewer?",
   "options": [
    "Connect to any open network with the strongest signal",
    "Prefer WPA2/WPA3 and avoid suspicious public Wi-Fi",
    "Share the Wi-Fi password publicly",
    "Disable encryption to improve speed"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 6 basic defenses: use trusted networks, prefer WPA2/WPA3, avoid suspicious public Wi-Fi."
  },
  {
   "id": "IA-36",
   "type": "def",
   "topic": "Malware",
   "source": "Reviewer Part 7",
   "difficulty": 1,
   "question": "Which malware attaches itself to another file or program and needs a user to run the infected file?",
   "options": [
    "Worm",
    "Ransomware",
    "Phishing",
    "Virus"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 7: Virus = needs a host/file."
  },
  {
   "id": "IA-37",
   "type": "def",
   "topic": "Malware",
   "source": "Reviewer Part 7",
   "difficulty": 1,
   "question": "Which malware can spread automatically across networks without the user opening each infected file?",
   "options": [
    "Virus",
    "Worm",
    "Trojan",
    "Ransomware"
   ],
   "answer": "B",
   "explanation": "Reviewer Part 7: Worm = spreads by itself through network weaknesses."
  },
  {
   "id": "IA-38",
   "type": "app",
   "topic": "Malware",
   "source": "Reviewer Part 7",
   "difficulty": 2,
   "question": "A user installs 'Free GCash Reward App.apk', which appears useful but is actually malware. What type is it?",
   "options": [
    "Trojan",
    "Worm",
    "Virus",
    "DDoS"
   ],
   "answer": "A",
   "explanation": "Reviewer Part 7: Trojan = malware disguised as legitimate software or a useful file."
  },
  {
   "id": "IA-39",
   "type": "app",
   "topic": "Malware",
   "source": "Reviewer Part 7",
   "difficulty": 2,
   "question": "Files on a computer are encrypted and a message demands payment before access is restored. Which malware is responsible?",
   "options": [
    "Virus",
    "Worm",
    "Ransomware",
    "Trojan"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 7: Ransomware = Encrypt + Demand. Defenses include backups, patching, endpoint protection, email filtering, least privilege and user awareness."
  },
  {
   "id": "IA-40",
   "type": "con",
   "topic": "Malware",
   "source": "Reviewer Part 7",
   "difficulty": 3,
   "question": "A malware infection moves from one computer to many vulnerable computers using a network weakness, without users opening files. How does this differ from a virus?",
   "options": [
    "A worm needs a host file, while a virus spreads automatically.",
    "A worm spreads on its own, while a virus needs a user to run an infected file.",
    "A worm is disguised as software, while a virus encrypts data.",
    "There is no difference."
   ],
   "answer": "B",
   "explanation": "Reviewer Part 7 key differences: a virus needs a user to run an infected file; a worm spreads on its own through network weaknesses."
  },
  {
   "id": "IA-41",
   "type": "app",
   "topic": "Common Cyberattacks",
   "source": "Reviewer Part 8",
   "difficulty": 2,
   "question": "Someone pretends to be IT support and asks an employee for a verification code. Which attack is this?",
   "options": [
    "DDoS",
    "Ransomware",
    "SQL injection",
    "Social engineering"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 8: social engineering manipulates people instead of directly attacking technology."
  },
  {
   "id": "IA-42",
   "type": "con",
   "topic": "Common Cyberattacks",
   "source": "Reviewer Part 8",
   "difficulty": 2,
   "question": "How is phishing related to social engineering?",
   "options": [
    "Phishing is a type of malware that replicates itself.",
    "Phishing is one type of social engineering, using a fake message to trick a person.",
    "Phishing is the opposite of social engineering.",
    "Phishing only attacks networks, not people."
   ],
   "answer": "B",
   "explanation": "Reviewer Part 8: Phishing = fake message (Fake email/SMS -> victim clicks -> fake website -> credentials stolen) and is one type of social engineering."
  },
  {
   "id": "IA-43",
   "type": "con",
   "topic": "Common Cyberattacks",
   "source": "Reviewer Part 8",
   "difficulty": 2,
   "question": "What is the difference between DoS and DDoS?",
   "options": [
    "DoS steals data; DDoS encrypts data.",
    "DoS uses many devices; DDoS uses one device.",
    "DoS attacks people; DDoS attacks passwords.",
    "Both aim to make a service unavailable; DDoS uses many compromised devices as the source."
   ],
   "answer": "D",
   "explanation": "Reviewer Part 8: DoS = one/main source; DDoS = many sources overwhelming the target."
  },
  {
   "id": "IA-44",
   "type": "def",
   "topic": "Common Cyberattacks",
   "source": "Reviewer Part 8",
   "difficulty": 2,
   "question": "What is a man-in-the-middle (MITM) attack?",
   "options": [
    "Malware that locks files for ransom",
    "Flooding a service with traffic from many devices",
    "An attacker gets between two communicating parties and may observe or manipulate the communication.",
    "Typing unsafe input to alter a database query"
   ],
   "answer": "C",
   "explanation": "Reviewer Part 8: MITM = attacker in the middle (User -> Attacker -> Website). Defenses include HTTPS/TLS, trusted Wi-Fi, VPN and certificate validation."
  },
  {
   "id": "IA-45",
   "type": "con",
   "topic": "Common Cyberattacks",
   "source": "Reviewer Part 8",
   "difficulty": 3,
   "question": "How can a rogue access point lead to a MITM attack?",
   "options": [
    "A user connects to the fake Wi-Fi, which places the attacker between the user and the website.",
    "The rogue access point encrypts the user's files.",
    "The rogue access point removes the need for authentication.",
    "The rogue access point patches the user's device."
   ],
   "answer": "A",
   "explanation": "Reviewer Part 8 (connection): a rogue access point is one way a MITM position can be created."
  },
  {
   "id": "IA-46",
   "type": "app",
   "topic": "Malware",
   "source": "Reviewer Part 7",
   "difficulty": 2,
   "question": "Which set of measures is listed in the reviewer as defenses against ransomware?",
   "options": [
    "Backups, patching, endpoint protection, email filtering, least privilege and user awareness",
    "Paying the ransom quickly and disabling antivirus software",
    "Sharing administrator passwords with all staff",
    "Opening every email attachment to check it"
   ],
   "answer": "A",
   "explanation": "Reviewer Part 7: ransomware defenses = backups, patching, endpoint protection, email filtering, least privilege, user awareness."
  },
  {
   "id": "IA-47",
   "type": "app",
   "topic": "Common Cyberattacks",
   "source": "Reviewer Part 8",
   "difficulty": 2,
   "question": "A user receives the message 'Your account will be suspended. Click here to verify.' and is taken to a fake website that steals credentials. Which attack is this?",
   "options": [
    "Phishing",
    "Denial-of-Service",
    "Man-in-the-middle",
    "Rogue access point"
   ],
   "answer": "A",
   "explanation": "Reviewer Part 8: Phishing = fake message; Fake email/SMS -> victim clicks -> fake website -> credentials stolen."
  },
  {
   "id": "IA-48",
   "type": "app",
   "topic": "Defense in Depth",
   "source": "Reviewer Part 9",
   "difficulty": 1,
   "question": "An employee must use a password and an OTP to sign in. Which control does this illustrate?",
   "options": [
    "IDS",
    "Segmentation",
    "Hardening",
    "MFA"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 9 table: an employee who must use a password and OTP = MFA."
  },
  {
   "id": "IA-49",
   "type": "con",
   "topic": "Defense in Depth",
   "source": "Reviewer Part 9",
   "difficulty": 2,
   "question": "What is the main message of 'Defense in Depth'?",
   "options": [
    "Multiple controls work together as layers, because no single control is enough.",
    "One strong firewall is sufficient to protect every system.",
    "Only user awareness is needed.",
    "Backups replace all other controls."
   ],
   "answer": "A",
   "explanation": "Reviewer: 'Cybersecurity is Defense in Depth... No single security control is enough.'"
  },
  {
   "id": "IA-50",
   "type": "def",
   "topic": "Defense in Depth",
   "source": "Reviewer Part 9",
   "difficulty": 3,
   "question": "In the reviewer's defense-in-layers list, which layer comes last?",
   "options": [
    "User awareness",
    "Firewall",
    "MFA",
    "Backups"
   ],
   "answer": "D",
   "explanation": "Reviewer Part 9: User Awareness -> MFA -> Access Control -> OS Hardening -> Firewall -> IDS/IPS -> Network Segmentation, with Backups as the last layer."
  },
  {
   "id": "IA-51",
   "type": "def",
   "topic": "SSDLC",
   "source": "Reviewer File 2, Topic 1",
   "difficulty": 1,
   "question": "What is the SSDLC (Secure Software Development Life Cycle)?",
   "options": [
    "A tool that scans networks for open ports",
    "A database that stores passwords securely",
    "A list of the ten most common web risks",
    "The normal SDLC with security added at every stage"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 1: Normal SDLC + Security at every stage = SSDLC; 'secure thinking from start to finish'."
  },
  {
   "id": "IA-52",
   "type": "def",
   "topic": "SSDLC",
   "source": "Reviewer File 2, Topic 1",
   "difficulty": 2,
   "question": "Which is the correct order of the six SSDLC stages?",
   "options": [
    "Design, Plan, Test, Develop, Deploy, Maintain",
    "Plan, Design, Develop, Test, Deploy, Maintain",
    "Plan, Develop, Design, Deploy, Test, Maintain",
    "Develop, Plan, Design, Maintain, Test, Deploy"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 1: Plan -> Design -> Develop -> Test -> Deploy -> Maintain."
  },
  {
   "id": "IA-53",
   "type": "con",
   "topic": "SSDLC",
   "source": "Reviewer File 2, Topic 1",
   "difficulty": 3,
   "question": "In the school portal example, 'teacher access levels' is a security requirement. Which design decision matches it?",
   "options": [
    "Role-based accounts",
    "Secure password storage",
    "Data encryption",
    "A bigger server"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 1: requirements ask WHAT security is needed; design says HOW. 'Teacher access levels' becomes 'role-based accounts'."
  },
  {
   "id": "IA-54",
   "type": "con",
   "topic": "Vulnerability",
   "source": "Reviewer File 2, Topic 2",
   "difficulty": 2,
   "question": "In the 'unlocked window' analogy, which term matches the unlocked window itself?",
   "options": [
    "The exploit",
    "The impact",
    "The vulnerability (a weakness)",
    "The patch"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 2: vulnerability = weakness (unlocked window); exploit = using the weakness (someone enters); impact = the consequence (items stolen)."
  },
  {
   "id": "IA-55",
   "type": "app",
   "topic": "Vulnerability",
   "source": "Reviewer File 2, Topic 2",
   "difficulty": 3,
   "question": "An outdated plugin has a flaw, an attacker uses it, and customer data is exposed. Which part of the chain is 'customer data exposed'?",
   "options": [
    "The vulnerability",
    "The impact",
    "The exploit",
    "The patch"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 2 chain: outdated plugin (vulnerability) -> attacker uses the flaw (exploit) -> customer data exposed (impact)."
  },
  {
   "id": "IA-56",
   "type": "def",
   "topic": "OWASP",
   "source": "Reviewer File 2, Topic 3",
   "difficulty": 2,
   "question": "What is the OWASP Top 10?",
   "options": [
    "A mandatory law that all developers must follow",
    "A firewall product for web servers",
    "A ranking of the ten fastest programming languages",
    "A security checklist and awareness guide for major web application risks"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 3: OWASP gives guidance; developers still implement the protections."
  },
  {
   "id": "IA-57",
   "type": "con",
   "topic": "OWASP",
   "source": "Reviewer File 2, Topic 3",
   "difficulty": 3,
   "question": "Which statement correctly contrasts SSDLC and OWASP?",
   "options": [
    "SSDLC is guidance about risks; OWASP is the development process.",
    "SSDLC is the process that shows WHEN security is considered; OWASP is guidance on WHAT risks to look for.",
    "SSDLC covers only testing; OWASP covers only planning.",
    "Both are software tools that block attacks automatically."
   ],
   "answer": "B",
   "explanation": "Reviewer SSDLC vs OWASP table: 'SSDLC is the process; OWASP is guidance.'"
  },
  {
   "id": "IA-58",
   "type": "def",
   "topic": "SQL Injection",
   "source": "Reviewer File 2, Topic 4",
   "difficulty": 2,
   "question": "What is the main mistake that makes SQL injection possible?",
   "options": [
    "The program trusts user input too much.",
    "The database has too many tables.",
    "The Wi-Fi network is not encrypted.",
    "The user chose a weak password."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 4: malicious input alters the query; 'the program trusts user input too much'."
  },
  {
   "id": "IA-59",
   "type": "def",
   "topic": "SQL Injection",
   "source": "Reviewer File 2, Topic 4",
   "difficulty": 2,
   "question": "Which is the main defense against SQL injection?",
   "options": [
    "Input validation alone",
    "Renaming the database tables",
    "Hiding the login page",
    "Parameterized queries, which keep the command and the input separate."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 4 defenses: parameterized queries (main defense), input validation (helpful filter), least privilege (damage control)."
  },
  {
   "id": "IA-60",
   "type": "con",
   "topic": "SQL Injection",
   "source": "Reviewer File 2, Topic 4",
   "difficulty": 3,
   "question": "How do the reviewer's SQL injection defenses relate to each other?",
   "options": [
    "Validation replaces parameterized queries; least privilege stops all attacks.",
    "Least privilege is the main defense; parameterized queries are optional.",
    "All three defenses do exactly the same thing.",
    "Validation helps but does not replace parameterized queries; least privilege limits the damage of a successful attack."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 4: 'Validation helps - but it does not replace parameterized queries'; least privilege = damage control."
  }
 ],
 "cworld": [
  {
   "id": "CW-01",
   "type": "def",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 1,
   "question": "What does global market integration mean?",
   "options": [
    "Making every country adopt the same economic system.",
    "Banning imports so national markets stay separate.",
    "Linking countries' markets so that goods, services, money, technology and information move more easily across borders.",
    "Placing all trade under one world government."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 14: integration connects markets; it does not mean every country becomes identical or that everyone benefits equally."
  },
  {
   "id": "CW-02",
   "type": "def",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 1,
   "question": "Which economic sector extracts raw materials from nature, such as farming, fishing and mining?",
   "options": [
    "Primary sector",
    "Secondary sector",
    "Tertiary sector",
    "Quaternary sector"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 14: primary extracts raw materials; secondary transforms them into goods; tertiary provides services."
  },
  {
   "id": "CW-03",
   "type": "app",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 2,
   "question": "A company turns mined metal into machinery. Which sector does this activity belong to?",
   "options": [
    "Primary sector",
    "Tertiary sector",
    "Secondary sector",
    "Informal sector"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 14: the secondary sector transforms raw materials into manufactured goods; the example given is turning mined metal into machinery."
  },
  {
   "id": "CW-04",
   "type": "con",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 2,
   "question": "How do the IMF and the World Bank differ in focus?",
   "options": [
    "The IMF funds roads and schools; the World Bank sets trade rules.",
    "The IMF regulates only Asian countries; the World Bank regulates Africa.",
    "They are interchangeable institutions with identical roles.",
    "The IMF focuses on monetary and financial stability and crisis support; the World Bank on longer-term development and poverty reduction."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 14 (commonly confused): the IMF is described as a lender of last resort for financial stability; the World Bank funds development projects."
  },
  {
   "id": "CW-05",
   "type": "def",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 2,
   "question": "What was agreed at Bretton Woods, New Hampshire, in 1944?",
   "options": [
    "A postwar monetary framework that led to the IMF and the IBRD (World Bank).",
    "The creation of the United Nations Security Council.",
    "The founding of the European Union.",
    "The end of the Great Depression through GATT."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 14: representatives met after two world wars to build a more stable economic system; the conference led to the IMF and IBRD."
  },
  {
   "id": "CW-06",
   "type": "def",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 2,
   "question": "When was the World Trade Organization (WTO) established, and what came before it?",
   "options": [
    "In 1944 at Bretton Woods, replacing the IMF.",
    "In 1945 with the United Nations, replacing NATO.",
    "In 2008 during the financial crisis, replacing the G20.",
    "In 1995, after the Uruguay Round negotiations, replacing the earlier GATT arrangement."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 14: GATT (1947) was an early multilateral trade arrangement; after the Uruguay Round (1986-1993), the WTO was established in 1995."
  },
  {
   "id": "CW-07",
   "type": "con",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 2,
   "question": "Which organization is matched correctly with its main purpose?",
   "options": [
    "ASEAN - promotes cooperation among South American oil exporters",
    "OPEC - oil-producing members coordinate petroleum policies",
    "OECD - coordinates military defense among members",
    "G7 - provides development loans to Asia and the Pacific"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 14 table: OPEC coordinates petroleum policies; ASEAN is Southeast Asian cooperation; OECD is policy comparison among member economies; the ADB supports Asia-Pacific development."
  },
  {
   "id": "CW-08",
   "type": "def",
   "topic": "Topic 14: Financial Institutions",
   "source": "Reviewer Topic 14",
   "difficulty": 2,
   "question": "What is the main role of the Asian Development Bank (ADB) in the lesson?",
   "options": [
    "Supporting economic and social development, particularly in Asia and the Pacific",
    "Enforcing international trade rules and settling trade disputes",
    "Coordinating oil policies among petroleum exporters",
    "Providing military defense for Southeast Asian states"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 14: IMF = monetary/financial stability; World Bank = long-term development; ADB = regional development focus in Asia and the Pacific."
  },
  {
   "id": "CW-09",
   "type": "con",
   "topic": "Topic 15: History of Integration",
   "source": "Reviewer Topic 15",
   "difficulty": 2,
   "question": "Which is the correct chronological order of these stages of global market integration?",
   "options": [
    "Industrial Revolution, early trade routes, Bretton Woods, Age of Exploration",
    "Bretton Woods, Age of Exploration, early trade routes, Industrial Revolution",
    "Early trade routes, Age of Exploration, Industrial Revolution, Bretton Woods system",
    "Age of Exploration, Bretton Woods, Industrial Revolution, early trade routes"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 15 stages: early trade (Silk Road), Age of Exploration (15th-17th c.), Industrial Revolution (18th-19th c.), late 19th-early 20th c., Bretton Woods (1944), trade growth (1950s-1980s), modern globalization (1990s-present)."
  },
  {
   "id": "CW-10",
   "type": "def",
   "topic": "Topic 15: History of Integration",
   "source": "Reviewer Topic 15",
   "difficulty": 2,
   "question": "What development of the Industrial Revolution helped expand international trade?",
   "options": [
    "The creation of the WTO and the internet.",
    "Steamships, railways, factories and mass production made manufacturing and transportation faster and cheaper.",
    "The collapse of the Silk Road routes.",
    "The adoption of the gold-based Bretton Woods framework."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 15: Industrial Revolution -> faster production and transport -> larger-scale international trade."
  },
  {
   "id": "CW-11",
   "type": "con",
   "topic": "Topic 15: History of Integration",
   "source": "Reviewer Topic 15",
   "difficulty": 2,
   "question": "How does capitalism differ from socialism in the lesson?",
   "options": [
    "Capitalism emphasizes private ownership of the means of production, profit and competition; socialism emphasizes collective or social ownership and shared goals.",
    "Capitalism emphasizes collective ownership; socialism emphasizes private profit.",
    "Both treat the means of production as owned by the state only.",
    "Capitalism is a stage of globalization; socialism is a type of trade route."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 15: these are broad economic models, not historical stages of globalization."
  },
  {
   "id": "CW-12",
   "type": "def",
   "topic": "Topic 15: History of Integration",
   "source": "Reviewer Topic 15",
   "difficulty": 2,
   "question": "In Marxist theory as presented in the lesson, what is communism?",
   "options": [
    "An envisioned classless society in which members are socially equal, with socialism treated as a stage toward it.",
    "A system of unrestricted private ownership and free markets.",
    "An international trade agreement among communist countries.",
    "A type of multinational corporation."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 15: Marx treated socialism as a stage toward communism, the theoretical classless endpoint."
  },
  {
   "id": "CW-13",
   "type": "con",
   "topic": "Topic 16: Global Corporations and Cities",
   "source": "Reviewer Topic 16",
   "difficulty": 2,
   "question": "How does a multinational corporation (MNC) differ from a transnational corporation (TNC) in the lesson?",
   "options": [
    "An MNC operates in only one country; a TNC operates in two.",
    "An MNC is nonprofit; a TNC is government-owned.",
    "An MNC usually has a recognizable home-country base; a TNC is described as more borderless and less centered on one national home.",
    "They are identical in every respect."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 16: MNC = operates in more than one country, commonly with a home-country identity; TNC emphasizes cross-border organization beyond a single national base."
  },
  {
   "id": "CW-14",
   "type": "def",
   "topic": "Topic 16: Global Corporations and Cities",
   "source": "Reviewer Topic 16",
   "difficulty": 1,
   "question": "What is a global (or world) city?",
   "options": [
    "A city that is the capital of every country.",
    "A city that has banned foreign companies.",
    "A city with the largest population in its region.",
    "A major urban center with significant influence on international economic activity, politics, culture and communication."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 16: examples include New York City, London, Tokyo, Singapore, Paris and Hong Kong."
  },
  {
   "id": "CW-15",
   "type": "con",
   "topic": "Topic 16: Global Corporations and Cities",
   "source": "Reviewer Topic 16",
   "difficulty": 2,
   "question": "Which statement correctly relates global corporations and global cities?",
   "options": [
    "A global corporation is a place, and a global city is a company.",
    "Corporations use global cities for finance, talent, transport and communication, while cities gain influence by hosting global firms.",
    "Global cities exist independently of any company.",
    "Global corporations avoid global cities."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 16 (understand this): a corporation is a company; a city is a place that concentrates and connects international activity - they support one another."
  },
  {
   "id": "CW-16",
   "type": "app",
   "topic": "Topic 16: Global Corporations and Cities",
   "source": "Reviewer Topic 16",
   "difficulty": 3,
   "question": "A company chooses a country for a new factory because of a tax-free trade zone and low labor costs. Which idea from the lesson does this show?",
   "options": [
    "Global cities are formed by government order alone.",
    "Capitalism forbids foreign investment.",
    "Global corporations locate facilities where labor, resources, infrastructure or incentives are favorable.",
    "Corporations must always keep production in their home country."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 16: companies may use incentives such as tax-free trade zones or lower operating costs when choosing locations."
  },
  {
   "id": "CW-17",
   "type": "con",
   "topic": "Topic 17: Global Governance",
   "source": "Reviewer Topic 17",
   "difficulty": 1,
   "question": "How is global governance different from a world government?",
   "options": [
    "Global governance is a single authority with full power over every country.",
    "They are identical terms.",
    "Global governance is coordination through many institutions and actors; a world government would be a single central authority.",
    "Global governance only involves national governments."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 17 (commonly confused): there is no one global authority with full power over every country."
  },
  {
   "id": "CW-18",
   "type": "def",
   "topic": "Topic 17: Global Governance",
   "source": "Reviewer Topic 17",
   "difficulty": 2,
   "question": "Which is a reason global governance emerged?",
   "options": [
    "Nation-states became able to solve every problem alone.",
    "Borders stopped existing for all goods and people.",
    "Governments wanted to end international trade.",
    "Problems such as pandemics, climate change and financial crises cross national borders."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 17: nation-states face limits when problems cross borders; global financial crises, pandemics, migration and environmental problems need coordinated responses."
  },
  {
   "id": "CW-19",
   "type": "def",
   "topic": "Topic 17: Global Governance",
   "source": "Reviewer Topic 17",
   "difficulty": 2,
   "question": "Which actors are included among those that affect global governance in the lesson?",
   "options": [
    "Nation-states, international organizations, multinational corporations, NGOs, non-state violent organizations, and individuals and social movements",
    "Only national governments",
    "Only the United Nations and the WTO",
    "Only multinational corporations"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 17, actors table: governance involves governments, international organizations, MNCs, NGOs, non-state violent organizations and individuals/movements."
  },
  {
   "id": "CW-20",
   "type": "con",
   "topic": "Topic 17: Global Governance",
   "source": "Reviewer Topic 17",
   "difficulty": 3,
   "question": "Why is enforcement a challenge for international organizations?",
   "options": [
    "They have too many enforcement officers.",
    "States never have interests that differ.",
    "Sovereignty has disappeared completely.",
    "There is no world government, so they often depend on states' cooperation."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 17 challenges table: 'No world government - international organizations often depend on states' cooperation; enforcement is limited.'"
  },
  {
   "id": "CW-21",
   "type": "def",
   "topic": "Topic 17: Global Governance",
   "source": "Reviewer Supplementary Notes",
   "difficulty": 2,
   "question": "How does the reviewer's supplementary note describe NGOs?",
   "options": [
    "Organizations independent of direct government involvement, usually nonprofit, that provide services, advocate, or address humanitarian, social or environmental issues.",
    "Government agencies funded entirely by taxes.",
    "Military alliances based on collective defense.",
    "Private companies that aim to maximize profit."
   ],
   "answer": "A",
   "explanation": "Reviewer supplementary notes (and Topic 20): examples include the Red Cross and Amnesty International."
  },
  {
   "id": "CW-22",
   "type": "con",
   "topic": "Topic 17: Global Governance",
   "source": "Reviewer Topic 17",
   "difficulty": 3,
   "question": "Which combination lists challenges to global governance named in the lesson?",
   "options": [
    "Perfect equality of power, no sovereignty issues, and universal agreement",
    "Low global inequality and strong enforcement",
    "National sovereignty, unequal power, geopolitical rivalry and corruption/accountability concerns",
    "Absence of pandemics and migration"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 17: challenges include no world government, sovereignty, unequal power, inequality, rivalry, climate, human rights, instability, migration, institutional weaknesses, pandemics and accountability."
  },
  {
   "id": "CW-23",
   "type": "def",
   "topic": "Topic 18: Effects on Governments",
   "source": "Reviewer Topic 18",
   "difficulty": 1,
   "question": "Which pair of definitions is correct?",
   "options": [
    "Sovereignty is a nation's shared culture; territorial integrity is a state's trade policy.",
    "Sovereignty is a state's authority to govern itself; territorial integrity is the principle that a state's territory should not be seized or violated by another state.",
    "Sovereignty is the right of corporations to move freely; territorial integrity is free trade.",
    "They both mean the same thing as nationalism."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 18 (must memorize): sovereignty = authority to govern itself; territorial integrity = protection of territory from seizure or violation."
  },
  {
   "id": "CW-24",
   "type": "con",
   "topic": "Topic 18: Effects on Governments",
   "source": "Reviewer Topic 18",
   "difficulty": 2,
   "question": "How does a nation differ from a state?",
   "options": [
    "A nation is a group with shared identity, culture or belonging; a state is a political entity with defined territory and government.",
    "A nation has a government and territory; a state is a shared culture.",
    "They always cover exactly the same people and territory.",
    "A nation is an international organization; a state is a corporation."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 18: they do not always match - people sharing an identity may live in multiple states (for example, the Kurds)."
  },
  {
   "id": "CW-25",
   "type": "def",
   "topic": "Topic 18: Effects on Governments",
   "source": "Reviewer Topic 18",
   "difficulty": 2,
   "question": "What happened in the 2014 Scottish referendum, according to the lesson?",
   "options": [
    "Independence was rejected, though Scotland nevertheless has devolved powers.",
    "Scotland became an independent state.",
    "Scotland joined the Bretton Woods system.",
    "Scotland left the United Nations."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 18, movements table: Scottish nationalism - the 2014 referendum rejected independence."
  },
  {
   "id": "CW-26",
   "type": "con",
   "topic": "Topic 18: Effects on Governments",
   "source": "Reviewer Topic 18",
   "difficulty": 3,
   "question": "Which statement best summarizes the lesson's view of globalization's effects on governments?",
   "options": [
    "It affects governments only by increasing their power.",
    "It can expand opportunities and cooperation while also constraining policy choices and exposing states to external pressures.",
    "It affects governments only by weakening them.",
    "It has no effect on government policy."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 18 key takeaway: globalization does not affect governments in only one direction."
  },
  {
   "id": "CW-27",
   "type": "def",
   "topic": "Topic 19: Relevance of the State",
   "source": "Reviewer Topic 19",
   "difficulty": 2,
   "question": "What is a nation-state?",
   "options": [
    "A group of states joined under a single world government.",
    "A state in which political boundaries and a shared national identity are understood to align.",
    "A nonprofit organization operating in many countries.",
    "A region that seeks independence from every state."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 19: State = political community with government and territory; Nation = shared identity; Nation-state = both aligned."
  },
  {
   "id": "CW-28",
   "type": "con",
   "topic": "Topic 19: Relevance of the State",
   "source": "Reviewer Topic 19",
   "difficulty": 3,
   "question": "Which view holds that globalization has made the state less necessary or less powerful because markets and networks cross borders?",
   "options": [
    "The state-centered (skeptical) view",
    "The middle position",
    "The hyperglobalist view",
    "The realist alliance view"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 19: the state-centered view says states remain powerful; the middle position says globalization changes the state's role."
  },
  {
   "id": "CW-29",
   "type": "def",
   "topic": "Topic 19: Relevance of the State",
   "source": "Reviewer Topic 19",
   "difficulty": 3,
   "question": "According to Beland (2008) as cited in the lesson, which is a source of collective insecurity that keeps the state relevant?",
   "options": [
    "Terrorism, economic globalization pressures, threats to national identity associated with immigration, and global diseases",
    "Only competition between sports teams",
    "Only the creation of new currencies",
    "Only the growth of tertiary-sector jobs"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 19: Beland's four sources are terrorism; economic globalization pressures such as outsourcing and crises; identity threats from immigration; and global diseases such as AIDS."
  },
  {
   "id": "CW-30",
   "type": "def",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 2,
   "question": "How many members does the UN Security Council have, and which members have veto power?",
   "options": [
    "193 members, all with veto power.",
    "9 members, all elected for life.",
    "5 members, none with veto power.",
    "15 members: five permanent members with veto power plus ten elected members serving two-year terms."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 20: the five permanent members named are the United States, United Kingdom, Russia, China and France."
  },
  {
   "id": "CW-31",
   "type": "con",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 2,
   "question": "How do the UN Security Council and the General Assembly differ?",
   "options": [
    "The General Assembly makes binding security decisions; the Security Council is only a forum.",
    "Both are courts of law.",
    "The Security Council handles only trade disputes.",
    "The Security Council handles peace and security decisions; the General Assembly is a broad forum for member states to express views and seek agreement."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 20 and cram sheet: Security Council = peace/security; General Assembly = forum for member-state debate."
  },
  {
   "id": "CW-32",
   "type": "con",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 3,
   "question": "How does the International Court of Justice (ICJ) differ from the International Criminal Court (ICC)?",
   "options": [
    "The ICJ prosecutes individuals; the ICC settles disputes between states.",
    "Both prosecute only terrorists.",
    "The ICJ settles legal disputes between states; the ICC prosecutes individuals for certain international crimes.",
    "The ICJ is a military alliance; the ICC is a trade body."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 20 (commonly confused): the ICJ is the UN's principal court for disputes between states and is based in The Hague."
  },
  {
   "id": "CW-33",
   "type": "def",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 1,
   "question": "Which organization is a political and military alliance based on collective defense?",
   "options": [
    "NATO",
    "WHO",
    "UNICEF",
    "IPCC"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 20: NATO is a defensive military and political alliance; members cooperate in defending one another."
  },
  {
   "id": "CW-34",
   "type": "app",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 2,
   "question": "A country faces a disease outbreak and needs international public-health guidance and emergency response. Which organization has this mandate?",
   "options": [
    "World Trade Organization (WTO)",
    "International Court of Justice (ICJ)",
    "North Atlantic Treaty Organization (NATO)",
    "World Health Organization (WHO)"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 20: WHO = international public health and responses to disease outbreaks and health emergencies."
  },
  {
   "id": "CW-35",
   "type": "def",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 2,
   "question": "Which UN agency focuses on children's well-being, including emergency relief and education?",
   "options": [
    "UNEP",
    "UNICEF",
    "IPCC",
    "ICJ"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 20: UNICEF supports children; UNEP coordinates environmental work; the IPCC assesses climate science."
  },
  {
   "id": "CW-36",
   "type": "def",
   "topic": "Topic 20: International Institutions",
   "source": "Reviewer Topic 20",
   "difficulty": 3,
   "question": "When did the United Nations begin operations?",
   "options": [
    "1 January 1919, after World War I",
    "15 June 1944, at Bretton Woods",
    "11 November 1990, after the Cold War",
    "24 October 1945, after World War II"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 20: the term 'United Nations' was coined by Franklin D. Roosevelt in 1942; the organization began operations on 24 October 1945."
  },
  {
   "id": "CW-37",
   "type": "def",
   "topic": "Topic 21: Global Citizenship",
   "source": "Reviewer Topic 21",
   "difficulty": 1,
   "question": "What is global citizenship?",
   "options": [
    "Holding passports from many countries.",
    "Seeing oneself as part of a worldwide community with awareness of interconnectedness and responsibility toward people and the planet.",
    "Replacing national citizenship entirely.",
    "Living in a global city."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 21: global citizenship adds a worldwide perspective and does not replace national citizenship."
  },
  {
   "id": "CW-38",
   "type": "def",
   "topic": "Topic 21: Global Citizenship",
   "source": "Reviewer Topic 21",
   "difficulty": 2,
   "question": "Which list contains the four types of global citizenship in the lesson?",
   "options": [
    "Political, military, religious and financial",
    "Ethical, cultural, civic and economic",
    "Local, regional, national and international",
    "Legal, social, digital and ecological"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 21: ethical (empathy, justice), cultural (understanding diverse cultures), civic (participation), economic (fair trade, sustainable development)."
  },
  {
   "id": "CW-39",
   "type": "app",
   "topic": "Topic 21: Global Citizenship",
   "source": "Reviewer Topic 21",
   "difficulty": 3,
   "question": "A student considers labor conditions and sustainability before buying a product. Which type of global citizenship does this illustrate?",
   "options": [
    "Cultural",
    "Economic",
    "Civic",
    "Ethical"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 21: economic citizenship focuses on the global economy, fair trade, sustainable development and economic equality."
  },
  {
   "id": "CW-40",
   "type": "def",
   "topic": "Topic 21: Global Citizenship",
   "source": "Reviewer Topic 21",
   "difficulty": 3,
   "question": "Which is one of the six domains of global citizenship listed in the lesson?",
   "options": [
    "Military expansion",
    "Gender equity",
    "Tax collection",
    "Industrial production"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 21 domains: environmental stewardship, human rights, gender equity, good governance, global peace and justice, poverty reduction."
  },
  {
   "id": "CW-41",
   "type": "def",
   "topic": "Topic 21: Global Citizenship",
   "source": "Reviewer Topic 21",
   "difficulty": 2,
   "question": "What is the aim of global citizenship education (GCED)?",
   "options": [
    "To prepare students only for national exams.",
    "To help learners understand the interconnected world and develop knowledge, values and skills to participate responsibly.",
    "To teach students to ignore other cultures.",
    "To train students exclusively for international trade."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 21: GCED overlaps with multicultural, peace, human-rights, sustainable development and international education."
  },
  {
   "id": "CW-42",
   "type": "def",
   "topic": "Topic 22: Informationalism",
   "source": "Reviewer Topic 22",
   "difficulty": 1,
   "question": "What is informationalism?",
   "options": [
    "An economic model of collective ownership of factories.",
    "A treaty regulating the export of data.",
    "A belief that technology should be banned.",
    "A societal shift in which knowledge, information and communication technologies become central to economic, social and cultural development."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 22: the concept is associated with Manuel Castells and replaces the earlier emphasis of industrialism."
  },
  {
   "id": "CW-43",
   "type": "con",
   "topic": "Topic 22: Informationalism",
   "source": "Reviewer Topic 22",
   "difficulty": 2,
   "question": "Which statement distinguishes a network society from information capitalism?",
   "options": [
    "A network society is an economic system; information capitalism is a type of social movement.",
    "They are two names for the same concept.",
    "A network society is about how society is organized through digital networks; information capitalism is about how economic value is created through data and digital systems.",
    "A network society refers to physical roads; information capitalism refers to railways."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 22: 'How is society organized?' versus 'How is value created and captured?'"
  },
  {
   "id": "CW-44",
   "type": "app",
   "topic": "Topic 22: Informationalism",
   "source": "Reviewer Topic 22",
   "difficulty": 2,
   "question": "A platform analyzes user data and earns advertising revenue from it. Which concept does this illustrate?",
   "options": [
    "Network society only",
    "Industrialism",
    "Information capitalism",
    "Global citizenship education"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 22: information capitalism - an economic system where information, data, knowledge and digital technologies are major sources of value and power."
  },
  {
   "id": "CW-45",
   "type": "con",
   "topic": "Topic 22: Informationalism",
   "source": "Reviewer Topic 22",
   "difficulty": 2,
   "question": "Which concern is raised about informationalism in the lesson?",
   "options": [
    "That information is always accurate and free for all",
    "That digital networks reduce all global inequality",
    "That the internet eliminates the need for skills",
    "Digital inequality, privacy and surveillance risks, job displacement, economic concentration and misinformation"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 22 concerns: digital inequality, privacy, surveillance, job displacement, economic concentration and misinformation."
  },
  {
   "id": "CW-46",
   "type": "def",
   "topic": "Topic 22: Informationalism",
   "source": "Reviewer Topic 22",
   "difficulty": 3,
   "question": "McLuhan and Fiore (2005), as cited in the lesson, argue that the shaping force on people and culture is:",
   "options": [
    "Only the content of the message",
    "The language of the sender",
    "The medium, the way a message is transmitted, not just its content",
    "The cost of the equipment"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 22: the lesson cites McLuhan and Fiore for the idea that the medium shapes people and culture."
  },
  {
   "id": "CW-47",
   "type": "def",
   "topic": "Topic 23: Rise of AI",
   "source": "Reviewer Topic 23",
   "difficulty": 1,
   "question": "What does artificial intelligence (AI) refer to in the lesson?",
   "options": [
    "Any electronic device with a screen.",
    "Machines that always have human emotions.",
    "Computer systems designed to perform tasks associated with human intelligence, such as learning, pattern recognition, language understanding and prediction.",
    "Only robots used in factories."
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 23: AI is described as a broad field; generative AI is a category that creates new content."
  },
  {
   "id": "CW-48",
   "type": "def",
   "topic": "Topic 23: Rise of AI",
   "source": "Reviewer Topic 23",
   "difficulty": 2,
   "question": "Which event formally established AI as a field in 1956?",
   "options": [
    "The Bretton Woods conference",
    "The AlphaGo match",
    "The Dartmouth workshop",
    "The launch of the internet"
   ],
   "answer": "C",
   "explanation": "Reviewer Topic 23: 1956 Dartmouth workshop; early systems used explicit rules, symbols and logic."
  },
  {
   "id": "CW-49",
   "type": "con",
   "topic": "Topic 23: Rise of AI",
   "source": "Reviewer Topic 23",
   "difficulty": 3,
   "question": "Why did the first AI winter happen in the 1970s?",
   "options": [
    "Computers became too powerful to control.",
    "Governments banned all AI research immediately.",
    "Generative AI replaced all rule-based systems.",
    "Early optimism met limits: systems struggled with ambiguity, uncertainty, context and common sense, so funding and enthusiasm declined."
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 23: human intelligence was harder to capture with simple rules than expected."
  },
  {
   "id": "CW-50",
   "type": "con",
   "topic": "Topic 23: Rise of AI",
   "source": "Reviewer Topic 23",
   "difficulty": 2,
   "question": "Which sequence matches the reviewer's memory aid for AI's development?",
   "options": [
    "Generative models, rules, learning, neural networks",
    "Rules, learning, neural networks / deep learning, generative models",
    "Neural networks, rules, generative models, learning",
    "Learning, generative models, rules, neural networks"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 23 memory aid: Rules -> Learning -> Neural networks / deep learning -> Generative models."
  },
  {
   "id": "CW-51",
   "type": "def",
   "topic": "Topic 23: Rise of AI",
   "source": "Reviewer Topic 23",
   "difficulty": 3,
   "question": "What 2016 event is cited as an example of deep learning's progress?",
   "options": [
    "AlphaGo defeated professional Go champion Lee Sedol.",
    "A chatbot passed every school exam.",
    "IBM first built a rule-based expert system.",
    "The WTO adopted AI trade rules."
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 23: in the 2010s large datasets, powerful hardware and neural networks improved image recognition, speech and complex tasks; AlphaGo beat Lee Sedol in 2016."
  },
  {
   "id": "CW-52",
   "type": "app",
   "topic": "Topic 24: Ethics of AI",
   "source": "Reviewer Topic 24",
   "difficulty": 2,
   "question": "A hiring algorithm unfairly disadvantages one group of applicants because it learned from biased human data. Which AI concern is this?",
   "options": [
    "Transparency and explainability",
    "Privacy and data protection",
    "Human dignity",
    "Bias and discrimination"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 24: biased human data can produce unfair AI outcomes."
  },
  {
   "id": "CW-53",
   "type": "app",
   "topic": "Topic 24: Ethics of AI",
   "source": "Reviewer Topic 24",
   "difficulty": 2,
   "question": "A person cannot understand why an AI system rejected a loan application. Which concern does this illustrate?",
   "options": [
    "Transparency and explainability ('black box' decisions)",
    "Employment and job displacement",
    "Misinformation and deepfakes",
    "Security and misuse"
   ],
   "answer": "A",
   "explanation": "Reviewer Topic 24: some systems are 'black boxes' whose decisions are difficult to explain."
  },
  {
   "id": "CW-54",
   "type": "app",
   "topic": "Topic 24: Ethics of AI",
   "source": "Reviewer Topic 24",
   "difficulty": 2,
   "question": "AI creates a convincing fake video of a public event, and people cannot tell whether it is real. Which concern is this?",
   "options": [
    "Accountability and responsibility",
    "Inequality and the digital divide",
    "Human autonomy and dependence",
    "Misinformation and deepfakes"
   ],
   "answer": "D",
   "explanation": "Reviewer Topic 24: AI can create convincing false images, video, audio and text; a deepfake is AI-generated or manipulated media that imitates real people or events."
  },
  {
   "id": "CW-55",
   "type": "con",
   "topic": "Topic 24: Ethics of AI",
   "source": "Reviewer Topic 24",
   "difficulty": 3,
   "question": "When an AI system gives a harmful recommendation, it is unclear whether the developer, hospital, professional or organization must answer for it. Which issue is this?",
   "options": [
    "Bias and discrimination",
    "Accountability and responsibility",
    "Privacy and data protection",
    "Human dignity"
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 24: accountability = who is responsible when AI causes harm."
  },
  {
   "id": "CW-56",
   "type": "con",
   "topic": "Topic 24: Ethics of AI",
   "source": "Reviewer Topic 24",
   "difficulty": 3,
   "question": "What does the lesson conclude about responsible AI?",
   "options": [
    "AI should be stopped entirely because progress is harmful.",
    "AI is a human and societal issue, and it should be developed according to fairness, privacy, transparency, accountability, safety, human dignity and social responsibility.",
    "AI should be judged only by machine capability.",
    "AI is purely a technical issue with no social concerns."
   ],
   "answer": "B",
   "explanation": "Reviewer Topic 24: the goal is not necessarily to stop progress; success is measured not only by capability but by the wisdom with which people use it."
  },
  {
   "id": "CW-57",
   "type": "def",
   "topic": "Supplementary: Cyberactivism and Movements",
   "source": "Reviewer Supplementary Notes",
   "difficulty": 2,
   "question": "What is cyberactivism?",
   "options": [
    "The use of internet-based communication and social technologies to create, organize, manage or promote activism.",
    "Hacking government systems to steal data.",
    "A type of malware that spreads in networks.",
    "Activism that is only done offline."
   ],
   "answer": "A",
   "explanation": "Reviewer supplementary notes: also called internet activism, digital activism, e-campaigning or e-activism."
  },
  {
   "id": "CW-58",
   "type": "con",
   "topic": "Supplementary: Cyberactivism and Movements",
   "source": "Reviewer Supplementary Notes",
   "difficulty": 3,
   "question": "How does cyberactivism differ from a global social movement (GSM)?",
   "options": [
    "Cyberactivism is a cross-border network; a GSM is an online tool.",
    "They are identical terms.",
    "Cyberactivism is a method or channel for activism; a GSM is a cross-border network of people and organizations pursuing a shared agenda.",
    "Cyberactivism is always illegal; a GSM is always lawful."
   ],
   "answer": "C",
   "explanation": "Reviewer supplementary notes (commonly confused): cyberactivism can help a movement organize, but the two terms are not identical."
  },
  {
   "id": "CW-59",
   "type": "con",
   "topic": "Supplementary: Cyberactivism and Movements",
   "source": "Reviewer Supplementary Notes",
   "difficulty": 3,
   "question": "Which is a potential limitation of cyberactivism listed in the notes?",
   "options": [
    "It can never reach supporters across distance.",
    "It cannot be used by small groups.",
    "It always produces real-world change.",
    "Online reach does not always produce offline change, and false information can spread quickly."
   ],
   "answer": "D",
   "explanation": "Reviewer supplementary notes: limitations include misinformation, harassment, privacy risks, unequal internet access and manipulated messages."
  },
  {
   "id": "CW-60",
   "type": "con",
   "topic": "Supplementary: Cyberactivism and Movements",
   "source": "Reviewer Supplementary Notes",
   "difficulty": 3,
   "question": "According to the supplementary notes, how can globalization affect the spread of disease?",
   "options": [
    "It can help infectious diseases spread rapidly, while international connections can also support public-health cooperation.",
    "It prevents diseases from crossing borders.",
    "It affects only hunger and has no link to health.",
    "It makes international cooperation impossible."
   ],
   "answer": "A",
   "explanation": "Reviewer supplementary notes: movement of people, goods, capital and information can spread disease, but connections also support cooperation and help alleviate hunger and poverty."
  }
 ]
};
