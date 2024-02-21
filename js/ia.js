function generateIA() {
    var ia = new Array()
    var i = 0
    var board = []
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
        if (board[x][y] == 0) {
            ia[i] = x + "" + y
            i++
        }
        }
    }
    return ia
}

generateIA()