import { IStorageAdapter } from './types'

export class LocalStorage implements IStorageAdapter {
  keyName: string
  data: any = null

  constructor (keyName: string) {
    this.keyName = keyName
  }

  async read (): Promise<any> {
    return this.data
  }

  async write (data: any): Promise<void> {
    this.data = data
  }
}
