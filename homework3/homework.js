//Task 1
const countAll = (inputString) => {
  let lettersCount = 0;
  let digitsCount = 0;

  for (let char of inputString) {
    if (isNaN(char) && char != " ") {
      lettersCount++;
    } else if (char != " ") {
      digitsCount++;
    }
  }

  return {LETTERS: lettersCount, DIGITS: digitsCount};
};

// Task 2 Create counter function. Default counter number is 0. It should have these methods

function counterFunction() {
  let count = 0;

  const methods = {
    getCurrentCount: function () {
      return count;
    },

    addCount: function (value) {
      count += value;
    },

    subtractCount: function (value) {
      count -= value;
    },

    resetCount: function () {
      count = 0;
    },
  };

  return methods;
}

const counter = counterFunction();

console.log(counter.getCurrentCount());

counter.addCount(5);
console.log(counter.getCurrentCount());

counter.subtractCount(3);
console.log(counter.getCurrentCount());

counter.resetCount();
console.log(counter.getCurrentCount());

//Task 3
const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genres: ["Sci-Fi", "Action"],
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genres: ["Action", "Crime"],
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genres: ["Sci-Fi", "Drama"],
  },
];
function addMovie(movie) {
  movies.push(movie);
}
function findMoviesByDirector(director) {
  for (let movie of movies) {
    if (movie.director === director) {
      return movie;
    }
  }
}
function findMoviesByYear(year) {
  for (let movie of movies) {
    if (movie.year === year) {
      return movie;
    }
  }
}
function sortMoviesBy(criteria) {
  if (criteria === "title" || criteria === "director") {
    movies.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  } else if (criteria === "year") {
    movies.sort((a, b) => a.year - b.year);
  } else if (criteria === "genres") {
    movies.sort((a, b) => a.genres[0].localeCompare(b.genres[0]));
  } else {
    console.log("Invalid sorting criteria");
  }
}
sortMoviesBy("title");
console.log(movies);

sortMoviesBy("year");
console.log(movies);

function removeMovieByTitle(title) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].title === title) {
      movies.splice(i, 1);
    }
  }
}

//Task 4
const library = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ISBN: "1234567890",
    status: "available",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    ISBN: "2345678901",
    status: "borrowed",
  },
];
function addBook(book) {
  library.push(book);
}
function borrowBook(ISBN) {
  for (let book of library) {
    if (book.ISBN === ISBN) {
      book.status = "borrowed";
    }
  }
}
function returnBook(ISBN) {
  for (let book of library) {
    if (book.ISBN === ISBN) {
      book.status = "available";
    }
  }
}
function findBooksByAuthor(author) {
  for (let book of library) {
    if (book.author === author) {
      return book;
    }
  }
}
function listAvailableBooks() {
  return library.filter((book) => book.status === "available");
}
function listBorrowedBooks() {
  return library.filter((book) => book.status === "borrowed");
}

//Task  5
const students = [
  {name: "Alice", ID: 1, grades: [85, 90, 78]},
  {name: "Bob", ID: 2, grades: [92, 88, 84]},
];

function addStudent(student) {
  students.push(student);
}
function addGrade(ID, grade) {
  for (let student of students) {
    if (student.ID === ID) {
      student.grades.push(grade);
    }
  }
}
function calculateAverageGrade(ID) {
  for (let student of students) {
    if (student.ID === ID) {
      const sum = student.grades.reduce((sum, grade) => sum + grade, 0);
      return sum / student.grades.length;
    }
  }
  return null;
}
function findHighestGrade(ID) {
  for (let student of students) {
    if (student.ID === ID) {
      return Math.max(...student.grades);
    }
  }
  return null;
}
function findLowestGrade(ID) {
  for (let student of students) {
    if (student.ID === ID) {
      return Math.min(...student.grades);
    }
  }
  return null;
}
function getStudentsAboveThreshold(threshold) {
  return students.filter((student) => {
    const average = calculateAverageGrade(student.ID);
    return average > threshold;
  });
}

//Task 6
const cart = [];
function addProduct(product) {
  cart.push(product);
}
function removeProduct(SKU) {
  const productIndex = cart.findIndex((p) => p.SKU === SKU);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }
}
function updateQuantity(SKU, quantity) {
  const product = cart.find((product) => product.SKU === SKU);
  if (product) {
    product.quantity = quantity;
  }
}
function calculateTotal() {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}
function getCartDetails() {
  return cart;
}

const discountCodes = {
  SUMMER10: 0.1,
  SUMMER21: 0.15,
  SUMMERG20: 0.2,
};

function applyDiscount(discountCode) {
  const discount = discountCodes[discountCode];
  if (discount) {
    const total = calculateTotal();
    return total * (1 - discount);
  } else {
    console.log("Invalid discount code");
    return calculateTotal();
  }
}
// Test the functions
addProduct({name: "Laptop", SKU: "001", price: 1000, quantity: 1});
addProduct({name: "Phone", SKU: "002", price: 500, quantity: 2});
console.log(getCartDetails());
updateQuantity("001", 2);
console.log(calculateTotal());
removeProduct("002");
applyDiscount("SUMMER21");
