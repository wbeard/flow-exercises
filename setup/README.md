## Installing
Flow is already installed and kept up to date in churro.

Check for the specified version in the project's `.flowconfig` (if it exists) and install:

```bash
npm install --save-dev flow-bin@0.33
```

If the project does not have a `.flowconfig`, use the latest version and run the `init` task to generate `.flowconfig`.

```bash
npm install --save-dev flow-bin@latest
flow init
```

## Build configuration
Flow can fit into your build with a babel transform called `transform-flow-strip-types`. To install or update:

```bash
npm install --save-dev babel-transform-flow-strip-types@latest
```

## Running flow
Flow is most useful by displaying errors & autocomplete information in your editor. See [the Editors](./editors) section below for help setting your editor up.

However, if you want to run flow in the console, just run:

```bash
npm run flow
```
