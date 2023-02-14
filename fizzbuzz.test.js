describe('fizzbuzz',()=>{
    test('has a list with 100 ordened numbers',()=>{
        const fizzbuzz= new Fizzbuzz()
        expect(fizzbuzz.list[0]).toBe(1)
        expect(fizzbuzz.list[99]).toBe(100)
    } )
})
class Fizzbuzz{
    constructor(){
        this.list=[]
        this.initializeList()
    }
    initializeList(){
        for(let i=1;i<=100;i++){
            this.list.push(i)
        }
    }
}