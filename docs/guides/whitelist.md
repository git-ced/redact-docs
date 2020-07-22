---
id: whitelist
title: Adding your whitelist
sidebar_label: Whitelist
---

Whitelisting is an action of adding list of strings or words that should be included or caused not to be blacklisted in a given string/sentence.

## Syntax

`whitelist(blacklist: string[], ...args: string[]): string[]`

### Parameters

`blacklist: string[]` - Blacklist

`...args: string[]` - Given strings/words to be whitelisted.

### Returns

`string[]` - The resulting blacklist that has been filtered to include whitelisted words and to only have unique items.

### Error

> Throws an error if required parameters in not met.

## Import

```javascript
import { whitelist } from '@princedev/redact';
```

## Examples

Basic usage with a blacklist.

```javascript
const sampleBlacklist = blacklist('negro', 'nigga', 'black');
const racialBlacklist = whitelist(sampleBlacklist, 'black');
```

> `racialBlacklist` would be ['negro', 'nigga'].

Adding multiple given words with duplicates.

```javascript
const sampleBlacklist = ['negro', 'nigga', 'negro', 'black', 'eskimo'];
const racialBlacklist = whitelist(sampleBlacklist, 'black', 'eskimo');
```

> `racialBlacklist` would be ['negro', 'nigga'], also removing the duplicate item 'negro' in the list.

That would also work if you are whitelisting an item that has a duplicate.

```javascript
const sampleBlacklist = ['negro', 'nigga', 'negro', 'black', 'eskimo'];
const racialBlacklist = whitelist(sampleBlacklist, 'black', 'negro');
```

> `racialBlacklist` would be ['nigga', 'eskimo'], also removing the duplicate item 'negro' in the list.