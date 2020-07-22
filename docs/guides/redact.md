---
id: redact
title: Filtering strings or sentences
sidebar_label: Redact
---

This works by replacing blacklisted words with grawlix. A grawlix is string of typographical symbols used to replace/censor words.

## Syntax

`redact(string: string, blacklist: string[], options?: object): string`

### Parameters

`string: string` - Given string/sentence to be filtered.

`blacklist: string[]` - Blacklist

`options` - Additional options that may be passed.

#### Options
<table>
  <tr>
    <th>props</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td><code>grawlix</code></td>
    <td>*</td>
    <td>Character used to replace the blacklisted word.</td>
  </tr>
  <tr>
    <td><code>replaceByLength</code></td>
    <td>true</td>
    <td>Determines if the blacklisted word should be replaced by its word length or only once</td>
  </tr>
  <tr>
    <td><code>caseSensitive</code></td>
    <td>false</td>
    <td>Determines if the check for a blacklisted word in a sentence is case sensitive</td>
  </tr>
</table>

### Returns

`string` - The resulting sentence/string that has its blacklisted words replaced by a grawlix.

### Error

> Throws an error if required parameters is not met.

## Import

```javascript
import { redact } from '@princedev/redact';
```

## Examples

### Basic Usage

Basic usage with default options.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const redactSentence = redact('Wassup my nigga', racialBlacklist)
```

> `redactSentence` would be 'Wassup my *****'.

### Grawlix Usage

Usage with changing the grawlix option.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const redactSentence = redact('Wassup my nigga', racialBlacklist, {
  grawlix: '$',
});
```

> `redactSentence` would be 'Wassup my $$$$$'.

### Replace by Length Usage

Usage with turning off replace by length

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const redactSentence = redact('Wassup my nigga', racialBlacklist, {
  replaceByLength: false,
});
```

> `redactSentence` would be 'Wassup my $'.

### Case Sensitive Usage

Usage with turning off replace by length

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const redactSentence = redact('Wassup my Nigga-nigga', racialBlacklist, {
  caseSensitive: true,
});
```

> `redactSentence` would be 'Wassup my Nigga-*****'.

### Multiple Option Usage

Usage with multiple options.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const redactSentence = redact('Wassup my nigga', racialBlacklist, {
  grawlix: 'censored',
  replaceByLength: false,
  caseSensitive: false,
});
```

> `redactSentence` would be 'Wassup my censored'.