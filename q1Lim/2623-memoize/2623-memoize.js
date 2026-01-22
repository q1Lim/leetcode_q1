/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // 캐시 객체를 하나 둔다.
    // 들어온 args가 이미 캐시안에 존재한다면,
    // 캐시안에 있는 걸 리턴
    // 들어온 args가 캐시안에 존재하지 않는다면,
    // 캐시안에 넣고, 캐시를 리턴한다.

    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache){
            return cache[key];
        }else {
            cache[key] = fn(...args);
            return cache[key]
        }
        console.log(cache)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */