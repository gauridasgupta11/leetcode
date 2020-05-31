/*
Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.


Example 1:                Example 2:                    Example 3:                  Example 4:                      Example 5:
Input: "()"               Input: "()[]{}"               Input: "(]"                 Input: "([)]"                   Input: "{[]}"
Output: true              Output: true                  Output: false               Output: false                   Output: true
*/


function isValid(str) {
   
    let matching, stack =[];
    let open = ['[', '{', '('];
    let close = [']', '}', ')'];
    
    for(let i=0; i<str.length; i++){
        if(close.indexOf(str[i]) > -1){
           matching = open[close.indexOf(str[i])];
           if(stack.length == 0 || (stack.pop() != matching)){
                return false;
            }
        }else{
            stack.push(str[i]);
        }
    }
    return (stack.length === 0)
    
};
