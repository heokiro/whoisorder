export default function getPeople(arr, min, max) {
  if (min === undefined) min = 0;
  if (max === undefined) max = arr.length;
  let result = [];
  for (let i = 0; i < 2; i++) {
    const idx = parseInt(Math.random() * (Number(max) - Number(min)));
    if (i > 0 && result[0].birth === arr[idx].birth) {
      i--;
    } else {
      result.push(arr[idx]);
      // arr.splice(idx, 1);
      max = arr.length;
    }
  }
  return result;
}
// 배열에서 엘리먼트 2개 추출하고
// 2개 추출한 엘리먼트를 기존 배열에서 제외해줘야 한다.
