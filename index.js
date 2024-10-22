/* Routes should only be registered over RegisterRoute, don't bypass it! */
const Routes = new Map();
let longestRouteLength = 0;

/*Registers the provided routes<br>
 * The Routes must be an iterator that implements the [Symbol.iterator] protocol*/
export async function RegisterRoutes(routes){
	if (routes === undefined){
		return;
	}
	if (routes[Symbol.iterator] === undefined){
		throw new Error("routes does not implement the iterator protocol");
	}
	for (const kvp of routes){
		RegisterRoute(kvp[0],kvp[1]);
	}
}

/*Registers a route with the provided route and endpoint specification, throws if already registered*/
export function RegisterRoute(/*String*/route, /*String*/endpoint){
	const _route = route.toLowerCase();
	if (_route === undefined || endpoint === undefined){
		throw new Error("route and endpoint must be defined");
	}
	if (_route.includes("/") || _route.includes("\\")){
		throw new Error("route cant contain slashes");
	}
	if (_route.includes(" ")){
		throw new Error("route cant contain spaces");
	}
	if (Routes.has(_route)){
		throw new Error("route already exists");
	}
	if (_route.length > longestRouteLength){
		longestRouteLength = _route.length;
	}

	Routes.set(_route,endpoint);
}

/*Gets the value inside the kvp where key is the first string of the url<br>
 * For example kvps = [["a","b"]] then GetEndpointFromUrl("/a/nonce/") == "b"<br>
 * Only the first slash if it exists will be removed, any other that will be treated as part of the url<br>
 * The sub url part will be until another slash or the end of the url string<br>
 * If an url is provided thats first sub url is longer then the longest registered url endpoint it will only go as far as the longest one<br>
 * return undefined if not found*/
export async function GetEndpointFromUrl(/*String*/url){
    if (url.startsWith("/")){
        url = url.substring(1,url.length);
    }

    let tempUrl = "";
    let maxlength = url.length > longestRouteLength ? longestRouteLength : url.length;
	let i = 0;
    for (; i < maxlength; i++){
        if (url[i] === "/"){
            break;
        }
        else{
            tempUrl += url[i];
        }
    }
	
	// validate if exited early due to too long url provided, this means that the endpoint is invalid
	if (i != url.length - 1 && url[i] !== "/"){
		return undefined;
	}

    // normalize the remainder
    url = tempUrl.toLowerCase();
    return Routes.get(tempUrl);
}
