const list = [10, 15, 3, 7]
const result = 17

export const findSummands = (list, result) => {
 return list.map(number => {
   const diff = result - number
   return list.find(n => n === diff)
 }).filter(item => item).sort()
}
