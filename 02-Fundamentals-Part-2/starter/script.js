const Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: '78',
    height: '1.69',

    calcBMI: function(){
        this.BMI = (this.mass / this.height) ** 2
        return this.BMI
    }
}

const John = {
    firstName: 'John',
    lastName: 'Smith',
    mass: '92',
    height: '1.95',

    calcBMI: function(){
        this.BMI = (this.mass / this.height) ** 2
        return this.BMI
    }
}


function compareBMI(){
    p1_BMI = Mark.calcBMI
    p2_BMI = John.calcBMI
    if (p1_BMI > p2_BMI){
        console.log('Mark has higher BMI')
    }
    else if(p2_BMI > p1_BMI){
        console.log("John smith has higher BMI")
    }
    else{
        console.log("same BMI")
    }
}

compareBMI()