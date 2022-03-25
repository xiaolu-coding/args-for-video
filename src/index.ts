import { parse } from "./parser"


export function parseArgs(options, args) {
  const keys = Object.keys(options)
  let key = keys[0]

  let value = parse(options, key, args)

  return {
    [key]: value,
  }
}

