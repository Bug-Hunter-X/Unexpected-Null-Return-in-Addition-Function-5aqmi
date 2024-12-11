function foo(a, b) {
  a = a === null ? 0 : a; // Handle null values by setting them to 0
  b = b === null ? 0 : b; 
  return a + b; 
}
//Alternative solution using exception handling
function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Inputs cannot be null'); 
  }
  return a + b; 
}