const openningBrackets = ['(','[']
const closingBrackets = [')',']']
const brackets = [...openningBrackets,...closingBrackets];
const input = '([])'

const checkBrackets = (input) => {
  let chars = [...input];
  const stack = new Stack()

  try 
  {
    chars.forEach(processCharacter)

    if (!stack.isEmpty()) throw "Some brackets was not closed."
  }
  catch (err)
  {
    console.log(err)
    return false
  }

  return true

  function processCharacter(char) {
    isOpenningBracket(char) 
      ? stack.push(char)
      : matchBrackets(stack.pop(), char)
  }

  function matchBrackets(openning, closing) {
    openningIndex = openningBrackets.indexOf(openning)
    closingIndex = closingBrackets.indexOf(closing)

    if (openningIndex != closingIndex) throw "Closing bracket dont match openning bracket."
  }

  function isOpenningBracket(char){ return openningBrackets.includes(char) }
}

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  isEmpty() {
    return this.count < 1
  }
  
  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }
  
  pop() {
    if (this.isEmpty()) throw "Trying to close a bracket that was not oppened"
    
    this.count--
    return this.items.pop();
  }
  
  peek() {
    return this.items.slice(-1)[0];
  }
}

console.log(checkBrackets(input))
