import nextElementInList from "@/utils/nextElementInList.js";

describe("nextElementInList", () => {
  it("get next element in list", () => {
    const list = ["A", "B", "C", "D"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });
});
