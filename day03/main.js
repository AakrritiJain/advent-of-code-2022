import {readInput} from "../utils.js";

(async function(){
    const chars = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const input = await readInput("./input.txt");
    let sum = 0;
    input.split(/\n/).forEach((sack) => {
        const left = sack.substr(0, sack.length/2)
        const right = sack.substr(sack.length/2)
        const common = left.split("").filter((x) => right.includes(x));
        sum+= chars.indexOf(common[0]);
    });


    console.log("Part one:", sum);
})();

(async function(){
    const chars = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const input = await readInput("./input.txt");
    let sum = 0;
    const ruckSacks = input.split(/\n/)
    for(let i =0; i < ruckSacks.length; i+=3) {
          let first = ruckSacks[i];
          let second = ruckSacks[i+1];
          let third = ruckSacks[i+2];
          const common = first.split("").filter((x) => second.includes(x)).filter((x) => third.includes(x));
          sum+= chars.indexOf(common[0]);
    }

    console.log("Part two:", sum);
})();