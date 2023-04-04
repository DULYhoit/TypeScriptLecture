//브라우저는 ts파일을 인식을못함 js로 변환후 사용가능
//변환:터미널 tsc -w
//let 변수 : 제네릭타입 = 값; , 변수에 값을넣을때 값의 타입에따라 자동으로 타입을 걸어줌
let 이름 = 'kim';
let 나이 = 50;
let 결혼했니 = true;
//?는 타입에대한 옵션을설정 , | 는 유니온 설정
let name1 = { name: '?는 name이라는 단어가 들어갈수도있고 아닐수도있다' };
let name2 = { name: '?는 name이라는 단어가 들어갈수도있고 아닐수도있다' };
let 회원들 = [1, '2', 3];
let 오브젝트 = { a: 12 };
//any타입 , any를 쓰는순간 ts의미가없어짐 
//타입실드 해제문법으로써 js변수로 만들고싶을때 쓴다
let 이름1;
//unknown타입 any랑 똑같은데 좀더 안전함 
//타입변수에 any타입 값을 집어넣을때 나올수있는버그 방지
let 이름2;
이름2 = 2;
let john = [123, 123, 41];
let mina = { name: 'kim', age: '12', adress: 'seoul' };
//함수 매개변수의 타입설정 , 리턴타입설정시 함수 왼쪽에 , ? 는 | undefined 랑똑같음
function 함수(x, y) {
    return x * 2;
}
//Narrowing & Assertion 매개변수가 유니온타입일때 연산을 하고싶다면 if문(Narrowing) 을 통해 타입을 지정해야함
function 함수2(x) {
    //Narrowing
    if (typeof x === 'number') {
        console.log(x + 1);
    }
    else {
        console.log(x + '1');
    }
}
function array함수(x) {
    let array = [];
    //Assertion
    //1.Narrowing 간소화
    //2.매개변수가 해당타입인지 확정됬을때
    array[0] = x;
}
함수();
const 여친 = {
    name: '엠버'
};
//Literal Types
//광범위한 타입이 아닌 좀더 엄격한 타입
let testname;
function testfun(a) {
    console.log(a);
    return 1;
}
testfun('hello');
function testrsp(a) {
    let array = [a];
    return array;
}
testrsp('가위');
