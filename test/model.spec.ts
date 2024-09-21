import { expect, test } from 'vitest'
import { Memory, Small } from '../src'

class Model {
  name: string
  constructor (name: string) {
    this.name = name
  }
}

class User extends Model {
  id: string
  name: string
  constructor (name: string) {
    super(name)
    this.name = name
    this.id = id
  }

  async create (): Promise<void> { }

  async findAll (): Promise<User[]> {
    return []
  }
}

test('create new db', async () => {
  const adapter = new Memory()
  const db = new Small(adapter, { users: [] })
  await db.write()

  const user = new User('test')
  await user.create()
})
