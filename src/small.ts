const SMALL_KEY = 'SMALL_KEY'

export class Small<T> {
  data: T | null

  constructor (data: T) {
    this.data = data
  }

  async read (): Promise<void> {
    const dataStr = localStorage.getItem(SMALL_KEY)
    if (dataStr === null) {
      this.data = null
      return
    }
    this.data = JSON.parse(dataStr)
  }

  async write (): Promise<void> {
    if (this.data === null) {
      return
    }
    localStorage.setItem(SMALL_KEY, JSON.stringify(this.data))
  }
}
