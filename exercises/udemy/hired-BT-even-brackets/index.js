
const solution = (angles) => {
    let brackets = {
        open: 0,
        close: 0,
    }
    for (let angle of angles) {
        if (angle === "<") {
            brackets.open += 1
        } else if (angle === ">") {
            if (brackets.open > 0) {
                brackets.open -= 1;
            } else {
                brackets.close += 1;
            }
        }
    }

    const leftAdd = "<".repeat(brackets.close);
    const rightAdd = ">".repeat(brackets.open);

    return leftAdd + angles + rightAdd;
};

module.exports = solution;