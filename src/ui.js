class UI {
    constructor() {
        this.author = document.querySelector('.author')
        this.book = document.querySelector('.book')
        this.card = document.querySelector('.card-insert')
        this.ul = document.querySelector('.show-book')
        this.list = document.querySelector('.list')
        this.btn = document.querySelector('.post-submit')
        this.id = document.getElementById('id')
        this.span = document.querySelector('.span-bottom')
        this.formState = 'add'
    }


    showBook(books) {
        let output = ''

        books.forEach(book => {
            output +=
                `
                  <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${book.book}</h4>
                        <p class="card-text">${book.author}</p>
                        <a class="edit card-link" href="#" data-id="${book.id}">
                        <i class="fa fa-pencil"></i>
                        </a>

                        <a class="delete card-link" href="#" data-id="${book.id}">
                        <i class="fa fa-remove"></i>
                          </a>
                    </div
                  </div>
                `

        })
        this.ul.innerHTML = output

    }

    showAlert(msg, className) {
        this.clearAlert()
        const h1 = document.querySelector('.lead')
        const div = document.createElement('div')
        div.className = className
        div.appendChild(document.createTextNode(msg))
        this.card.insertBefore(div, h1)
        setTimeout(() => {
            this.clearAlert()
        }, 2000);
    }

    clearAlert() {

        const currentAlert = document.querySelector('.alert')
        if (currentAlert) {
            currentAlert.remove()
        }
    }

    fillForm(data) {
        this.book.value = data.book
        this.author.value = data.author
        this.id.value = data.id

        this.changeFormState('edit')

    }

    changeFormState(type) {
        if (type === 'edit') {
            this.btn.textContent = 'update book'
            this.btn.classList = 'Update-Book btn btn-warning'
            const span = document.querySelector('.span-bottom')
            const form = document.querySelector('form')


            const button = document.createElement('button')
            button.className = 'book-cancel btn btn-light '
            button.appendChild(document.createTextNode('Cancel Edit'))

            form.insertBefore(button, span)

        } else {
            this.btn.textContent = 'Submit'
            this.btn.className = 'post-submit btn btn-primary'
            document.querySelector('.book-cancel').remove()

        }


    }

    clearFields() {
        this.author.value = ''
        this.book.value = ''
    }
}


export const ui = new UI()