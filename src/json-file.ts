import { IStorageAdapter } from './types'
import { readFile, writeFile, access, constants } from 'node:fs/promises'

export class JsonFile implements IStorageAdapter {
  fileName: string

  constructor (fileName: string) {
    this.fileName = fileName
  }

  async read (): Promise<any> {
    const isExists = await access(this.fileName, constants.F_OK)
      .then(() => true)
      .catch(() => false)
    if (isExists) {
      return await readFile(this.fileName, 'utf8')
    }
    return undefined
  }

  async write (data: any): Promise<void> {
    await writeFile(this.fileName, JSON.stringify(data, null, 2))
  }
}
