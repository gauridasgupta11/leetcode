/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/


var numIslands = function(grid) {
//m is col and n is row
    var m = grid.length, i,j,n, count=0;
    for(i=0;i<m;i++){
        n=grid[0].length;
        for(j=0;j<n;j++){
            if(grid[i][j] === '1'){
                bfs([{row:i,col:j}]);
                count++;
            }
        }
    }
    return count;
    
 function bfs(queue){
     var x,y,top, len=queue.length;
     while(len--){
         top = queue.pop();
        x=top.row; y=top.col;
     if(grid[x] && grid[x][y] && grid[x][y] === '1'){
         grid[x][y] = '2';
         queue.push({row:x+1,col:y});
         queue.push({row:x-1,col:y});
         queue.push({row:x,col:y+1});
         queue.push({row:x,col:y-1});
     }
     }
      if(queue.length!==0){
          bfs(queue);
      }  
 }
    
};
