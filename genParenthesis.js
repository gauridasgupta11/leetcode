/*
Generate Parenthesis

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/


var generateParenthesis = function(n) {
    
    let res = [];
    bfs("",0,0);
    return res;
    
    function bfs(tmpstr, left, right){
        if(n === left && n === right){
            res.push(tmpstr);
            return;
        }
        if(n !== left) bfs(tmpstr+'(', left+1, right)
        
        if(left > right) bfs(tmpstr+')', left, right+1)   
    }
};
