const path = require('path')

module.exports = {
  UPLOAD_DIR: process.argv[2],
  ROOT_DIR: 'RepackedFiles',
  FILE_CONTENT_MAKER:
  (process.argv.some(arg => arg.includes('insert:')) &&
    process.argv.find(arg => arg.includes('insert:')).substr(7)) ||
    path.resolve(__dirname, '../core/fileContentMaker.ts'),
  MATCH_PATTERN: {
    TYPES: ['.svg', '.html', '.css', '.sass', '.less', '.scss', '.js', '.jsx', '.ts', '.tsx', '.txt'],
    pattern:
      (process.argv.some(arg => arg.includes('pattern:')) &&
        process.argv.find(arg => arg.includes('pattern:')).substr(8)) ||
      '(<path.*?/>)|(<polygon.*?/>)',
    flags:
      (process.argv.some(arg => arg.includes('flags:')) &&
        process.argv.find(arg => arg.includes('flags:')).substr(6)) ||
      'i'
  },
  ENCODING_TYPE: 'utf8'
}
