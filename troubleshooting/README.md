# Troubleshooting

## Editor integration

 * Make sure your code and `npm` packages are fresh `git pull; npm i`
 * Make sure the flow binary configured in your editor is the same binary used by `npm flow` command
 * Make sure the flow binary version matches the one defined in `.flowconfig`
 * I've had the best luck ensuring the flow server is running before opening my editor
  * Stop and restart the flow server `flow stop; flow start` if you're not seeing flow data in your editor
  * Restart your editor after restarting the flow server
  
## Error debugging

 * Duck-typing (dynamic type discrimination) needs to follow the [dynamic type test rules](https://flowtype.org/docs/dynamic-type-tests.html#_)
  * Function arguments that accept multiple types must use dynamic type tests
  * Dynamic type tests can be difficult to perform on composed union `|` and intersection `&` types
 * A single type error may spider through the code and result in multiple errors for each effected line. These errors are the result of a single code mistake:

 ```bash
components/fetch/Wsapi.js:89
 89:   const pathGraph = path.reduceRight((pathBranch: Object, pathSegment: PathSegment): Object => {
                              ^^^^^^^^^^^ property `reduceRight`. Property not found in
 89:   const pathGraph = path.reduceRight((pathBranch: Object, pathSegment: PathSegment): Object => {
                         ^^^^ String

components/fetch/Wsapi.js:162
162:       parser: body => parseBody(path, body),
                                     ^^^^ array type. This type is incompatible with
 73: function parseBody(path: string, body: string): { jsonGraph: WsapiPayload } {
                              ^^^^^^ string
```