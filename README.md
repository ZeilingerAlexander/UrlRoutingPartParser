# Url Route Part parser
Gets specific parts of an url or url path

## Usage with full url
If you have a full url "https://github.com/" you should use <code>GetUrlPartFromFullUrl</code>
```js
import {GetUrlPartFromFullUrl} from "url-routing-part-parser"

const part = GetUrlPartFromFullUrl("https://github.com/",0);
console.log(part);
// logs ""

const part2 = GetUrlPartFromFullUrl("https://github.com///about////",0);
console.log(part2);
// logs "about"
```

## Usage with already parsed pathname
If you already have parsed the part of the url you need you can use <code>GetUrlPartFromUrlPath</code>
```js
import {GetUrlPartFromUrlPath} from "url-routing-part-parser"

const part = GetUrlPartFromUrlPath("/abc/dbg/",1);
console.log(part);
// logs "dbg"
```
