import {readInput} from "../utils.js";

// part 1
(async function() {
    const draw = {
        A: "X",
        B: "Y",
        C: "Z",
    }
    const win = {
        A: "Y",
        B: "Z",
        C: "X",
    }

    const shapes = {
        X: 1,
        Y: 2,
        Z: 3
    }
    const input = await readInput("./input.txt");
    let score = 0;
    input.split(/\n/).forEach((round) => {
        const [opp, you] = round.split(" ");
        score += shapes[you];
        if(win[opp] === you)
            score += 6;
        if(draw[opp] === you)
            score += 3;
        return score;
    });

    console.log("Part one:", score);
    
})();

// part 2
(async function() {
    const points = {
        X: 0,
        Y: 3,
        Z: 6
    }

    const win = {
        A: 2,
        B: 3,
        C: 1,
    }
    const draw = {
        A: 1,
        B: 2,
        C: 3,
    }
    const lose = {
        A: 3,
        B: 1,
        C: 2,
    }
    const input = await readInput("./input.txt");
    let score = 0;
    input.split(/\n/).forEach((round) => {
        const [opp, you] = round.split(" ");
        score += points[you];
        if(you === 'Y')
            score+= draw[opp]
        if(you === 'Z')
        score += win[opp]
        if(you === 'X')
        score += lose[opp]
        return score;
    });

    console.log("Part two:", score);

})();