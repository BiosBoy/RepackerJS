const fs = require('fs')
const writeFile = require('./core/writeFile.ts')
const getFileConfig = require('./helpers/getFileConfig.ts')
const { compilationStartAlert, compilationFinishAlert } = require('./helpers/alerts.ts')

const { UPLOAD_DIR, ROOT_DIR, ENCODING_TYPE, MATCH_PATTERN: { TYPES } } = require('./constants/index.ts')

const parse = () => {
  fs.readdirSync(UPLOAD_DIR).forEach(element => {
    if (element === ROOT_DIR) return 

    fs.readFile(`${UPLOAD_DIR}/${element}`, ENCODING_TYPE, (err, contents) => {
      if (err) {
        console.log('\x1b[31m%s\x1b[0m', `Upload Error! Check paths, please! Error: ${err}`)
        return
      }

      if (element && !TYPES.some(item => element.includes(item))) {
        console.log('\x1b[31m%s\x1b[0m', `Non-Pattern element found! Revert! File Name: ${element}`)
        return
      }

      const { fileDir } = getFileConfig(element, contents)
      console.log(fileDir, 'fileDir')
      if (fs.existsSync(fileDir)) {
        console.log('\x1b[31m%s\x1b[0m', `File is already in folder! File writing is failed. ${fileDir}`)
        return
      }

      writeFile(element, contents)
    })
  })
}

compilationStartAlert()
parse()
compilationFinishAlert()