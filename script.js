function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1.indexOf(s2)>0){
		return s1.indexOf(s2)
	}
	
	return -1 ;
}

// Please do not change the code below
const s1 = promp("Enter s1:");
const s2 = promp("Enter s2:");
aler(indexOfIgnoreCase(s1, s2));
