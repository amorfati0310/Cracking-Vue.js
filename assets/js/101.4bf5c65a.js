(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{344:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-사이트-배포하기-절차"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-사이트-배포하기-절차","aria-hidden":"true"}},[s._v("#")]),s._v(" VuePress 사이트 배포하기 절차")]),s._v(" "),a("p",[s._v("VuePress로 그날 그날 배운 내용을 정리하기 위해 "),a("strong",[s._v("학습 노트")]),s._v(" 사이트를 제작합니다.")]),s._v(" "),a("h2",{attrs:{id:"사이트-배포-하기-절차"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#사이트-배포-하기-절차","aria-hidden":"true"}},[s._v("#")]),s._v(" 사이트 배포 하기 절차")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("깃헙"),a("OutboundLink")],1),s._v(" 계정 생성")]),s._v(" "),a("li",[s._v("깃헙 리포지토리 생성")]),s._v(" "),a("li",[s._v("생성한 리포지토리를 클론")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 학습 노트를 관리할 폴더의 위치에서 아래 명령어 입력")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'생성한 리포지토리 클론 주소'")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("클론된 프로젝트 위치로 이동")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'클론해서 생성된 폴더 이름'")]),s._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("프로젝트에서 "),a("code",[s._v("docs")]),s._v(" 폴더 생성")]),s._v(" "),a("li",[s._v("프로젝트에서 아래와 같은 명령어를 순서대로 입력")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D vuepress\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",[s._v("만약 permission 관련된 오류가 날 경우에는 "),a("code",[s._v("npm install -D vuepress")]),s._v(" 대신에 "),a("code",[s._v("sudo npm install -D vuepress")]),s._v(" 입력하세요.")])]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("code",[s._v("package.json")]),s._v(" 파일의 내용을 아래와 같이 수정")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"doc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[a("code",[s._v("docs")]),s._v(" 폴더 밑에 "),a("code",[s._v("README.md")]),s._v(" 파일을 생성하고 아래의 내용을 추가")])]),s._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" Vue.js 정복 캠프 학습 노트!!")]),s._v("\n")])])]),a("ol",{attrs:{start:"9"}},[a("li",[a("strong",[s._v("클론된 프로젝트 폴더")]),s._v(" 밑에 "),a("code",[s._v("deploy.sh")]),s._v(" 파일을 추가하고 아래 내용 삽입")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# abort on errors")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# navigate into the build output directory")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if you are deploying to a custom domain")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy with vuepress'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if you are deploying to https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if you are deploying to https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master:gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])])]),a("div",{staticClass:"danger custom-block"},[a("p",[s._v("위에서 "),a("code",[s._v("<뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소>")]),s._v("는 꼭 리포지토리의 주소로 변경해주셔야 합니다.")])]),s._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[s._v("프로젝트 폴더의 위치에서 "),a("code",[s._v("sh deploy.sh")]),s._v("를 실행하여 사이트 배포")])]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[a("code",[s._v("sh")]),s._v("라는 명령어는 윈도우 기본 명령어 프롬프트 창에서 먹지 않습니다. 따라서 "),a("a",{attrs:{href:"https://cmder.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cmder"),a("OutboundLink")],1),s._v("이라는 콘솔 프로그램을 설치해서 실행하거나 git bash와 같은 별도의 콘솔창을 사용하시면 됩니다 😃")])]),s._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[s._v("브라우저에 "),a("code",[s._v("https://<USERNAME>.github.io/<REPO>")]),s._v(" 입력 후 사이트 확인 (보통 5~10분 소요)")])])])}),[],!1,null,null,null);t.default=e.exports}}]);