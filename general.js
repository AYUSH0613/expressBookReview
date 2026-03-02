const axios = require('axios');

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:5000/');
    return response.data;
  } catch (error) {
    return { error: "Failed to fetch books" };
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    return { error: "ISBN not found" };
  }
}

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:5000/author/${author}`);
    return response.data;
  } catch (error) {
    return { error: "Author not found" };
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:5000/title/${title}`);
    return response.data;
  } catch (error) {
    return { error: "Title not found" };
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
