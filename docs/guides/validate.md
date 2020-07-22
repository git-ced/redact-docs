---
id: validate
title: Check sentences for blacklisted word
sidebar_label: Blacklist Check
---

You can check if a given string/sentence has a blacklisted word in it.

## Syntax

`isBlacklisted(string: string, ...args: string[]): boolean`

### Parameters

`string: string` - Given string/sentence to be checked.

`blacklist: string[]` - Blacklist

### Returns

`boolean` - Returns true if it has a blacklisted word, otherwise false.

### Error

> Throws an error if the required parameters are not given to the function.

## Import

```javascript
import { isBlacklisted } from '@princedev/redact';
```

## Examples

Basic usage with a blacklisted word.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const result = isBlacklisted('Wassup my nigga', racialBlacklist);
```

> `result` would be true.

Basic usage with no blacklisted word.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
const result = isBlacklisted('Wassup my friend', racialBlacklist);
```

> `result` would be false.