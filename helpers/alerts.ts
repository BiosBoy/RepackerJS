const { UPLOAD_DIR, ROOT_DIR } = require('../constants/index.ts')

const alerts = {
  compilationStartAlert: () =>
    console.log('\x1b[33m%s\x1b[0m', `STARTING COMPILATION PROCESS! ROOTS: from - ${UPLOAD_DIR}, to - ${UPLOAD_DIR}${ROOT_DIR}`),
  compilationFinishAlert: () => console.log('\x1b[33m%s\x1b[0m', `COMPILATION PROCESS HAS BEEN FINISHED!`)
}

module.exports = alerts
