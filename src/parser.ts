const map = initMap()

function initMap() {
  const map = new Map()
  map.set(Boolean, parseBoolean)
  map.set(Number, parseNumber)
  map.set(String, parseString)
  return map
}

export function parse(options, key, args) {
  let parseHandler = map.get(options[key])
  return parseHandler(args, key)
}

// 分析是否布尔
function parseBoolean(args, key) {
  return args.includes("-" + key)
}
// 分析Number和String
function parseNumber(args, key) {
  return Number(getFlagValue(args, key))
}

function parseString(args, key) {
  return getFlagValue(args, key)
}

function getFlagValue(args, key) {
  let flagIndex = args.indexOf("-" + key)
  return args[flagIndex + 1]
}
