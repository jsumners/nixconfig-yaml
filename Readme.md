# nixconfig-yaml

This is a plugin for [nixconfig](https://npm.im/nixconfig) to add support for
loading [YAML](https://en.wikipedia.org/wiki/YAML) based configuration files.
It supports files with the extensions `.yaml` and `.yml`.

## Examples

Add both supported extensions to the standard loaders:

```js
const nixconfig = require('nixconfig')
const config = nixconfig({
  loaders: require('nixconfig-yaml')
})
```

Add only the `.yaml` loader to the standard loaders:

```js
const nixconfig = require('nixconfig')
const config = nixconfig({
  loaders: [require('nixconfig-yaml')['.yaml']]
})
```

## License

[MIT License](http://jsumners.mit-license.org/)
