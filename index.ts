//브라우저는 ts파일을 인식을못함 js로 변환후 사용가능
//변환:터미널 tsc -w
//let 변수 : 제네릭타입 = 값;
//?는 타입에대한 옵션을설정 , | 는 유니온 설정
let name1 : {name? : string} = {name : '?는 name이라는 단어가 들어갈수도있고 아닐수도있다'}
let name2 : {name : string | number} = {name : '?는 name이라는 단어가 들어갈수도있고 아닐수도있다'}

//타입설정을 변수화시킬수있다
type Mytype = string[] | number;

//함수 매개변수의 타입설정 , 리턴타입설정시 함수 왼쪽에
function 함수(x : number) : number {
    return x * 2
}

//array에서 쓸수있는 tuple타입
//배열의 첫번째는 number 두번째는 boolean형 무조건
type Member = [number,boolean];
let john:Member = [123,true];
//오브젝트타입 지정시 오브젝트 속성이많으면
//[key: 타입] 을통해 모든속성을 포함해서 설정가능
type Member2 = {
    [key : string] : string,
}
let mina:Member2 = {name : 'kim', age : '12' , adress : 'seoul'}

//class타입
class User{
    name
    constructor(name:string){
        this.name = name;
    }
}