class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5; 
    }

    set state(condition) {
        if (condition < 0) {
            this._state = 0;
        } 
        else if (condition > 100) {
            this._state = 100;
        }
        else {
            this._state = condition;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find((book) => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        let result = this.findBookBy('name', bookName);
        this.books.splice(this.books.indexOf(this.findBookBy('name', bookName)), 1);
        return result || null;
    }
 }

 class Student {
    constructor(name) {
        this.name = name;
        this.subject = {};
    }

    addMark(mark, subjectName) {
        if (isNaN(parseFloat(mark)) && !isFinite || (mark > 5) || (mark < 1)) {
            return "Ошибка, оценка должна быть числом от 1 до 5";
        }
        if (this.subject[subjectName] === undefined) {
            this.subject[subjectName] = [mark];
        } else {
            this.subject[subjectName].push(mark);
        }
    }

    getAverageBySubject(subjectName) {
        if (this.subject[subjectName] === undefined) {
            return "Несуществующий предмет";
        }
        return this.subject[subjectName].reduce((acc, item) => (acc + item), 0) / this.subject[subjectName].length;
    } 
    getAverage() {
        let avg = 0;
        for (let subjectName in this.subject) {
            avg += this.subject[subjectName].reduce((acc, item) => (acc + item), 0) / this.subject[subjectName].length;
        }
        return avg / Object.keys(this.subject).length;
    }
    exclude(reason) {
        delete this.subject;
        this.excluded = reason;
    }
 }