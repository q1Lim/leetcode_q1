/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const data = Object.keys(obj);
    
    return data.length > 0 ? false : true;

};