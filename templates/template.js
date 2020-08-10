let [a, i, x]=[STRING_TO_REPLACE, 0, [
	x=>alert("BadPass."),
	x=>x=x.concat(prompt().split`,`.map(x=>+x)),
	x=>x[50]=8,
	x=>alert("Good pass !"),
]];

while(a[50]!=8){
    console.log(a[i], a[i+1], a[i+2]); // TODO remove
    [0,
	_=>a[47]==1?i=a[i+1]:i++,    /*1 jeq <addr> TEST [47] */
	_=>x[a[++i]](a),             /*2 int <num> */
	_=>a[i+1]=a[++i]^a[++i],     /*3 xor <a> <b> TO <a> */
	_=>a[a[++i]]=a[a[++i]],      /*4 mov <a> <b> */
	_=>a[a[i+1]]=a[a[++i]]+1,    /*5 inc <a> */
	_=>a[a[++i]]=a[++i],         /*6 set <a> <b> */
	_=>i=a[++i],                 /*7 jmp <a> */
	_=>a[47]=a[++i]==a[++i]?1:0, /*8 test <a> <b> TO [47] */
    ][a[i]]()

	i++;
    if(i==50) break; // TODO remove
}
