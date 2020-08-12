d = _ => {
a=STRING_TO_REPLACE;
i=1;
x=[
	_=>alert`BadPass.`,
	_=> document.getElementById`d`.value.split``.map(_=>a.push(_.charCodeAt(0))),
	_=>alert`Good pass !`,
];

while (a[0]!=5) {
    [
      _=>a[0]==1?i=a[++i]-1:i++,        // 0 jeq <addr> TEST [0]
      _=>x[a[++i]](a),                  // 1 int <num>
      _=>a[a[i+1]]=a[a[++i]]^a[a[++i]], // 2 xor <a> <b> TO <a>
      _=>a[a[++i]]=a[a[++i]],           // 3 mov <a> <b>
      _=>++a[a[++i]],                   // 4 inc <a>
      _=>a[a[++i]]=a[++i],              // 5 set <a> <b>
      _=>i=a[i+1]-1,                    // 6 jmp <a>
      _=>a[0]=a[a[++i]]==a[a[++i]]?1:0, // 7 test <a> <b> TO [0]
    ][a[i]]();
    i++;
}
}
