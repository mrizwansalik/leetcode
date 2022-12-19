function fibonacci_sequence(num) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = n1 + n2;
  let feb = [];
  while (nextTerm <= num) {
    feb.push(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  return feb;
}
console.log(fibonacci_sequence(5));
