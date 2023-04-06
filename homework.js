//변수
//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
let hwname = 'kim';
let hwage = 20;
let hwadrees = 'seoul';
//Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let singer = { song: '노래', singer: '나' };
//Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
//union 유니온타입
// 다음 변수 4개에 타입을 지정해봅시다.
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
//학교라는 변수에 타입지정해보십시오.
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
//숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
function plusnum(...num) {
    let result = 0;
    num.forEach(a => {
        result += a;
    });
    return result;
}
console.log(plusnum(1, 3, 4, 5, 6));
function inputobj({ user, comment, admin }) {
    console.log(user + '|' + comment + '|' + admin);
}
inputobj({ user: 'kim', comment: [3, 5, 4], admin: false });
//이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
function inputarr([a, b, c]) {
    console.log(a + '|' + b + '|' + c);
}
inputarr([40, 'wine', false]);
//객체지향 class 문법 숙제
//1.다음 x, y, z 속성의 특징을 설명해보십시오.
class TestClass {
    static x = 10;
    static y = 20;
    z = 30;
}
//x : private + static 임으로 TestClass안에서만 수정이가능하고 자식에게는 물려주지않는 값
//y : public + static 자식에게는 물려주지 않지만 수정은 가능함
//z : 상속받은 자식이 수정이가능함
//2.x 속성에 숫자를 더해주는 함수가 필요합니다.
class TestClass2 {
    static x = 10;
    static y = 20;
    addOne(a) {
        TestClass2.x += a;
    }
    printX() {
        console.log('값은' + TestClass2.x);
    }
}
let TestClass3 = new TestClass2();
TestClass3.addOne(3); //이렇게 하면 x가 3 더해져야함
TestClass3.addOne(4); //이렇게 하면 x가 4 더해져야함
TestClass3.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
//3.이런거 어떻게 만들게요 
class Square2 {
    x;
    y;
    color;
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    random() {
        let random = Math.floor(Math.random() * 400 + 1);
        return random;
    }
    draw() {
        let div = document.querySelector('.box-container');
        let element = document.createElement('div');
        element.style.width = this.x + 'px';
        element.style.height = this.y + 'px';
        element.style.background = this.color;
        element.style.position = 'absolute';
        element.style.left = this.random() + 'px';
        element.style.bottom = this.random() + 'px';
        element.style.right = this.random() + 'px';
        element.style.top = this.random() + 'px';
        if (div instanceof Element) {
            div.appendChild(element);
        }
    }
}
let boxinfo = new Square2(30, 30, 'red');
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
// boxinfo.draw();
//Generic숙제
//1.문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
function testge(x) {
    console.log(x.length);
}
testge('hello');
testge(['hello', 'hi']);
//2.Animal 이라는 타입이 있습니다.
let data = '{"name" : "dog", "age" : 1 }';
function changeobj(x) {
    return JSON.parse(x);
}
let result = changeobj(data);
console.log(result);
//3.class 를 수정해봅시다.
class Person {
    name;
    constructor(a) {
        this.name = a;
    }
}
let a = new Person('어쩌구');
a.name; //any 타입이 되었넹 
