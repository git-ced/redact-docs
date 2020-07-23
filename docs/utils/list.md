---
id: list
title: Available lists of words that you can use
sidebar_label: Available lists
---

Redact offers you a highly consumable list of words that you can use to add your blacklist or whitelist. The data structure for this list is an array of strings.

> The list comes with different language, but as of now only english and filipino are supported.

## Import

```javascript
import { list } from '@princedev/redact';
```

## Profanity

List of curse words, bad words, and other obscenities.

### English

```javascript
const englishProfanity = list.english.profanity;
```
<a href="https://github.com/git-ced/redact/blob/master/src/lists/profanity/english.ts" target="_blank" rel="noreferrer noopener">
  <code>list.english.profanity</code> - See the list here
</a>

### Filipino

```javascript
const filipinoProfanity = list.filipino.profanity;
```

<a href="https://github.com/git-ced/redact/blob/master/src/lists/profanity/filipino.ts" target="_blank" rel="noreferrer noopener">
  <code>list.filipino.profanity</code> - See the list here
</a>

## Sexually Explicit

List of sexually explicit words like body parts, sexual act, and sexual content.

### English

```javascript
const englishSexual = list.english.sexual;
```
<a href="https://github.com/git-ced/redact/blob/master/src/lists/sexual/english.ts" target="_blank" rel="noreferrer noopener">
  <code>list.english.sexual</code> - See the list here
</a>

### Filipino

```javascript
const filipinoSexual = list.filipino.sexual;
```

<a href="https://github.com/git-ced/redact/blob/master/src/lists/sexual/filipino.ts" target="_blank" rel="noreferrer noopener">
  <code>list.filipino.sexual</code> - See the list here
</a>