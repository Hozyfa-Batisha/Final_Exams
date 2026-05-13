// Data Structures (CS211) Question Bank
// Format: TOPIC|Question|Option A|Option B|Option C|Correct|Explanation

const dsQuestionsData = `
DS|Which data type stores a single character in C++?|int|char|string|B|char stores exactly ONE character (1 byte). Example: char grade = 'A'; string stores text of any length.
DS|What does the % operator return?|The quotient of division|The remainder of division|The decimal result|B|10 % 3 = 1 because 10 = 3×3 + 1. Used to check even/odd: if(n%2==0) means even.
DS|What is the output of: cout << 7 + 3 * 2;|20|13|17|B|Operator precedence: * runs before +. So 3*2=6 first, then 7+6=13. Use parentheses to override: (7+3)*2=20.
DS|Which function reads a full line including spaces?|cin >>|getline(cin, str)|cin.get()|B|cin >> stops at whitespace. getline(cin, str) reads the entire line until Enter is pressed.
DS|What does ceil(4.1) return?|4|5|4.1|B|ceil() always rounds UP to the nearest integer. ceil(4.1)=5, ceil(4.9)=5, ceil(-4.1)=-4.
DS|What is the index of the FIRST element in a C++ array?|1|0|-1|B|C++ arrays are 0-indexed. int arr[5]: valid indices are 0,1,2,3,4. arr[5] is OUT OF BOUNDS.
DS|In recursion, what prevents infinite looping?|A loop counter|A base case|A return type|B|Every recursive function MUST have a base case. Without it: infinite recursion → Stack Overflow!
DS|What does the * operator do when used with a pointer variable?|Multiplies the pointer|Dereferences to access the value at that address|Declares a new pointer|B|int x=42; int* p=&x; cout<<*p; prints 42. The * dereferences the pointer to get the value.
DS|Which keyword allocates memory on the HEAP in C++?|malloc|alloc|new|C|int* p = new int; allocates on HEAP. You MUST call delete p; to free it manually.
DS|A reference in C++ is:|A copy of a variable|An alias for the same variable|A pointer|B|int a=10; int& b=a; — b is NOT a copy. Both a and b share the SAME address.
DS|In a Linked List, each node contains:|Only data|Data + pointer to next node|An index and data|B|struct Node { int data; Node* next; }; — data stores the value, next stores the address of next node.
DS|To insert a node at the BEGINNING of a Linked List, you should:|Traverse to the end first|Set newNode->next = head then head = newNode|Set head->next = newNode|B|newNode->next = head; head = newNode; — This is O(1), no traversal needed.
DS|Compared to arrays, Linked Lists are BETTER at:|Random access by index|Inserting and deleting elements|Using less memory|B|Array insert/delete: O(n). Linked List insert/delete: O(1) — just relink pointers.
DS|What does sort(arr, arr+5) do?|Sorts only the first element|Sorts 5 elements of arr in ascending order|Returns the sorted array|B|#include<algorithm> required. arr is pointer to first element, arr+5 is one past the end.
DS|enum Day{Mon=1,Tue,Wed}; — What is the value of Wed?|0|2|3|C|Mon=1 explicitly, Tue auto-increments to 2, Wed auto-increments to 3.
DS|What is the time complexity of Binary Search?|O(n)|O(log n)|O(n²)|B|Binary Search halves the search space each step, giving O(log n) time complexity.
DS|What is the time complexity of Bubble Sort in the worst case?|O(n)|O(n log n)|O(n²)|C|Bubble Sort compares adjacent elements and swaps. Worst case needs n*(n-1)/2 comparisons = O(n²).
DS|Which sorting algorithm works by repeatedly finding the minimum element?|Bubble Sort|Selection Sort|Insertion Sort|B|Selection Sort finds the minimum in the unsorted part and places it at the beginning each iteration.
DS|A Stack follows which principle?|FIFO - First In First Out|LIFO - Last In First Out|Random Access|B|Stack = LIFO. Think of a stack of plates — you remove the top plate first.
DS|A Queue follows which principle?|LIFO - Last In First Out|FIFO - First In First Out|Random Access|B|Queue = FIFO. Think of a line at a store — first person in line is served first.
DS|What is the time complexity of accessing an element by index in an array?|O(n)|O(log n)|O(1)|C|Arrays store elements in contiguous memory. Index directly calculates the address, so access is O(1).
DS|What is the time complexity of accessing an element in a Linked List?|O(1)|O(log n)|O(n)|C|Linked List nodes are scattered in memory. You must traverse from head to reach index i = O(n).
DS|Which data structure uses 'push' and 'pop' operations?|Queue|Stack|Linked List|B|Stack operations: push() adds to top, pop() removes from top. Both are O(1).
DS|Which data structure uses 'enqueue' and 'dequeue' operations?|Stack|Queue|Array|B|Queue: enqueue() adds to rear, dequeue() removes from front. Models real-world queues.
DS|In a Binary Search Tree (BST), where are smaller values stored?|Right subtree|Left subtree|Root only|B|BST property: left child < parent < right child. This allows O(log n) search in a balanced BST.
DS|What is the height of a tree with only one node (the root)?|1|0|2|B|Height = number of edges on the longest path. A single root node has height 0.
DS|Dynamic memory allocation in C++ uses which pair of keywords?|malloc/free|new/delete|alloc/dealloc|B|int* p = new int[n]; allocates n integers on heap. delete[] p; releases the memory.
DS|What happens if you forget to call delete after new in C++?|Compile error|Memory leak|Segmentation fault|B|Memory leak: allocated heap memory is never freed. The program holds memory it no longer needs.
DS|Which header file provides sort(), max_element(), min_element()?|<iostream>|<cmath>|<algorithm>|C|#include <algorithm> provides sort, max_element, min_element, and many other useful functions.
DS|What does NULL represent in a Linked List node's next pointer?|Beginning of list|End of list|Middle of list|B|When next == NULL, it signals the last node. The display loop: while(temp != NULL) stops here.
DS|What is a Circular Linked List?|A list sorted in a circle|The last node's next points back to head|A doubly-linked list|B|In a circular linked list, the tail node's next pointer points back to the head instead of NULL.
DS|In a Doubly Linked List, each node has:|Only a next pointer|A next and a previous pointer|Only a previous pointer|B|struct Node { int data; Node* next; Node* prev; }; — allows traversal in both directions.
DS|Which tree traversal visits: Left → Root → Right?|Pre-order|In-order|Post-order|B|In-order traversal of a BST gives sorted output in ascending order.
DS|Which tree traversal visits: Root → Left → Right?|Pre-order|In-order|Post-order|A|Pre-order: Root first, then Left subtree, then Right subtree.
DS|What is the space complexity of a recursive factorial function?|O(1)|O(n)|O(n²)|B|Each recursive call adds a stack frame. For factorial(n), there are n frames = O(n) space.
DS|Which of the following is NOT a linear data structure?|Array|Linked List|Binary Tree|C|Linear structures: Array, Linked List, Stack, Queue. Non-linear: Tree, Graph.
DS|What is the result of: int* arr = new int[5]; arr[0]=10; cout << arr[0];|Error|10|Random value|B|Dynamic array accessed like a regular array. arr[0]=10 stores 10, cout<<arr[0] prints 10.
DS|In C++, what does arr[i] translate to in pointer arithmetic?|arr - i|*(arr + i)|arr * i|B|Array indexing is syntactic sugar for pointer arithmetic. arr[i] == *(arr + i).
DS|Which search algorithm requires the array to be sorted first?|Linear Search|Sequential Search|Binary Search|C|Binary Search works by halving the search space — it REQUIRES sorted input. Linear Search works on any array.
DS|What is the worst case time complexity of Linear Search?|O(1)|O(log n)|O(n)|C|In the worst case, the key is at the last position or not found — requiring n comparisons = O(n).
`;
