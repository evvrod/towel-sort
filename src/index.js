
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let mas = [];
    if (matrix.length === 0)  return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            mas.push(...matrix[i]);
        }
        else {
            mas.push(...matrix[i].reverse());
        }
    }
    return mas;
}
