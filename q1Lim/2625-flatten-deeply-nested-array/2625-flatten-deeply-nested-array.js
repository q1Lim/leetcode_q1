/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    // flatten

    const result = [];

    if (n === 0){
       return arr; 
    }

    // n이 0이 될때까지 배열을 벗긴다.
    // 스프레드 문법 사용해서 push에 넣는다.
    // 배열에 있는 걸 하나씩 꺼내서 넣어주기

    for (let i = 0 ; i < arr.length ; i++){

        if (typeof(arr[i]) === 'object'){
            const flatten = flat(arr[i], n - 1);
            result.push(...flatten);
        }else {
            result.push(arr[i]);
        }
    }
    return result;
};