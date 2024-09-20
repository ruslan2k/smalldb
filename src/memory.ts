export class Memory <T> {
  data: T | object = {}

  constructor (data: T | object = {}) {
    this.data = data
  }

  async read (): Promise<T | object> {
    return this.data
  }

  async write (data: T): Promise<void> {
    this.data = data
  }
}
