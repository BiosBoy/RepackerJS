const fs = require('fs')

const getFileConfig = require('../helpers/getFileConfig.ts')
const { ENCODING_TYPE, UPLOAD_DIR, ROOT_DIR } = require('../constants/index.ts')

const writeFile = (element, contents) => {
  const { fileDir, fileToWrite, fileContent } = getFileConfig(element, contents)

  if (fs.existsSync(fileDir)) {
    console.log('\x1b[31m%s\x1b[0m', `File is already in folder! File writing is failed. ${fileDir}, ${fileToWrite}`)
    return
  }

  const writeConfig = [
    fileToWrite, // file name to create
    fileContent, // generates regular file markup
    ENCODING_TYPE // encoding type only UTF-8 to use!
  ]

  if (!fs.existsSync(`${UPLOAD_DIR}${ROOT_DIR}`)) {
    fs.mkdirSync(`${UPLOAD_DIR}${ROOT_DIR}`)
  }

  fs.mkdirSync(fileDir)
  fs.writeFileSync(...writeConfig)

  console.log('\x1b[32m%s\x1b[0m', `Congratulations! Your File: "${fileToWrite}" has been created successfuly!`)
}

module.exports = writeFile
