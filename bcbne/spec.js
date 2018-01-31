describe('add two numbers', function() {
    it(' Is model defined', function() {
        expect(AddTwoNumbersModel).toBeDefined();
    });

    it(' Instantiate the model', function() {
        var add = new AddTwoNumbersModel();
        expect(add).not.toBeNull();
        
    });
    it('calculateAmount method should be defined',function(){
        var add = new AddTwoNumbersModel();
        expect(add.calculateAmount).toBeDefined();
    })
    
    it('Check for the number1 to be null or not', function() {
        var add = new AddTwoNumbersModel();
        expect(add.get('number1')).toBeNull;
        expect(add.get('number1')).toBeNull;
    });
     it('Check for the number2 to be null or not', function() {
        var add = new AddTwoNumbersModel();
        expect(add.get('number2')).toBeNull;
        expect(add.get('number2')).toBeNull;
    });
    it('The two numbers are replaced on the model when instanciated', function() {
        var add = new AddTwoNumbersModel({number1:"10",number2:"20"});
        
        expect(add.get('number1')).toBe("10");
        expect(add.get('number2')).toBe("20");
    });
});