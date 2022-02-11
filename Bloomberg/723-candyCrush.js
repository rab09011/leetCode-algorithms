/*
This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the stable board.

Logic:
1. Go through each row and tag consecutive numbers in 3-num window as negative.
2. Go through each col and tag similarly as negative.
3. "Crush" candies by column: move all positive integers to the bottom of the column and then change all negative numbers to zeroes.
4. Keep a boolean to track if a board is done. If not done, re-run the function. If we iterate through the board and nothing gets tagged, keep the boolean as true. When bool is true, return the board.
*/

var candyCrush = function(board) {
    if(!board) return board;
    let done = true;
    let rows = board.length;
    let cols = board[0].length;
    
    //TAG ROWS
    for(let r = 0; r < rows; r++) {
        for(let c = 0; c < cols - 2; c++) {
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r][c + 1]);
            let num3 = Math.abs(board[r][c + 2]);
            
            if(num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1;
                board[r][c + 1] = -num2;
                board[r][c + 2] = -num3;
                done = false;
            }
        }
    }
    
    //TAG COLS
    for(let c = 0; c < cols; c++) {
        for(let r = 0; r < rows - 2; r++) {
            let num1 = Math.abs(board[r][c]);
            let num2 = Math.abs(board[r + 1][c]);
            let num3 = Math.abs(board[r + 2][c]);
            
            if(num1 === num2 && num2 === num3 && num1 !== 0) {
                board[r][c] = -num1;
                board[r + 1][c] = -num2;
                board[r + 2][c] = -num3;
                done = false;
            }
        }
    }
    
    //GRAVITY
    if(!done) {
        for(let c = 0; c < cols; c++) {
            let idx = board.length - 1;
            for(let r = idx; r >= 0; r--) {
                if(board[r][c] > 0){
                    board[idx][c] = board[r][c];
                    idx--;
                }
            }
            
            for(let r = idx; r >= 0; r--) {
                board[r][c] = 0;
            }
        }
    }
    
    if(done) return board
    else return candyCrush(board);
};

let board = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]];

/*
1 3 5 5 2
3 4 3 3 1
3 2 4 5 2
2 4 4 5 5
1 4 4 1 1
*/

/*
1 3 0 0 0 
3 4 0 5 2
3 2 0 3 1
2 4 0 5 2
1 4 3 1 1
*/

console.log(candyCrush(board));

