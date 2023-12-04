interface Book {
    title : string;
    author: string;
    publishedYear: number;
}


const simpleBook: Book = {
    title: "The JavaScript Guid",
    author: "Jane Doe",
    publishedYear: 2022
}


interface ExtendedBook extends Book {
    genre : string;
}

const extendedBook: ExtendedBook = {
    title: "The JavaScript Guid",
    author: "Jane Doe",
    publishedYear: 2022,
    genre: "Programming."
}

console.log(simpleBook);
console.log(extendedBook);