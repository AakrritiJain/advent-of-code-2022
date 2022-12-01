import fs from "fs"

export const readInput = async (filename) => {
    return fs.readFileSync(filename).toString();
}