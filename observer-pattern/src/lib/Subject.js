class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(subscriber => subscriber !== observer);
  }
  notify(data) {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update(data))
    }
  }
}

export default Subject