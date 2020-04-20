https://ko.javascript.info/ 

타입스크립트 코리아 : 기초 세미나

강의 자료 
https://www.youtube.com/playlist?reload=9&list=PLV6pYUAZ-ZoE8uRXG51003heNA0EATIxN

http://slides.com/woongjae/deck-8
http://slides.com/woongjae/deck-8-14
http://slides.com/woongjae/deck-8-15

https://joshua1988.github.io/ts/

typescript : language (자바스크립트 호환. 슈퍼셋.)
                        자바스립트의 언어 모두 호환 + 타입스크립트만의 언어 
complied laguage : 전통적인 컴파일 언어와는 다름. transpile 이라는 용어 사용 . 메타 프로그래밍 ( ex 바벨 ) 
=> 

자바스크립트 : 인터프리터 랭귀지 


컴파일 : 컴파일이 필요. 컴파일된 결과물을 실행. 컴파일된 결과물을 실행하는 시점 
인터프리티드 : 컴파일이 필요하지 않음. 컴파일 시점 x, 코드 자체를 실행. 코드를 실행하는 시점ㅇ == 런타임

- compile시 가장 중요하게 여기는 것 : type 
그래서 이름이 typescript
object 형태 자체가 자유로움 : javascript
이에 좀 더 딱딱한 것. 정적타입언어 : typescript

정적 타입 언어 vs 동적 타입 언어 

Traditional Compiled Language 
- 컴파일 언어
- C, C++, JAVA, C#, Go
- 소스 코드 -> 기계어 변환 과정 : 컴파일
- 인터프리터 언어보다 기계어로 바꾸는 방식이 더 빠름
- linking ( 타입스크립트에는 없음)

------------------------------------------------------------------

타입 스크립트 ===> 컴파일러 ===> 자바 스크립트
  (에디터)                          (실행환경)

과정에 대한 강의가 될 것


----------------------------------------------------------------------
개발 환경 구축 및 컴파일러 사용

node.js / browser 
node.js : v8 javascript engine을 사용하여 자바스크립트를 해석하고 OS레벨에서의 API를 제공하는 서버사이드용 자바스크립트 런타임 환경

browser : HTML을 동적으로 만들기 위해 브라우저에서 자바스크립트를 해석하고 DOM을 제어할 수 있도록 하는 자바스크립트 런타임 환경

nvm : node.js version manager

npm init -y : 폴더 생성
npm i typescript 

.bin 속의 파일들은 경로 안 붙이고 사용 가능
ex) tsc 
typescript 사용하기 위해서는 tsc script를 써야하는데
npm script에 node_modules/.bin/tsc 로 써주어야하는데 .bin 안에 들어있는 명령어는 그냥 써도 괜찮게 npm에서 정의함. 
따라서 그냥 tsc 불러서 컴파일하기 위하여 : tsc만 씀
하지만 커맨드라인에서 쓰려먼 npm 환경이 아니기 때문에 경로 모두 작성해주어야 함

==> 컴파일하는 script (transpile): tsc
==> npm run transpile 

config 파일이 없는데 어떻게 컴파일되는것 : 미리 라이브러리와 파일이 정해져있음

--------------------------------------------------------------
IDE 설치 
1. intelliJ
2. visual studio code : 타입스크립트로 만들어짐. 와우. 

---------------------------------------------------------------
컴파일러 사용 예제
타입스크립트 컴파일러를 글로벌로 설치 : npm i typescript -g
cli 명령어로 파일 컴파일 (tsc)
특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일 
: tsc --init (tsc 컴파일러의 초기세팅을 하겠다 : tsconfig.json 생김)

특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일(watch모드)  
: -w (변경되면 감지해서 새로 컴파일해주는 것 ( 걸프와 비슷))

실행 : node [파일명]

----------------------------------------------------------------------
tslint
npm i tslint -D
=> tslint init

--------------------------------------------------------------

compiler option
http://json.schemastore.org/tsconfig

---------------------------------------------------------------
* 데이터타입

TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입

JavaScript 기본 자료형을 포함 (superset)
ECMAScript 표준에 따른 기본 자료형은 6가지

Boolean
Number
String
Null
Undefined
Symbol (ECMAScript 6 에 추가)
Array : object 형

+ 

Any
Void
Never
Enum
Tuple : object 형 (Array의 변칙형)

Boolean / boolean
'boolean' is a primitive, but 'Boolean' is a wrapper object.

Number / number 또한 마찬가지


Any : 적폐 
=> 어떤 값을 넣어도 가능. 따라서 타입 체크가 제대로 안됨

------------------------------------------------------------------
var, let, const

var
    ES5
    변수의 유효 범위 : 함수 스코프
    호이스팅 (O)   
    (호이스팅 : 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것)
    재선언 가능

let, const
    ES6
    변수의 유효 범위 : 블록 스코프 (친숙)
    호이스팅 (X)
    재선언 불가

var 말고 let, const

----------------------------------------------------------------------
https://www.typescriptlang.org/play/

----------------------------------------------------------------------
const d = '디이'    //리터럴 타입 : 타입까지 강제. 문자열 자체가 타입이 됨
const c: string = '시'  //string 타입 
---------------------------------------------------------------------
let a: string = '에이';
let b = '비이';

const c: string = '씨이';
const d = '디이';

/*

1. a 는 명시적으로 지정된 타입인 string
2. b 는 타입추론에 의한 타입인 string
3. c 는 명시적으로 지정된 타입인 string
4. d 는 타입추론에 의한 타입인 리터럴타입 "디이"

*/


---------------------------------------------------------------------
Type assersions (타입 단언)

적당한 번역을 찾을 수가 없었습니다.
    Type assertions
형변환과는 다릅니다.
    형변환은 실제 데이터 구조를 바꿔줍니다.
'타입이 이것이다' 라고 컴파일러에게 알려주는 것을 의미합니다.
    그래서 행동에 대해서 작성자가 100% 신뢰하는 것이 중요합니다.
문법적으로는 두가지 방법이 있습니다.
    변수 as 강제할타입 <강제할타입>변수

---------------------------------------------------------------------
Type 별칭

-----------------------------
Aliasing Union Type
let person: string | number = 0;
person = 'Mark';

type StringOrNumber = string | number;

let another: StringOrNumber = 0;
another = 'Anna';

1. 유니온 타입은 A 도 가능하고 B 도 가능한 타입
2. 길게 쓰는걸 짧게
----------------------------------------------------------------
Aliasing Tuple
let person: [string, number] = ['Mark', 35];

type PersonTuple = [string, number];

let another: PersonTuple = ['Anna', 24];

1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.

----------------------------------------------------------------
인터페이스처럼 사용은 가능하지만 인터페이스가 아니기 때문에 
따른 것이 이 alias를 상속할 수 있지만 이 alias가 다른 것들을 상속 받을 수는 없다

1. 당연한건 type alias 끼리는 extends, implements 불가
2. interface extends type alias 가능
3. class implements type alias 가능
4. class extends type alias 블가 (interface 도 마찬가지)
5. 마치 interface 처럼 동작한다.

(어렵다....;;; 타입스크립트 오바네 )

------------------------------------------------------------------
- interface
자바의 interface와 굉장히 비슷

// no Interface
// 객체 리터럴 
// const person : {name : string ; age : number} = {
//     name: 'Mark',
//     age : 10
// }

// Interface
interface Person{
    name : String;
    age : number;
}

const person:Person = {
    name: 'Mark',
    age: 10
}


function hello(p:Person): void {
    console.log(`안녕하세요 ${p.name} 입니다.`)
}

있어도되고 없어도 됨 : ? 붙임 (optional property)


indexable type : 1. 사전같은 느낌   2. array같은 느낌(number를 프로퍼티로 해서 값을 넣는 느낌)
: 두 형태만 존재. dic or arr 

=> optional property

interface Person {
    name: string;
    age?: number;
    [props: string]: any;  //indexable type, optional property
}


** interface - function in interface
interface Person {
    name: string;
    age: number;
    hello(): void;
}

const p1: Person = {
    name: 'Mark',
    age: 35,
    hello: function (): void {
        console.log(this);
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};

const p2: Person = {
    name: 'Mark',
    age: 35,
    hello(): void {
        console.log(this);
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};

const p3: Person = {
    name: 'Mark',
    age: 35,
    hello: (): void => {
        console.log(this);
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
};

p1.hello(); // 안녕하세요! Mark 입니다.
p2.hello(); // 안녕하세요! Mark 입니다.
p3.hello(); // 안녕하세요! 입니다.

-----------------------------------------------------

class implements interface


interface IPerson {
    name: string;
    age?: number;
    hello(): void;
}

class Person implements IPerson {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요! ${this.name} 입니다.`);
    }
}

const person = new Person('Mark');
person.hello(); // 안녕하세요! Mark 입니다.

-------------------------------------------------------------
interface extends interface (인터페이스 상속받는 인터페이스)

interface Person {
    name: string;
    age?: number;
}

interface Korean extends Person {
    city: string;
}

const k: Korean = {
    name: '이웅재',
    city: '서울'
};

------------------------------------------------------------

function interface
interface HelloPerson {
    // (name: string, age: number): void;
    (name: string, age?: number): void;
}

let helloPerson: HelloPerson = function (name: string) {
    console.log(`안녕하세요! ${name} 입니다.`);
};

helloPerson('Mark'); // 안녕하세요! Mark 입니다.

함수의 타입 체크는 할당할때가 아니라 사용할때 한다는 점을 명심
-------------------------------------------------------------

string index = optional property
interface StringDictionary {
    [index: string]: string;
    name: string;
}

const sd: StringDictionary = {
    name: '이름' // 필수
};

sd.any = 'any'; // 어떤 프로퍼티도 가능

////////////////////////////////////////////////

interface StringDictionaryNo {
    [index: string]: string;
    // name: number; // (X) 인덱서블 타입이 string 값을 가지기 때문에 number 를 필수로 끌어오면 에러. name 또한 index로 사용될 것이기 때문에 인덱서블 타입과 다르면 안된다 (?)
}