import { evenOrOdd } from "@/playground";

describe("testing basic math", () => {
  it("cand add two numbers", () => {
    expect(2 + 2).toBe(4);
  });

  it("is able to substract two numbers", () => {
    expect(5 - 3).toBe(2);
  });
});

describe("evenOrOdd", () => {
  describe("when the number is even", () => {
    it("expect to be even", () => {
      expect(evenOrOdd(4)).toBe("even");
    });
  });

  describe("when the number is odd", () => {
    it("expect to be odd", () => {
      expect(evenOrOdd(3)).toBe("odd");
    });
  });
});
