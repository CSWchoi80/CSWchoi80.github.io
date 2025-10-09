// 블로그 페이지 불러오기 콜백
window.displayPages = function(json) {
    const pageList = document.getElementById('page-list');
    pageList.innerHTML = ''; // '로딩 중...' 제거
    const entries = json.feed.entry || [];

    if (entries.length === 0) {
        pageList.innerHTML = '<li>게시된 페이지가 없습니다.</li>';
        return;
    }

    entries.forEach(entry => {
        const pageTitle = entry.title.$t;
        let pageUrl = '';

        for (let link of entry.link) {
            if (link.rel === 'alternate') {
                pageUrl = link.href;
                break;
            }
        }

        if (pageTitle && pageUrl) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = pageUrl;
            link.textContent = pageTitle;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            listItem.appendChild(link);
            pageList.appendChild(listItem);
        }
    });
};

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function() {
    const blogUrl = 'YOUR_BLOG_URL'; // 자신의 블로그 주소 입력 (예: https://yourblog.blogspot.com)

    if (blogUrl === 'YOUR_BLOG_URL' || blogUrl.trim() === '') {
        const pageList = document.getElementById('page-list');
        pageList.innerHTML = '<li>⚠️ 오류: script.js 파일에서 블로그 주소를 설정해주세요.</li>';
        return;
    }

    const feedUrl = `${blogUrl}/feeds/pages/default?alt=json-in-script&callback=displayPages`;
    const script = document.createElement('script');
    script.src = feedUrl;
    document.body.appendChild(script);
});
