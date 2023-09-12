function f() {
  const foo = () => {
    function name() {
      console.log(this);
    }
    name();
  };

  return foo;
}

const obj = {
  name: 'obj',
};

let obj1 = {
  name: 123,
  foo1: f.call(obj),
};

obj1.foo1();
