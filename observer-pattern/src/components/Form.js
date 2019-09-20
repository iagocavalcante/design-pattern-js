class Form {
  constructor(store = {}) {
    this.appStore = store
  }

  createMarkup(store) {
    return `<div>
      <form id="add-todo">
        <input id="todo" type="text" name="title">
        <button type="submit">Add</button>
      </form>
    </div>`
  }

  render(selector = 'app') {
    const markup = this.createMarkup(this.store)
    const parent = document.getElementById(selector)

    parent.innerHTML = markup

    this.bindEvents()
  }
  bindEvents() {
    const form = document.getElementById('add-todo')
    form.addEventListener('submit', e => {
      e.preventDefault()

      const el = e.target

      const { value: title } = el.title

      if (!title) {
        return
      }

      const store = this.appStore.get()

      const todoList = [...store.todoList, { id: store.todoList.length++, title }]

      el.title.value = ''

      this.appStore.update({
        ...store,
        todoList
      })
    })
  }
}

export default Form