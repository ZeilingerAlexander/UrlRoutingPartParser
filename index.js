
/*Gets a specific url part from the url, if part is undefined defaults to 0, returns undefined on invalid part index
 * throws if url can not be put into an URL object*/
export function GetUrlPartFromFullUrl(url,part = 0){
	if (url === undefined){
		return undefined;
	}
	return GetUrlPartFromUrlPath(new URL(url).pathname,part)
}

/*Gets a specific url part from the url path, a url path is the part after the hostname meaning "/test/test"<br>
 * part means the index+1, so if url = "abc/efg/hbc" and part = 1 it returns "efg"<br>
 * Part defaults to 0<br>
 * throws if url is undefined*/
export function GetUrlPartFromUrlPath(url,part=0){
	const splitted = url.split("/").filter(p => p.length > 0);
	// push an empty part to the url since when requesting test/ there is still the part after /
	splitted.push("");
	return splitted[part];
}
