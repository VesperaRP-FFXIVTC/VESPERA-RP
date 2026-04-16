// Cat Data
const catStaff = [
    { 
        name: "Inu", gender: "Male", race: "逐日之民", 
        like: "曬太陽、聽冒險者說故事", personality: "黏人，喜歡聊天，容易炸毛", 
        img: "Image/INU.png", /* 👈 CHANGE HERE */
        bio: "「歡迎來到 DIRUNE。在這裡，時間是慢下來的。」<br><br>作為店長，Inu 總是安靜地守護著店內，因為店長身份的原因他只能壓抑自己沒辦法主動向顧客討摸，要是你可以主動去摸摸他、分享你的冒險故事，他絕對會很樂意一邊蹭著你的手一邊傾聽你的每一句說話。" 
    },
    { 
        name: "埃斯咪", gender: "Male", race: "護月之民", 
        like: "旁觀正在發生的有趣活動(aka隔岸觀火)、睡覺、料理、可愛的東西", personality: "慵懶系，對大部分互動不排斥只是反應不大", 
        img: "Image/Esmi.png", /* 👈 CHANGE HERE */
        bio: "「嘿～來到這裡享受或放空？明智的選擇！」<br><br>比起貼心黏人，似乎更隨興回應有緣的互動。<br>只要沒人搭理就總是看著來往的人群與貓，並從中得到療癒感。" 
    },
    { 
        name: "堡", gender: "Male", race: "護月之民", 
        like: "錢、圓圓的東西", personality: "安靜獨立，為了得到想要的獎勵會主動貼人，拿到獎勵就跑", 
        img: "Image/Bao.png", /* 👈 CHANGE HERE */
        bio: "「想摸我？可以。想留我？那麼你得拿出點誠意。」<br><br>他向來坦率，付出多少，就回應多少。<br>為了想要的東西，他可以貼得很近，近得讓人誤以為他願意留下。" 
    },
    { 
        name: "蒼雨", gender: "Male", race: "護月之民", 
        like: "敲工匠，聊天", personality: "表E裡I，充電型，高山茶當水喝", 
        img: "Image/ChangYu.png", /* 👈 CHANGE HERE */
        bio: "「你可以慢慢靠過來。<br>我會看著你——直到你不想走為止。」<br><br>他很少主動靠近人。<br>但只要你走過去，他就不會讓你太快離開。<br>至於原因——<br>你大概會在回過神之後才發現。" 
    },
    { 
        name: "赤羽", gender: "Male", race: "逐日之民", 
        like: "曬太陽、大海、吃", personality: "慢熱但親人", 
        img: "Image/ChiYu.png", /* 👈 CHANGE HERE */
        bio: "「今天過得還好嗎？聽說好吃的東西能讓人心情變好，那分你一口我的零食，你會笑嗎？」<br><br>有點慢熱，不過多摸摸幾下，他會變得親人。<br>不論開心或是難過的事情都可以跟他說，他會在身邊陪著你，陪你說說話，偶爾輕輕的蹭蹭。<br>對他來說，你的笑容是最重要的寶物！" 
    },
    { 
        name: "倒頭", gender: "Male", race: "逐日之民", 
        like: "發呆、觀看其他人跟貓咪的互動，好吃的東西", personality: "有點怕生，但多摸個幾下可能就會變得黏人", 
        img: "Image/Daotou.png", /* 👈 CHANGE HERE */
        bio: "「今天也辛苦了，累了的話不如和我一起到仙子製造的美夢中玩耍吧？」<br><br>看起來好像在放空發呆的貓，但其實在默默的觀察周圍，總能敏銳的察覺到你的變化，似乎也在期待著你和他分享旅途中不論快樂還是難過的各種故事。" 
    },
    { 
        name: "燈蒔", gender: "Male", race: "逐日之民", 
        like: "到處探險做東西", personality: "忽冷忽熱，時動時靜，難以捉摸", 
        img: "Image/denshi.png", /* 👈 CHANGE HERE */
        bio: "「歡迎光臨本店，今天準備了各種商品……其中能有你中意的就好了。」<br><br>一抹淺笑，如雲霧透陽，似小雨暫歇，令人感到溫潤舒雅的同時，仍帶著看不透的遮簾，或近或遠都是隨著他的想法。<br>沒有人能預測下一秒是朗月清風的熱情，還是幽雨綿愁的淡泊，貓，如是。" 
    },
    { 
        name: "Eating", gender: "Male", race: "護月之民", 
        like: "錢", personality: "偏成熟獨立，但對部份人除外", 
        img: "Image/Eating.png", /* 👈 CHANGE HERE */
        bio: "「歡迎來到這裡，在這個舒服的小空間裡給自己好好放個假吧。」<br><br>大部分時候是距離感適中的成熟貓咪，除了標準的寒暄跟營業招呼外不會主動貼近，但只要你開口，任何話題他都能暢聊下去！主打在上班時間就會拿出成年人的社交力，全力營業的貓！" 
    },
    { 
        name: "古·拉哈堤婭", gender: "Male", race: "逐日之民", 
        like: "料理", personality: "偏害羞，熟了算好聊，對各位光戰英雄保持好感", 
        img: "Image/guraha.png", /* 👈 CHANGE HERE */
        bio: "「歡迎光臨。不知今日，你將在此留下怎樣的篇章？」<br><br>靜靜的看著敬仰英雄來到，總是有點不好意思呢。<br><br><br>※此貓咪將會披著古·拉哈·提亞的皮與各位客人互動！<br>目前正在磨皮中，難免會有OOC的情況，客人們可以直接反映並多多指教！" 
    },
    { 
        name: "洛摩", gender: "Male", race: "逐日之民", 
        like: "貼貼、摸摸、抱抱", personality: "慢熱、安靜、愛睡覺、容易恍神", 
        img: "Image/LuoMo.png", /* 👈 CHANGE HERE */
        bio: "「啊，被你找到了呢。其實我不太擅長主動，不過如果你願意靠近一點……我會慢慢習慣你的溫度。」<br><br>比起熱鬧，洛摩更喜歡靜靜陪在你身邊。如果你有想說的話，會在一旁慢慢聽著，直到你覺得輕鬆一點為止。 " 
    },
    { 
        name: "燎", gender: "Male", race: "護月之民", 
        like: "在高處發呆、看書", personality: "喜歡一個人在角落發呆，只要被逗就會容易炸毛，但是不討厭不排斥被摸", 
        img: "Image/liao.png", /* 👈 CHANGE HERE */
        bio: "「我的名字……？燎，燒不盡的那個。」<br><br>他垂眸翻著書頁，指尖輕輕捻過紙邊，燈光落在眼尾，左眼下那顆淚痣便隨著輕淺的笑意微微顯現，溫柔得像一點未乾的墨。" 
    },
    { 
        name: "Misca", gender: "Male", race: "護月之民", 
        like: "好看的配搭", personality: "隨心所欲", 
        img: "Image/Misca.png", /* 👈 CHANGE HERE */
        bio: "「歡迎。要來一杯咖啡嗎？別客氣，這裡比我的墨鏡還要『透光』。」<br><br>悠閒地在店內的陽光角落服務。與其說是員工，更像是個『休閒角落的守護者』，偶爾會為你帶來一杯飲品，並附上一個『別那麼嚴肅』的眼神。" 
    },
    { 
        name: "默默", gender: "Male", race: "護月之民", 
        like: "跳來跳去，蹭蹭別人", personality: "黏人，喜歡互動", 
        img: "Image/momo.png", /* 👈 CHANGE HERE */
        bio: "「歡迎來到這裡。如果不介意的話，就讓這杯特調的香氣，讓『默默』默默地陪你度過這段悠閒的時光吧。」<br><br>比起熱情推銷，更習慣用恰到好處的距離感，為你遞上溫暖的飲品。雖然看起來話不多，但其實非常容易滿足——只要一句簡單的誇獎或撫摸，就能看見他眼睛亮起來、整個人都亮眼開朗起來的樣子！" 
    },
    { 
        name: "貓糕", gender: "Male", race: "逐月之民", 
        like: "喜歡趴在窗邊打盹，吃魚糕，放空", personality: "溫馴，怕生，但看到落單或害羞的客人有機會過去蹭蹭", 
        img: "Image/MaoGao.png", /* 👈 CHANGE HERE */
        bio: "「要來一塊魚糕嗎？我親手做的哦。」<br><br>他會帶著自製的幸運魚糕， 悄悄地分給遇見的人。<br><br>沒有什麼特別的理由，只是希望你在這段旅程裡，可以輕鬆一點，開心一點。" 
    },
    { 
        name: "Rayn", gender: "Male", race: "逐日之民", 
        like: "爬高，聊天，吃鮭魚刺身，吃泡麵，拔貓毛，紅燒兔子", personality: "非常被動，但搭上話就會變成話癆貓貓", 
        img: "Image/Rayn.png", /* 👈 CHANGE HERE */
        bio: "「居然被發現了？既然如此，就獎勵你陪我玩一下吧！」<br><br>會在各種謎之地點出現。<br>看似慵懶又隨心所欲的傢伙，實則一直在等待你的到來，要是主動一點，說不定能收穫他陽光開朗的一面。<br>聽說是薄荷口味的，要不要嚐嚐看呢？" 
    },
    { 
        name: "蝦蝦", gender: "Male", race: "護月之民", 
        like: "講笑話，發呆", personality: "怕生，熟了會很瘋", 
        img: "Image/XiaXia.png", /* 👈 CHANGE HERE */
        bio: "「歡迎光臨...我是蝦蝦。」<br><br>帶著青蛙頭套的貓聲音有點悶悶的，聽得出來在努力讓自己自然點。<br><br>再次見面時，也許會看到他原本的樣子。" 
    },
    { 
        name: "維梧爾", gender: "Male", race: "逐日之民", 
        like: "藝術、煮奶茶、各種紅豆甜點", personality: "溫柔可靠、文藝型、坐在高處觀察", 
        img: "Image/維梧爾.jpg", /* 👈 CHANGE HERE */
        bio: "「一直以來辛苦了，在我面前盡情撒嬌也沒關係哦。」<br><br>維梧爾是一位溫和沉穩的貓紳士。<br>鍾情於在高處觀察與隨筆速寫，厚實的胸膛是個讓人能徹底放鬆的溫暖避風港，以溫柔陪伴與您一起的時光。<br>逗貓棒與他互動，或許有機會看見與平常不同的一面。<br><br>※此貓咪特設速寫服務，價錢為100,000gil一張，詳情請參考預約網站。"


    },
    { 
        name: "伊萊諾斯", gender: "Male", race: "山林之民", 
        like: "錢", personality: "溫和有禮，喜歡撸貓", 
        img: "Image/illainous.png", /* 👈 CHANGE HERE */
        bio: "「歡迎光臨，為甚麼會有兔子？我頭上這個是貓耳喔。」<br><br>不知為何踏進門迎接你的是維埃拉族的接待員，頭上除了長長的兔耳朵之外還有一對明顯是裝飾的耳朵。",
        role: "RECEPTIONIST" 
    }
];

let currentIndex = 0;

// Page Navigation
function showPage(pageId, clickedLink) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('nav ul li').forEach(item => item.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
    if (clickedLink) clickedLink.classList.add('active');
}

// Music Control
const audio = document.getElementById("bgm");
const icon = document.getElementById("music-icon");
const text = document.querySelector(".music-text");

function toggleMusic() {
    if (audio.paused) {
        audio.play().then(() => {
            audio.volume = 0.3;
            icon.innerHTML = "🐱";
            text.innerHTML = "BGM ON";
        });
    } else {
        audio.pause();
        icon.innerHTML = "🎵";
        text.innerHTML = "BGM OFF";
    }
}

// Landing Page Actions
function enterDirune() {
    const landing = document.getElementById('landing-page');
    landing.style.opacity = '0';
    
    audio.play().then(() => {
        audio.volume = 0.3;
        icon.innerHTML = "🐱";
        text.innerHTML = "BGM ON";
    });

    setTimeout(() => { landing.style.display = 'none'; }, 1000);
}

function leaveToVespera() {
    const landing = document.getElementById('landing-page');
    audio.pause();
    audio.currentTime = 0;
    icon.innerHTML = "🎵";
    text.innerHTML = "BGM OFF";
    landing.style.display = 'flex';
    setTimeout(() => { landing.style.opacity = '1'; }, 10);
}
// Cat Book Logic
function openBook() {
    document.getElementById('catBook').classList.remove('closed');
    updateBook();
}

function closeBook() {
    document.getElementById('catBook').classList.add('closed');
}

function updateBook() {
    const cat = catStaff[currentIndex];
    
    // Update fields
    document.getElementById('bookImg').src = cat.img;
    document.getElementById('bookGender').innerText = cat.gender;
    document.getElementById('bookRace').innerText = cat.race || "尚未填寫";
    document.getElementById('bookLike').innerText = cat.like;
    document.getElementById('bookPersonality').innerText = cat.personality;
    document.getElementById('bookBio').innerHTML = cat.bio;
    document.getElementById('currentPage').innerText = currentIndex + 1;
    document.getElementById('totalPages').innerText = catStaff.length;

    // Custom formatting for roles
    const nameElem = document.getElementById('bookName');
    if (cat.name === "Inu") {
        nameElem.innerHTML = `<span style="font-size: 1.2rem; color: #e5c158; display: block; letter-spacing: 4px; font-weight: 900; margin-bottom: 8px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">MANAGER</span>${cat.name}`;
    } else if (cat.role === "RECEPTIONIST") {
        nameElem.innerHTML = `<span style="font-size: 1.2rem; color: #d4af37; display: block; letter-spacing: 2px; font-weight: 900; margin-bottom: 8px; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">RECEPTIONIST</span>${cat.name}`;
    } else {
        nameElem.innerText = cat.name;
    }

    // Apply exact background colors
    const rightPage = document.querySelector('.right-page');
    if(rightPage) rightPage.style.backgroundColor = "#c9b9a8";
    
    const leftPage = document.querySelector('.left-page');
    if(leftPage) leftPage.style.backgroundColor = "#ece1d6";
}

function nextPage() { currentIndex = (currentIndex + 1) % catStaff.length; updateBook(); }
function prevPage() { currentIndex = (currentIndex - 1 + catStaff.length) % catStaff.length; updateBook(); }

// Lightbox Logic
document.querySelectorAll('.menu-photo-shadow img').forEach(img => {
    img.onclick = function() {
        document.getElementById('lightbox-img').src = this.src;
        document.getElementById('lightbox').style.display = 'flex';
    };
});

// Auto-pause BGM on tab switch
document.addEventListener("visibilitychange", () => {
    if (document.hidden) audio.pause();
    else if (text.innerHTML === "BGM ON") audio.play();
});
// --- 錨點自動跳轉邏輯 ---

// --- 核心修正：防止直接進入分頁時被 Header 遮擋 ---

function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    
    if (hash) {
        // 1. 取得對應的導航標籤（用於加上 active 樣式）
        const targetLi = document.querySelector(`nav ul li[onclick*="'#${hash}'"]`);
        
        // 2. 執行顯示分頁的邏輯
        showPage(hash, targetLi);

        // 3. 關鍵修正：阻止瀏覽器的預設滾動，並強制歸零
        // 這能解決「上面被吞掉」的問題
        setTimeout(() => {
            window.scrollTo(0, 0); 
            // 如果分頁內部有捲軸，也要把分頁內部的捲軸拉回頂端
            const targetPage = document.getElementById(hash);
            if (targetPage) targetPage.scrollTop = 0;
        }, 10);

        // 4. 如果是從外部直接點擊連結，且入口頁還開著，就自動關閉它
        const landing = document.getElementById('landing-page');
        if (landing && landing.style.display !== 'none') {
            enterDirune();
        }
    }
}

// 監聽網址變化與初始載入
window.addEventListener('hashchange', handleHashChange);
window.addEventListener('load', handleHashChange);
// 既能切換頁面又能更新網址的函數
function goTo(hash) {
    const pageId = hash.replace('#', '');
    const targetLi = document.querySelector(`nav ul li[onclick="goTo('${hash}')"]`);
    
    // 執行你原本寫好的切換邏輯
    showPage(pageId, targetLi);
    
    // 手動更新網址列，這樣分享網址時就會帶有 #
    history.pushState(null, null, hash);
}

// 讓別人點擊分享連結進來時也能生效
window.addEventListener('load', () => {
    if (window.location.hash) {
        goTo(window.location.hash);
        // 如果還在入口頁，自動進入
        const landing = document.getElementById('landing-page');
        if (landing && landing.style.display !== 'none') {
            enterDirune();
        }
    }
});
// 檢查網址參數並自動播放
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const shouldAutoplay = urlParams.get('autoplay');

    if (shouldAutoplay === 'true') {
        // 給瀏覽器一點點緩衝時間（0.5秒），確保頁面已讀取
        setTimeout(() => {
            if (audio) {
                audio.play().then(() => {
                    // 播放成功後，同步更新你的 BGM 按鈕文字
                    const bgmText = document.getElementById('bgm-text'); // 假設你的按鈕 ID 是這個
                    if (bgmText) bgmText.innerHTML = "BGM ON";
                }).catch(error => {
                    console.log("自動播放被攔截:", error);
                });
            }
        }, 500);
    }
});