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
      { slug: 'variables', title: 'Variables' },
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
            text: 'Logical Operators: `and`, `or`, `not` — `not` reverses the boolean value.',
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
            text: 'range(start, stop, step) — start defaults to 0, step defaults to 1',
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
      { slug: 'functions', title: 'Functions' },
      { slug: 'args-kwargs', title: 'Args & Kwargs' },
      { slug: 'generators', title: 'Generators' },
      { slug: 'iterators', title: 'Iterators' },
      { slug: 'decorators', title: 'Decorators' },
      { slug: 'lambda', title: 'Lambda' },
      { slug: 'map-filter-reduce', title: 'Map, Filter, Reduce' },
      { slug: 'context-managers', title: 'Context Managers' },
      { slug: 'dunder-methods', title: '__init__, __str__, __repr__' },
      { slug: 'dataclasses', title: 'Dataclasses' },
      { slug: 'type-hints', title: 'Type Hints' },
      { slug: 'virtual-environments', title: 'Virtual Environments' },
      { slug: 'package-management', title: 'Package Management' },
      { slug: 'async-await', title: 'Async / Await' },
      { slug: 'multithreading', title: 'Multithreading' },
      { slug: 'memory-management', title: 'Memory Management' },
      { slug: 'debugging', title: 'Debugging' },
      { slug: 'logging', title: 'Logging' },
    ],
  },
  { name: 'Data Structures', slug: 'data-structures', notes: [] },
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
