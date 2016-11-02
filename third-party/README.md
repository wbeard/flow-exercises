# Typing Third Party Libraries

> Third party? I haven't even been to my first.  
> \- Anonymous

## The state of flow types and JavaScript libraries

JavaScript library authors and their contributors often don't have the expertise or time to write type definitions for their libraries. Between Typescript & flow, it's a big ask. However, having detailed type definitions for these libraries is necessary to ensure your code's overall type coverage.

## Flow-typed

[Flow-typed](https://github.com/flowtype/flow-typed) is a cli tool & repository for high-quality, flow definitions for third party libraries. Open source contributors can either build new type definitions or update existing ones. The types are thoroughly tested & dependable.

### How to install flow-typed

```
npm install -g flow-typed
```

### How to install a type definition for a 3rd party:

flow-typed will install any 3rd party lib def it has given your list of `dependencies` and `devDependencies`.

To install, you:

```
cd path/to/project
flow-typed install
```

If you add a dependency or dev dependency to package.json, run `flow-typed install` again to pick up its type definition.

### Where the types go.

flow-typed places these type definitions in a special folder, `<project-root>/flow-typed/`, usually under the `npm` folder. Any types declared in this folder are available globally for the entire repo.

For the most part, you can leave these alone. However, there may be cases where the type definition isn't complete. For example, it may be missing the signature for a function. Simply add to the type definition for now, but feel free to _contribute_ back to the library.

There are some great instructions on how to contribute back to this project in the repo: https://github.com/flowtype/flow-typed.
