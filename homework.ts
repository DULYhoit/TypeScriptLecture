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