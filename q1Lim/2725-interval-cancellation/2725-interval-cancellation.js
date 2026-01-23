/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // setInterval / clearInterval 사용하기

/*
    fn(...args)
    const intervalId = setInterval(() => {
        fn(...args)
    }, t)

    return function cancelFn() {
        clearInterval(intervalId)
    } 
*/
    let timeoutId = null;
    let isCancelled = false;

    function run () {
      if (isCancelled) return;

      fn(...args);

      timeoutId = setTimeout(run, t);
    } 

    run();

    return function cancelFn(){
        isCancelled = true;
        if (timeoutId !== null){
            clearTimeout(timeoutId);
        }
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */