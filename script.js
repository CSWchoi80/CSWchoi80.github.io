// 콜백 함수를 전역 스코프에 정의
window.displayPages = function(json) {
    const pageList = document.getElementById('page-list');
    pageList.innerHTML = ''; // '로딩 중...' 메시지 제거
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
            link.target = "_blank"; // 링크를 새 탭에서 열기
            link.rel = "noopener noreferrer";

            listItem.appendChild(link);
            pageList.appendChild(listItem);
        }
    });
};

document.addEventListener("DOMContentLoaded", function() {
    // ⚠️ 자신의 블로그스팟 주소로 반드시 변경하세요! (예: https://google.blogspot.com)
    const blogUrl = 'YOUR_BLOG_URL'; 
    
    // 블로그 주소가 설정되지 않은 경우 오류 메시지 표시
    if (blogUrl === 'YOUR_BLOG_URL' || blogUrl.trim() === '') {
        const pageList = document.getElementById('page-list');
        pageList.innerHTML = '<li>오류: script.js 파일에서 블로그 주소를 설정해주세요.</li>';
        return;
    }
    
    const feedUrl = `${blogUrl}/feeds/pages/default?alt=json-in-script&callback=displayPages`;

    const script = document.createElement('script');
    script.src = feedUrl;
    document.body.appendChild(script);
});
