import {ClearRoutes, GetEndpointFromUrl, RegisterRoute} from "..";

test("String Input should not throw",() => {
	try{
		expect(RegisterRoute("test", "test2"));
	}
	catch (ex){
		console.error(ex);
		fail();
	}
});

test("Bad Input should throw",() => {
	try{
		RegisterRoute();
		fail();
	}
	catch (ex){
		expect(true);
	}
});

test("basic routes should match correctly", async () => {
	try{
		ClearRoutes();
		RegisterRoute("test","abc");
		expect(await GetEndpointFromUrl("/test/abc/293.pdf")).toBe("abc");
		const testComplexUrl = "!)(U@#)(U$OIJOSIFHD(*@O#IH@LJ#KAHDFD(S*H#";
		RegisterRoute(testComplexUrl,"a");
		expect(await GetEndpointFromUrl(testComplexUrl)).toBe("a");
	}
	catch(ex){
		console.error(ex);
		fail();
	}
});

test("Too long routes should exit early and produce undefined", async () => {
	try{
		ClearRoutes();
		RegisterRoute("test",true);
		expect(await GetEndpointFromUrl
	}
	catch(ex){
		console.error(ex);
		fail();
	}
});
