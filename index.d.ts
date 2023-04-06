declare let 이름: string;
declare let 나이: number;
declare let 결혼했니: boolean;
declare let name1: {
    name?: string;
};
declare let name2: {
    name: string | number;
};
declare let 회원들: (number | string)[];
declare let 오브젝트: {
    a: string | number;
};
declare let 이름1: any;
declare let 이름2: unknown;
type Mytype = string[] | number;
type Memberarr1 = [number, boolean];
type Memberarr2 = number[];
declare let john: Memberarr2;
type Member2 = {
    [key: string]: string;
    [key: number]: string;
};
declare let mina: Member2;
declare function 함수(x: number, y?: string): number;
declare function 함수2(x: number | string): void;
declare function array함수(x: number | string): void;
type Girlfriend = {
    readonly name: string;
};
declare const 여친: Girlfriend;
declare let testname: 123 | "피자";
declare function testfun(a: "hello"): 1 | 0;
type rsp = "가위" | "바위" | "보";
type arrayrsp = ("가위" | "바위" | "보")[];
declare function testrsp(a: rsp): arrayrsp;
declare var obj1: {
    name: string;
};
declare function testobj1(a: "kim"): void;
type Alias = (a: string) => number;
declare let testalias: Alias;
type CutType = (a: string) => string;
declare let userinfo: {
    name: string;
    age: number;
    plusOne(a: number): number;
};
declare let cutZero: CutType;
declare function removeDash(x: string): number;
declare function testcut(a: string, b: Function, c: Function): number;
declare let title: Element | null;
declare let link: Element | null;
declare let linkbtn: Element | null;
declare let imgsrc: Element | null;
declare let multilink: NodeListOf<Element>;
declare function character(q: string, w: string): void;
declare class Character {
    q: string;
    w: string;
    constructor(q: string, w: string);
}
declare let nunu: Character;
declare let garen: Character;
interface Square {
    color: string;
    width: number;
}
declare let 네모: Square;
interface Student {
    name: string;
}
interface Student {
    score: number;
}
interface Teacher extends Student {
    age: number;
}
declare let 학생: Student;
declare let 선생: Teacher;
type Animal = {
    name: string;
};
type Cat = {
    age: number;
} & Animal;
declare function testrest(...a: number[]): void;
declare function testnar(a: string | undefined): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function testani(animal: Fish | Bird): void;
declare function testnever(a: string): never;
declare class User {
    name: string;
    private familyName;
    constructor(a: any);
    setFamilyName(a: any): void;
}
declare let 유저1: User;
declare class User2 {
    name: string;
    constructor(name: string);
}
declare class User3 {
    protected x: number;
}
declare class CopyUser3 extends User3 {
    doThis(): void;
}
declare class User4 {
    static x: number;
    y: number;
}
declare let children: User4;
declare class User5 {
    static skill: string;
    intro: string;
}
declare let kim: User5;
declare let kim2: User5;
declare function testGeneric<MyType extends number>(x: MyType[]): MyType;
declare let g: number;
interface StringOnly {
    [key: string]: string;
}
declare let teststring: StringOnly;
