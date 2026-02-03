class Calculator {
    // 계산 메서드는 메서드 체이닝을 위해 동일한 인스턴스를 반환해야 한다.
    // 내부 상태를 변경한 뒤 this를 반환해서 다음 메서드를 연속적으로 호출할 수 있어야 함
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value -= value
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
       this.value *= value
       return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error( "Division by zero is not allowed");
        } else {
            this.value /= value
        }
        return this
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = this.value ** value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}