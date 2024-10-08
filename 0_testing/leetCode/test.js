class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.fValue = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.fValue = this.fValue + value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
       this.fValue = this.fValue - value;
       return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.fValue = this.fValue * value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        this.fValue = this.fValue / value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.fValue = this.fValue ** value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.fValue;
    }
}

const opp = new Calculator(10);

opp.subtract(3).add(5);
console.log(opp.getResult())