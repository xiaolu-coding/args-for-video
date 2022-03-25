

import { test, expect } from 'vitest'
import { add } from './index'


// 需求分析
// -l -p 8080 -d /usr/logs

test('happy path', () => {
  const options = {
    l: Boolean,
    p: Number,
    d: String,
  }
  const args = parseArgs(options, ['-l', '-p', '8080', '-d', '/usr/logs'])
  expect(args).toEqual({
    l: true,
    p: 8080,
    d: '/usr/logs'
  })
})

test('should', () => {
  expect(true).toBe(true)
  expect(add(1, 2)).toBe(3)
})