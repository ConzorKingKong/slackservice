const answer = []
function loop (n, prevArray = [], pos = 0) {
  var array = [0, 1, 2]
  if (prevArray.length >= n) return

  array.forEach(item => {
    var newArray = [...prevArray, item] || [item]
    answer.push(newArray)
    loop(n, newArray, pos +1)
  })
}
loop(3)
console.log(answer)