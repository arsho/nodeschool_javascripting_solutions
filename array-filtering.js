ar=Array();
for(i=1;i<=10;i++)
	ar.push(i);
	
filtered=ar.filter(function evenNumber(n){
	return n%2===0;
});
console.log(filtered);