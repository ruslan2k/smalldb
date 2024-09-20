import test from 'node:test'

import { Memory, Small } from '../index'

interface IData {
  messages: string[]
}

test('Small', function () {
  const adapter = new Memory<IData>()
  const db = new Small<IData>(adapter, { messages: [] })
})