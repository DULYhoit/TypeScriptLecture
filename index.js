//브라우저는 ts파일을 인식을못함 js로 변환후 사용가능
//변환:터미널 tsc -w
//let 변수 : 제네릭타입 = 값; , 변수에 값을넣을때 값의 타입에따라 자동으로 타입을 걸어줌
let 이름 = "kim";
let 나이 = 50;
let 결혼했니 = true;
//?는 타입에대한 옵션을설정 , | 는 유니온 설정
let name1 = {
    name: "?는 name이라는 단어가 들어갈수도있고 아닐수도있다",
};
let name2 = {
    name: "?는 name이라는 단어가 들어갈수도있고 아닐수도있다",
};
let 회원들 = [1, "2", 3];
let 오브젝트 = { a: 12 };
//any타입 , any를 쓰는순간 ts의미가없어짐
//타입실드 해제문법으로써 js변수로 만들고싶을때 쓴다
let 이름1;
//unknown타입 any랑 똑같은데 좀더 안전함
//타입변수에 any타입 값을 집어넣을때 나올수있는버그 방지
let 이름2;
이름2 = 2;
let john = [123, 123, 41];
let mina = { name: "kim", age: "12", adress: "seoul" };
//함수 매개변수의 타입설정 , 리턴타입설정시 함수 왼쪽에 , ? 는 | undefined 랑똑같음
function 함수(x, y) {
    return x * 2;
}
//Narrowing & Assertion 매개변수가 유니온타입일때 연산을 하고싶다면 if문(Narrowing) 을 통해 타입을 지정해야함
function 함수2(x) {
    //Narrowing
    if (typeof x === "number") {
        console.log(x + 1);
    }
    else {
        console.log(x + "1");
    }
}
function array함수(x) {
    let array = [];
    //Assertion
    //1.Narrowing 간소화
    //2.매개변수가 해당타입인지 확정됬을때
    array[0] = x;
}
const 여친 = {
    name: "엠버",
};
//Literal Types
//광범위한 타입이 아닌 좀더 엄격한 타입
let testname;
function testfun(a) {
    console.log(a);
    return 1;
}
testfun("hello");
function testrsp(a) {
    let array = [a];
    return array;
}
testrsp("가위");
var obj1 = {
    name: "kim",
};
function testobj1(a) { }
let testalias = function (a) {
    return 1;
};
let userinfo = {
    name: "kim",
    age: 12,
    plusOne(a) {
        return a + 1;
    },
};
//alias 사용해 함수만들어보기
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
function testcut(a, b, c) {
    let result = b(a);
    let result2 = c(result);
    console.log(result2);
    return result2;
}
//타입스크립트로 html 변경 조작할시 주의점
let title = document.querySelector('#title');
if (title instanceof Element) {
    title.innerHTML = '링크기능';
}
// if(title?.innerHTML != undefined){
//     title.innerHTML = '반가워요';
// }
let link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'https://youtube.com/';
}
let linkbtn = document.querySelector('#button');
linkbtn?.addEventListener('click', (e) => {
    if (link instanceof Element) {
        link.innerHTML = '유투브';
    }
    alert('실행');
});
let imgsrc = document.querySelector('#image');
if (imgsrc instanceof HTMLImageElement) {
    imgsrc.src = 'new.jpg';
}
let multilink = document.querySelectorAll('.link');
multilink.forEach(a => {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
//class 객채지향 문법
//아래의 같은 변수를 하나의 class로 만들수있음
function character(q, w) {
    this.q = q,
        this.w = w;
}
// var nunu = {
//     q : 'consume',
//     w : 'snowball'
// }
// var garen = {
//     q : 'strike',
//     w : 'courage'
// }
// let nunu = new character('consume','sonwball');
// let garen = new character('strike','courage');
// console.log(nunu);
// console.log(garen);
//es6 class
class Character {
    q;
    w;
    constructor(q, w) {
        this.q = q;
        this.w = w;
    }
}
let nunu = new Character('consume', 'sonwball');
let garen = new Character('strike', 'courage');
console.log(nunu);
console.log(garen);
;
let 네모 = { color: 'red', width: 100 };
;
;
;
let 학생 = { name: 'kim', score: 100 }; //interface로
let 선생 = { name: 'seo', age: 20, score: 100 };
//rest parameter 타입 지정
function testrest(...a) {
    console.log(a[2]);
}
testrest(1, 2, 4, 5, 6, 7, 2);
//Narrowing2
//undefind를 찾을때 if else를 통해 narrowing 해야함 
// && 왼쪽은 undefined 일경우
// && 오른쪽은 a가 string일경우 (삼항연산자 느낌)
function testnar(a) {
    if (a && typeof a === 'string') {
    }
}
function testani(animal) {
    if ('swim' in animal) {
        animal.swim;
    }
}
//return type : never
//조건1. return 이 없어야함
//조건2. endpoint 가 없어야함
//잘쓰지않음 void로 대체
function testnever(a) {
    throw new Error;
}
//객체지향언어 문법 지원
//public, private , protected, static
class User {
    name;
    familyName = 'kim';
    constructor(a) {
        this.name = a + this.familyName;
    }
    setFamilyName(a) {
        this.familyName = a;
    }
}
//private 변수는 class 안쪽에서만 수정이 가능하다
//수정하고싶으면 class 안쪽에서 함수를따로만들어야함 Java의 getter,setter
let 유저1 = new User('park');
유저1.setFamilyName('jisung');
//contructor 축약문법 매개변수로 public 타입을 같이써주면 this를 안써도됨
class User2 {
    name;
    constructor(name) {
        this.name = name;
    }
}
//protected : 상속받은 자식이면 수정가능
//extends : class 복사
class User3 {
    x = 10;
}
class CopyUser3 extends User3 {
    doThis() {
        this.x = 20;
    }
}
//static 자식에게 물려주지않음
class User4 {
    static x = 10;
    y = 20;
}
let children = new User4();
//children.x <-사용불가능
//User4.x <-사용가능
//활용예시
class User5 {
    static skill = 'js';
    intro = User5.skill + '전문가입니다.';
}
let kim = new User5();
console.log(kim);
User5.skill = 'Java';
let kim2 = new User5();
console.log(kim);
//Gemeric 제네릭파라미터
function testGeneric(x) {
    return x[0];
}
let g = testGeneric([4, 2]);
console.log(g + 1);
let teststring = {
    name: 'kim',
    age: '20',
    location: 'seoul'
};
