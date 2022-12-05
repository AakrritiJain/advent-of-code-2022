import {readInput} from "../utils.js";

(async function () {
    const input = await readInput("./input.txt");
    let count = 0;
    input.split(/\n/).forEach((sections) => {
        let split = sections.split(",");
        let first = split[0].split("-").map((x) => parseInt(x));
        let second = split[1].split("-").map((x) => parseInt(x));
        if (first[0] <= second[0] && first[1] >= second[1]) count++;
        else if (second[0] <= first[0] && second[1] >= first[1]) count++;
    });
    console.log("Part one:", count);
})();

(async function () {
    const input = await readInput("./input.txt");
    let count = 0;
    input.split(/\n/).forEach((sections) => {
        let split = sections.split(",");
        let first = split[0].split("-").map((x) => parseInt(x));
        let second = split[1].split("-").map((x) => parseInt(x));
        if (first[0] === second[0] || first[1] === second[1]) count++;
        else if (first[0] >= second[0] && first[0] <= second[1]) count++;
        else if (second[0] >= first[0] && second[0] <= first[1]) count++;
    });
    console.log("Part two:", count);
})();