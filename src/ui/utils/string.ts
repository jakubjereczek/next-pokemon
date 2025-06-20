/* eslint-disable import/prefer-default-export */

export function formatNumber(num: number, length: number = 3): string {
  return num.toString().padStart(length, '0');
}
