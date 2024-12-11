function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is the buggy line
  }
  return a + b; 
}