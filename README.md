1. indata i typ av array
2. utdata utan dupletter
3. Använd inte typen Set.
4. Ta två arrayer, skapa en array med båda arrayers element utan dupletter. 



TESTRapport:
Krav 1, 2:
Kod:
class duplicatesManager {
  dupArray
  constructor() {
    this.dupArray = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 2]
    this.removeDuplicates()
  }
  removeDuplicates() {
    let newSet = new Set
    const newArray = []
    for (let i = 0; i < this.dupArray.length; i++) {
      newSet.add(this.dupArray[i])
    }
  for (const num1 of newSet) {
    newArray.push(num1)
  }
    console.log(newArray)
  }
}
const newdupManager = new duplicatesManager()

Status: OK
Kommentar: Skapar Set, pushar till Array, loggar array

Krav 3: 
Kod:
class duplicatesManager {
  dupArray
  constructor() {
    this.dupArray = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 2]
    this.removeDuplicates()
  }

  removeDuplicates() {
    for (let i = 0; i < this.dupArray.length; i++) {
      for (let j = i + 1; j < this.dupArray.length; j++) {
        if (this.ifEqual(this.dupArray[j], this.dupArray[i])) {
          this.dupArray.splice(j, 1)
        }
      }
    }
  console.log(this.dupArray)
}

  ifEqual(dupNumber, newNumber) {
    return dupNumber === newNumber
  }
}
const newdupManager = new duplicatesManager()

Status: OK
Kommentar: Istället för pop använde vi splice.





Ideas:
class duplicatesManager {
  dupArray
  constructor() {
    this.dupArray = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 2]
    this.removeDuplicates()
  }

  removeDuplicates() {
    // let newSet = new Set
    // const newArray = []
    for (let i = 0; i < this.dupArray.length; i++) {
      // newSet.add(this.dupArray[i])
      for (let j = i + 1; j < this.dupArray.length; j++) {
        if (this.ifEqual(this.dupArray[j], this.dupArray[i])) {
          this.dupArray.splice(j, 1)
        }
      }
      //   for (let j = 1; j < this.dupArray.length; j++) {
      //     if (this.ifDifferent(this.dupArray[j], numb1)) {
      //       newSet.push(this.dupArray[j])
      //     }
      //   }
      // }
    }
  // for (const num1 of newSet) {
  //   newArray.push(num1)
  // }
  console.log(this.dupArray)
}

  ifEqual(dupNumber, newNumber) {
    return dupNumber === newNumber
  }
}
const newdupManager = new duplicatesManager()