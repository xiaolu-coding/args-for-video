
export function parseArgs(options, args) {
  // 获取Options的key数组
  const keys = Object.keys(options)
  const key = keys[0]
  const value = args.includes('-' + key)

  return {
    l: value
  }

}