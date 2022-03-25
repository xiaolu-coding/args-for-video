
export function parseArgs(options, args) {

  const value = args.includes('-l')

  return {
    l: value
  }

}