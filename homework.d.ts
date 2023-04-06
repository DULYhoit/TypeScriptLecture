declare let hwname: string;
declare let hwage: number;
declare let hwadrees: string;
declare let singer: {
    song?: string;
    singer?: string;
};
declare let project: {
    member: string[];
    days: number;
    started: boolean;
};
declare let user: string;
declare let age: undefined | number;
declare let married: boolean;
declare let 철수: (string | (undefined | number) | boolean)[];
declare let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
};
declare function plusnum(...num: number[]): number;
type InputType = {
    user: string;
    comment: number[];
    admin: boolean;
};
declare function inputobj({ user, comment, admin }: InputType): void;
declare function inputarr([a, b, c]: (number | string | boolean)[]): void;
declare class TestClass {
    private static x;
    static y: number;
    protected z: number;
}
declare class TestClass2 {
    private static x;
    static y: number;
    addOne(a: number): void;
    printX(): void;
}
declare let TestClass3: TestClass2;
declare class Square2 {
    x: any;
    y: any;
    color: any;
    constructor(x: number, y: number, color: string);
    random(): number;
    draw(): void;
}
declare let boxinfo: Square2;
declare function testge<Mytype extends string | string[]>(x: Mytype): void;
declare let data: string;
interface Animal3 {
    name: string;
    age: number;
}
declare function changeobj<Mytype extends string>(x: Mytype): any;
declare let result: any;
declare class Person<Mytype extends number | string | string[]> {
    name: Mytype;
    constructor(a: Mytype);
}
declare let a: Person<"어쩌구">;
