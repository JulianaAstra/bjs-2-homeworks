// Библиотека
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;    
    }
    fix() {
      this.state = this.state * 1.5;    
    }
    set state (newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
      this._state = newState;
      }
    }
    get state() {
      return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    
    findBookBy(type, value) {
      let book = null;
      Object.values(this.books).forEach(function (item) {
        if (item[type] === value) {
          book = item;
        }
      });    
      return book;    
    }

    giveBookByName(bookName) {
      let idx = this.books.findIndex((elem) => elem.name === bookName);

      if (idx >= 0) {
        let book = this.books[idx];
        this.books.splice(idx, 1);
        return book;
      } 
        return null;      
    }
}

// Журнал успеваемости

class Student {
  constructor (name) {
  this.name = name;
  this.marks = {};
  }

  addMark (mark, subject) {
    if (mark >= 2 && mark <= 5) {

      if (!this.marks.hasOwnProperty(subject)) {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
        
      } else {
        this.marks[subject].push(mark);
      }
    }
  }

  getAverageBySubject (subject) {
    if (!this.marks.hasOwnProperty(subject)) {
      return 0;
    }
    return this.marks[subject].reduce((acc, item, idx, arr) => acc + item / arr.length, 0);
  }

  getAverage () {
    return Object.keys(this.marks).reduce((acc, item, idx, arr) => acc + this.getAverageBySubject(item)/arr.length, 0);
  }

}
