findKeyInTree
=============

This function recursively searches an object for keys that match `key`, and
returns the "path" to that key.

Usage:
------

Object.findKeyInTree takes two parameters: `key` and `caseSensitive`. `key` is
the key you'd like to search the object for. `caseSensitive` is whether or not
case should matter in your search. `caseSensitive` is optional, and defaults to
true.

Examples:
---------
For all the following examples, we will assume that

    var test = {
        human: {
            ninja: true,
            dog: isOnInternet ? true : false
        },
        mammal: {
            ninja: true,
            turtle: false,
            dog: true
        },
        reptile: {
            turtle: true,
            ninja: true || false,
            lizard
        }
    };

- `test.findKeyInTree('mammal')` would return `'mammal'`.
- `test.findKeyInTree('dog')` would return `['human.dog', 'mammal.dog']`.
- `test.findKeyInTree('Dog')` would return `false`.
- `test.findKeyInTree('Dog', false)` would return `['human.dog', 'mammal.dog']`.
- `test.findKeyInTree('lizard', true)` would return `'lizard'`.

Got it? Good.
