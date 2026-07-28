class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check row
        let valid = true;
        for (let i=0; i<board.length; i++) {
            const contents = new Set();
            for (let j=0; j<board[i].length; j++) {
                if (board[i][j] === ".") continue 
               if (contents.has(board[i][j]) ) {
                // console.log(board[i][j], "was invalid row")
                valid = false;
                break;
               } else contents.add(board[i][j])
            }
            if (!valid) break;
        }

        if (!valid) return false;

        // check col
        for (let i=0; i<board[0].length; i++) {
            const contents = new Set();
            for (let j=0; j<board.length; j++) {
                if (board[j][i] === ".") continue;
               if (contents.has(board[j][i]) ) {
                // console.log(board[i][j], "was invalid col")
                valid = false;
                break;
               } else contents.add(board[j][i])
            }
            if (!valid) break;
        }

        if (!valid) return false;

        // check each mini square
        // generate strips of minisquare after each i%3
        let strips;
        for (let i=0; i<board.length; i++) {
            if (i%3 == 0) {
                strips = [new Set(), new Set(), new Set()]
            }

            for (let j=0; j<board[i].length; j++) {
                // console.log(strips)
                if (board[i][j] === ".") continue;
                const stripIdx = Math.floor(j/3)
                if(strips[stripIdx].has(board[i][j])) {
                // console.log(board[i][j], "was invalid sq")
                    valid = false;
                    break;
                } else strips[stripIdx].add(board[i][j])
            }
            
            if (!valid) break;
        }
        return valid;
    }
}
