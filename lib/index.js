/**
*
*	COMPUTE: incrmax
*
*
*	DESCRIPTION:
*		- Provides a method to compute a maximum value incrementally.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// INCREMENTAL MAX //

	/**
	* FUNCTION: incrmax()
	*	Returns a method to compute the maximum value incrementally.
	*
	* @returns {Function} method to compute the max incrementally
	*/
	function incrmax() {
		var max = null;
		/**
		* FUNCTION: incrmax( [value] )
		*	If a `value` is provided, updates and returns the updated max. If no `value` is provided, returns the current max.
		*
		* @param {Number} [value] - value used to update the max
		* @returns {Number} max value
		*/
		return function incrmax( x ) {
			if ( !arguments.length ) {
				return max;
			}
			if ( x > max || max === null ) {
				max = x;
			}
			return max;
		};
	} // end FUNCTION incrmax()


	// EXPORTS //

	module.exports = incrmax;

})();