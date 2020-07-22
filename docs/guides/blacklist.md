---
id: blacklist
title: Adding your blacklist
sidebar_label: Blacklist
---

A blacklist is a list of strings or words that are considered banned or should be excluded from a given string/sentence.

## Syntax

`blacklist(...args: string[]): string[]`

### Parameters

`...args: string[]` - Given strings/words to be blacklisted.

### Returns

`string[]` - The resulting blacklist that has been filtered to only have unique items.

### Error

> Throws an error if a string is not given.

## Import

```javascript
import { blacklist } from '@princedev/redact';
```

## Examples

Basic usage with two given words.

```javascript
const racialBlacklist = blacklist('nigga', 'eskimo');
```

> `racialBlacklist` would be ['negro', 'eskimo'].

Adding multiple given words with duplicates.

```javascript
const racialArray = ['negro', 'nigga', 'black'];

const racialBlacklist = blacklist('nigga', 'eskimo', ...racialArray);
```

> `racialBlacklist` would be ['negro', 'nigga', 'black', 'eskimo'], removing the duplicate item 'nigga' in the list.
