import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

console.log('Building tokens...')
execSync('node sd.config.js', { cwd: root, stdio: 'inherit' })

console.log('Updating snapshots...')

writeFileSync(
  join(root, 'test/snapshots/tokens.css'),
  readFileSync(join(root, 'dist/tokens.css'), 'utf8')
)
writeFileSync(
  join(root, 'test/snapshots/tokens.js'),
  readFileSync(join(root, 'dist/tokens.js'), 'utf8')
)

console.log('Snapshots updated.')
