document.addEventListener("DOMContentLoaded", function() {
    const bookshelfId = '1002'; 
    const apiKey = 'AIzaSyDrRfySObJpjK4gu_pY4c9L75QkhHUHhQg'; 
    const url = `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${1002}/volumes?key=${AIzaSyDrRfySObJpjK4gu_pY4c9L75QkhHUHhQg}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => displayBookshelf(data))
        .catch(error => {
            console.error("Error fetching bookshelf:", error);
            const bookshelfDiv = document.getElementById("bookshelf");
            bookshelfDiv.innerHTML = "<p>Error retrieving bookshelf data.</p>";
        });
});

function displayBookshelf(data) {
    const bookshelfDiv = document.getElementById("bookshelf");
    bookshelfDiv.innerHTML = ''; // Clear previous bookshelf

    if (!data.items || data.items.length === 0) {
        bookshelfDiv.innerHTML = "<p>No books found in your bookshelf.</p>";
        return;
    }

    data.items.forEach(book => {
        const title = book.volumeInfo.title;
        const imageUrl = book.volumeInfo.imageLinks?.thumbnail || 'default-thumbnail.jpg';
        const bookId = book.id;

        const bookDiv = document.createElement("div");
        bookDiv.className = "book"; // Add class for styling if needed
        bookDiv.innerHTML = `
            <a href="bookdetails.html?id=${1002}">${title}</a>
            <img src="${imageUrl}" alt="${title}" />
        `;
        bookshelfDiv.appendChild(bookDiv);
    });
}
