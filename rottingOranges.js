/*
Rotting Oranges

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 
Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
*/

var orangesRotting = function(grid) {
    
    let height = grid.length;
    let width = grid[0].length;
    let fresh = 0, queue=[];
    
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(grid[i][j] === 1) fresh++;
            if(grid[i][j] === 2) queue.push([i, j]);
        }
    }
    
    let minutes = 0;
    while(queue.length){
        let size = queue.length;
        for(let i=0; i<size; i++){
            let [x, y] = queue.shift();
            if(x-1 >= 0 && grid[x-1][y] === 1){
                grid[x-1][y] = 2;
                fresh--;
                queue.push([x-1, y])
            }
            if(x+1 < height && grid[x+1][y] === 1){
                grid[x+1][y] = 2;
                fresh--;
                queue.push([x+1, y]);
            }
            if(y-1 >=0 && grid[x][y-1] === 1){
                grid[x][y-1] = 2;
                fresh--;
                queue.push([x, y-1]);
            }
            if(y+1 < width && grid[x][y+1] === 1){
                grid[x][y+1] = 2;
                fresh--;
                queue.push([x, y+1]);
            }
        }
        if(queue.length !== 0) minutes++;
    }
    return fresh === 0 ? minutes : -1;
};
