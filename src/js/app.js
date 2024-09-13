class duplicatesManager {
  dupArray
  dupArray2
  constructor () {
    this.dupArray = [1, 2, 3]
    this.dupArray2 = [3, 3, 4, 3]
    this.removeDuplicates()
  }

  removeDuplicates () {
    const newArray = []
    this.dupArray = [...this.dupArray, ...this.dupArray2]
    console.log(this.dupArray, 'outside loop')

    for (let i = 0; i < this.dupArray.length; i++) {
      console.log(this.dupArray, 'inside first loop')
      // if (this.ifEqual)
      for (let j = i + 1; j < this.dupArray.length; j++) {
        if (this.ifEqual(this.dupArray[j], this.dupArray[i])) {

          this.dupArray.splice(j, 1)
          console.log(this.dupArray, 'inside seccond loop')
        }
      }
    }
    console.log(this.dupArray, 'finished')
  }

  ifEqual (dupNumber, newNumber) {
    return dupNumber === newNumber
  }
}
const newdupManager = new duplicatesManager()