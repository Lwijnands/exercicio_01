function veriftrian(a, b, c) {
    if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
      return 'none'
    }
    else if ((a === b) && (a === c)) {
      return 'equilateral'
    }
    else if (a === b) {
      return 'isosceles'
    }
    else if (a === c) {
      return 'isosceles'
    }
    else if (b === c) {
      return 'isosceles'
    }
  }
  console.log(veriftrian(1, 1, 3))
