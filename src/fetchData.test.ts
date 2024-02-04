import { describe, it, expect, assert } from "vitest";
import { fetchData } from "./fetchData";

describe("非同步取得資料", () => {
  it("應該能從提供的 URL 取得資料", async () => {
    const data = await fetchData(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(data).toHaveProperty("id");
  });

  // 補上錯誤測試
  it("測試錯誤網址", async () => {
    try {
      // 使用一個不存在的網址
      await fetchData("https://example.com/xxxxx");
      throw new Error("取得資料失敗！");
    } catch (error) {
      // 預期這裡會捕捉到錯誤
      assert(error instanceof Error, "取得資料失敗！");
    }
  });
});
