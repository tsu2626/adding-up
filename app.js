'use strict';
const fs = require("fs");
const readline = require('readline');
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input': rs,'output':{} });
rl.on('line',(lineString) =>{
    const colums = lineString.split(',');
    const year = parseInt(colums[0]);
    const prefecture = colums[2];
    const popu = parseInt(colums[7]);
    if(year === 2010 || year ===　2015){
        console.log(year);
        console.log(prefecture);
        console.log(popu);
    }
});
rl.resume();