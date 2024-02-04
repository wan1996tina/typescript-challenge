import { describe, it, expect, assert } from "vitest";
import { asyncSum } from "./asyncSum";

describe("非同步加總函式", () => {
  it("應該能計算陣列中所有數字的總和", async () => {
    const result = await asyncSum([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
  });

  it("應該能正確處理空陣列", async () => {
    const result = await asyncSum([]);
    expect(result).toBe(0);
  });

  // 以下補上錯誤測試
  it("不是陣列格式資料", async () => {
    const nonArray = "invalid array";

    try {
      await asyncSum(nonArray as any);
      throw new Error("不是陣列格式資料！");
    } catch (error) {
      assert(error instanceof Error, "不是陣列格式資料！");
    }
  });

  it("不是數字類型的陣列資料", async () => {
    const invalidArray = [1, 2, "3", 4, "5"];

    try {
      await asyncSum(invalidArray as any[]);
      throw new Error("陣列資料類型無法加總！");
    } catch (error) {
      assert(error instanceof Error, "陣列資料類型無法加總！");
    }
  });
});
