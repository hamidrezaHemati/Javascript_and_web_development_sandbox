bills = new Array(125,555,44)
tips = new Array()
totlas = new Array()

const calcTip = bill => bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2
const calcTip2 = function(bill){
    return bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2
}
function calcTip3(bill){
    return bill <=300 && bill >= 50 ? bill * 0.15 : bill * 0.2
}

tips.push(calcTip3(bills[0]))
tips.push(calcTip3(bills[1]))
tips.push(calcTip3(bills[2]))

totlas.push(bills[0] + tips[0])
totlas.push(bills[1] + tips[1])
totlas.push(bills[2] + tips[2])

console.log(bills)
console.log(tips)
console.log(totlas)