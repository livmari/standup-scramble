export const shuffleArray = (array: []) => {
    let randomArray

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i +1))
        randomArray = array[i]
        array[i] = array[j]
        array[j] = randomArray
    }

    return randomArray
}