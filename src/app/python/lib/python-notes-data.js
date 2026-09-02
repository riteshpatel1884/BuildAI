/**
 * Source of truth for the /python notes section.
 *
 * Each group mirrors a folder in your GitHub repo (Basics, Data Structures,
 * Exception Handling, File Handling, OOPs). Each note mirrors a notebook
 * file. A note with no `cells` renders as "coming soon" in the sidebar and
 * on its page — fill in `cells` as you port more notebooks over.
 *
 * cell types:
 *   { type: 'markdown', text: '...' }
 *   { type: 'code', code: '...', output: '...' }  // output optional
 */

export const noteGroups = [
  {
    name: 'Basics',
    slug: 'basics',
    notes: [
      {
        slug: 'variables',
        title: 'Variables',
        cells: [
          { type: 'markdown', text: 'A variable is any characteristic, number, symbol, or quantity that can change or take on different valuesz' },
          {
            type: 'code',
            code: `# name = "Ritesh Patel"

# RiteshPatel = "students" #pascal case

# riteshPatel = "students" #camel case

ritesh_patel = "students" #snake case

print(ritesh_patel)`,
            output: `students`,
          },
        ],
      },
      {
        slug: 'data-types',
        title: 'Data Types',
        cells: [
          { type: 'markdown', text: 'Data types define what kind of value a variable stores.' },
          {
            type: 'code',
            code: `a = -34
b = 56.8
c = 12/3
v = 34j

print(type(a))
print(type(b))
print(type(c))
print(type(v))`,
            output: `<class 'int'>
<class 'float'>
<class 'float'>
<class 'complex'>`,
          },
          {
            type: 'code',
            code: `str = '1231243235 dsagaiogiaeb !@#$%^&*'
print(type(str))`,
            output: `<class 'str'>`,
          },
          {
            type: 'code',
            code: `b = True
t = False
print(type(b))`,
            output: `<class 'bool'>`,
          },
        ],
      },
      {
        slug: 'strings',
        title: 'Strings',
        cells: [
          {
            type: 'code',
            code: `a = "Ritesh Patel"
print(a[::])  # It will print the string as it is.

print(a[5:])  # If no value is given after the colon, it means till the end of the string`,
            output: `Ritesh Patel
h Patel`,
          },
          {
            type: 'code',
            code: `age = int(input("hello what is your age"))
print(age)`,
            output: `21`,
          },
          {
            type: 'code',
            code: `name = "Ritesh"
age = "21"

print(f"my name is {name} and my age is {age}")`,
            output: `my name is Ritesh and my age is 21`,
          },
        ],
      },
      {
        slug: 'type-conversion',
        title: 'Type Conversion',
        cells: [
          {
            type: 'code',
            code: `a = 12
a = str(a)
print(a)`,
            output: `12`,
          },
          {
            type: 'code',
            code: `a = "123"
print(int(a))`,
            output: `123`,
          },
          {
            type: 'markdown',
            text: 'There are 7 falsy values: `0`, `0.0`, `False`, `""` (empty string), `[]`, `()`, `{}`',
          },
          {
            type: 'code',
            code: `print(bool(0))`,
            output: `False`,
          },
          {
            type: 'code',
            code: `print(bool([]))`,
            output: `False`,
          },
        ],
      },
      {
        slug: 'indexing',
        title: 'Indexing',
        cells: [
          {
            type: 'code',
            code: `a = "Hello"
print(a[0])
print(a[-1])`,
            output: `H
o`,
          },
        ],
      },
      {
        slug: 'operators',
        title: 'Operators',
        cells: [
          { type: 'markdown', text: 'Arithmetic Operators' },
          {
            type: 'code',
            code: `a = 5
b = 32

print(a + b)
print(b - a)
print(a * b)
print(b // a)
print(b / a)
print(5 ** 10)`,
            output: `37
27
160
6
6.4
9765625`,
          },
          { type: 'markdown', text: 'Assignment Operators' },
          {
            type: 'code',
            code: `a = 23
print(a)`,
            output: `23`,
          },
          { type: 'markdown', text: 'Compound Assignment Operators' },
          {
            type: 'code',
            code: `a = 20
a = a + 20   # 40
a = a + 40   # 80
print(a)

# same result using value reassignment with +=
b = 20
b += 20
b += 40
print(b)`,
            output: `80
80`,
          },
          { type: 'markdown', text: 'Comparison Operators: `<` `>` `==` `<=` `>=` `!=`' },
          {
            type: 'markdown',
            text: 'Logical Operators: `and`, `or`, `not` - `not` reverses the boolean value.',
          },
          {
            type: 'code',
            code: `print(12 == 12)`,
            output: `True`,
          },
          {
            type: 'code',
            code: `print(not 12 == 12)  # reverses the result of 12 == 12`,
            output: `False`,
          },
        ],
      },
      {
        slug: 'conditional-statements',
        title: 'Conditional Statements',
        cells: [
          { type: 'markdown', text: 'If / else' },
          {
            type: 'code',
            code: `a = 11
if a > 10:
    print(a)`,
            output: `11`,
          },
          {
            type: 'code',
            code: `a = 1
if a > 10:
    print(a)
else:
    print("Smaller")`,
            output: `Smaller`,
          },
          { type: 'markdown', text: 'if - elif ladder' },
          {
            type: 'code',
            code: `a = 6
if a == 1:
    print("Hi")
elif a == 2:
    print("bye")
elif a == 3:
    print("okay")
else:
    print("NOT FOUND")`,
            output: `NOT FOUND`,
          },
        ],
      },
      {
        slug: 'loops',
        title: 'Loops',
        cells: [
          {
            type: 'markdown',
            text: 'range(start, stop, step) - start defaults to 0, step defaults to 1',
          },
          { type: 'markdown', text: 'For loop' },
          {
            type: 'code',
            code: `for i in range(1, 20, 3):
    print(i)`,
            output: `1
4
7
10
13
16
19`,
          },
          {
            type: 'code',
            code: `a = range(1, 20, 4)
for i in a:
    print(i)`,
            output: `1
5
9
13
17`,
          },
          {
            type: 'code',
            code: `a = range(10)   # start = 0 and step = 1
for i in a:
    print(i)`,
            output: `0
1
2
3
4
5
6
7
8
9`,
          },
          {
            type: 'code',
            code: `a = range(10, 0, -1)
for i in a:
    print(i)`,
            output: `10
9
8
7
6
5
4
3
2
1`,
          },
        ],
      },
      {
        slug: 'functions',
        title: 'Functions',
        cells: [
          {
            type: 'code',
            code: `def hello(first_name, last_name):
    print(first_name, last_name)

hello("Ritesh", "Patel")`,
            output: `Ritesh Patel`,
          },
          {
            type: 'code',
            code: `def hello(first_name, age):
    print(first_name, age)

hello(21, "Ritesh")`,
            output: `21 Ritesh`,
          },
          {
            type: 'code',
            code: `# To avoid it we use keyword argument
def hello(first_name, age):
    print(first_name, age)

hello(age = 21, first_name = "Ritesh")`,
            output: `Ritesh 21`,
          },
          {
            type: 'code',
            code: `# default parameters`,
          },
          {
            type: 'code',
            code: `def hello(first_name, last_name, age = 20):
    print(first_name, last_name, age)

hello(first_name= "Ritesh", last_name = "Patel")`,
            output: `Ritesh Patel 20`,
          },
          {
            type: 'code',
            code: `def hello(first_name, last_name, age = 20):
    print(first_name, last_name, age)

hello(first_name= "Ritesh", last_name = "Patel", age = 21)`,
            output: `Ritesh Patel 21`,
          },
          {
            type: 'code',
            code: `def hello():
    return "hi"

print(hello())`,
            output: `hi`,
          },
        ],
      },
      {
        slug: 'args-kwargs',
        title: 'Args & Kwargs',
        cells: [
          { type: 'markdown', text: '*args - multiple positional arguments' },
          { type: 'markdown', text: 'args collects extra positional arguments into a tuple.' },
          { type: 'markdown', text: '*args = "I don\'t know how many positional arguments I\'ll receive."' },
          {
            type: 'markdown',
            text: 'Positional arguments means Python decides which parameter gets a value based on the position/order in which you pass it.',
          },
          {
            type: 'code',
            code: `def add(*args):
    print(args)

add(10, 20, 30, 40)`,
            output: `(10, 20, 30, 40)`,
          },
          {
            type: 'code',
            code: `def student(name, age, city):
    print(name)
    print(age)
    print(city)

student("Ritesh", 21, "Delhi")

#So these are positional arguments because their position determines where they go.`,
            output: `Ritesh
21
Delhi`,
          },
          {
            type: 'code',
            code: `# Compare with keyword arguments
def student(name, age, city):
    print(name)
    print(age)
    print(city)

student(name="Ritesh", age=21, city="Delhi")

# Here you're explicitly telling Python:
# name = "Ritesh"
# age  = 21
# city = "Delhi"
# so these are keyword arguments.`,
            output: `Ritesh
21
Delhi`,
          },
          { type: 'markdown', text: '**kwargs - multiple keyword arguments' },
          { type: 'markdown', text: 'kwargs collects extra keyword arguments into a dictionary.' },
          { type: 'markdown', text: '**kwargs = "I don\'t know how many keyword arguments I\'ll receive."' },
          {
            type: 'code',
            code: `def student(**kwargs):
    print(kwargs)

student(name="Ritesh", age=21, branch="CSE")`,
            output: `{'name': 'Ritesh', 'age': 21, 'branch': 'CSE'}`,
          },
          {
            type: 'code',
            code: `# You can access them like a dictionary:
def student(**kwargs):
    print(kwargs["name"])
    print(kwargs["age"])

student(name="Ritesh", age=21)`,
            output: `Ritesh
21`,
          },
          {
            type: 'code',
            code: `# Using both together
def demo(*args, **kwargs):
    print("Args:", args)
    print("Kwargs:", kwargs)

demo(10, 20, 30, name="Ritesh", age=21)`,
            output: `Args: (10, 20, 30)
Kwargs: {'name': 'Ritesh', 'age': 21}`,
          },
          {
            type: 'markdown',
            text: '| Syntax | Collects | Python type |\n|---|---|---|\n| `*args` | Positional arguments | Tuple |\n| `**kwargs` | Keyword arguments | Dictionary |',
          },
        ],
      },
      {
        slug: 'generators',
        title: 'Generators',
        cells: [
          { type: 'markdown', text: 'A generator is a simple way to create an iterator.' },
          { type: 'markdown', text: 'The key difference is:' },
          {
            type: 'markdown',
            text: 'A normal function returns a result and finishes. A generator uses yield to return a value one at a time and remembers where it stopped.',
          },
          { type: 'markdown', text: 'A generator is a type of iterator, and yield provides an easy way to create one.' },
          {
            type: 'code',
            code: `def count():
    yield 1
    yield 2
    yield 3

numbers = count()  # numbers is a generator object.

print(next(numbers))  # 1
print(next(numbers))  # 2
print(next(numbers))  # 3`,
            output: `1
2
3`,
          },
          { type: 'markdown', text: 'yield → give a value, pause the function, and resume it later.' },
          {
            type: 'code',
            code: `def count():
    print("Start")
    yield 1
    print("Second")
    yield 2
    print("Third")
    yield 3

numbers = count()
# the function doesn't actually run yet. It creates the generator.

print(next(numbers))  # Python starts executing:`,
            output: `Start
1`,
          },
          { type: 'markdown', text: 'The generator pauses at yield 1.' },
          {
            type: 'code',
            code: `print(next(numbers))`,
            output: `Second
2`,
          },
          { type: 'markdown', text: 'Then the next next() resumes again.' },
          { type: 'markdown', text: 'next() → Start → yield 1 → PAUSE' },
          { type: 'markdown', text: 'next() → resume → Second → yield 2 → PAUSE' },
          { type: 'markdown', text: 'next() → resume → Third → yield 3 → PAUSE' },
          { type: 'markdown', text: 'next() → resume → END → StopIteration' },
          { type: 'markdown', text: 'Generator vs normal function' },
          {
            type: 'code',
            code: `#Normal fctn: creates the entire list at once.
def numbers():
    return [1, 2, 3]

# Generator: It produces values one at a time.
def numbers():
    yield 1
    yield 2
    yield 3`,
          },
          {
            type: 'code',
            code: `# Why are generators useful?
# The biggest reason is memory efficiency.

# Imagine:

def numbers():
    for i in range(1000000000):
        yield i

# You can do:

for n in numbers():
    print(n)

# It doesn't need to create a list containing 1 billion numbers.
# It generates:
# 0 + process
# 1 + process
# 2 + process
# 3 + process
# ...

# only when needed.

# This is extremely useful for:
# Large datasets
# Reading large files
# Data pipelines
# Streaming data
# AI/ML pipelines
# Processing large amounts of records`,
          },
          {
            type: 'code',
            code: `# You previously had to write a whole class:
class Count:
    def __init__(self, max_value):
        self.current = 1
        self.max_value = max_value

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= self.max_value:
            value = self.current
            self.current += 1
            return value
        else:
            raise StopIteration

# That's a lot of code.

# With a generator, the same idea becomes:

def count(max_value):
    current = 1

    while current <= max_value:
        yield current
        current += 1

numbers = count(3)

print(next(numbers))  # 1
print(next(numbers))  # 2
print(next(numbers))  # 3`,
            output: `1
2
3`,
          },
        ],
      },
      {
        slug: 'iterators',
        title: 'Iterators',
        cells: [
          {
            type: 'markdown',
            text: 'An iterator is an object that lets you go through elements one at a time, instead of getting everything at once.',
          },
          {
            type: 'code',
            code: `numbers = [10, 20, 30, 40]

it = iter(numbers)

print(next(it))  # 10
print(next(it))  # 20
print(next(it))  # 30
print(next(it))  # 40

# Every time you call next(), Python gives you the next value.`,
            output: `10
20
30
40`,
          },
          { type: 'markdown', text: 'Iterable vs Iterator' },
          {
            type: 'markdown',
            text: 'Iterable → something you can loop over. Ex: -> list -> tuple -> string -> dictionary -> set',
          },
          {
            type: 'markdown',
            text: "A list is iterable, but it isn't itself an iterator. you can create an iterator from it: it = iter(numbers)",
          },
          {
            type: 'code',
            code: `# How for loop actually works
# When you write:

numbers = [10, 20, 30]
for n in numbers:
    print(n)

# Python is essentially doing:
it = iter(numbers)
while True:
    try:
        n = next(it)
        print(n)
    except StopIteration:
        break

# So for loops internally use iterators.`,
            output: `10
20
30
10
20
30`,
          },
          { type: 'markdown', text: 'Creating your own iterator' },
          { type: 'markdown', text: 'A class becomes an iterator when it implements: `__iter__()` `__next__()`' },
          {
            type: 'code',
            code: `class Count:
    def __init__(self, max_value):
        self.current = 1
        self.max_value = max_value

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= self.max_value:
            value = self.current
            self.current += 1
            return value
        else:
            raise StopIteration

numbers = Count(3)

print(next(numbers))  # 1
print(next(numbers))  # 2
print(next(numbers))  # 3`,
            output: `1
2
3`,
          },
          { type: 'markdown', text: 'Why are iterators useful?' },
          { type: 'markdown', text: '-> The biggest advantage is memory efficiency.' },
          { type: 'markdown', text: '-> Suppose you need to process 10 million values.' },
          {
            type: 'markdown',
            text: '-> Creating a huge list: numbers = [1, 2, 3, ..., 10000000] stores all those values in memory.',
          },
          { type: 'markdown', text: '-> An iterator can generate/process values one at a time:' },
          {
            type: 'markdown',
            text: 'Value 1 → process\nValue 2 → process\nValue 3 → process\n...',
          },
          {
            type: 'markdown',
            text: '-> This is why iterators are important when working with large datasets, files, generators, and data pipelines.',
          },
          {
            type: 'code',
            code: `#self
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

student1 = Student("Ritesh", 21)
student2 = Student("Rahul", 22)`,
          },
          {
            type: 'markdown',
            text: `There are now two separate objects.

student1
↓
name = "Ritesh"
age = 21

------------------

student2
↓
name = "Rahul"
age = 22

When this happens:

student1 = Student("Ritesh", 21)

Python essentially calls:

Student.__init__(student1, "Ritesh", 21)

Therefore, inside __init__:

self = student1

So: self.name = name means: student1.name = "Ritesh"

And: self.age = age means: student1.age = 21`,
          },
        ],
      },
      {
        slug: 'decorators',
        title: 'Decorators',
        cells: [
          {
            type: 'markdown',
            text: 'A decorator is a function that allows you to add extra behavior to another function without changing its original code.',
          },
          { type: 'markdown', text: 'Think of it like putting a wrapper around a function.' },
          {
            type: 'code',
            code: `def greet():
    print("Hello Ritesh")

greet()`,
            output: `Hello Ritesh`,
          },
          { type: 'markdown', text: 'Now imagine you want to add:' },
          { type: 'markdown', text: 'Before function → "Function started" After function → "Function finished"' },
          {
            type: 'markdown',
            text: "You could modify greet(), but decorators let you do this without touching greet().",
          },
          {
            type: 'code',
            code: `def my_decorator(func):

    def wrapper():
        print("Before function")
        func()
        print("After function")

    return wrapper`,
          },
          {
            type: 'markdown',
            text: "Here func is the function we're decorating. And wrapper() is the new function that adds extra behavior.",
          },
          {
            type: 'code',
            code: `def greet():
    print("Hello Ritesh")

# Apply the decorator:
greet = my_decorator(greet)

# Then:
greet()`,
            output: `Before function
Hello Ritesh
After function`,
          },
        ],
      },
      {
        slug: 'lambda',
        title: 'Lambda',
        cells: [
          { type: 'markdown', text: 'A lambda function is a small, anonymous function written in one line.' },
          { type: 'markdown', text: 'Syntax-> lambda arguments: expression' },
          { type: 'markdown', text: 'The result of the expression is automatically returned.' },
          {
            type: 'code',
            code: `# Instead of writing:

def square(x):
    return x * x

# You can write:

square = lambda x: x * x
print(square(5))`,
            output: `25`,
          },
          {
            type: 'code',
            code: `# Multiple arguments
add = lambda a, b: a + b

print(add(10, 20))`,
            output: `30`,
          },
          { type: 'markdown', text: 'Why use lambda?' },
          {
            type: 'markdown',
            text: 'Lambda becomes particularly useful when you need a small function temporarily, especially with functions like:',
          },
          { type: 'markdown', text: '`map()`\n\n`filter()`\n\n`sorted()`' },
          {
            type: 'code',
            code: `students = [
    ("Ritesh", 85),
    ("Rahul", 72),
    ("Aman", 91)
]

students.sort(key=lambda student: student[1])
print(students)`,
            output: `[('Rahul', 72), ('Ritesh', 85), ('Aman', 91)]`,
          },
          {
            type: 'code',
            code: `students.sort(key=lambda student: student[1], reverse=True)
print(students)`,
            output: `[('Aman', 91), ('Ritesh', 85), ('Rahul', 72)]`,
          },
          { type: 'markdown', text: 'Lambda with map()' },
          {
            type: 'code',
            code: `numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, numbers))
print(squares)

# numbers is simply the list of numbers you want to check.

# Without lambda:
# def square(x):
#     return x * x
# squares = list(map(square, numbers))`,
            output: `[1, 4, 9, 16, 25]`,
          },
          {
            type: 'code',
            code: `# Lambda with filter()
numbers = [1, 2, 3, 4, 5, 6]
even = list(filter(lambda x: x % 2 == 0, numbers))
print(even)`,
            output: `[2, 4, 6]`,
          },
        ],
      },
      {
        slug: 'map-filter-reduce',
        title: 'Map, Filter, Reduce',
        cells: [
          {
            type: 'markdown',
            text: 'map() → transform every element\n\nfilter() → select certain elements\n\nreduce() → combine all elements into one result',
          },
          {
            type: 'code',
            code: `numbers = [1, 2, 3, 4, 5]
squares = []

for x in numbers:
    squares.append(x * x)

print(squares)`,
            output: `[1, 4, 9, 16, 25]`,
          },
          {
            type: 'code',
            code: `# With map():

squares = list(map(lambda x: x * x, numbers))
print(squares)`,
            output: `[1, 4, 9, 16, 25]`,
          },
          {
            type: 'code',
            code: `#Map Without lambda:

numbers = [1, 2, 3, 4, 5]
def double(x):
    return x * x

result = list(map(double, numbers))
print(result)`,
            output: `[1, 4, 9, 16, 25]`,
          },
          {
            type: 'code',
            code: `# With lambda:
numbers = [1, 2, 3, 4, 5, 6]
result = list(filter(lambda x: x % 2 == 0, numbers))
print(result)`,
            output: `[2, 4, 6]`,
          },
          {
            type: 'code',
            code: `# filter Without lambda:

numbers = [1, 2, 3, 4, 5, 6]
def is_even(x):
    return x % 2 == 0

result = list(filter(is_even, numbers))
print(result)`,
            output: `[2, 4, 6]`,
          },
          {
            type: 'code',
            code: `from functools import reduce

numbers = [1, 2, 3, 4, 5]
result = reduce(lambda a, b: a + b, numbers)
print(result)`,
            output: `15`,
          },
          {
            type: 'code',
            code: `# reduce Without lambda:
from functools import reduce

numbers = [1, 2, 3, 4, 5]
def add(a, b):
    return a + b

result = reduce(add, numbers)
print(result)`,
            output: `15`,
          },
        ],
      },
      {
        slug: 'context-managers',
        title: 'Context Managers',
        cells: [
          { type: 'markdown', text: 'A context manager is used to properly set up and clean up resources.' },
          { type: 'markdown', text: 'The most common example is working with files.' },
          {
            type: 'code',
            code: `# Without a context manager
file = open("data.txt", "r")
data = file.read()
file.close()

# You have to remember to call file.close()

# If an exception occurs before close(), the file might remain open.`,
          },
          {
            type: 'code',
            code: `# With a context manager Python provides the with statement:

with open("data.txt", "r") as file:
    data = file.read()

# as file is the variable
# Python automatically closes the file when the with block finishes.`,
          },
          {
            type: 'code',
            code: `# How does with actually work?
# A context manager typically implements two special methods:
# __enter__()
# __exit__()

class MyContext:
    def __enter__(self):
        print("Entering")

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting")

with MyContext():
    print("Inside")

# with MyContext()
#      ↓
# __enter__()
#      ↓
# code inside with
#      ↓
# __exit__()`,
            output: `Entering
Inside
Exiting`,
          },
          { type: 'markdown', text: 'The context manager can automatically handle things like:' },
          {
            type: 'markdown',
            text: '-> Opening the connection\n\n-> Executing your code\n\n-> Closing the connection\n\n-> Cleaning up if an error occurs',
          },
          {
            type: 'code',
            code: `with resource as variable:
    # use resource`,
          },
        ],
      },
      {
        slug: 'dunder-methods',
        title: '__init__, __str__, __repr__',
        cells: [
          { type: 'markdown', text: '__init__ → initialize an object' },
          { type: 'markdown', text: '__str__ → human-friendly representation' },
          { type: 'markdown', text: '__repr__ → developer/debug representation' },
          {
            type: 'code',
            code: `# __init__ runs automatically when you create an object.
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

student = Student("Ritesh", 21)
print(student)

# The exact memory address will be different because you haven't defined __str__ or __repr__.
# Python's default behavior is basically saying this is a Student object, but you haven't told me how you want it displayed.`,
            output: `<__main__.Student object at 0x0000019C8ADD2900>`,
          },
          {
            type: 'code',
            code: `# If you add __str__:
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"name is {self.name} and age is {self.age}"

student = Student("Ritesh", 21)
print(student)
print([student])`,
            output: `name is Ritesh and age is 21
[<__main__.Student object at 0x0000019C8ADD2A50>]`,
          },
          {
            type: 'code',
            code: `# If you add __repr__:
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Student(name='{self.name}', age={self.age})"

student = Student("Ritesh", 21)
print(student)
print([student])

#The biggest practical difference: print(student) uses __str__, while print([student]) uses __repr__.`,
            output: `Student(name='Ritesh', age=21)
[Student(name='Ritesh', age=21)]`,
          },
          {
            type: 'markdown',
            text: '| | `__str__` | `__repr__` |\n|---|---|---|\n| Purpose | Human-friendly | Developer-friendly |\n| print(obj) | ✅ Usually used | ❌ Fallback if no `__str__` |\n| str(obj) | ✅ | ❌ |\n| repr(obj) | ❌ | ✅ |\n| Inside a list | ❌ | ✅ |',
          },
        ],
      },
      {
        slug: 'dataclasses',
        title: 'Dataclasses',
        cells: [
          { type: 'markdown', text: 'A dataclass is a Python feature that makes it easier to create classes that mainly exist to store data.' },
          {
            type: 'markdown',
            text: "Normally, if you create a class to store data, you have to write a lot of boilerplate code like __init__(), __repr__(), and sometimes __eq__().",
          },
          { type: 'markdown', text: 'With @dataclass, Python generates much of this code automatically.' },
          {
            type: 'code',
            code: `# Without dataclass
class User:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email

    def __repr__(self):
        return f"User(name={self.name}, age={self.age}, email={self.email})"

user = User("Ritesh", 21, "ritesh@example.com")

print(user.name)
print(user.age)
print(user)`,
            output: `Ritesh
21
User(name=Ritesh, age=21, email=ritesh@example.com)`,
          },
          {
            type: 'code',
            code: `# Using @dataclass
from dataclasses import dataclass

@dataclass  # decorator.
class User:
    name: str
    age: int = 18
    branch: str = "CSE"

user = User("Ritesh")

print(user.name)
print(user.age)
print(user)`,
            output: `Ritesh
18
User(name='Ritesh', age=18, branch='CSE')`,
          },
          {
            type: 'code',
            code: `# field(): For more control over fields, use field().
from dataclasses import dataclass, field

@dataclass
class Student:
    name: str
    skills: list = field(default_factory=list)

s1 = Student("Ritesh")
s2 = Student("Rahul")
s1.skills.append("Python")

print(s1.skills)
print(s2.skills)`,
            output: `['Python']
[]`,
          },
          {
            type: 'code',
            code: `# Adding methods: A dataclass is still a normal Python class. You can add methods.

@dataclass
class Employee:
    name: str
    salary: int

    def yearly_salary(self):
        return self.salary * 12

emp = Employee("Ritesh", 50000)

print(emp.yearly_salary())`,
            output: `600000`,
          },
          {
            type: 'code',
            code: `# frozen=True: You can make a dataclass immutable

@dataclass(frozen=True)
class Point:
    x: int
    y: int

p = Point(10, 20)
p.x = 50

# This raises an error.
# Useful when you want objects whose values shouldn't change after creation.`,
            output: `FrozenInstanceError                      Traceback (most recent call last)
Cell In[12], line 9
      5     x: int
      6     y: int
      7
      8 p = Point(10, 20)
----> 9 p.x = 50

File <string>:16, in __create_fn__.<locals>.__setattr__(self, name, value)

FrozenInstanceError: cannot assign to field 'x'`,
          },
          {
            type: 'code',
            code: `# __post_init__(): Sometimes you want additional logic after the automatically generated __init__().

@dataclass
class User:
    name: str
    age: int

    def __post_init__(self):
        if self.age < 0:
            raise ValueError("Age cannot be negative")

u = User("Ritesh", -5)`,
            output: `ValueError                                Traceback (most recent call last)
Cell In[14], line 13
      9     def __post_init__(self):
     10         if self.age < 0:
     11             raise ValueError("Age cannot be negative")
     12
---> 13 u = User("Ritesh", -5)

ValueError: Age cannot be negative`,
          },
          {
            type: 'markdown',
            text: '| Feature | Normal Class | Dataclass |\n|---|---|---|\n| `__init__()` | Usually manual | Automatic |\n| `__repr__()` | Usually manual | Automatic |\n| Equality | Usually manual | Automatic |\n| Type annotations | Optional | Commonly used |\n| Default values | Yes | Yes |\n| Methods | Yes | Yes |\n| Immutable option | Manual | `frozen=True` |\n| Boilerplate | More | Much less |',
          },
        ],
      },
      {
        slug: 'type-hints',
        title: 'Type Hints',
        cells: [
          {
            type: 'markdown',
            text: 'Type hints are a way of telling Python and more importantly, developers and tools what type of data a variable, parameter, or return value is expected to have.',
          },
          { type: 'markdown', text: 'They use `:` and `->` syntax.' },
          {
            type: 'code',
            code: `# Variable type hints
name: str = "Ritesh"
age: int = 21
salary: float = 50000.5
is_student: bool = True`,
          },
          {
            type: 'code',
            code: `# Function parameter type hints
def greet(name: str):
    print(f"Hello {name}")`,
          },
          {
            type: 'code',
            code: `# You can also specify the return type:

def add(a: int, b: int) -> int:
    return a + b

# Read it as add takes two integers and is expected to return an integer.`,
          },
          {
            type: 'code',
            code: `# You can specify what a list contains:

numbers: list[int] = [1, 2, 3, 4]
names: list[str] = ["Ritesh", "Rahul", "Aman"]`,
          },
          {
            type: 'code',
            code: `# Dictionaries
users: dict[str, int] = {
    "Ritesh": 21,
    "Rahul": 22
}`,
          },
          {
            type: 'markdown',
            text: 'Optional values: Sometimes a variable can contain either a value or None.',
          },
          {
            type: 'code',
            code: `name: str | None = None`,
          },
        ],
      },
      {
        slug: 'virtual-environments',
        title: 'Virtual Environments',
        cells: [
          { type: 'markdown', text: 'A virtual environment is an isolated Python environment for a specific project.' },
          { type: 'markdown', text: 'The main reason you use one is to prevent dependency conflicts between projects.' },
          { type: 'markdown', text: 'The problem' },
          { type: 'markdown', text: 'Imagine you have two projects:' },
          { type: 'markdown', text: 'Project A: Django 4.2\n\nProject B: Django 5.2' },
          {
            type: 'markdown',
            text: "If both use your system's global Python environment, installing/upgrading Django for one project can affect the other.",
          },
          { type: 'markdown', text: "That's a mess." },
          {
            type: 'code',
            code: `# Virtual environment solves this

# Your Computer
#
# ├── Project A
# │      └── venv
# │            └── Django 4.2
# │
# ├── Project B
# │      └── venv
# │            └── Django 5.2

# Each project gets its own Python packages.`,
          },
          {
            type: 'code',
            code: `# Creating a virtual environment
# python -m venv venv -> This creates a folder called venv.

# Activating it: venv\\Scripts\\activate

# Installing packages: pip install pandas`,
          },
        ],
      },
      {
        slug: 'package-management',
        title: 'Package Management',
        cells: [
          {
            type: 'markdown',
            text: 'Package management means installing, updating, removing, and managing the external libraries/packages your Python project depends on.',
          },
          { type: 'markdown', text: 'For example, if your AI project needs:' },
          { type: 'markdown', text: '-> langchain\n\n-> pandas\n\n-> numpy\n\n-> fastapi\n\n-> qdrant-client' },
          { type: 'markdown', text: "you need a way to install and manage them. That's package management." },
          {
            type: 'code',
            code: `pip - the traditional package manager`,
          },
          {
            type: 'code',
            code: `PyPI

PyPI = Python Package Index
It's the huge public repository where Python packages are published.
pip normally gets the package from PyPI.`,
          },
          { type: 'markdown', text: 'Package vs Library vs Module' },
          { type: 'markdown', text: 'Module: A single .py file.' },
          { type: 'markdown', text: 'Package: A collection of Python modules organized together.' },
          { type: 'markdown', text: 'Library: A broader term for reusable code that you can use in your projects.' },
          { type: 'markdown', text: 'Modern package managers' },
          { type: 'markdown', text: 'You may also encounter tools such as:' },
          {
            type: 'markdown',
            text: 'pip - traditional and extremely common\n\nuv - very fast modern Python package/project manager\n\nPoetry - dependency and project management\n\nConda - package/environment management, especially common in data science',
          },
        ],
      },
      {
        slug: 'async-await',
        title: 'Async / Await',
        cells: [
          {
            type: 'markdown',
            text: 'async and await are used in Python for asynchronous programming mainly when your program spends time waiting for things like:',
          },
          {
            type: 'markdown',
            text: '-> API responses\n\n-> Database queries\n\n-> Network requests\n\n-> File operations\n\n-> Timers',
          },
          {
            type: 'markdown',
            text: 'The key idea: while one task is waiting, Python can work on another task instead of sitting idle.',
          },
          {
            type: 'code',
            code: `# async is used to define an asynchronous function, also called a coroutine.

async def fetch_data():
    print("Fetching data...")

# Calling it does not immediately execute the function:
result = fetch_data()

# Instead, result is a coroutine object. To actually run it, you generally use await from another async function or await fetch_data()`,
            output: `C:\\Users\\rites\\AppData\\Local\\Temp\\ipykernel_9016\\78553299.py:7: RuntimeWarning: coroutine 'fetch_data' was never awaited
  result = fetch_data()
RuntimeWarning: Enable tracemalloc to get the object allocation traceback`,
          },
          {
            type: 'code',
            code: `# await tells Python Wait for this async operation to finish, but while waiting, allow other async tasks to run.

import asyncio
async def fetch_data():
    print("Started")
    await asyncio.sleep(5)
    print("Finished")

await fetch_data()`,
            output: `Started
Finished`,
          },
          {
            type: 'code',
            code: `# Why async is useful
# Consider two API calls.

# Synchronous approach
import time
def task1():
    time.sleep(2)
    print("Task 1 done")

def task2():
    time.sleep(2)
    print("Task 2 done")

task1()
task2()

# Total time = 4 seconds. The second task doesn't start until the first finishes.`,
            output: `Task 1 done
Task 2 done`,
          },
          {
            type: 'code',
            code: `# Asynchronous approach

import asyncio
async def task1():
    await asyncio.sleep(2)
    print("Task 1 done")

async def task2():
    await asyncio.sleep(2)
    print("Task 2 done")

async def main():
    await asyncio.gather(task1(), task2()) # This is commonly used to run multiple coroutines concurrently:

await main()

# Total time = 2 seconds. Both tasks can spend their waiting time concurrently.`,
            output: `Task 1 done
Task 2 done`,
          },
        ],
      },
      {
        slug: 'multithreading',
        title: 'Multithreading',
        cells: [
          { type: 'markdown', text: 'Multithreading = multiple threads inside one process' },
          { type: 'markdown', text: 'Multiprocessing = multiple processes running independently' },
          { type: 'markdown', text: 'Multithreading' },
          {
            type: 'markdown',
            text: 'Multiple threads share the same process and memory. While one thread waits for a network response, another can do useful work.',
          },
          { type: 'markdown', text: 'Process:\n\n├── Thread 1\n├── Thread 2\n├── Thread 3\n└── Thread 4' },
          {
            type: 'markdown',
            text: 'Threads are particularly useful for I/O-bound tasks:\n\n-> API\n\n-> Web scraping\n\n-> File operations\n\n-> Database queries\n\n-> Network requests',
          },
          {
            type: 'code',
            code: `import threading

def task(name):
    print(f"Running {name}")

t1 = threading.Thread(target=task, args=("Task 1",))
t2 = threading.Thread(target=task, args=("Task 2",))

t1.start()
t2.start()

t1.join()
t2.join()`,
            output: `Running Task 1
Running Task 2`,
          },
          { type: 'markdown', text: 'Multiprocessing creates separate Python processes.' },
          {
            type: 'markdown',
            text: 'Process 1 → CPU Core 1\nProcess 2 → CPU Core 2\nProcess 3 → CPU Core 3\nProcess 4 → CPU Core 4',
          },
          {
            type: 'markdown',
            text: 'Each process has its own memory space.\nMultiprocessing is useful for CPU-bound tasks:\n\n-> Heavy mathematical\n\n-> Image processing\n\n-> Large data processing\n\n-> CPU-heavy ML preprocessing\n\n-> Computational simulations',
          },
          {
            type: 'code',
            code: `from multiprocessing import Process

def task(name):
    print(f"Running {name}")

p1 = Process(target=task, args=("Task 1",))
p2 = Process(target=task, args=("Task 2",))

p1.start()
p2.start()

p1.join()
p2.join()`,
          },
          {
            type: 'markdown',
            text: 'GIL: CPython has the Global Interpreter Lock (GIL), which means generally only one thread at a time can execute Python bytecode within a process.',
          },
          {
            type: 'code',
            code: `# CPU-heavy
for i in range(10**9):
    result += i`,
          },
          {
            type: 'markdown',
            text: "using multiple Python threads usually won't give you true CPU-parallel execution.\nThat's where multiprocessing can help:",
          },
          {
            type: 'markdown',
            text: 'Multithreading\nProcess\n├── Thread 1 ─┐\n├── Thread 2 ─┼─→ GIL limits Python bytecode execution\n└── Thread 3 ─┘\n\nMultiprocessing\nProcess 1 → CPU\nProcess 2 → CPU\nProcess 3 → CPU\nProcess 4 → CPU\n\n+ True parallelism',
          },
          {
            type: 'markdown',
            text: '| Feature | Multithreading | Multiprocessing |\n|---|---|---|\n| Unit | Thread | Process |\n| Memory | Shared | Separate |\n| CPU parallelism | Limited by GIL in CPython | Yes |\n| Best for | I/O-bound | CPU-bound |\n| Memory usage | Lower | Higher |\n| Communication | Easier | More complicated |\n| Startup | Faster | Slower |\n| Example | API calls | Image processing |',
          },
        ],
      },
      {
        slug: 'memory-management',
        title: 'Memory Management',
        cells: [
          {
            type: 'markdown',
            text: "Memory management is how Python allocates, uses, and releases memory while your program runs.\nYou don't normally have to manually allocate and free memory like in C/C++. Python handles most of this automatically.",
          },
          {
            type: 'markdown',
            text: 'Your Python program\n↓\nCreates objects\n↓\nPython allocates memory\n↓\nObjects are used\n↓\nObjects are no longer needed\n↓\nPython reclaims memory',
          },
          { type: 'markdown', text: 'Everything is an object' },
          {
            type: 'code',
            code: `x = 10
name = "Ritesh"
numbers = [1, 2, 3]`,
          },
          { type: 'markdown', text: 'Python creates objects in memory.' },
          {
            type: 'markdown',
            text: 'Conceptually:\nx ────────→ 10\nname ─────→ "Ritesh"\nnumbers ──→ [1, 2, 3]',
          },
          {
            type: 'markdown',
            text: 'The variables (x, name, numbers) are references to objects, rather than boxes that directly contain the values.',
          },
          {
            type: 'markdown',
            text: "Reference Counting: One of Python's main memory-management mechanisms is reference counting.",
          },
          {
            type: 'markdown',
            text: 'Example:\nx = [1, 2, 3]\nThe list has a reference from x.\n\nIf we do: y = x\nnow both x and y point to the same object:\n\nx ─┐\n   ├──→ [1, 2, 3]\ny ─┘\n\nIf we then do: del x\nthe list isn\'t deleted because y still references it.\n\ny ──→ [1, 2, 3]\nOnce there are no references left, Python can reclaim that object\'s memory.',
          },
          { type: 'markdown', text: 'Stack vs Heap' },
          { type: 'markdown', text: 'Stack: Used for things like function call information and local references.' },
          {
            type: 'code',
            code: `def add():
    x = 10
    y = 20`,
          },
          { type: 'markdown', text: 'Heap: Python objects are generally allocated in the heap.' },
          {
            type: 'markdown',
            text: 'Memory\n│\n├── Stack\n│    └── references / call frames\n│\n└── Heap\n     ├── integer object\n     ├── list object\n     ├── string object\n     └── dictionary object',
          },
          { type: 'markdown', text: "Python's Private Heap: CPython manages a private heap for Python objects." },
          { type: 'markdown', text: 'When you write:\nnumbers = [1, 2, 3]' },
          {
            type: 'markdown',
            text: "Python's memory manager handles allocating the memory required for the list and its objects. This is why you don't normally write things like:\n\nmalloc(...)\nfree(...)\n\nas you would in C.",
          },
          { type: 'markdown', text: 'is vs == and Memory\nThis connects to object references.' },
          {
            type: 'code',
            code: `a = [1, 2, 3]
b = [1, 2, 3]

print(a == b)  # True
print(a is b)  # False`,
            output: `True
False`,
          },
          {
            type: 'markdown',
            text: '== checks value equality.\nis checks whether they are the same object.\n\na ──→ [1,2,3]\nb ──→ [1,2,3]\nDifferent objects',
          },
        ],
      },
      {
        slug: 'debugging',
        title: 'Debugging',
        cells: [
          { type: 'markdown', text: 'Debugging means finding and fixing problems in the Python program.' },
          {
            type: 'markdown',
            text: "When your code doesn't work, don't randomly change lines. First determine what kind of problem you're dealing with, then inspect the program systematically.",
          },
          {
            type: 'code',
            code: `# Types of errors
# Syntax error: Python can't understand your code.

if x > 10
    print(x)

# You'll get something like: SyntaxError: expected ':'

# Fix:
if x > 10:
    print(x)`,
          },
          {
            type: 'code',
            code: `# Runtime error / Exception: The syntax is valid, but something goes wrong while running.

numbers = [1, 2, 3]
print(numbers[10])

# Result: IndexError: list index out of range

# Common exceptions:
# NameError      → variable doesn't exist
# TypeError      → wrong type/operation
# ValueError     → invalid value
# IndexError     → invalid list index
# KeyError       → dictionary key doesn't exist
# AttributeError → object doesn't have that attribute
# FileNotFoundError → file doesn't exist`,
            output: `IndexError                                Traceback (most recent call last)
Cell In[1], line 4
      1 # Runtime error / Exception: The syntax is valid, but something goes wrong while running.
      2 
      3 numbers = [1, 2, 3]
----> 4 print(numbers[10])
      5 
      6 # Result: IndexError: list index out of range

IndexError: list index out of range`,
          },
          {
            type: 'code',
            code: `# Logical error: This is often the worst kind because Python doesn't necessarily give you an error.

def add(a, b):
    return a - b

print(add(5, 3))

# Python runs it successfully: 2
# But your intended answer was probably: 8`,
            output: `2`,
          },
          {
            type: 'code',
            code: `# print() debugging: The simplest debugging technique:

def calculate(a, b):
    result = a * b

    print("a =", a)
    print("b =", b)
    print("result =", result)
    return result

# Useful for small programs.`,
          },
          {
            type: 'code',
            code: `# Python pdb: Python has a built-in debugger called PDB (Python Debugger).
# You can put a breakpoint using: breakpoint()

def calculate(a, b):
    result = a + b
    breakpoint()
    return result

print(calculate(10, 20))

# When Python reaches breakpoint(), execution pauses.
# You can inspect variables:

# (Pdb) a
# 10

# (Pdb) b
# 20

# (Pdb) result
# 30

# You can then continue execution:

# (Pdb) c`,
          },
        ],
      },
      {
        slug: 'logging',
        title: 'Logging',
        cells: [
          { type: 'markdown', text: "Logging means recording what's happening inside your application while it runs." },
          { type: 'markdown', text: "It's similar to print(), but much more powerful and suitable for real applications." },
          { type: 'markdown', text: 'For example, instead of:' },
          {
            type: 'code',
            code: `print("User logged in")
print("Fetching data")
print("API failed")`,
          },
          { type: 'markdown', text: 'use:' },
          {
            type: 'code',
            code: `import logging
logging.info("User logged in")
logging.info("Fetching data")
logging.error("API failed")`,
          },
          { type: 'markdown', text: 'Log levels' },
          {
            type: 'markdown',
            text: '| Level | Use |\n|---|---|\n| DEBUG | Detailed information for debugging |\n| INFO | Normal application events |\n| WARNING | Something unexpected but not necessarily fatal |\n| ERROR | Something failed |\n| CRITICAL | Serious failure |',
          },
          { type: 'markdown', text: 'Logging vs print()' },
          { type: 'markdown', text: 'print(): Good for quick debugging.' },
          { type: 'markdown', text: 'But logging gives you:' },
          {
            type: 'markdown',
            text: 'Severity levels\n\nTimestamps\n\nFile output\n\nBetter formatting\n\nException information\n\nConfiguration\n\nDifferent behavior for development/production',
          },
          {
            type: 'markdown',
            text: 'For production applications, logging is much better than scattered print() statements',
          },
          {
            type: 'code',
            code: `# logging exceptions:  This is extremely useful.

import logging
try:
    result = 10 / 0

except ZeroDivisionError:
    logging.exception("Failed to calculate result")`,
            output: `ERROR:root:Failed to calculate result
Traceback (most recent call last):
  File "C:\\Users\\rites\\AppData\\Local\\Temp\\ipykernel_18156\\2716251796.py", line 5, in <module>
    result = 10 / 0
             ~~~^~~
ZeroDivisionError: division by zero`,
          },
          {
            type: 'code',
            code: `# Logging to a file: Instead of displaying logs in the terminal:

import logging
logging.basicConfig(
    filename="app.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("Application started")
logging.warning("Something looks suspicious")`,
            output: `WARNING:root:Something looks suspicious`,
          },
        ],
      },
    ],
  },
  {
    name: 'Data Structures',
    slug: 'data-structures',
    notes: [
      {
        slug: 'ds-intro',
        title: 'Data Structures Overview',
        cells: [
          { type: 'markdown', text: 'There are 4 types of built-in data structures' },
          { type: 'markdown', text: '1. List\n\n2. Tuple\n\n3. Dictionary\n\n4. Set' },
        ],
      },
      {
        slug: 'list',
        title: 'List',
        cells: [
          { type: 'markdown', text: 'LIST' },
          {
            type: 'markdown',
            text: "Mutable – Mutability refers to whether an object's value can be changed after creation. And List allows this.",
          },
          { type: 'markdown', text: 'Duplicates – List allows this.' },
          {
            type: 'markdown',
            text: 'Ordered – List maintains the sequence of elements as they were inserted. This means we can access elements using their position (index).',
          },
          {
            type: 'markdown',
            text: 'Heterogeneous – Lists have a heterogeneous nature, which means we can have multiple data types inside the list.',
          },
          {
            type: 'code',
            code: `lst = [1,2,3,4,True]
print(lst[-1])
print(lst[1])`,
            output: `True
2`,
          },
          { type: 'markdown', text: 'Traversing over list' },
          {
            type: 'code',
            code: `lst = [1,2,3,4,5]

for i in range(len(lst)):
    print(lst[i])`,
            output: `1
2
3
4
5`,
          },
          {
            type: 'code',
            code: `lst = [1,2,3,4,5]

for i in lst:
    print(i)`,
            output: `1
2
3
4
5`,
          },
          { type: 'markdown', text: 'Methods of list' },
          {
            type: 'code',
            code: `numbers = [5, 4, 1, 5, 6]   # Initial list
print("Initial List:", numbers)

# append()
numbers.append(10)
print("After append(10):", numbers)

# insert()
numbers.insert(2, 15)
print("After insert(2, 15):", numbers)

# extend()
numbers.extend([20, 25, 30])
print("After extend([20, 25, 30]):", numbers)

# remove()
numbers.remove(5)
print("After remove(5):", numbers)`,
            output: `Initial List: [5, 4, 1, 5, 6]
After append(10): [5, 4, 1, 5, 6, 10]
After insert(2, 15): [5, 4, 15, 1, 5, 6, 10]
After extend([20, 25, 30]): [5, 4, 15, 1, 5, 6, 10, 20, 25, 30]
After remove(5): [4, 15, 1, 5, 6, 10, 20, 25, 30]`,
          },
          {
            type: 'code',
            code: `numbers = [5, 4, 1, 5, 6]

# index()
index = numbers.index(6)
print("Index of 6:", numbers.index(6))

# count()
count_5 = numbers.count(5)
print("Count of 5:", count_5)

# pop()
popped_item = numbers.pop()
print("Popped Item:", popped_item)
print("After pop():", numbers)`,
            output: `Index of 6: 4
Count of 5: 2
Popped Item: 6
After pop(): [5, 4, 1, 5]`,
          },
          {
            type: 'code',
            code: `numbers = [5, 4, 1, 5, 6]

# sort()
numbers.sort()
print("After sort():", numbers)

# reverse()
numbers.reverse()
print("After reverse():", numbers)

# copy()
new_numbers = numbers.copy()
print("Copied List:", new_numbers)

# clear()
numbers.clear()
print("After clear():", numbers)`,
            output: `After sort(): [1, 4, 5, 5, 6]
After reverse(): [6, 5, 5, 4, 1]
Copied List: [6, 5, 5, 4, 1]
After clear(): []`,
          },
        ],
      },
      {
        slug: 'tuple',
        title: 'Tuple',
        cells: [
          { type: 'markdown', text: 'Tuples' },
          { type: 'markdown', text: 'Immutable - Tuples are not mutable, you cannot change the values of a tuple.' },
          { type: 'markdown', text: 'Duplicates - You can have duplicate values in a tuple.' },
          { type: 'markdown', text: 'Ordered - Tuples are ordered and you can access them through index values.' },
          {
            type: 'markdown',
            text: 'Heterogeneous - Tuples also have a heterogeneous nature and can have different types of data inside them.',
          },
          {
            type: 'code',
            code: `a = (1,2,3,4)
print(type(a))`,
            output: `<class 'tuple'>`,
          },
          { type: 'markdown', text: 'Traversal is same as list traversal.' },
          { type: 'markdown', text: 'Python tuples have only 2 built-in methods because tuples are immutable' },
          {
            type: 'code',
            code: `t = (10, 20, 10, 30, 10)
# t.count(10) means "count how many times the value 10 appears in t."

print(t.count(10))   # 3
print(t.count(20))   # 1
print(t.count(40))   # 0`,
            output: `3
1
0`,
          },
          {
            type: 'code',
            code: `t = (10, 20, 30, 20, 40)

print(t.index(20))       # 1
print(t.index(30))       # 2
print(t.index(20, 2))    # 3`,
            output: `1
2
3`,
          },
          { type: 'markdown', text: 'Tuple unpacking (or multiple assignment).' },
          {
            type: 'code',
            code: `a, b, c, d = (1, 2, 3, 4)

print(a)
print(b)
print(c)
print(d)`,
            output: `1
2
3
4`,
          },
        ],
      },
      {
        slug: 'set',
        title: 'Set',
        cells: [
          { type: 'markdown', text: 'Sets' },
          { type: 'markdown', text: 'Mutable – Sets are mutable, so you can add or remove elements.' },
          { type: 'markdown', text: 'Duplicates – Sets do not allow duplicate elements. Every element is unique.' },
          {
            type: 'markdown',
            text: "Unordered – Sets are unordered, so they do not support indexing or slicing. So it can't be traversed also.",
          },
          {
            type: 'markdown',
            text: 'Heterogeneous – Sets can store different immutable data types together (e.g., integers, floats, strings, tuples, booleans). However, mutable objects like lists, dictionaries, and other sets cannot be used because they are unhashable.',
          },
          {
            type: 'code',
            code: `a = {1,2,3,4,4,5,5,6,5}

print(type(a))
print(a)  # As it stores only unique value so duplicate vlues will be removed.`,
            output: `<class 'set'>
{1, 2, 3, 4, 5, 6}`,
          },
          {
            type: 'code',
            code: `a = {1,2,3,4,4,5,5,6,5}

print(a[0])  # We cant access set value using index`,
            output: `TypeError                                Traceback (most recent call last)
Cell In[2], line 3
      1 a = {1,2,3,4,4,5,5,6,5}
      2 
----> 3 print(a[0])

TypeError: 'set' object is not subscriptable`,
          },
          {
            type: 'code',
            code: `s = {1, 2, 3}
s.add(4)
print(s)`,
            output: `{1, 2, 3, 4}`,
          },
          {
            type: 'code',
            code: `s = {1, 2}
s.update([3, 4], {5, 6})
print(s)`,
            output: `{1, 2, 3, 4, 5, 6}`,
          },
          {
            type: 'code',
            code: `s = {1, 2, 3}
s.remove(2)
print(s)`,
            output: `{1, 3}`,
          },
          {
            type: 'code',
            code: `s = {1, 2, 3}
s.discard(5)   # No error
print(s)`,
            output: `{1, 2, 3}`,
          },
          {
            type: 'code',
            code: `s = {10, 20, 30}
print(s.pop())   # Removes a random element`,
            output: `10`,
          },
          {
            type: 'code',
            code: `s = {1, 2, 3}
s.clear()
print(s)`,
            output: `set()`,
          },
          {
            type: 'code',
            code: `a = {1, 2, 3}
b = {3, 4, 5}
print(a.union(b))`,
            output: `{1, 2, 3, 4, 5}`,
          },
          {
            type: 'code',
            code: `a = {1, 2, 3}
b = {2, 3, 4}
print(a.intersection(b))`,
            output: `{2, 3}`,
          },
          {
            type: 'code',
            code: `a = {1, 2, 3}
b = {2, 3, 4}
print(a.difference(b))`,
            output: `{1}`,
          },
          {
            type: 'code',
            code: `a = {1, 2}
b = {1, 2, 3}
print(a.issubset(b))`,
            output: `True`,
          },
          {
            type: 'code',
            code: `a = {1, 2, 3}
b = {1, 2}
print(a.issuperset(b))`,
            output: `True`,
          },
        ],
      },
      {
        slug: 'dictionary',
        title: 'Dictionary',
        cells: [
          { type: 'markdown', text: 'Dictionary' },
          { type: 'markdown', text: 'Mutable – Dictionaries are mutable. You can add, update, or delete key-value pairs.' },
          {
            type: 'markdown',
            text: 'Duplicate Keys – Dictionary keys must be unique. If the same key is used multiple times, the last value overwrites the previous one.',
          },
          { type: 'markdown', text: 'Duplicate Values – Dictionary values can be duplicated.' },
          { type: 'markdown', text: 'Ordered – Since Python 3.7+, dictionaries preserve insertion order.' },
          {
            type: 'markdown',
            text: 'Heterogeneous – Dictionaries can store different data types as keys (immutable types only) and values (any data type).',
          },
          {
            type: 'code',
            code: `a = {}  # It is empty so it is dictonary. If there were some values then it would be set.
print(type(a))`,
            output: `<class 'dict'>`,
          },
          {
            type: 'code',
            code: `a ={"name": "Ritesh", "age": 21, 3:45}
# name, age and 3 are the keys
print(a)
print(a[3])
print(a["name"])`,
            output: `{'name': 'Ritesh', 'age': 21, 3: 45}
45
Ritesh`,
          },
          {
            type: 'code',
            code: `a ={"name": "Ritesh", "age": 21, 3:45}
# name, age and 3 are the keys

a["age"] = 22
print(a)`,
            output: `{'name': 'Ritesh', 'age': 22, 3: 45}`,
          },
          {
            type: 'code',
            code: `# Creating a value M1
a ={"name": "Ritesh", "age": 21, 3:45}
a["id"] = 20047
print(a)`,
            output: `{'name': 'Ritesh', 'age': 21, 3: 45, 'id': 20047}`,
          },
          {
            type: 'code',
            code: `# M2
a ={"name": "Ritesh", "age": 21, 3:45}
a.update({"id": 20047})
print(a)`,
            output: `{'name': 'Ritesh', 'age': 21, 3: 45, 'id': 20047}`,
          },
          {
            type: 'code',
            code: `# Deleting a value
a ={"name": "Ritesh", "age": 21, 3:45}
del a[3]
print(a)`,
            output: `{'name': 'Ritesh', 'age': 21}`,
          },
          { type: 'markdown', text: 'Traversing over a dictionary' },
          {
            type: 'code',
            code: `# Traverse by keys
student = {
    "name": "Ritesh",
    "age": 20,
    "course": "B.Tech"
}

for i in student:
    print(i)`,
            output: `name
age
course`,
          },
          {
            type: 'code',
            code: `for key in student.keys():
    print(key)`,
            output: `name
age
course`,
          },
          {
            type: 'code',
            code: `# Traverse by Values
student = {
    "name": "Ritesh",
    "age": 20,
    "course": "B.Tech"
}

for value in student.values():
    print(value)`,
            output: `Ritesh
20
B.Tech`,
          },
          {
            type: 'code',
            code: `# Traverse by Both Keys and Values
student = {
    "name": "Ritesh",
    "age": 20,
    "course": "B.Tech"
}

for key, value in student.items():
    print(key, ":", value)`,
            output: `name : Ritesh
age : 20
course : B.Tech`,
          },
          {
            type: 'code',
            code: `# Deep copy: changes made in b also reflect in a.
# To avoid it we use shallow copy using copy()
student1 = {
    "name": "Ritesh",
    "marks": [90, 80, 70]
}

student2 = student1.copy()
student2["name"] = "Raman"
print(student1)
print(student2)`,
            output: `{'name': 'Ritesh', 'marks': [90, 80, 70]}
{'name': 'Raman', 'marks': [90, 80, 70]}`,
          },
          { type: 'markdown', text: 'Methods' },
          {
            type: 'code',
            code: `# Original dictionary
student = {
    "name": "Ritesh",
    "age": 20,
    "course": "B.Tech"
}

print("Original Dictionary:", student)

# 1. get()
print("\\n1. get()")
print(student.get("name"))
print(student.get("city", "Not Found"))

# 2. keys()
print("\\n2. keys()")
print(student.keys())

# 3. values()
print("\\n3. values()")
print(student.values())

# 4. items()
print("\\n4. items()")
print(student.items())

# 5. setdefault()
print("\\n5. setdefault()")
student.setdefault("city", "Ghaziabad")
print(student)`,
            output: `Original Dictionary: {'name': 'Ritesh', 'age': 20, 'course': 'B.Tech'}

1. get()
Ritesh
Not Found

2. keys()
dict_keys(['name', 'age', 'course'])

3. values()
dict_values(['Ritesh', 20, 'B.Tech'])

4. items()
dict_items([('name', 'Ritesh'), ('age', 20), ('course', 'B.Tech')])

5. setdefault()
{'name': 'Ritesh', 'age': 20, 'course': 'B.Tech', 'city': 'Ghaziabad'}`,
          },
          {
            type: 'code',
            code: `student = {
    "name": "Ritesh",
    "age": 20,
    "course": "B.Tech"
}

print("Original Dictionary:", student)

# 6. update()
print("\\n6. update()")
student.update({"age": 21, "branch": "CSE"})
print(student)

# 7. copy()
print("\\n7. copy()")
student_copy = student.copy()
print(student_copy)

# 8. pop()
print("\\n8. pop()")
student.pop("branch")
print(student)

# 9. popitem()
print("\\n9. popitem()")
student.popitem()          # Removes last inserted item
print(student)

# 10. fromkeys()
print("\\n10. fromkeys()")
subjects = ["Math", "OS", "DBMS"]
marks = dict.fromkeys(subjects, 0)
print(marks)

# 11. clear()
print("\\n11. clear()")
marks.clear()
print(marks)`,
            output: `Original Dictionary: {'name': 'Ritesh', 'age': 20, 'course': 'B.Tech'}

6. update()
{'name': 'Ritesh', 'age': 21, 'course': 'B.Tech', 'branch': 'CSE'}

7. copy()
{'name': 'Ritesh', 'age': 21, 'course': 'B.Tech', 'branch': 'CSE'}

8. pop()
{'name': 'Ritesh', 'age': 21, 'course': 'B.Tech'}

9. popitem()
{'name': 'Ritesh', 'age': 21}

10. fromkeys()
{'Math': 0, 'OS': 0, 'DBMS': 0}

11. clear()
{}`,
          },
        ],
      },
      {
        slug: 'comprehension',
        title: 'Comprehension',
        cells: [
          {
            type: 'markdown',
            text: 'Comprehensions are a shorter and cleaner way to create lists or dictionaries using a loop, often with a condition.',
          },
          {
            type: 'code',
            code: `# List Comprehension
# Normal for Loop
squares = []

for x in range(1, 6):
    squares.append(x * x)

print(squares)`,
            output: `[1, 4, 9, 16, 25]`,
          },
          {
            type: 'code',
            code: `# Using list comprehension
# [expression for item in iterable]

squares = [x * x for x in range(1, 6)]
print(squares)`,
            output: `[1, 4, 9, 16, 25]`,
          },
          {
            type: 'code',
            code: `# List Comprehension with Condition
# [expression for item in iterable if condition]

even = [x for x in range(1, 11) if x % 2 == 0]
print(even)`,
            output: `[2, 4, 6, 8, 10]`,
          },
          {
            type: 'code',
            code: `names = ["ritesh", "rahul", "aman"]

upper_names = [name.upper() for name in names]
print(upper_names)`,
            output: `['RITESH', 'RAHUL', 'AMAN']`,
          },
          {
            type: 'code',
            code: `# if-else in List Comprehension
# [expression_if_true if condition else expression_if_false for item in iterable]

result = ["Even" if x % 2 == 0 else "Odd" for x in range(1, 6)]

print(result)`,
            output: `['Odd', 'Even', 'Odd', 'Even', 'Odd']`,
          },
          { type: 'markdown', text: 'Dictionary Comprehension' },
          {
            type: 'code',
            code: `# Normal loop
squares = {}

for x in range(1, 6):
    squares[x] = x * x`,
          },
          {
            type: 'code',
            code: `# Dictionary comprehension
# {key_expression: value_expression for item in iterable}

squares = {x: x * x for x in range(1, 6)}
print(squares)`,
            output: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`,
          },
          {
            type: 'code',
            code: `# Dictionary Comprehension with Condition
numbers = [1, 2, 3, 4, 5, 6]
even_squares = {x: x*x for x in numbers if x % 2 == 0}
print(even_squares)`,
            output: `{2: 4, 4: 16, 6: 36}`,
          },
          {
            type: 'code',
            code: `students = {
    "Ritesh": 85,
    "Rahul": 45,
    "Aman": 72,
    "Priya": 91
}

# Get students who scored at least 70:
passed = {
    name: marks
    for name, marks in students.items()
    if marks >= 70
}

print(passed)`,
            output: `{'Ritesh': 85, 'Aman': 72, 'Priya': 91}`,
          },
          {
            type: 'code',
            code: `# Nested List Comprehension
# Normal:

result = []

for i in range(3):
    for j in range(3):
        result.append((i, j))

print(result)`,
            output: `[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]`,
          },
          {
            type: 'code',
            code: `# Comprehension:
result = [(i, j) for i in range(3) for j in range(3)]
print(result)`,
            output: `[(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]`,
          },
        ],
      },
    ],
  },
  { name: 'Exception Handling', slug: 'exception-handling', notes: [] },
  { name: 'File Handling', slug: 'file-handling', notes: [] },
  { name: 'OOPs', slug: 'oops', notes: [] },
];

/** Flat list of every note across every group, in sidebar order. */
export const allNotes = noteGroups.flatMap((group) =>
  group.notes.map((note) => ({ ...note, group: group.name, groupSlug: group.slug }))
);

export function getNoteBySlug(slug) {
  return allNotes.find((note) => note.slug === slug) ?? null;
}

export function getAdjacentNotes(slug) {
  const index = allNotes.findIndex((note) => note.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? allNotes[index - 1] : null,
    next: index < allNotes.length - 1 ? allNotes[index + 1] : null,
  };
}