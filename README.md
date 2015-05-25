incrmax
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a method to compute a maximum value incrementally.


## Installation

``` bash
$ npm install compute-incrmax
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var incrmax = require( 'compute-incrmax' );
```

#### incrmax()

Returns an initialized method to compute a maximum value incrementally.

``` javascript
var max = incrmax();
```

#### max( [value] )

If provided a `value`, the method updates and returns the updated max. If not provided a `value`, the method returns the current max.

``` javascript
max( 2 );

console.log( max( 1 ) );
// returns 2

max( 3 );

console.log( max() );
// returns 3
```

Note: if values have not yet been provided to `max()`, `max()` returns `null`.


## Examples

``` javascript
var incrmax = require( 'compute-incrmax' );

// Initialize a method to calculate the max incrementally:
var max = incrmax();

// Simulate some data...
for ( var i = 0; i < 1000; i++ ) {
	max( Math.random() * 100 );
}

console.log( max() );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

The use case for this module differs from the conventional [vector](https://github.com/compute-io/max) implementation and the [stream](https://github.com/flow-io/?query=max) implementation. Namely, this module decouples the act of updating the max from the act of consuming the max.


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.


[npm-image]: http://img.shields.io/npm/v/compute-incrmax.svg
[npm-url]: https://npmjs.org/package/compute-incrmax

[travis-image]: http://img.shields.io/travis/compute-io/incrmax/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrmax

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrmax/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrmax?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrmax.svg
[dependencies-url]: https://david-dm.org/compute-io/incrmax

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrmax.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrmax

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrmax.svg
[github-issues-url]: https://github.com/compute-io/incrmax/issues
