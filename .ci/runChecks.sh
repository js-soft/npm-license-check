set -e

npm ci
npm run lint:prettier
npm run cdep
npx license-check
npx better-npm-audit audit
