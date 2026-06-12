import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

let failed = 0

function assert(label, actual, expected) {
  if (actual === expected) {
    console.log(`  ✓ ${label}`)
  } else {
    console.error(`  ✗ ${label}`)
    const aLines = actual.split('\n')
    const eLines = expected.split('\n')
    const maxLen = Math.max(aLines.length, eLines.length)
    for (let i = 0; i < maxLen; i++) {
      if (aLines[i] !== eLines[i]) {
        console.error(`    line ${i + 1}:`)
        console.error(`      expected: ${eLines[i] ?? '(missing)'}`)
        console.error(`      got:      ${aLines[i] ?? '(missing)'}`)
        break
      }
    }
    failed++
  }
}

console.log('\nBuilding tokens...')
execSync('node sd.config.js', { cwd: root, stdio: 'inherit' })

console.log('\nRunning snapshot tests...')

const cssActual = readFileSync(join(root, 'dist/tokens.css'), 'utf8')
const cssExpected = readFileSync(join(root, 'test/snapshots/tokens.css'), 'utf8')
assert('tokens.css matches snapshot', cssActual, cssExpected)

const jsActual = readFileSync(join(root, 'dist/tokens.js'), 'utf8')
const jsExpected = readFileSync(join(root, 'test/snapshots/tokens.js'), 'utf8')
assert('tokens.js matches snapshot', jsActual, jsExpected)

if (failed > 0) {
  console.error(`\n${failed} test(s) failed.`)
  console.error('If the change is intentional, run: npm run test:update')
  process.exit(1)
} else {
  console.log('\nAll tests passed.')
}
