function foo(a, b) {
  return Number(a) + Number(b);
}

function bar() {
  console.log(foo(1, '2'));
}

bar();