const booksByCategory = [
  {
    category: 'riqueza',
    books: [
      {
        title: 'Os segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clarson'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'inteligencia emocional',
    books: [
      {
        title: 'Você é insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length

console.log('total of categories:', totalCategories)
for (let category of booksByCategory) {
  console.log(
    `total of the books in ${category.category}: ${category.books.length}`
  )
}

function countAuthors() {
  let authors = []
  for (let countAuthor of booksByCategory) {
    for (let countBooks of countAuthor.books) {
      if (authors.indexOf(countBooks.author) == -1) {
        authors.push(countBooks.author)
      }
    }
  }

  console.log('total of authors:', authors.length)
}
countAuthors()

function booksOfAuthor(author) {
  let books = []
  for (let countBooks of booksByCategory) {
    for (let book of countBooks.books) {
      if(book.author === author){
        books.push(book.title)
      }
    }
  }
  console.log('Books of', `${author}:`, books)
}
booksOfAuthor('Augusto Cury')
booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter')

