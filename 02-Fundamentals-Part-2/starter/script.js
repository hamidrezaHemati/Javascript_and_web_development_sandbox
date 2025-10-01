'use strict';

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const calcWinningCondition = (value) => value * 2;

function checkWinner(){
    
    const avgDolphins = calcAverage(85, 54, 41);
    const avgKoalas = calcAverage(23, 34, 27);

    if (avgDolphins > avgKoalas && avgDolphins >= calcWinningCondition(avgKoalas)){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if (avgDolphins < avgKoalas && avgKoalas >= calcWinningCondition(avgDolphins)){
        console.log(`Dolphins win (${avgKoalas} vs ${avgDolphins})`);
    }
    else{
        console.log(`No Winners (Dolphins: ${avgDolphins} - Koalas: ${avgKoalas})`);
    }
}

checkWinner()