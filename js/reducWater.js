let string = "esgi"
function filterInput(input) {
  // Add your filtering logic here
  // For example, you can use regular expressions to remove unwanted characters
  const filteredInput = input.replace(/[^\w\s]/gi, "")
  return filteredInput
}
console.log(filterInput(string))
