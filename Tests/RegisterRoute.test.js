import {RegisterRoute} from "..";

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
