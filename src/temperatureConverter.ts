/**
 * 將攝氏溫度轉換為華氏溫度
 * @param celsius - 攝氏溫度
 * @returns 華氏溫度
 */
export function celsiusToFahrenheit(celsius: number): number {
  // 1. 華氏要換算成攝氏時，要先減 32 後，再乘以 5/9。
  // 2. 攝氏要換算成華氏時，要先乘以 9/5，再加上 32。
  return (celsius * 9) / 5 + 32;
}
