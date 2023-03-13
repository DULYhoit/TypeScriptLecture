//브라우저는 ts파일을 인식을못함 js로 변환후 사용가능
//변환:터미널 tsc -w
//let 변수 : 제네릭타입 = 값;
//?는 타입에대한 옵션을설정 , | 는 유니온 설정
let name1 = { name: '?는 name이라는 단어가 들어갈수도있고 아닐수도있다' };
let name2 = { name: '?는 name이라는 단어가 들어갈수도있고 아닐수도있다' };
//함수 매개변수의 타입설정 , 리턴타입설정시 함수 왼쪽에
function 함수(x) {
    return x * 2;
}
let john = [123, true];
let mina = { name: 'kim', age: '12', adress: 'seoul' };
//class타입
class User {
    name;
    constructor(name:string) {
        this.name = name;
    }
}
