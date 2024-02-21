let tab = [1,1,1,2,2,4,5,6]
function removeDuplicates(array) {
    return Array.from(new Set(array))
}
const result = removeDuplicates(tab)
console.log(result)
