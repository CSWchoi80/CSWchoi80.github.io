# 📋 내 블로그 페이지 목록 (Blog Page List Viewer)

왼쪽 사이드바에서 블로그 페이지 목록을 자동으로 불러오고, 클릭하면 새 탭에서 열 수 있는 깔끔한 GitHub용 블로그 페이지입니다.

---

## 🌐 미리보기
> GitHub Pages에서 호스팅하면 아래와 같이 작동합니다.  
> `https://yourusername.github.io/blog-page-list/`

---

## 📁 구성 파일
- `index.html` : 블로그 페이지 구조
- `style.css` : 전체 디자인
- `script.js` : 블로그 페이지 데이터를 불러오는 스크립트

---

## 🧩 index.html

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>내 블로그 페이지 목록</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="page-list-container">
        <h2>페이지 목록</h2>
        <ul id="page-list">
            <li>로딩 중...</li>
        </ul>
    </div>

    <main class="main-content">
        <h1>내 블로그 페이지 아카이브</h1>
        <p>왼쪽 목록에서 보고 싶은 페이지를 선택하세요.</p>
    </main>

    <script src="script.js"></script>
</body>
</html>