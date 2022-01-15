//traer la DB
const db = require('../models');

//SELECT * FROM libro
// Esto es uan función anónima de tipo arrow function guardada en una variable llamada getBooks...por lo tanto: es una función llamada getBooks
const getBooks = async () => {
    // Llamo a la DB (Base de datos) 
    const books = await db.libro.findAll({
        include: db.autor
    }).then(result => {
        return result;
    });
    return books;

}

const getBookById = async (id) => {
    console.log('-*-*-*-*-*-*-*-*-*-');
    console.log('El ID que llegó a /api es' + id);
    console.log('-*-*-*-*-*-*-*-*-*-');
    //SELECT * FROM libro WHERE id_libro = 3
    //findByPk = find by primary key
    const book = await db.libro.findByPk(id, {
        include: db.autor
    }).then(result => {
        return result;
    });

    return book;
}

//Exportamos las funciones
module.exports = {
getBooks,
getBookById
}





