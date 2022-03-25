

import { test, expect } from 'vitest'
import { parseArgs } from './index'


// 需求分析
// -l -p 8080 -d /usr/logs

// tasking 任务拆分
// happy path
// -l -> true

test('当我们给定一个 -l 的时候， 应该返回 true', () => {
  const options = {
    'l': Boolean
  }

  const args = parseArgs(options, ['-l'])
  expect(args).toEqual({
    l: true
  })
})

// -p -> 8080

test('当我们给定一个 -p 的时候，应该返回数字类型', () => {
  const options = {
    p: Number
  }

  const args = parseArgs(options, ['-p', '8080'])
  expect(args).toEqual({
    p: 8080
  })
})
// -d -> /usr/logs

test('当我们给定一个 -d 的时候，应该返回字符串类型', () => {
  const options = {
    d: String
  }

  const args = parseArgs(options, ['-d', '/usr/logs'])
  expect(args).toEqual({
    d: '/usr/logs'
  })
})

// sad path
// -l r  
// -p 8080 9090 

// test('happy path', () => {
//   const options = {
//     l: Boolean,
//     p: Number,
//     d: String,
//   }
//   const args = parseArgs(options, ['-l', '-p', '8080', '-d', '/usr/logs'])
//   expect(args).toEqual({
//     l: true,
//     p: 8080,
//     d: '/usr/logs'
//   })
// })
