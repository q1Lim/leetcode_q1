/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let result = {};
    
    for (let i = 0 ; i < this.length ; i ++){
        // 우선 fn의 결과값을 key로 넣고, key가 중복이라면 중복에 넣고 아니라면 새로운 키에 집어 넣는다.
        let key = fn(this[i]);

        if (key in result){
            result[key].push(this[i]);
        } else {
            result[key] = [this[i]];
        }
        
    }

    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */