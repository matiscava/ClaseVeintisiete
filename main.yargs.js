// const minimist = require('minimist');
const yargs = require('yargs/yargs')(process.argv.slice(2));
// const args = require('yargs/yargs').argv;

yargs
    .default( {
        modo: 'prod',
        puerto: 0,
        debug: false,
    } )
    .alias( {
        m:'modo',
        d:'debug',
        p: 'puerto',
        '_': 'otros'
    } )



// const options = {
//     default: {
//         modo: 'prod',
//         puerto: 0,
//         debug: false,
//     },
//     alias: {
//         m:'modo',
//         d:'debug',
//         p: 'puerto',
//         '_': 'otros'
//     }
// }

const argumentos = {...yargs.argv }
argumentos.otros = argumentos._;

delete argumentos._;
delete argumentos.m;
delete argumentos.d;
delete argumentos.p;
delete argumentos.$0;


console.log(argumentos);

// const args = yargs.boolean('vivo').argv
// 
// console.log(yargs.argv);