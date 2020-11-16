import { http } from './api';
import { ui } from './ui'


document.addEventListener('DOMContentLoaded', getBooks)

document.querySelector('.post-submit').addEventListener('click', submitPost)

document.querySelector('.show-book').addEventListener('click', enableEdit)
document.querySelector('form').addEventListener('click', cancelEdit)
document.querySelector('.show-book').addEventListener('click', deleteBook)

function getBooks() {
    http.get(`http://localhost:3000/posts`)
        .then(books => {
            ui.showBook(books)

        })
        .catch(err => console.log(err))
}

function submitPost(e) {
    const book = document.querySelector('.book').value

    const author = document.querySelector('.author').value
    const id = document.querySelector('#id').value


    if (book === '' || author === '') {
        ui.showAlert('please put the rigth value', 'alert alert-danger')

    } else {

        const books = {
            book,
            author
        }
        if (id === "") {

            http.post(`http://localhost:3000/posts`, books)
                .then(book => {
                    ui.showAlert('book Added', 'alert alert-success')

                    getBooks()
                })
                .catch(err => console.log(err))
        } else {
            http.put(`http://localhost:3000/posts/${id}`, books)
                .then(book => {
                    ui.showAlert('book Upddated', 'alert alert-success')
                    ui.changeFormState('add')

                })
                .catch(err => console.log(err))

        }


    }




    ui.clearFields()

}


function enableEdit(e) {
    if (e.target.parentElement.classList.contains('edit')) {
        const author = e.target.parentElement.previousElementSibling.textContent
        const book = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        const id = e.target.parentElement.dataset.id


        const data = {
            book,
            author,
            id
        }

        ui.fillForm(data)

    }

}

function deleteBook(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id
        http.delete(`http://localhost:3000/posts/${id}`)
            .then(res => {
                if (confirm('you about to delete a book')) {
                    e.target.parentElement.parentElement.remove()
                    ui.showAlert('book deleted!!', 'alert alert-warning')

                }
            })
            .catch(err => console.log(err))
    }
}

function cancelEdit(e) {
    if (e.target.classList.contains('book-cancel')) {
        ui.changeFormState('add')
    }

}