import { IStorageAdapter } from './types'

export class Memory <T> implements IStorageAdapter {
  data: T = null as unknown as T

  async read (): Promise<T> {
    return this.data
  }

  async write (data: T): Promise<void> {
    this.data = data
  }
}
