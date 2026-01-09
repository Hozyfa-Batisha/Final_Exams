// Object-Oriented Programming Question Bank - Java Focus
// Categories: Trace Output, Trace Errors, General Concepts, Programming Questions

const oopQuestionsData = `
OOP|What is the output of: System.out.println("5" + 2 + 3);|8|523|53|B
OOP|What is the output of: System.out.println(2 + 3 + "5");|235|55|Error|A
OOP|What will be printed: System.out.println('A' + 1);|A1|66|B|B
OOP|What is the result of: 17 / 5 in Java?|3.4|3|Error|B
OOP|What is the output: System.out.println(10 % 3);|1|3|0|A
OOP|Which identifier is valid in Java?|1variable|_variable|class#1|B
OOP|What is the output: System.out.println("Hello".length());|4|5|6|B
OOP|What will this print: int x = 5; System.out.println(x++);|5|6|Error|A
OOP|What is the output: System.out.println(true && false);|true|false|1|B
OOP|What does Math.sqrt(16) return?|4.0|4|16|A
OOP|What is encapsulation in OOP?|Hiding data using access modifiers|Inheriting properties|Creating multiple methods|A
OOP|Which keyword is used to inherit a class in Java?|implements|inherits|extends|C
OOP|What is polymorphism?|One class, one form|One interface, multiple implementations|Multiple classes, one method|B
OOP|What is the purpose of a constructor?|To destroy objects|To initialize objects|To call methods|B
OOP|Can a constructor have a return type?|Yes, any type|Yes, only void|No, never|C
OOP|What is method overloading?|Same method name, different parameters|Same method name, same parameters|Different method names|A
OOP|What is the 'this' keyword used for?|Reference to current object|Reference to parent class|Reference to child class|A
OOP|Which access modifier allows access only within the same class?|public|protected|private|C
OOP|What is an abstract class?|Class that cannot be instantiated|Class with only static methods|Class without methods|A
OOP|What is the difference between == and .equals()?|No difference|== checks reference, .equals() checks content|== checks content, .equals() checks reference|B
OOP|Can static methods access instance variables directly?|Yes, always|No, never|Only with 'this' keyword|B
OOP|What is inheritance?|Acquiring properties from parent class|Creating new methods|Hiding data|A
OOP|What does the 'super' keyword do?|Calls parent class constructor/methods|Calls child class methods|Creates new object|A
OOP|Can we override static methods in Java?|Yes, always|No, they are hidden|Only in abstract classes|B
OOP|What is the purpose of the 'final' keyword?|To prevent modification|To allow modification|To create variables|A
OOP|How many classes can Java class extend?|Multiple|One|None|B
OOP|What is an interface in Java?|A class with implementation|A blueprint with abstract methods|A concrete class|B
OOP|Can an interface have variables?|No|Yes, only static final|Yes, any type|B
OOP|What is the default value of an int variable?|null|0|undefined|B
OOP|What is the default value of a boolean variable?|true|false|0|B
OOP|What does the output show: class A { static int x = 5; } A obj1 = new A(); obj1.x = 10; A obj2 = new A(); System.out.println(obj2.x);|5|10|Error|B
OOP|What is printed: String s = null; System.out.println(s.length());|0|NullPointerException|null|B
OOP|What happens: int[] arr = new int[3]; System.out.println(arr[3]);|0|ArrayIndexOutOfBoundsException|3|B
OOP|What is the output: System.out.println(10 / 0);|0|Infinity|ArithmeticException|C
OOP|What prints: String s1 = "Java"; String s2 = "Java"; System.out.println(s1 == s2);|true|false|Error|A
OOP|What is the result: String s1 = new String("Java"); String s2 = new String("Java"); System.out.println(s1 == s2);|true|false|Error|B
OOP|What outputs: int x = 5; int y = x++ + ++x; System.out.println(y);|11|12|10|B
OOP|What is printed: int x = 10; if(x = 5) System.out.println("True");|True|Compilation error|False|B
OOP|What outputs: for(int i=0; i<3; i++) { if(i==1) continue; System.out.print(i); }|012|02|01|B
OOP|What prints: int[] arr = {1,2,3}; System.out.println(arr[1]);|1|2|3|B
OOP|What is the output: System.out.println("Hello".substring(1,3));|He|el|ll|B
OOP|Trace: class A { int x = 5; void m() { int x = 10; System.out.println(x); } } new A().m();|5|10|Error|B
OOP|What outputs: class A { static { System.out.print("A"); } public A() { System.out.print("B"); } } new A();|B|AB|A|B
OOP|Trace: int x = 5; System.out.println(x > 3 ? "Yes" : "No");|Yes|No|Error|A
OOP|What prints: class A { A() { this(5); } A(int x) { System.out.print(x); } } new A();|0|5|Error|B
OOP|Trace output: class A { void show() { System.out.print("A"); } } class B extends A { void show() { System.out.print("B"); } } A obj = new B(); obj.show();|A|B|Error|B
OOP|What is printed: int x = 5, y = 10; x = y; y = 20; System.out.println(x);|5|10|20|B
OOP|Trace: String s = "Hello"; s.toUpperCase(); System.out.println(s);|HELLO|Hello|hello|B
OOP|What outputs: int x = 5; System.out.println(++x + x++);|11|12|13|B
OOP|Trace: class A { int i; static int j; A(int x) { i = x; j++; } } A a1 = new A(3); A a2 = new A(5); System.out.print(a1.i + "," + A.j);|3,2|5,2|3,1|A
OOP|What is the error: class A { public static void main(String[] args) { System.out.println(args[0]); } } // Run without arguments|No error|ArrayIndexOutOfBoundsException|NullPointerException|B
OOP|Find error: class A { void m1() { System.out.println("A"); } } class B extends A { int m1() { return 5; } }|No error|Compilation error - incompatible return type|Runtime error|B
OOP|What's wrong: abstract class A { abstract void show() { System.out.println("A"); } }|No error|Abstract methods cannot have body|Syntax error|B
OOP|Error in: class A { private A() {} } class B { A obj = new A(); }|No error|Constructor is private|Cannot create object|B
OOP|Find error: interface A { void show(); } class B implements A { }|No error|Must implement abstract method|Syntax error|B
OOP|What's wrong: class A { final void show() {} } class B extends A { void show() {} }|No error|Cannot override final method|Runtime error|B
OOP|Error: class A { static int x; void m() { x = 5; } }|No error|Static variable accessed incorrectly|x must be final|A
OOP|Find error: class A { void m1(int x) {} void m1(int y) {} }|No error|Duplicate method|Parameter names don't matter|B
OOP|What's wrong: class A { int x = 10; { x = 20; } static { x = 30; } }|No error|Cannot access instance variable in static block|Syntax error|B
OOP|Error: String s = "Hello"; s = null; System.out.println(s.length());|No error|NullPointerException at runtime|Compilation error|B
OOP|Which statement correctly creates an array?|int[] arr = new int[5];|int arr[] = {1,2,3,4,5};|int[] arr = new int[] {1,2,3};|A
OOP|How do you correctly declare a constant in Java?|final int MAX = 100;|const int MAX = 100;|static int MAX = 100;|A
OOP|Which loop executes at least once?|for loop|while loop|do-while loop|C
OOP|What is the correct way to compare two strings?|str1 == str2|str1.equals(str2)|str1.compareTo(str2) == 0|B
OOP|Which keyword is used to prevent inheritance?|static|final|private|B
OOP|What is the size of int in Java?|2 bytes|4 bytes|8 bytes|B
OOP|Which is not a valid access modifier?|public|protected|package|C
OOP|What does JVM stand for?|Java Virtual Machine|Java Variable Method|Java Verified Module|A
OOP|Which package is imported by default?|java.util|java.lang|java.io|B
OOP|What is autoboxing?|Automatic conversion primitive to wrapper|Automatic inheritance|Automatic method calling|A
OOP|Which collection allows duplicates and maintains insertion order?|HashSet|ArrayList|TreeSet|B
OOP|What is the parent class of all classes in Java?|System|Main|Object|C
OOP|Which exception is checked?|NullPointerException|IOException|ArithmeticException|B
OOP|What keyword is used for exception handling?|try-catch|if-else|switch|A
OOP|Which loop is best when iterations are unknown?|for|while|enhanced for|B
OOP|Write a method header that takes two integers and returns their sum|int sum(int a, int b)|void sum(int a, int b)|double sum(int a, int b)|A
OOP|How do you create an object of class Student?|Student s = new Student();|new Student s();|Student s;|A
OOP|Which correctly defines a class variable?|static int count;|int count;|final int count;|A
OOP|How to call a parent class method?|super.methodName();|this.methodName();|parent.methodName();|A
OOP|Which creates an ArrayList of Integers?|ArrayList<Integer> list = new ArrayList<>();|ArrayList<int> list = new ArrayList<>();|ArrayList list = new ArrayList<Integer>();|A
OOP|What is the correct constructor syntax?|public ClassName() {}|void ClassName() {}|ClassName void() {}|A
OOP|How do you read user input using Scanner?|Scanner sc = new Scanner(System.in);|Scanner sc = new Scanner();|Input sc = new Scanner(System.in);|A
OOP|Which creates a random integer from 1 to 10?|Random r = new Random(); int x = r.nextInt(10) + 1;|Random r = new Random(); int x = r.nextInt(11);|Random r = new Random(); int x = r.nextInt(10);|A
OOP|How to check if a number is even?|if(num % 2 == 0)|if(num / 2 == 0)|if(num % 2 == 1)|A
OOP|Which correctly implements getter method?|public int getAge() { return age; }|public void getAge() { return age; }|int getAge() { return age; }|A
OOP|What does this code do: class A { private int x; public void setX(int x) { this.x = x; } }|Sets instance variable x|Creates new variable|Throws error|A
OOP|Complete: To make a method accessible only within package use ___ modifier|default (no modifier)|public|private|A
OOP|Which statement creates a 2D array?|int[][] arr = new int[3][4];|int arr[][] = {3,4};|int[] arr = new int[3,4];|A
OOP|How to convert String to int?|Integer.parseInt("123")|Integer.valueOf("123").intValue()|Both A and B|C
OOP|Which loop syntax is correct?|for(int i=0; i<5; i++)|for(int i=0, i<5, i++)|for(i=0; i<5; i++)|A
OOP|Trace: class Test { public static void main(String[] args) { int[] arr = {5,3,8,1}; System.out.println(arr[0] + arr[3]); } }|6|9|4|A
OOP|What prints: class A { void show(int x) { System.out.print(x); } void show(String x) { System.out.print(x); } } new A().show(5);|5|Error|5.0|A
OOP|Trace: int sum = 0; for(int i=1; i<=3; i++) { sum += i; } System.out.println(sum);|3|6|7|B
OOP|What outputs: class A { int x; A(int x) { this.x = x; } } A obj = new A(10); System.out.println(obj.x);|0|10|Error|B
OOP|Trace: boolean flag = true; if(!flag) System.out.print("A"); else System.out.print("B");|A|B|Error|B
OOP|What is printed: String[] arr = {"Java", "Python", "C++"}; System.out.println(arr.length);|2|3|4|B
OOP|Trace: int x = 10, y = 20; int temp = x; x = y; y = temp; System.out.println(x + "," + y);|10,20|20,10|20,20|B
OOP|What outputs: class A { static void m() { System.out.print("Static"); } } A.m();|Static|Error|null|A
OOP|Trace: int x = 5; while(x > 0) { System.out.print(x + " "); x--; }|5 4 3 2 1|1 2 3 4 5|Infinite loop|A
OOP|What prints: String s = "Hello"; System.out.println(s.charAt(0));|H|e|0|A
OOP|Trace error: class A { int x = 5; } class B { System.out.println(new A().x); }|No error|Statements outside method|Runtime error|B
OOP|Find error: class A { void show() {} void show() {} }|No error|Duplicate method|Overloading error|B
OOP|What's wrong: class A extends B, C { }|No error|Multiple inheritance not allowed|Syntax error|B
OOP|Error: int x; System.out.println(x);|No error|Variable not initialized|Compilation error|B
OOP|Find error: class A { public static void main(String[] args) { int x = 5/0; } }|No error|ArithmeticException at runtime|Compilation error|B
`;
