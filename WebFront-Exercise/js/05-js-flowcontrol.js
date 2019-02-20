//for, while 버전 각각
//문제 1. 구구단 2단 ~ 9 단까지
console.log("for 구구단")
for (var i = 1; i<=9;i++) {
    for (var k = 2; k<=9;k++){
        process.stdout.write(k+" X "+ i + "=\t"+ (k*i)+"\t");
    }
    console.log("");
}
console.log("\nwhile구구단");

var i = 1;
var k = 2;
while (i<=9){
    while(k<=9){
        process.stdout.write(k+" X "+ i + "=\t"+ (k++*i)+"\t");
    }
    i++;
    k=2;
    console.log("");
}

// while ()
//문제 2. 역삼각형 출력
console.log("\nfor 별찍기");

for(var i = 5; i>=1 ; i--){
    for (var k = i; k>=1 ;k--){
        process.stdout.write("*");
    }
    console.log();
}

console.log("\nwhile별찍기");

i = 5;
k = i;
while (i > 0) {
    while (k > 0) {
        process.stdout.write("*");
        k--;
    }
    i--;
    k=i;
    console.log();
}

var i = 5;
while (i > 0) {
    var str = "";
    var k = 1;
    while (k <= i) {
        str += "*";
        k++;
    }
    console.log(str);
    i--;
}