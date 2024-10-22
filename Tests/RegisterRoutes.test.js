test("Array should not throw", () => {
	try{
		expect([["test","test2"],["jest","testing framework"]]);
	}
	catch (ex){
		console.log(ex);
		fail("array should not throw");
	}
});

test("Map should not throw", () => {
	try{
		expect(new Map([["ttest","tests"]]));
	}
	catch (ex){
		console.log(ex);
		fail("map should not throw");
	}
});
