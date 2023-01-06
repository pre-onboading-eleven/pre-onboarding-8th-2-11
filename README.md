# 원티드 프리온보딩 2주차 과제

## 🤝 과제 
- 이슈 트래킹 기능 구현(e.g, Jira, Trello)
- 기간: 2023/01/03 ~ 2023/01/06

## ✈️ 배포 링크

## 👨‍👩‍👧‍👦 팀 소개

<table>
<tr>
    <td align="center">
        <a href="https://github.com/hozunlee">
        <img src="https://avatars.githubusercontent.com/u/60101732?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@hozunlee</b></sub>
        <br />
        <sub><b>이호준(팀장)</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/8dong">
        <img src="https://avatars.githubusercontent.com/u/96307662?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@8dong</b></sub>
        <br />
        <sub><b>김동현</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yesharry">
        <img src="https://avatars.githubusercontent.com/u/101863209?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@yesharry</b></sub>
        <br />
        <sub><b>노해리</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/blan19">
        <img src="https://avatars.githubusercontent.com/u/66871265?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@blan19</b></sub>
        <br />
        <sub><b>박준서</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center">
        <a href="https://github.com/gandy818">
        <img src="https://avatars.githubusercontent.com/u/67881881?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@gandy818</b></sub>
        <br />
        <sub><b>유나영</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/copiter">
        <img src="https://avatars.githubusercontent.com/u/99804262?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@copiter</b></sub>
        <br />
        <sub><b>장태경</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/homile">
        <img src="https://avatars.githubusercontent.com/u/56163157?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@homile</b></sub>
        <br />
        <sub><b>조민우</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ALSRUD29">
        <img src="https://avatars.githubusercontent.com/u/107922059?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@ALSRUD29</b></sub>
        <br />
        <sub><b>박민경</b></sub>
        </a>
    </td>
</tr>
</table>

## ⚡️ 프로젝트 실행 방법

```
yarn
yarn dev
```

## 🌲 src 폴더 구조


## 🎬 기능 소개(gif)

### 1. 각 이슈의 CRUD 구현
#### ✅ 추가
![추가](https://user-images.githubusercontent.com/107922059/210996662-13b08940-8630-470e-bec2-f02b9267917d.gif)

#### ✅ 삭제
![삭제](https://user-images.githubusercontent.com/107922059/210996670-14dd2cd2-9066-4fa7-8a4d-d5b68c0f06aa.gif)

#### ✅ 수정
![수정](https://user-images.githubusercontent.com/107922059/210996649-8dee2547-a737-4a84-9d1d-f9307aabdb2f.gif)


### 2. Drag & Drop 이벤트
#### ✅ 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경 
#### ✅ Drag & Drop 이벤트를 활용해 이슈의 상태를 변경(옆으로 상태 바뀌는 사진)
![드래그앤드랍](https://user-images.githubusercontent.com/107922059/210996674-08b67998-0a87-4c5c-9a70-941e3f602601.gif)

### 3. 로딩페이지
#### ✅ 데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려
#### ✅ 로딩 중에는 액션이 발생하는 것을 방지
![로딩](https://user-images.githubusercontent.com/107922059/210996634-17336457-82d0-48d3-afd9-3d23c2d2b94b.gif)


### 4. 기타
#### ✅ 새로고침 후 데이터 유지
![데이터 수정후 유지](https://user-images.githubusercontent.com/107922059/210996683-0becca9b-f63f-4f00-b56e-64c9db86c5f7.gif)

## 💡Best Practice(코드 캡처)

1. CRUD
#### ✅ 이슈 추가, 삭제
//코드캡처
```
Best Practice 선정 이유

블라블라
```

#### ✅ 이슈 수정

#### ✅ Modal Component

2. Drag & Drop 

3. 로딩 페이지

#### ✅ Loading Component

4. 기타

#### ✅ 실수로 인한 중복 액션을 방지

#### ✅ 새로고침 후 데이터 유지

5. 배포???


##⚒️ 기술 스택 / 라이브러리

TypeScript, React, Styled-Components, react-router, zustand

## 📝 Commit message Convention & branch 전략

- commit message


| Type             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| feat             | 새로운 기능 추가                                             |
| fix              | 버그 수정                                                    |
| docs             | 문서 수정                                                    |
| style            | 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우     |
| refactor         | 코드 리팩터링                                                |
| test             | 테스트 코드, 리팩터링 테스트 코드 추가(프로덕션 코드 변경 X) |
| merge            | 브랜치간 병합, 충돌 해결 |
| chore            | 빌드 업무 수정, 패키지 매니저 수정(프로덕션 코드 변경 X)     |
| design           | CSS 등 사용자 UI 디자인 변경                                 |
| comment          | 필요한 주석 추가 및 변경                                     |
| rename           | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우          |
| remove           | 파일을 삭제하는 작업만 수행한 경우                           |
| !BREAKING CHANGE | 커다란 API 변경의 경우                                       |
| !HOTFIX          | 급하게 치명적인 버그를 고쳐야 하는 경우                      |

- branch 전략

| Branch Name | Description                                                        |
| ----------- | ----------------------------------------------------------------- |
|    main     | 배포 및 최종본, 출시 버전 브랜치                                    |
|     dev     | 개발 단계 브랜치. dev 브랜치에서 에러가 안 날 경우에만 최종적으로 main으로 push 가능 |
|    feat/    | 세부 기능 개발 단계 브랜치                                          |
|   design/   | 디자인 작업 단계 브랜치                                             |
|    docs/    | 문서 작업 브랜치                                                    |
