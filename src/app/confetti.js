import JSConfetti from 'js-confetti'

export const spawnFullPageConfetti = () => {
  const jsConfetti = new JSConfetti()

  jsConfetti.addConfetti({
    confettiColors: [
      '#0FBA80', '#3B316E', '#E71C77', '#ff85a1', '#00A2CE'
    ],
    confettiNumber: 200
  })
}
