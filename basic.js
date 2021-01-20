// No.2
//　文字表示
//console.log("Good evening");
//console.log("Good moring");
//console.log("Good afternoon");

//No.3
//変数を宣言するときは、varを使う。varのあとに変数名を記述する
//var num;
//num = 1;
//console.log(num)

// No.4
// データ型(数値型)
//　変数にデータを入れるときに、データ型を指定する必要はない

//var num01 = 123
//var num02 = 1.23

//console.log(num01);
//console.log(num02);

//console.log(typeof(num01));
//console.log(typeof(num02));

// No.5
//データ型(文字列)

//var string_a = "Hello,World"

//console.log(string_a);
//console.log(typeof(string_a));

// No.6
//データ型(ブール型)

//var a = 10;
//var b = 1;
//var bool01;

//bool01 = (a > b);
//bool01 = (a < b);
//console.log(bool01)
//console.log(typeof(bool01));

// No.7
//配列(書き方のきまり)
//var 変数 = new Array(要素数);

//var a = new Array("Taha","Siddiqui","Bin");

//a [0] = "Taha"
//a [1] = "Siddiqui"
//a [2] = "Bin"

//console.log(a[0]);
//console.log(a[1]);
//console.log(a[2]);

//配列の作り方➋
//[]を使う方法. var 変数　= [データ1,データ2..];

//var arr = ["Taha", "Siddiqui","Bin"];

//arr[1] = "Sato";

//console.log(arr[0]);
//console.log(arr[1]);
//console.log(arr[2]);

//二次配列
//var arr;
//arr = [ ["Taha","Siddiqui"],["Bin","Tariq"] ];
//console.log(arr[0][0]);
//console.log(arr[0][1]);
//console.log(arr[1][0]);
//console.log(arr[1][1]);

// NO.8
//算術演算子(+.-.*./.%)

//var x = 10;
//var y = 2;

//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(x / y);
//console.log(x % y);

//関係演算子
//var x = 10;
//var y = 2;
//var z = 10;

//console.log(x > y);
//console.log(x < y);

//console.log(x <= y);
//console.log(x >= y);

//等価(2つの値が正しい)

//var x = 10;
//var y = 2;

//console.log(x == y);
//console.log(x != y);

// 論理演算子(複数の条件を判断)
//var x = 8;
//var y = 3;

// console.log(x >= 5 && x <= 10);
//console.log(y >= 5 && y <= 10);

//console.log(x == 3 || y == 3);
//console.log(x == 1 || y == 1);

//代入演算子.複合代入演算子

//var x = 8;
//var y = 12;
//var z = 20;

//x += 10;
//z += y;

//console.log(x);
//console.log(z);

//インクリメント.デクリメント
//var x = 8;
//var y = 8;

//x++
//y--
//console.log(x);
//console.log(y);

// No.9
//条件分岐(if文)
//if (条件){
    //条件を満たしたときの処理;
//}

//var age = 22;
//var age = 18;
//if (age >= 20) {
    //console.log("adult");
//} 

//if (条件) {
//    条件を満たしときの処理;
//} else {
//    条件を満たさないときの処理;
//}

//var age = 18;

 //   if (age >= 20){
 //       console.log("adult");
 //   }else{
 //       console.log("child");
 //   }

 // eif~else文
 //if(条件A){
 //    条件Aを満たしたときの処理;
 //}else if(条件B){
 //    条件Bを満たしたときの処理;
 //}else{
 //    条件を満たさないときの処理;
// }

//var age = 0;
// if(age >= 20) {
//     console.log("adult");
// } else if (age==0) {
//     console.log("baby");
// } else {
//    console.log("child");
// }
 

//var age = 10;
// if(age >= 20 && age < 20) {
//     console.log("10代");
// }  else if (age >= 20 && age < 30) {
//     console.log("20");
// }　else if (age >= 30 && age < 40){
//     console.log("30代");
// }    else{
//         console.log("それ以外");
// }

//No.10
// 繰り返し(for文)
//for(スタート値(第1引数);継続条件;増減式){
//for(var i = 0; i<=4;i++)
//}

//for (var i = 0; i <=4; i++) {
//    console.log(i);
//}

//break文(var i =0;i<=4;i++) {
//    if(条件){
//        break;
//    }
//}

//for(var i = 0; i <= 4; i++) {
//    if(i == 3){
//        break;
//    }
//    console.log(i);
//}

//continue文
//for(var i = 0;i <=4;i++){
//    if(条件){
//        continue;
//    }
//}

//for(var i = 0; i <= 4; i++){
//    if(i==3){
//        continue;
//    }
//    console.log(i);
//}

//for文のネスト
// for(var i = 0;i<=2;i++){
//    for(var j =0;j <=2;j++){

//    }
//} 

//for(var i = 0; i <= 2; i ++) {
//    for(var j = 0; j <= 2; j++) {
//        console.log(i + "-" + j);
//    }
//}

//カウンタ変数を使って配列の中身を表示する

//var arr = [2,4,6,8,10];

//for(var i = 0; i <= 4; i++){
//    console.log(arr[i]);
//}

//var arr = [2,4,6,8,10];
//var sum = 0;

//for(var i =0; i <=4; i++){
//    sum += arr[i];
//}
//console.log(sum);

//for( i =0; i <=10;i++){
//    if(i == 3) {
//        continue;
//    }else if(i == 7){
//        break;
//    }else{
//        console.log(i);
//    }
//}

// NO.11
//メゾット(関数)
//function 関数名(引数名 ,引数名,..){
//    実行したい処理
//}

//function say_hello() {
//    console.log("Hell World");
//}
//say_hello();

//function say_hello() {
//    console.log("Hello World");
//}
 //say_hello();
 //say_hello();
 //say_hello();

 //関数を変数に代入
// var 変数名 = function 関数名(){
//    実行したい処理
//};

//ar hello = function say_hello(){
//    console.log("Good Moring")
//};

//hello();

//引数がある関数
//function say_hello(greeting){
//    console.log(greeting)
//};

//say_hello("Good Moring");
//say_hello("Good afternoon");
//say_hello("Good evening");

//function cal(x) {
//    function cal(x,y) {
//    console.log(x / y);
//};
//cal(6,3);

//戻り値のある関数
//function cal(x, y){
//    return x / y ;
//};
//var result = cal(6,3);
//console.log(result);

//function cal(x, y, z){
//    return x + y + z;
//};

//var result = cal(10,5,8);
//console.log(result);

// No.12
//クラス

//class Student{
//    avg() {
//        console.log((80 + 70) / 2);
//    }
//}
//var a001 = new Student();
//a001.avg();

//class Student{
//    avg(math,english) {
//        console.log((math + english) / 2);
//    }
//}
//var a001 = new Student();
//a001.avg(80,70);

class Student{
    constructor(name){
        this.name  = name;
    }
    avg(math,english) {
        console.log((math + english) / 2);
    }
}
var a001 = new Student("Taha");
console.log(a001.name);
var a002 = new Student("Siddiqui");
console.log(a002.name);