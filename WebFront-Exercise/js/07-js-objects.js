//객체의 생성 1.

var person = {};
person = new Object();

//property 추가
person.name = "권찬근";
person.age = 27;
person.showInfo = function () {
    var message = "Name : " + this.name + ", Age : " + this.age;
    console.log(message);
};

person.showInfo();

//방법 2. JSON  을 이용 -> 매우 중요 ***********
var person = {
    name: "권찬근",
    age: 27,
    showInfo: function () {
        console.log("Name : " + this.name + ", Age : " + this.age);
    }
};

person.showInfo();

//방법 3. function 이용 생성자 모방
var Member = function (name, position) {
    this.name = name;
    this.position = position;
};

var m1 = new Member("강백호", "PF");
var m2 = new Member("서태웅", "SF");

console.log(m1, m2);

// JavaScript는 동적 스크립트 언어-> 동적으로 속성 추가 가능
m1.sayHi = function () {
    console.log(this.name + "님이 당신을 부릅니다.");
};
m1.sayHi();
//m2.sayHi(); //Error sayHi는 m1에 동적으로 추가된 메서드다.

Member.prototype.saying = function () {
    console.log(this.name + "님이 말하고 있습니다.")
};

m1.saying();
m2.saying();

console.log(m1.constructor); // 생성자 확인
console.log(Member.prototype);//프로토 타입 확인

//Prototype을 이용한 동적 속성의 추가 -> 기존 기능의 확장
String.prototype.helloMessage = function () {
    return "Hello, "+this;
};

console.log("JavaScript".helloMessage());
