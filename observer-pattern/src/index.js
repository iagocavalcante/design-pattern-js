import Store from './lib/Store'
import todoList from './store-default/Todo'
import List from './components/List'
import Form from './components/Form'

const AppStore = new Store()
const listRender = new List()
const todoForm = new Form(AppStore)

AppStore.update({ todoList })

AppStore.subscribe(listRender)

listRender.render(AppStore.get(), 'todo-list-container')
todoForm.render('add-todo-container')
