# angular-mass-iterate
Angular implementation of both Duffs Device and non-blocking iterations for high performance iteration through massive arrays

Duffs Device is a mechanism to chunk/batch iterate blocks of array items simultaneously thereby reducing the total number of iterations required to process an array.

The non-blocking implementation allows for a variable number of array items to be processed in chunks of a given number of milliseconds, thereby maintaining a degree of browser responsiveness.

To use, include `iterate` as a dependency, then use `iterate.duffs(array, callback)` or `iterate.nonBlocking(array, callback, msPerChunk)` where callback is passed the currently processing array item and index.
