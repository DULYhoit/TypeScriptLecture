//브라우저는 ts파일을 인식을못함 js로 변환후 사용가능
//변환:터미널 tsc -w
//let 변수 : 제네릭타입 = 값; , 변수에 값을넣을때 값의 타입에따라 자동으로 타입을 걸어줌
let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: boolean = true;

//?는 타입에대한 옵션을설정 , | 는 유니온 설정
let name1: { name?: string } = {
  name: "?는 name이라는 단어가 들어갈수도있고 아닐수도있다",
};
let name2: { name: string | number } = {
  name: "?는 name이라는 단어가 들어갈수도있고 아닐수도있다",
};
let 회원들: (number | string)[] = [1, "2", 3];
let 오브젝트: { a: string | number } = { a: 12 };

//any타입 , any를 쓰는순간 ts의미가없어짐
//타입실드 해제문법으로써 js변수로 만들고싶을때 쓴다
let 이름1: any;

//unknown타입 any랑 똑같은데 좀더 안전함
//타입변수에 any타입 값을 집어넣을때 나올수있는버그 방지
let 이름2: unknown;
이름2 = 2;

//타입설정을 변수화시킬수있다
type Mytype = string[] | number;

//array에서 쓸수있는 tuple타입
//배열의 첫번째는 number 두번째는 boolean형 무조건
type Memberarr1 = [number, boolean];
type Memberarr2 = number[];
let john: Memberarr2 = [123, 123, 41];
//오브젝트타입 지정시 오브젝트 속성이많으면
//[key: 타입] 을통해 모든속성을 포함해서 설정가능
type Member2 = {
  [key: string]: string;
  [key: number]: string;
};
let mina: Member2 = { name: "kim", age: "12", adress: "seoul" };

//함수 매개변수의 타입설정 , 리턴타입설정시 함수 왼쪽에 , ? 는 | undefined 랑똑같음
function 함수(x: number, y?: string): number {
  return x * 2;
}
//Narrowing & Assertion 매개변수가 유니온타입일때 연산을 하고싶다면 if문(Narrowing) 을 통해 타입을 지정해야함
function 함수2(x: number | string): void {
  //Narrowing
  if (typeof x === "number") {
    console.log(x + 1);
  } else {
    console.log(x + "1");
  }
}
function array함수(x: number | string) {
  let array: number[] = [];

  //Assertion
  //1.Narrowing 간소화
  //2.매개변수가 해당타입인지 확정됬을때
  array[0] = x as number;
}
// 함수();

//readonly
//const 재할당은 불가능하지만 오브젝트의경우 값은 바꿀수있음 그것을 방지함
type Girlfriend = {
  readonly name: string;
};
const 여친: Girlfriend = {
  name: "엠버",
};

//Literal Types
//광범위한 타입이 아닌 좀더 엄격한 타입
let testname: 123 | "피자";

function testfun(a: "hello"): 1 | 0 {
  console.log(a);
  return 1;
}
testfun("hello");

//예제
//가위 or 바위 or 보 중 1개 입력가능
//가위 or 바위 or 보 만 들어올수 있는 array를 return 해야함
type rsp = "가위" | "바위" | "보";
type arrayrsp = ("가위" | "바위" | "보")[];
function testrsp(a: rsp): arrayrsp {
  let array = [a];

  return array;
}
testrsp("가위");

var obj1 = {
  name: "kim",
};

function testobj1(a: "kim"): void {}
// testobj1(obj1.name);

//type alias 별칭
type Alias = (a: string) => number;

let testalias: Alias = function (a) {
  return 1;
};

type CutType = (a: string) => string;

let userinfo = {
  name: "kim",
  age: 12,
  plusOne(a: number): number {
    return a + 1;
  },
};

//alias 사용해 함수만들어보기
let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

function testcut(a: string, b: Function, c: Function): number {
  let result = b(a);
  let result2 = c(result);
  console.log(result2);
  return result2;
}
//타입스크립트로 html 변경 조작할시 주의점
let title = document.querySelector('#title');
if(title instanceof Element){
    title.innerHTML = '링크기능';
}

// if(title?.innerHTML != undefined){
//     title.innerHTML = '반가워요';
// }

let link = document.querySelector('.link');
if(link instanceof HTMLAnchorElement){
    link.href = 'https://youtube.com/';
}

let linkbtn = document.querySelector('#button');
linkbtn?.addEventListener('click',(e)=>{
    if(link instanceof Element){
        link.innerHTML='유투브';
    }
    alert('실행');

})

let imgsrc = document.querySelector('#image');
if(imgsrc instanceof HTMLImageElement){
    imgsrc.src = 'new.jpg';
}

let multilink = document.querySelectorAll('.link');
multilink.forEach(a => {
    if(a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com';
    }
});

//class 객채지향 문법
//아래의 같은 변수를 하나의 class로 만들수있음
function character(q:string,w:string){
    this.q = q,
    this.w = w
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
    q : string;
    w : string;
    constructor(q:string,w:string){
        this.q = q;
        this.w = w;
    }
}

let nunu = new Character('consume','sonwball');
let garen = new Character('strike','courage');

console.log(nunu);
console.log(garen);

//interface
//type 대신 interface 써도됨
//비슷한 타입을 여러개 만들때 extands 키워드를 통해 상속받을수있음
interface Square {color : string, width : number};
let 네모 : Square = {color : 'red', width : 100};
//interface 는 중복선언 가능
interface Student {name : string};
interface Student {score : number};
interface Teacher extends Student{age : number};

let 학생 : Student = {name : 'kim' ,score : 100}//interface로
let 선생 : Teacher = {name : 'seo', age :20 , score : 100};

//intersection type 교차시키기
type Animal = {name : string};
type Cat = {age : number} & Animal;

//rest parameter 타입 지정
function testrest(...a : number[]){
    console.log(a[2])
}
testrest(1,2,4,5,6,7,2);

//Narrowing2
//undefind를 찾을때 if else를 통해 narrowing 해야함 
// && 왼쪽은 undefined 일경우
// && 오른쪽은 a가 string일경우 (삼항연산자 느낌)
function testnar(a : string | undefined) {
    if(a && typeof a === 'string'){

    }
}
//narrowing 해야하는 데이터가 오브젝트 속성일경우
type Fish = {swim : string}
type Bird = {fly : string}

function testani(animal : Fish | Bird) {
   if('swim' in animal){
        animal.swim
   }
}