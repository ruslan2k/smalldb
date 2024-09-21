import { expect, test } from 'vitest'
import { Memory, Small } from '../src/index'

test('create new db', () => {
  const adapter = new Memory()
  const db = new Small(adapter)

  expect(typeof db).toBe('object')
  expect(db.data).toEqual(undefined)
})

test('create new db with data', () => {
  const adapter = new Memory()
  const db = new Small(adapter, { name: 'test' })

  expect(typeof db).toBe('object')
  expect(db.data).toEqual({ name: 'test' })
})
