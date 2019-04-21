const { FILE_CONTENT_MAKER, UPLOAD_DIR, ROOT_DIR } = require('../constants/index.ts')
const processHandlers = require('../core/processHandlers.ts')
const fileContentMaker = require(FILE_CONTENT_MAKER)

const getFileConfig = (element, contents) => {
  const { getName, getContent } = processHandlers

  if (typeof fileContentMaker !== 'function') {
    console.log('\x1b[31m%s\x1b[0m', 'The function for processing the File body is corrupted! Please, check it or its path.')
    throw Error
  }
  
  const fileName = getName(element)
  const fileContent = fileContentMaker(fileName, getContent(contents))
  const fileDir = `${UPLOAD_DIR}${ROOT_DIR}/${fileName}`
  const fileToWrite = `${fileDir}/index.tsx`

  return {
    fileContent,
    fileDir,
    fileToWrite
  }
}

module.exports = getFileConfig
