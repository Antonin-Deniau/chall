let a=STRING_TO_REPLACE;
let i=0;

let x=[
	x=>alert("BadPass."),
	x=>x=x.concat(prompt().split`,`.map(x=>+x)),
	x=>x[50]=8,
	x=>alert("Good pass !")
];

while(a[50]!=8){
	let p=a[i];
	p==1?(a[47]==1?i=a[i+1]:i++):null;    /*jeq <addr> TEST [47] */
	p==3?(a[48]=a[++i]^a[++i]):null;      /*xor <a> <b> TO [48] */
	p==2?(x[a[++i]](a)):null;             /*int <num> */
	p==8?(a[47]=a[++i]==a[++i]?1:0):null; /*test <a> <b> TO [47] */
	p==4?(a[a[++i]]=a[a[++i]]):null;      /*mov <a> <b> */
	p==5?(a[a[i+1]]=a[a[++i]]+1):null;    /*inc <a> */
	p==6?(a[a[++i]]=a[++i]):null;         /*set <a> <b> */
	p==7?(i=a[++i]):null;                 /*jmp <a> */
	i++;
}
