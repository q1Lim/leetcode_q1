/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    /*
        얕은 복사하기 : {...old, ...new}
        얕은 복사를 해야하는 이유? : 중첩 구조 없고 depth도 1이라서 안전하게 사용할 수 있음

        map을 배열로 다시 바꾸는 방법
        Array.from(map.values())
    */

    const map = new Map();

    for (const obj of arr1){
        map.set(obj.id, obj);
    }

    for (const obj of arr2){
        if (map.has(obj.id)){
            const old = map.get(obj.id);
            const merged = {...old, ...obj}
            map.set(obj.id, merged)
        }else {
            map.set(obj.id, obj)
        }
    }
    const result = Array.from(map.values()).sort((a,b)=> a.id - b.id);
    return result;
};