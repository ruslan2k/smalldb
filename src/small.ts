import { IStorageAdapter } from './types'

export class Small<T> {
  data: T
  adapter: IStorageAdapter

  constructor (storageAdapter: IStorageAdapter, data: T) {
    this.adapter = storageAdapter
    this.data = data
  }

  async read (): Promise<void> {
    this.data = await this.adapter.read()
  }

  async write (): Promise<void> {
    await this.adapter.write(this.data)
  }
}
