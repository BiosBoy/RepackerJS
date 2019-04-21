const fileContentMaker = (name, shape) => `import React from 'react'

class ${name} extends React.Component {
  render() {
    return (
      ${shape}
    )
  }
}

export default ${name}
`

module.exports = fileContentMaker
