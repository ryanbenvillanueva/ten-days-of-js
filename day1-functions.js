/*
 * Create the function factorial here
 */
function factorial(n) {
  let i = 1;
  let factorial = 1;
  
  while (i <= n) {
      factorial *= i;
      i++;
  }
  
  return factorial;
}
