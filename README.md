<h1 align="center">🎲<br/>@compactjs/random</h1>
<h3 align="center">Simple module to generate random values from a given range or array.</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/random" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/random.svg">
  </a>
  <a href="https://github.com/CompactJS/random/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/compactjs/random" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/random#readme">Homepage</a>
  ·
  <a href="https://github.com/CompactJS/random/issues">Report Bug / Request Feature</a>
  ·
</p>

## Table of Contents

- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## Install

### NPM:

```sh
npm install @compactjs/random
```

## Usage

```typescript
/**
 * Returns a pseudo random number between min and max.
 * (min inclusive, max exclusive)
 * Max can be smaller than min.
 * If max is not omitted, between 0 and min.
 * If min is not omitted, between 0 and 1.
 */
function random(min?: number, max?: number): number;

/**
 * Returns a random item from a given array
 * @param choices to select from
 */
function pick(choices: any[]): any;
```

### As module:

```javascript
import { random, pick } from '@compactjs/random';
```

### Example:

```javascript
random(10, 100); // => random value between (including) 10 and 100
random(10); // => random value between 0 and 10
random(); // => random value between 0 and 1

pick([0, 1, 2, 3]); // => picks random value from 0,1,2,3
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/random/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/random/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
