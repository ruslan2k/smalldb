import { IStorageAdapter } from './types'

export class Memory <T> implements IStorageAdapter {
  data: T

  constructor (data: T) {
    this.data = data
  }

  async read (): Promise<T> {
    return this.data
  }

  async write (data: T): Promise<void> {
    this.data = data
  }
}
