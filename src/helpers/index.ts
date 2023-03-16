// source stack overflow: https://stackoverflow.com/questions/4587061/how-to-determine-if-object-is-in-array#answer-4587130
export function arrayContainsObject(obj: object, list: object[]) {
  return list.filter((item: object) => item == obj).length
}
