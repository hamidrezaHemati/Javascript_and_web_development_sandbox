const dolphins_score_1 = 97
const dolphins_score_2 = 112
const dolphins_score_3 = 101

const koalas_score_1 = 109
const koalas_score_2 = 95
const koalas_score_3 = 106

const dolphins_avg = (dolphins_score_1 + dolphins_score_2 + dolphins_score_3) / 3
const koalas_avg = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3
console.log(dolphins_avg, koalas_avg)

let hasDolphinsMinimumReq = dolphins_avg >= 100
let hasKoalasMinimumReq = koalas_avg >= 100

if (dolphins_avg == koalas_avg){
  if (hasDolphinsMinimumReq && hasKoalasMinimumReq) console.log("Draw")
  else console.log('No winners!')
}
else if(dolphins_avg > koalas_avg){
  if (hasDolphinsMinimumReq) console.log("dolphins Win")
  else console.log('Dolphins has the higher score but doesnt Won!')
}
else{
  if (hasDolphinsMinimumReq) console.log("koalas win")
  else console.log('Koalas has the higher score but doesnt Won!')
  
}

