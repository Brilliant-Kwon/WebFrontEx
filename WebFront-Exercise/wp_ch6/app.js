console.log("Hello, Node.js");
console.log(process.version, process.platform);

console.error("에러 메시지");
console.warn("경고 메시지");
console.debug("디버그 메시지");
console.log("일반 로그 메시지");
console.info("정보 메시지");

//String 타입
var s1 = "Modern JavaScript";//리터럴 타입
var s2 = String("Modern JavaScript"); //스트링 객체
console.log(typeof s1, typeof  s2);

//Property : length -> 길이 반환
console.log(s1, "length = ", s1.length);

//문자열 추출
console.log(s1.charAt(7));//7번인덱스의 문자
console.log(s1.substr(7,10)); //7번 인덱스부터 10글자
console.log(s1.substring(7,17)); //7번인덱스부터 17번 인덱스까지의 문자열

console.log(s1.substring(7));//마지막 인덱스 생략 시 끝값까지 나옴

//검색 메서드
console.log(s1.indexOf("Java")); //내부에서 Java검색
console.log(s1.indexOf("Java",8)); //8번 인덱스부터 Java 검색   -> 없어서 -1 출력
console.log(s1.indexOf("java")); //없어서 -1출력
console.log(s1.lastIndexOf("Java"));//역방향 검색 -> 시작인덱스를 출력해주므로 결과는 똑 같이 나옴.

//문자열 치환
console.log(s1.replace("JavaScript","ECMAScript"));
console.log(s1); //원본은 변경 안됨

//좌우 공백문자 제거
console.log("                   JavaScript              ".trim());

//String 좀 더 보기
//이스케이프
//  \n 줄바꿈
//  \t 탭
//  \' 문자열 내 작은 다옴표
//  \" 문자열 내 큰 따옴표

var message = 'He said "Hello"';
console.log(message);
message = "He said \"Hello\"";
console.log(message);

//-----------------ES6
//이스케이프
//      \'
//      \$

var temp = 10;

message = "현재 온도는" + temp + "도 입니다.";
console.log(message);

//ES6 템플릿 문자열
message = "현재 온도는 ${temp}도 입니다.";
console.log(message);

//여러줄 문자열을 만들 때
message = "예전에는 \n 여러줄 문자열 만들 때 \n힘들었어요.";
console.log(message);
message = 'ES6에서는' +
    '아주 쉽게' +
    '만들 수 있습니다.';
console.log(message);

