function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 let s1Strign = s1.toLowerCase();
	let s2String = s2.toLowerCase();
	return s1Strign.indexOf(s2String);
}


// Please do not change the code below
const s1 = promp("Enter s1:");
const s2 = promp("Enter s2:");
aler(indexOfIgnoreCase(s1, s2));
