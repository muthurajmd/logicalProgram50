{
let a=[33,567,2,4167]

let y=[];


for(var i=0;i<a.length;i++){
	let count =0;
	b=a[i]
	while(b>0){
	let rem=b%10;
	b=(b-rem)/10;
	count++
}
	y.push(count)	
}
	
	
console.log(y)
}



{
	let a=[33,567,2,4167]
	
	let y=[];
	
	
	a.map((e)=>{
		let count =0;
		
		while(e>0){
		let rem=e%10;
		e=(e-rem)/10;
		count++
		}
		y.push(count)

	})
		
	console.log(y)
	}
			
	

{
let a=[1,2,3]

let y=[];

for (let i = 0; i < a.length; i++) {
	
	let z=a[i]**3
	y.push(z)
}

console.log(y)
}

{
	let a=[1,2,3]
	
	// let y=[];
	
	let q=a.map((e)=>{
		return e**3
		// y.push(z)

	})
	console.log(q)
		
	}
	
	
	



{
let a=[22,55,31,63]
let y=[]
a.filter((e)=>{
    
   if((e%11)==0){
	y.push(e)
   }
    
    
})
console.log(y)
}


{

let m=123;
while(m>0){
    let rem=m%10;
     m=(m-rem)/10;
   let jj=rem*11
console.log(jj)
}
}