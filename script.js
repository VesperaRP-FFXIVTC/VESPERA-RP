// 背景發光觸發
function setBg(type) {
    const lp = document.getElementById('landing-page');
    lp.classList.add(type === 'light' ? 'bg-dirune' : 'bg-noctis');
}

function clearBg() {
    const lp = document.getElementById('landing-page');
    lp.classList.remove('bg-dirune', 'bg-noctis');
}

// 跳轉到 DIRUNE
function enterDirune() {
    const lp = document.getElementById('landing-page');
    lp.style.opacity = '0'; // 執行淡出動畫
    setTimeout(() => {
        window.location.href = "DIRUNE/index.html";
    }, 800);
}

// 修改玄關進入 NOCTIS 的函數
function enterNoctis() {
    const lp = document.getElementById('landing-page');
    lp.style.opacity = '0';
    setTimeout(() => {
        // 跳轉時帶上播放參數
        window.location.href = "NOCTIS/index.html?autoplay=true";
    }, 800);
}
// 修改玄關的進入函數
function enterDirune() {
    const lp = document.getElementById('landing-page');
    lp.style.opacity = '0';
    setTimeout(() => {
        // 在網址後面加上參數，告訴下一頁要播音樂
        window.location.href = "DIRUNE/index.html?autoplay=true";
    }, 800);
}