export const shuffleArray = (array) => {
  // Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const copy = [...array]
  let currentIndex = copy.length

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex], copy[currentIndex]]
  }

  return copy
}
