class Solution {
    static String last_word(String param_1) {
    str = str.trim(); 
  
    let startIndex = str.lastIndexOf(' ');
  
    if (startIndex === -1) {
      console.log(str);
      return;
    }
  
    while (startIndex >= 0 && (str[startIndex] === ' ' || str[startIndex] === '\t')) {
      startIndex--;
    }
  
    console.log(str.substring(startIndex + 1));
  
  const inputString = "   Hello    World   ";
  console.log("Last word:");
  displayLastWord(inputString);
    }
  }
  