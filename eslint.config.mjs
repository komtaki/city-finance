import gitignore from 'eslint-config-flat-gitignore'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypeScript from 'eslint-config-next/typescript'

const eslintConfig = [
  gitignore(),
  ...nextCoreWebVitals,
  ...nextTypeScript,
]

export default eslintConfig
