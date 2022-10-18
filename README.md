<h1>
<img src="https://user-images.githubusercontent.com/60383706/195504384-cf5bbc8e-f663-4470-a603-1d9ee15165ca.png" width="8%" height="8%" \> Second Life Project
</h1>

- 프로젝트 명: **Second Life**
- 프로젝트 목표: 의류 재사용과 환경 보호를 위한 **중고의류 거래 쇼핑몰** 제작
- [Live Demo](https://mapo-project.github.io/SecondLife-frontend/) 에서 서비스를 확인해 볼 수 있습니다.
- 팀원 구성 및 이름
  - 기획 & 디자인 : 이진희, 최연정
  - 프론트 : **민지원([@Gwonie](https://github.com/Gwonie)), 이경은([@ke-leee](https://github.com/ke-leee)), 추홍규([@chuhongkyu](https://github.com/chuhongkyu))**
  - 백앤드 : 김대희
- 이 프로젝트는 마포구 청년 일자리 사업단의 지원으로 제작되었습니다.

---

## :computer: 화면구성 및 기능구현

- 홈   
![main](https://user-images.githubusercontent.com/60383706/195486492-a4c39c60-96df-41ad-ad8d-e06e0160db49.gif)   
- 로컬 로그인, 간편 로그인(구글, 카카오)
- 로컬 회원가입
- 간편 회원가입
- 픽업신청   
![pickup](https://user-images.githubusercontent.com/60383706/195486496-a470eee2-4a24-4f3d-8e5d-453d27d71cbc.gif)
- 마이페이지   
![mypage](https://user-images.githubusercontent.com/60383706/195486495-0c8f7888-2831-4989-882c-881d110af07b.gif)   
- 상품 더보기
- 카테고리별 상품 조회
- 상품 상세   
![filter](https://user-images.githubusercontent.com/60383706/195486487-c41bbaf8-948a-46cb-a64a-ece37776839e.gif)   

---

## :wrench: 프론트엔드 기술스택

- ReactJS
- Redux-Toolkit
- Style-Components
- React Router

---

## :hammer: 사용툴 및 협업툴

- Visual Studio Code
- Git, Github
- Figma
- Slack, Notion
---

## :rotating_light: 이슈

- 완성도 높은 사이트를 위해 기획과 디자인의 빈번한 변경이 발생. 따라서 프로젝트의 개발환경과 레이아웃 및 기능을 자주 변경
- Netlify배포환경에서 배포페이지 안정성을 위해 Github-page로 배포변경
- 잘못된 HTTP Method  백엔드와 다시 조율
- SPA 특성상 페이지 이동시 스크롤 위치가 그 전 페이지 위치와 동일한 현상이 생김. 따라서  컴포넌트에 window.scrollTo(0, 0) 적용
- 프로젝트 후반 백엔드 부재발생. 따라서 데이터베이스를 직접 조작하여 데이터 수정

---

## :balloon: 성장경험

- Theme provider를 이용한 공통 스타일 속성 관리를 통해 재사용성을 높이고 시간 효율 향상
- Prettier Extension을 사용함으로써 코드 통일성을 높임
- npm ci 를 사용하여 패키지 버전을 통일
- Figma와 WBS작성을 기반으로 팀원 간 작업내용과 기간을 공유함으로써 애자일한 프로세스 경험
- JWT 토큰 인증 방식을 이용하여 로그인, 회원가입 등의 기능을 구현함으로써 보안성을 높임
- redux-toolkit store에 Access Token, 회원정보를 저장하여 전역 상태를 효율적으로 관리

---

## :mag: 개선사항

- 추후 반응형 디자인을 통해 반응형 페이지 제작
- Usememo ,Usecallback 과 같은 리액트 훅이나 ReactQuery 라이브러리를 사용한 최적화 필요
- 효율적인 코드작성을 위한 팀원들 간의 코드리뷰 및 효율적인 협업을 위한 깃 커밋 메세지 규칙 준수
- jira와 같은 협업툴과 위클리 스프린트를 통해 보다 자세한 개발현황을 공유

---
