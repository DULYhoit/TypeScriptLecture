//변수
//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let hwname : string = 'kim'
let hwage : number = 20;
let hwadrees : string = 'seoul'
//Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let singer : {song?:string,singer?:string} = {song:'노래',singer:'나'}
//Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project : {member:string[],days:number,started:boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }

//union 유니온타입

// 다음 변수 4개에 타입을 지정해봅시다.
let user :string = 'kim';
let age :undefined|number= undefined;
let married :boolean = false; 
let 철수:(string|(undefined|number)|boolean)[] = [user, age, married];
//학교라는 변수에 타입지정해보십시오.
let 학교 :{score:(number|boolean)[],teacher:string,friend:string|string[]} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

//숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
function plusnum(...num : number[]) :number {
  let result = 0;
  
  num.forEach(a => {
    result += a;
  });
  return result
}
console.log(plusnum(1,3,4,5,6));

//이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
type InputType ={
  user : string,
  comment : number[],
  admin : boolean
}
function inputobj({user, comment, admin} : InputType) {
  console.log(user + '|' +comment + '|' + admin)
}
inputobj({ user : 'kim', comment : [3,5,4], admin : false })
//이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
function inputarr([a,b,c]:(number | string | boolean)[]) {
  console.log(a+'|'+b+'|'+c)
}

inputarr([40, 'wine', false]);

