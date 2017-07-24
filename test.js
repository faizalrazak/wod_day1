
function faizal(num){
for (var i = 1; i < num; i++) {
    var dan = "&";
    var hash = "#"
    var count = 1;
    
        for ( j = count; j < num; j++) {
            if((j+i) % 2 == 0){
            document.write(hash);
            }else
            document.write(dan);
        }
        document.write("<br>");
        count++;
    }
}
faizal(9);