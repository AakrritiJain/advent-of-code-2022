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
    console.log("Part two:", sorted[0] + sorted[1] + sorted[2]);
})();