'use strict';
const fs = require("fs");
const readline = require('readline');
const rs = fs.ReadStream('./popu-pref.csv');
const rl = readline.createInterface({'input': rs,'output':{} });
const map = new Map();
rl.on('line',(lineString) =>{
    const colums = lineString.split(',');
    const year = parseInt(colums[0]);
    const prefecture = colums[2];
    const popu = parseInt(colums[7]);
    if(year === 2010 || year ===　2015){
    let  value = map.get(prefecture);
    if(!value){
        value = {
            popu10: 0,
            popu15: 0,
            change: null
        };
    }
    if (year === 2010){
        value.popu10 += popu;
    }
    if(year === 2015){
        value.popu15 += popu;
    }
    map.set(prefecture, value);
    }
});
rl.resume();
rl.on('close',() =>{
    console.log(map);
});