## Installing
Flow is already installed and kept up to date in churro.

However, if you need to install or update flow, install `flow-bin`:

```
npm install --save-dev flow-bin@latest
```

Now, in your project, create a `.flowconfig` by running flow's `init` task:

```
flow init
```

## Build configuration
Flow can fit into your build with a babel transform called `transform-flow-strip-types`. To install or update:

```
npm install --save-dev babel-transform-flow-strip-types@latest
```

## Running flow
Flow is most useful by displaying errors & autocomplete information in your editor. See [the Editors](#editors) section below for help setting your editor up.

However, if you want to run flow in the console, just run:

```
npm run flow
```
