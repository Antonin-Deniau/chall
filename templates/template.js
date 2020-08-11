a=STRING_TO_REPLACE;
i=1;
x=[
	_=>alert`BadPass.`,
	_=> _.push(...prompt().split``.map(_=>_.charCodeAt(0))),
	_=>alert`Good pass !`,
];

while (a[0]!=5) {
    //console.log(`${i} ${a[i]}: ${a[i+1]} => ${a[a[i+1]]} ${a[i+2]} => ${a[a[i+2]]}`);
    [
      _=>a[0]==1?i=a[++i]-1:i++,        // 1 jeq <addr> TEST [0]
      _=>x[a[++i]](a),                  // 2 int <num>
      _=>a[i+1]=a[a[++i]]^a[a[++i]],    // 3 xor <a> <b> TO <a>
      _=>a[a[++i]]=a[a[++i]],           // 4 mov <a> <b>
      _=>++a[a[++i]],                   // 5 inc <a>
      _=>a[a[++i]]=a[++i],              // 6 set <a> <b>
      _=>i=a[1+i]-1,                    // 7 jmp <a>
      _=>a[0]=a[a[++i]]==a[a[++i]]?1:0, // 8 test <a> <b> TO [0]
    ][a[i]]()

    i++;
    //if(i==50) break; // TODO remove
}
