import {
  expect,
  test
} from 'vitest'
import { Memory, Small, reandomId } from '../src'

class Model {
  db: { data: { [key: string]: any } }
  table: string
  constructor (db: any, table: string) {
    this.db = db
    this.table = table
  }

  async createSchema (): Promise<void> {
    this.db.data[this.table] = []
  }

  async create (item: object): Promise<object> {
    const newItem = { id: reandomId(), ...item }
    this.db.data[this.table].push(newItem)

    return newItem
  }

  async findById (/* id: string */): Promise<Error> {
    throw new Error('Not implemented')
  }
}

class User extends Model {
  constructor (db: Small<any>) {
    super(db, 'users')
  }
}

interface IData {
  users: Array<{ name: string }>
}

test('create new db', async () => {
  const adapter = new Memory()
  const db = new Small<IData>(adapter, { users: [] })
  await db.write()

  const userModel = new User(db)
  // await userModel.createSchema()
  await userModel.create({ name: 'John Doe' })
  await userModel.create({ name: 'Jane Doe' })

  expect(db.data?.users).toHaveLength(2)
})
