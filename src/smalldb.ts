const SMALLDB_KEY = 'SMALLDB_KEY'

export class SmallDb<T> {
  data: T | null

  constructor (data: T) {
    this.data = data
  }

  async read (): Promise<void> {
    const dataStr = localStorage.getItem(SMALLDB_KEY)
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
    localStorage.setItem(SMALLDB_KEY, JSON.stringify(this.data))
  }
}
