const adder = new Adder();

adder.setA(1);
adder.setB(2);
adder.add();

moduleA.run(adder);
moduleB.run(adder);
moduleC.run(adder);

const sum = adder.getSum();
console.log(sum);
