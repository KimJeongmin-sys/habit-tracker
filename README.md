2.1 리액트를 배워야 하는 이유
페이스북에서 만든 자바스크립트 라이브러리
Frameworks(Angular, Vue)
정해진 골격 안에서 원하는 기능 구현
Libraries(React)
정해진 골격없이 원하는 라이브러리를 선택하여 기능 구현
Angular1에서 Angular2로 버전이 바뀌면서 호환 이슈가 많았음.
React는 버전이 바뀌어도 호환성에 문제없음.
문서화가 잘되어있음.

2.2리액트 컨셉과 구현 사항
A library for creating user interfaces
(유저 인터페이스를 만들 수 있는 라이브러리이다.)
한 단어로 정의하자면? components(컴포넌트로 이루어진 UI 라이브러리)
컴포넌트 특징: independent(독립적), isolated(고립적), reusable(재사용 가능)
사용자가 웹페이지를 보기 위해선 작성한 HTML 태그들이 DOM Tree로 표기
DOM(Document Object Model)
리액트 컴포넌트들도 트리로 구성되어있다.
Component 클래스를 상속받아서 사용
state의 데이터가 업데이트 될때마다 render() 함수가 반복적으로 호출됨.

리액트는 데이터가 변경될때마다 어플리케이션 전체를 다시 렌더링함.

필요한 툴: 터미널(cmder, NodeJS, Git)

NodeJS: 자바스크립트를 실행할 수 있는 환경, 어느 곳에서나 자바스크립트로 프로그래밍이 가능한 프레임워크
npm: NodeJS를 설치하면 같이 제공됨. 라이브러리 관리(package.json 파일 내에 라이브러리 정보)
yarn: 페이스북에서 만들어진 Package Manager

BABEL: JavaScript transcompiler, ECMAScript 2015+ -> older version
TypeScript, JSX -> JS 순수 자바스크립트로 변환.
Webpack: Bundling the code, JavaScript module bundler
소스코드를 사용자에게 간편하게 전달할 수 있도록 모듈을 번들링
ESLint: checking your code
Jest: delightful JavaScript testing framework
PostCSS: expandable CSS libraries

Component (Class/Function)
상태에 따라서 주기적으로 업데이트될 시, Class(state/lifecycle methods) 컴포넌트를 사용하고 항상 정적으로 데이터가 표기된다면 Function 컴포넌트로 간단히 구현.
but, 'React Hook'을 도입하면 Function 컴포넌트에서도 state와 lifecycle methods를 사용할 수 있음.

1.Class
React.Component
React.PureComponent

2.Function
function
memo(function)
React Hook

public tab에는 html, image 등 정적인 파일들이 위치(static)
src tab에는 프로젝트에 필요한 소스코드들이 위치(dynamic)

props: 부모로부터 받은 데이터.

HTML과 JSX의 차이점
태그 속성 class > className으로 이름 변경
onclick > onClick으로 이름 변경

HTML은 마크업 언어이고 JSX는 자바스크립트 코드이다.

return 문 안에는 반드시 하나의 최상위 태그가 있어야 한다. 이는 리액트가 하나의 컴포넌트만을 리턴할 수 있기 때문이다.
다수의 형제노드를 리턴할 때는 <React.Fragment> 태그를 통해 묶어야 한다.
(React.Fragment 생략하고 <> 표기로 가능)

React 어플리케이션은 state가 변경되면 전체적으로 render()가 호출이 되지만,
Virtual DOM(VDOM)이라는 메모리상에 트리로 보관되기 때문에 이전과 업데이트된 것을 비교해서 실제로 필요한 부분만 DOM 요소에 업데이트 되므로 성능에 문제가 되지않는다.

PureComponent 는 shallow level 로만 데이터를 비교하기 때문에, nested object 등의 변경된 데이터는 감지하지 못한다. (shouldComponentUpdate에 정의)

Lifecycle 함수
componentDidMount() => 컴포넌트가 UI에 등록이 되었을 때 호출.
componentWillUnmount() => 컴포넌트를 지우기 전에 호출.

Function 컴포넌트
Class에서 PureComponent가 있다면 Function에선 memo가 있음.

React Hook
Class => state{...}
Function => useState()

클래스에서 멤버변수는 클래스가 만들어질 때 한번만 만들어지고 render함수만 반복적으로 호출되는 반면, 함수는 컴포넌트가 변경이 되면 함수 전체가 반복해서 호출됨.(but, useState는 반복적으로 호출해도 값이 초기화되지 않는다.)

useEffect => 컴포넌트가 mount or update 될 때 호출됨.
두번째 인자인 배열에 변수를 넣으면 해당 변수가 update될 때 호출(공백이면 update될 때 호출이 안됨.)
