---
id: blacklist
title: Adding your blacklist
sidebar_label: Blacklist
---

Redact is designed to be easily installed and used in your project. Just follow these simple steps below.

## Prerequisites

<ol>
  <li>
    <p>
      Ensure you have the latest version of Node installed. We also recommend you install Yarn as well.
    </p>
    <blockquote>
      Node >= 8.x and Yarn >= 1.5.
    </blockquote>
  </li>
  <li>
    <p>
      Create a project, if none exists, and change your directory to this project's root.
    </p>
  </li>
</ol>

## Installing Redact

This package is available through the [npm registry](https://www.npmjs.com/package/@princedev/redact). To install redact, on the command line, run:

### NPM

```bash
$ npm -i @princedev/redact
```

### Yarn

```bash
$ yarn add @princedev/redact
```

This will create the `node_modules` directory in your current directory (if one doesn’t exist yet) and will download the package to that directory.

> If there is no `package.json` file in the local directory, the latest version of the package is installed. If there is a `package.json` file, npm installs the latest version that satisfies the semver rule declared in `package.json`.

## Import

Start using the library by importing it:

### CommonJS

```javascript
const redact = require('@princedev/redact');
```

### ES6

```javascript
import { sum, difference } from '@princedev/redact';
```

By now, you should be able to use redact.
