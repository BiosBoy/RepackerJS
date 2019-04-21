const {
  MATCH_PATTERN: { pattern, flags }
} = require('../constants/index.ts')

const processHandlers = {
  getName: element => {
    const nameToWrite = element.substr(0, 1).toUpperCase() + element.substr(1, element.length)

    if (!nameToWrite) {
      console.log('\x1b[31m%s\x1b[0m', `${element}, ${nameToWrite} - NO ELEMENT FOUND! REVERT!`)
      return null
    }

    const nameWithoutEphasizes = nameToWrite.replace(/_\w/g, v => v.substr(1, 1).toUpperCase())
    const nameWithotEnding = nameWithoutEphasizes.substr(0, nameWithoutEphasizes.indexOf('.'))

    return nameWithotEnding
  },
  getContent: contents => {
    const regexMatchPattern = new RegExp(pattern, flags)
    const contentToWrite = contents.match(regexMatchPattern)

    const [filePayload = null] = contentToWrite || []

    if (!contentToWrite || !filePayload) {
      console.log('\x1b[31m%s\x1b[0m', `${contents} - MATCH_PATTERN IS COMPROMISED! REVERT!`)
      return null
    }

    return filePayload
  }
}

module.exports = processHandlers
