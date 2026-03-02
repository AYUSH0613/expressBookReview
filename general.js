const axios = require('axios');

// Get all books
async function getAllBooks() {
  const response = await axios.get('http://localhost:5000/');
  return response.data;
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
  return response.data;
}

// Get books by author
async function getBooksByAuthor(author) {
  const response = await axios.get(`http://localhost:5000/author/${author}`);
  return response.data;
}

// Get books by title
async function getBooksByTitle(title) {
  const response = await axios.get(`http://localhost:5000/title/${title}`);
  return response.data;
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
