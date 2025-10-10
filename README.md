# 🌐 Joyful World - 회사 소개 홈페이지 외주 제작

> **"Joyful World"** 회사의 공식 소개 홈페이지를 외주로 제작한 프로젝트입니다.  
> React + Firebase 기반으로 다국어 지원(i18n)과 반응형 UI를 구현하였습니다.

---

## 🚀 Demo

- **배포 링크:** [https://joyful-world.co.kr](https://joyful-world.co.kr)
- **페이지 예시:**
<table>
  <tr>
    <td>
      <div align="start"><sub>Home(KOR)</sub></div>
      <img width="100%" alt="home_kor" src="https://github.com/user-attachments/assets/613a579f-55a5-461b-82c5-af3be8b945ee" />
    </td>
    <td>
      <div align="start"><sub>Home(ENG)</sub></div>
      <img width="100%" alt="home_eng" src="https://github.com/user-attachments/assets/1198114a-a752-41da-aa73-dc0745d37cca" />
    </td>
  </tr>
  <tr>
    <td> 
      <div align="start"><sub>BrandStory Page</sub></div>
      <img width="100%" alt="brand-story" src="https://github.com/user-attachments/assets/2199f522-dee5-4906-a9d7-84d12b7da5dc" />
    </td>
    <td>
      <div align="start"><sub>Contact Page</sub></div>
      <img width="100%" alt="contact" src="https://github.com/user-attachments/assets/a6da95be-16be-416b-81b4-978dda630144" />
    </td>
  </tr>
  <tr>
    <td>
      <div align="start"><sub>AboutUs Page</sub></div>
      <img width="100%" alt="about-us" src="https://github.com/user-attachments/assets/e8f3e429-65c5-4d15-be89-5336a84f914f" />
    </td>
    <td>
      <div align="start"><sub>Products Page</sub></div>
      <img width="100%" alt="products" src="https://github.com/user-attachments/assets/f77f58ee-b150-495d-945d-d258d6d449fe" />
    </td>
  </tr>
  <tr>
    <td>
      <div align="start"><sub>Community Page</sub></div>
      <img width="100%" alt="community" src="https://github.com/user-attachments/assets/d5124757-1126-4c49-b004-93bfcb4ff5f5" />
    </td>
  </tr>
</table>

---

## 💡 프로젝트 개요

> “Joyful World”라는 회사의 **소개 홈페이지 외주 작업**을 맡아 진행했습니다.  
> 디자인은 **국내 유명 식품 브랜드 홈페이지**를 참고하여 제작하였으며,  
> 협력사와 고객에게 회사 정보를 직관적으로 전달하는 데 초점을 두었습니다.

---

## 🧩 주요 기능

- 🏢 회사 소개, 제품 정보 등 주요 콘텐츠 표시
- 🌏 **한국어/영어 언어 변경 기능** (i18n 사용)
- 🍯 제품 **카테고리별 필터링 기능** (Query String 기반)
- 🔥 **Firebase**를 통한 실시간 데이터 연동
- 📱 **반응형 UI** (Tailwind CSS로 모바일/태블릿/데스크탑 화면 대응)

---

## ⚙️ 기술 스택

| 구분                   | 기술                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Front-End**          | <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/> |
| **Database / Hosting** | <img src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white"/>                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **API / 다국어 지원**  | <img src="https://img.shields.io/badge/i18next-26A69A?style=flat-square&logo=i18next&logoColor=white"/>                                                                                                                                                                                                                                                                                                                                                                                                                                               |

---

## 📁 폴더 구조

```bash
src/
┣ components/      # 공용 UI 컴포넌트
┣ pages/           # 페이지 단위 컴포넌트
┣ i18n/            # i18n 설정 관련 파일
┣ locales/         # 다국어 JSON 리소스
┣ lib/             # Firebase 및 유틸 함수
┗ App.tsx          # 메인 엔트리
```

