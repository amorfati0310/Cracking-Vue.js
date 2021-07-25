(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{253:function(t,a,s){"use strict";s.r(a);var n=s(3),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"코드-분할"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#코드-분할","aria-hidden":"true"}},[t._v("#")]),t._v(" 코드 분할")]),t._v(" "),s("p",[t._v("코드 분할(Code Splitting)은 싱글 페이지 애플리케이션의 성능을 향상시키는 방법입니다. 싱글 페이지 애플리케이션(Single Page Application)은 초기 실행시에 필요한 웹 자원을 모두 다운 받는 특징이 있습니다. 코드 분할을 활용하게 되면 초기 로딩시에 모든 웹 자원을 다운받지 않고 필요한 시점에 다운 받아 성능 상의 이점이 생깁니다. 참고로 뷰에서 코드 분할이 가능한 이유는 뷰의 "),s("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("비동기 컴포넌트 로딩"),s("OutboundLink")],1),t._v("과 웹팩의 "),s("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("코드 스플리팅 기술"),s("OutboundLink")],1),t._v(" 덕택입니다.")]),t._v(" "),s("h2",{attrs:{id:"개발-환경-조건"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#개발-환경-조건","aria-hidden":"true"}},[t._v("#")]),t._v(" 개발 환경 조건")]),t._v(" "),s("p",[t._v("다만 지연된 로딩(Lazy Loading) 방법을 적용하기 위해서는 아래와 같은 개발 환경을 갖고 있어야 합니다.")]),t._v(" "),s("ol",[s("li",[t._v("싱글 파일 컴포넌트 체계 (.vue)")]),t._v(" "),s("li",[t._v("웹팩 - 모듈 번들러 (2.x 이상)")]),t._v(" "),s("li",[t._v("바벨 "),s("a",{attrs:{href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Syntax-dynamic-import 플러그인"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"바벨-syntax-dynamic-import-설치-방법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#바벨-syntax-dynamic-import-설치-방법","aria-hidden":"true"}},[t._v("#")]),t._v(" 바벨 Syntax-dynamic-import 설치 방법")]),t._v(" "),s("p",[t._v("뷰 CLI로 생성한 경우에는 이미 1번과 2번을 만족하고 계실테지만 3번의 경우에는 별도의 설치가 필요합니다.\n바벨 Syntax-dynamic-import 플러그인 설치는 아래의 절차를 따릅니다.")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://babeljs.io/docs/plugins/syntax-dynamic-import/",target:"_blank",rel:"noopener noreferrer"}},[t._v("syntax-dynamic-import 플러그인"),s("OutboundLink")],1),t._v(" 설치")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev babel-plugin-syntax-dynamic-import\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("code",[t._v(".babelrc")]),t._v(" 파일에 아래와 같이 플러그인 설정 추가")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"syntax-dynamic-import"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"라우터의-코드-분할-문법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#라우터의-코드-분할-문법","aria-hidden":"true"}},[t._v("#")]),t._v(" 라우터의 코드 분할 문법")]),t._v(" "),s("p",[t._v("싱글 페이지 애플리케이션에서 뷰 라우터를 사용할 때 라우팅 별로 코드를 분할하는 방법은 아래와 같습니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url 이름'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'컴포넌트 이름'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("위와 같은 방법을 지연된 로딩(Lazy Loading)이라고 합니다. 이는 애플리케이션 규모가 커져 싱글 페이지 애플리케이션의 초기 화면 로딩 시간을 줄일 때 사용하는 방법입니다. 왜냐면 화면이 10개인 웹 앱이 있는데 애플리케이션을 처음 시작했을 때 쓰지도 않을 나머지 화면 9개를 다 불러오는 것 보다는\n특정 화면으로 이동할 때마다 해당 화면의 내용을 추가적으로 불러오는 것이 애플리케이션 로딩 속도 면에서 더 효율적이기 때문입니다.")]),t._v(" "),s("p",[t._v("위 환경을 구성하고 나면 아래와 같이 특정 URL에 따른 코드 분할이 가능해집니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./LoginPage.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./MainPage.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\troutes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);