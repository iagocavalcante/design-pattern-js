import Subject from './Subject'

class Store extends Subject {
  constructor() {
    super()
    this.store = {}
  }
  
  update(data = {}) {
    this.store = Object.assign(this.store, data)
    this.notify(this.store)
  }
  
  get() {
    return this.store
  }
}

export default Store
