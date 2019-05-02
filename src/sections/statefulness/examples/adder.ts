class Adder {
  private a: number = 0;
  private b: number = 0;
  private sum: number = 0;

  setA(a: number) {
    this.a = a;
  }
  setB(b: number) {
    this.b = b;
  }
  add() {
    this.sum = this.a + this.b;
  }
  getSum(): number {
    return this.sum;
  }
  reset() {
    this.a = this.b = this.sum = 0;
  }
}
