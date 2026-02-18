/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // falsy한 찾아서 제거하기
    // array, object 일때 구분해서 처리하기
    // 반복문을 돌면서 if 문의 결과값이 false라면 넣지 말자
    // 재귀처리
    
    if (Array.isArray(obj)){
        const result = [];
        for (let item of obj){
            const value = compactObject(item);
            if (Boolean(value)){
                result.push(value);
            }
        }
        return result;
    }
    if (typeof obj === 'object' && obj !== null ){
        const result = {};
        for (let key in obj){
            const value = compactObject(obj[key]);
            if (Boolean(value)){
                result[key] = value;
            }
        }
        return result;
    }
    
    return obj;

};