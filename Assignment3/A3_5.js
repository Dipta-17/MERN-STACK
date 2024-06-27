// 5. Advanced Class Features:
//  Create a Library class with properties name and books (an array of book
// objects).
//  Each book object should have title, author, and year.
//  Add methods to Library class to add a book, remove a book by title, and find
// a book by title.
//  Demonstrate these features with a few books.


class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    add(book) {
      this.books.push(book);
      console.log(`The book "${book.title}" is added to the library.`);
    }
  
    remove(title) {
      const index = this.books.findIndex(b => b.title === title);
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`The book "${title}" is removed from the library.`);
      } else {
        console.log(`The book "${title}" is not found in the library.`);
      }
    }
  
    findBook(title) {
      const book = this.books.find(b => b.title === title);
      if (book) {
        console.log(`Book found: Title: "${book.title}", Author: "${book.author}", Year: "${book.year}"`);
      } else {
        console.log(`The book "${title}" is not found in the library.`);
      }
    }
  }
  
  const l = new Library("Central Library");
  const b1 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", 1997);
  const b2 = new Book("The Power of Your Subconscious Mind", "Joseph Murphy", 2015);
  const b3 = new Book("Life's Amazing Secrets", "Gaur Gopal Das", 2018);
  
  l.add(b1);
  l.add(b2);
  l.add(b3);
  
  console.log("Current books in the library:", l.books);
  
  l.findBook("Life's Amazing Secrets");
  
  l.remove("The Power of Your Subconscious Mind");
  
  console.log("Books in the library after removal:", l.books);
  