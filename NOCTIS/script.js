function openShow() {
    const curtain = document.getElementById('noctis-curtain');
    const mainContent = document.getElementById('noctis-main');

    // 1. 給布幕加上 'open' class，觸發 CSS 拉開動畫
    curtain.classList.add('open');

    // 2. 顯示主內容容器，並加上 'show' class 觸發淡入
    mainContent.style.display = 'block';
    setTimeout(() => {
        mainContent.classList.add('show');
    }, 100); // 稍微延遲確保 display:block 已生效

    // 3. 動畫結束後，徹底移除布幕層，防止擋到下方的點擊
    setTimeout(() => {
        curtain.style.display = 'none';
        // 恢復頁面捲動
        document.body.style.overflow = 'auto'; 
    }, 1600); // 時間要比 CSS 的 1.5s 稍微長一點
}