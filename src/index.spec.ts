

import { test, expect } from 'vitest'
import { add } from './index'


// 需求分析
// -l -p 8080 -d /usr/logs

// tasking 任务拆分
// happy path
// -l -> true

test('当我们给定一个 -l 的时候， 应该返回 true', () => {

})

// -p -> 8080

test.todo('当我们给定一个 -p 的时候，应该返回数字类型', () => {

})
// -d -> /usr/logs

test.todo('当我们给定一个 -d 的时候，应该返回字符串类型', () => {

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

test('should', () => {
  expect(true).toBe(true)
  expect(add(1, 2)).toBe(3)
})