  ///////////////////////////
 /// learning javascript ///
///////////////////////////



// use of backtick
let title = "fighter";
console.log(`conor is a ${title}`);

// use of function
function math (){
	let one = 1;
	let two = 2;
	console.log (`one and two equals to ${one + two}`);
};
math ();

// project one
let members = ['don', 'john', 'ron']
for (let i = 0; i < members.length; i++){
	console.log (`let's welcome our new memeber ${members[i]}!`);
};

// project two: using map 
let students = ['joe', 'bob', 'ben']
students.map (useless=>{
	console.log (`and, let's not welcome ${useless}.`)
});
