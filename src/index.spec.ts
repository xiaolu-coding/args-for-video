

import { test, expect } from 'vitest'
import { add } from './index'


test('should', () => {
  expect(true).toBe(true)
  expect(add(1, 2)).toBe(3)
})