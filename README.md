# 원티드 프리온보딩 2주차 과제

## 🤝 과제 
- 이슈 트래킹 기능 구현(e.g, Jira, Trello)
- 기간: 2023/01/03 ~ 2023/01/06

## ✈️ 배포 링크

https://deploy-preview-18--relaxed-sable-ff1216.netlify.app

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
```
📦 
└─src
  ├─ App.tsx
  ├─ assets
  │  ├─ react.svg
  │  └─ spinner.gif
  ├─ components
  │  ├─ AddForm.tsx
  │  ├─ Book.tsx
  │  ├─ Dnd.tsx
  │  ├─ Issue.tsx
  │  ├─ Loading.tsx
  │  └─ Nav.tsx
  ├─ hooks
  │  └─ store.js
  ├─ main.tsx
  ├─ pages
  │  ├─ AddIssueInput.tsx
  │  ├─ Detail.tsx
  │  └─ Main.tsx
  └─ vite-env.d.ts
```


## 🎬 기능 소개(gif)

### 1. 각 이슈의 CRUD 구현
#### ✅ 추가
![추가](https://user-images.githubusercontent.com/101863209/211030397-6ac46bbd-21fb-43e5-859b-a8c5248776d2.gif)

#### ✅ 삭제
![삭제](https://user-images.githubusercontent.com/101863209/211030468-c9d14c33-b738-4813-9cbe-b208613a0872.gif)

#### ✅ 수정
![수정](https://user-images.githubusercontent.com/101863209/211030507-0e2a48e3-be10-4eed-8777-da1c33c744e3.gif)


### 2. Drag & Drop 이벤트
#### ✅ 마우스의 Drag & Drop 이벤트를 활용해 이슈의 순서를 변경 
#### ✅ Drag & Drop 이벤트를 활용해 이슈의 상태를 변경(옆으로 상태 바뀌는 사진)
![dnd](https://user-images.githubusercontent.com/101863209/211030555-5164c858-673a-471e-b7e8-f88bc80c8781.gif)


### 3. 로딩페이지
#### ✅ 데이터가 로딩중인 경우 사용자가 이를 인식할 수 있도록 UX를 고려
#### ✅ 로딩 중에는 액션이 발생하는 것을 방지
![로딩중액션](https://user-images.githubusercontent.com/101863209/211030659-7ea7cc99-c25f-4bb4-88b2-1445ba86322d.gif)


### 4. 기타
#### ✅ 새로고침 후 데이터 유지
![새로고침유지](https://user-images.githubusercontent.com/101863209/211030714-0a9bf069-dd4b-462a-bdc5-a9d0b7612a5d.gif)


## 💡Best Practice(코드 캡처)

### 1. Drag & Drop 

#### ✅ dnd
![드래그앤드랍](https://user-images.githubusercontent.com/107922059/211027202-635dc78b-667e-42b7-9d0b-d722b39a1758.png)

```
_ Best Practice 선정 이유 _
라이브러리를 사용하지 않고 dnd 기능을 구현하는데에 많은 어려움이 있었지만 동료학습과 협업으로 인해 마침내 구현할 수 있었습니다. 구현할때 저희는 마우스 이벤트의 onDragStart, onDragEnter, OnDragEnd 기능을 이용하여 구현했습니다. 먼저 드래그가 시작될때와 드래그 중일때 아이템의 위치를 계속 감시하며 dragRowOverItem과 dragColumnOverItem (ref) 값을 업데이트 시켜주었습니다.
드래그가 끝났을때 발생하는 이벤트인 onDragEnd에서 handleDrop 함수를 통해 이동된 곳의 status를 받아 해당 배열로 데이터가 이동할 수 있도록 구현했습니다. 이 과정에서 자료구조에 맞추어 structuredClone() method로 깊은 복사를 하였습니다. 또한 중요하게 생각했던 점은 따로 Dnd를 컴포넌트로 분리해, 확장성면을 고려했습니다. render 메서드를 통해 사용자에게 각 투두 리스트들의 커스텀을 자유롭게 할 수 있도록 하였으며, onDrop 메서드는 Dnd 내부 상태를 넘겨 사용자가 데이터 처리를 원하는대로 할 수 있도록 하였습니다.

```

### 2. CRUD
#### ✅ 이슈 추가, 삭제
![Untitled](https://user-images.githubusercontent.com/107922059/211026641-37e4eb44-6aaf-42a9-be01-1e60346a7ce1.png)
![Untitled (1)](https://user-images.githubusercontent.com/107922059/211026759-9b36f74b-c35d-427d-8645-6059e663c37f.png)

```
_ Best Practice 선정 이유 _
이번 과제는 데이터를 안 불러오는 상태에서 수정하고 지우고 추가하는 과정이 일어나야 했습니다. 
때문에 데이터를 store 안에 두고 관리하게 되었습니다. getter, setter 함수를 사용하여 
아무나 접근하지 못하게 하고 어디서 수정 됐는지 확인이 가능하게 하여 오류를 줄이고자 했습니다.
```

#### ✅ 데이터 자료구조 변경
![기존자료구조](https://user-images.githubusercontent.com/107922059/211027802-86f3c8f5-c9a9-4064-81f0-2a7823e0c2b1.png)
![변경후자료구조](https://user-images.githubusercontent.com/107922059/211027811-81578c59-594e-4155-bdb1-181d6e8a358f.png)
```
_ Best Practice 선정 이유 _
이슈의 crud구현을 위해 처음에는 데이터 자료구조를 위와 같이 각 이슈를 객체로 하는 배열로
구현하였는데, 논의 결과 dnd 구현과 sort 과정에서 “할 일”, “진행 중”, 완료”의 이슈 
상태 별로 자료구조의 변경이 필요하다고 결론 내렸습니다. 자료구조의 depth를 한 단계 더
높임으로써 drag & drop에서 객체 data state 변경의 래퍼런스 오류를 방지하고자 하였습니다.
```

#### ✅ Modal Component
![모달](https://user-images.githubusercontent.com/107922059/211027950-8b2c2ae3-887b-42d7-bbde-bc410fbd84c0.png)
![모달2](https://user-images.githubusercontent.com/107922059/211027955-d0a27224-7383-4a3b-9dfc-90ade7a0b0e0.png)
```
_ Best Practice 선정 이유 _
'각 이슈를 클릭 시 상세정보 창 표시' 부분은 모달 컴포넌트로 구현하였습니다. 라우터를 사용하여
디테일 페이지로 이동하는 구현 방식과 모달 컴포넌트로 구현하는 방식 중에서, 모달 컴포넌트 방식을
채택하여 보다 부드러운 액션의 UI를 구현할 수 있었고, 모달 컴포넌트를 이슈 추가 부분과 이슈 상세에서
재활용하도록 하였습니다.
```

#### ✅ AddForm 컴포넌트 재사용
![재사용1](https://user-images.githubusercontent.com/107922059/211028104-1559efd8-48af-4809-b716-54cd4c8ba246.png)
![재사용2](https://user-images.githubusercontent.com/107922059/211028108-5ee6ce0d-9667-4c00-a7c3-3b8882b35179.png)
```
Best Practice 선정 이유
컴포넌트의 재활용성을 높이기 위해 이슈 추가와 이슈 수정에 동일한 모달 컴포넌트를 사용하였습니다.
```


### 3. 기타

#### ✅ 새로고침 후 데이터 유지
![새로고침](https://user-images.githubusercontent.com/107922059/211027617-742e5107-ad9b-427c-beaf-23b2291f6139.png)

```
_ Best Practice 선정 이유 _
새로고침 후에도 데이터가 유지되어야 했기에 팀원 모두가 로컬스토리지에 데이터를 저장하는 방식을 
best practice로 뽑았습니다. 선정 과정에서 스토리지와 동기화가 잘 되는 전역상태관리 라이브러리인
zustand를 사용하자는 의견이 나왔고 모두가 동의하여 zustand로 상태관리를 하게되었습니다. 
zustand persist 미들웨어를 활용하여 localstorage를 동기화시켜 새로고침시에도 
데이터가 유지되게 만들었습니다.

```


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
