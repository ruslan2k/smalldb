import { expect, test } from 'vitest'
import { JsonFile, Small } from '../src/index'

test('create new db', async () => {
  const filePath = './.db/db.json'
  const adapter = new JsonFile(filePath)
  const db = new Small(adapter)

  expect(typeof db).toBe('object')
  expect(db.data).toEqual(undefined)

  await db.read()
  if (db.data === undefined) {
    db.data = { users: [] }
    await db.write()
  }
})
