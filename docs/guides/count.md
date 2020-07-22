---
id: count
title: Counting blacklisted words in a sentence
sidebar_label: Blacklist Count
---

You can check the number of blacklisted words found in a given sentence/string.

## Syntax

`blacklistCount(string: string, ...args: string[]): number`

### Parameters

`string: string` - Given string/sentence to be checked.

`blacklist: string[]` - Blacklist

### Returns

`number` - The resulting count of blacklisted words that exists in a string.

### Error

> Throws an error if the required parameters are not given to the function.

## Import

```javascript
import { blacklistCount } from '@princedev/redact';
```

## Examples

Basic usage with a blacklisted word.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const count = blacklistCount('Wassup my nigga', racialBlacklist);
```

> `count` would be 1.

Basic usage with no blacklisted word.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const count = blacklistCount('Wassup my friend', racialBlacklist);
```

> `count` would be 0.

Another example with many blacklisted words

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const count = blacklistCount('Wassup my nigga NiGGA NIGGA', racialBlacklist);
```

> `count` would be 3.