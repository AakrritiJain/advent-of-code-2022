import {readInput} from "../utils.js";

(async function(){
    const input = await readInput("./input.txt");
    const CaloriesForAll = input.split(/\n\n/).map((elf) => {
        let totalCalories = 0;
        elf.split(/\n/).forEach(calories => totalCalories += parseInt(calories));
        return totalCalories;
    });

    const sorted = CaloriesForAll.sort((a, b) => b - a);
    console.log("Part one:", sorted[0]);

    let topElves = 0;
    const TOP = 3;
    for(let i=0; i<TOP; i++)
        topElves += sorted[i]

    console.log("Part two:", topElves);
})();