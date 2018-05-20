'use strict'

module.exports = function (str, lines) {
  while (lines-- && str) str = removeSingleLine(str)
  return str || ''
}

function removeSingleLine (str) {
  var index = str.indexOf('\r\n')
  if (index !== -1) return str.substr(index + 2)
  index = str.indexOf('\n')
  if (index !== -1) return str.substr(index + 1)
  index = str.indexOf('\r')
  if (index !== -1) return str.substr(index + 1)
  return ''
}
