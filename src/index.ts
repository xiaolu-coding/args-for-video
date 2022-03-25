
export function parseArgs(options, args) {
  // 获取Options的key数组
  const keys = Object.keys(options)
  let key = keys[0]
  let value
  
  if (options[key] === Boolean) {
     value = args.includes('-' + key)
  } else if (options[key] === Number) {
     let index = args.indexOf('-' + key)
     value = Number(args[index + 1])
  }
  return {
    [key]: value
  }
}