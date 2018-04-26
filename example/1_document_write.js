function hi(arg){
    var word = arg;
    function write(){
        document.write(arg);
    }
    write();
}

hi("hello world");