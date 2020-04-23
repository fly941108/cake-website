// 深度拷贝
export function deepCopy (arr) {
  let newArr = JSON.parse(JSON.stringify(arr))
  return newArr
}
