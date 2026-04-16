// --- 🎛️ 音訊處理中心 ---
let audioCtx;
let source;
let filter;
let noctisBgm;
let isAudioStarted = false;

const audioPath = 'Audio/noctis-bgm.mp3'; 

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        noctisBgm = new Audio(audioPath);
        noctisBgm.loop = true;
        
        source = audioCtx.createMediaElementSource(noctisBgm);
        filter = audioCtx.createBiquadFilter();

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(150, audioCtx.currentTime); // 初始水底聲

        source.connect(filter);
        filter.connect(audioCtx.destination);
    }
}

// 🔊 [核心修改] 檢查網址並自動啟動水底音
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autoplay') === 'true') {
        initAudio();
        noctisBgm.currentTime = 20; // 跳過前奏
        
        // 嘗試播放
        noctisBgm.play().then(() => {
            isAudioStarted = true;
            console.log("從玄關銜接的水底音樂已啟動");
        }).catch(err => {
            // 如果瀏覽器攔截，改為監聽「第一次隨意點擊」來啟動
            console.log("自動播放被攔截，等待玩家點擊頁面...");
            document.addEventListener('click', startAudioManually, { once: true });
        });
    }
});

function startAudioManually() {
    if (!isAudioStarted) {
        initAudio();
        noctisBgm.play();
        isAudioStarted = true;
    }
}

// 🎭 揭開夜幕 (點擊 Logo)
function openShow() {
    if (!isAudioStarted) startAudioManually();

    const curtain = document.getElementById('noctis-curtain');
    const mainContent = document.getElementById('noctis-main');

    // 音樂變清晰
    if (filter && audioCtx) {
        filter.frequency.exponentialRampToValueAtTime(20000, audioCtx.currentTime + 1.2);
    }

    // 動畫啟動
    if (curtain) {
        curtain.classList.add('open');
    }
    
    // 顯示內容
    if (mainContent) {
        mainContent.style.display = 'block';
        setTimeout(() => mainContent.classList.add('show'), 100);
    }

    setTimeout(() => {
        curtain.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1600);
}