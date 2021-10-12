const booksByCategory = [
  {
    category: 'Money',
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
        title: 'Pai rico, pai pobre 2',
        author: 'Robert T. Kiyosaki e Sharon L. Lechter'
      }
    ]
  },
  {
    category: 'Emotional Intelligence',
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

let writeCategoryMon = (document.querySelector('#writeCategoryMon').innerHTML =
  booksByCategory[0].books.length)
let writeCategoryEmI = (document.querySelector('#writeCategoryEmI').innerHTML =
  booksByCategory[1].books.length)
let writeTotalCategories = (document.querySelector(
  '#writeTotalCategories'
).innerHTML = totalCategories)

let writeNumberAuthors = document.querySelector('#writeNumberAuthors')
function countAuthors() {
  let authors = []
  for (let countAuthor of booksByCategory) {
    for (let countBooks of countAuthor.books) {
      if (authors.indexOf(countBooks.author) == -1) {
        authors.push(countBooks.author)
      }
    }
  }
  writeNumberAuthors.innerHTML = authors.length
}
countAuthors()

let showButton = document.querySelector('#show').addEventListener('click', show)

function show(showAuthor) {
  showAuthor.preventDefault()
  let authorOp = author.options[author.selectedIndex].value
  function booksOfAuthor(author) {
    let books = []
    for (let countBooks of booksByCategory) {
      for (let book of countBooks.books) {
        if (book.author === author) {
          books.push(book.title)
        }
      }
    }
    let authorsOutput = document.querySelector('#authorsOutput')
    .innerHTML=`<strong>Books of ${author}:</strong><br>` + `<p>`+books.join(`<p>`)
  }
  booksOfAuthor(authorOp)
}
