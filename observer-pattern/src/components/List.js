import Observer from '../lib/Observer'

class List extends Observer {
  createMarkup(store) {
    return `<ul>
      ${store.todoList.map(todo => `<li>${todo.title}</li>`).join('\n')}
    </ul>`
  }

  render(store, selector = 'app') {
    const markup = this.createMarkup(store)
    const parent = document.getElementById(selector)

    parent.innerHTML = markup
  }

  update(store) {
    this.render(store, 'todo-list-container')
  }
}

export default List
