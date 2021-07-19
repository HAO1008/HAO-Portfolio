// ================================================menu
const menu = document.querySelector(".menu");   //menu_hamburger
const menuBar = document.querySelector(".menu_bar"); //menu_bar 

menu.addEventListener('click',()=>{
    menu.classList.toggle('active_line');
    menuBar.classList.toggle('menubar_active')
})


// ===============================================動態背景
let stars = document.getElementById('startss');
let sun = document.getElementById('sun');
let leftcloud = document.getElementById('leftcloud');
let rightcloud = document.getElementById('rightcloud');
let forest = document.getElementById('forest');

//拉動Y滾軸，圖片會移動
window.addEventListener('scroll',function(){
    let value = window.scrollY;
    //value*0.4可以讓移動幅度變小
    startss.style.left = value*0.4 + 'px';
    sun.style.marginBottom = -value*0.8 + 'px';
    leftcloud.style.marginLeft = value*0.3 + 'px';
    rightcloud.style.marginLeft = value*0.9 + 'px';
})


//===================================menu切換
const resume_page1 = document.querySelector('.resume_page1');
const resume_page2 = document.querySelector('.resume_page2');
const resume_page3 = document.querySelector('.resume_page3');

resume_page1.addEventListener('click',()=>{
    resume_page1.classList.add('resume_active');
    resume_page2.classList.remove('resume_active');
    resume_page3.classList.remove('resume_active');
})
resume_page2.addEventListener('click',()=>{
    resume_page2.classList.add('resume_active');
    resume_page1.classList.remove('resume_active');
    resume_page3.classList.remove('resume_active');
})
resume_page3.addEventListener('click',()=>{
    resume_page3.classList.add('resume_active');
    resume_page2.classList.remove('resume_active');
    resume_page1.classList.remove('resume_active');
})

// =================================== AOS
AOS.init();

// =================================== animation
var animated = anime.timeline({
    autoplay:false
});

animated
.add({
    targets:'#dy_btn',
    top:'1500px',
    duration:500,
    easing:'easeInOutSine'
})
.add({
    targets:'#startss',
    top:'0px',
    duration:800,
    easing:'easeInOutSine'
})
.add({
    targets:'#sun',
    bottom:'7.5%',
    duration:800,
    easing:'easeInOutBack'
})
.add({
    targets:'#forest',
    bottom:'0px',
    duration:500,
    easing:'easeInOutSine'
})
.add({
    targets:'#rightcloud',
    left:'70%',
    duration:800,
    easing:'easeInOutBack'	
})
.add({
    targets:'#leftcloud',
    left:'20px',
    duration:800,
    easing:'easeInOutBack'
})
.add({
    targets:'#dy_btn',
    top:'50%',
    duration:1000,
    easing:'easeInOutBack'
})


document.querySelector('#dy_btn').onclick = animated.play;


// =================================== lottie
lottie.loadAnimation({
    path:'./json/html.json',   //json文件路径
    loop:true,
    autoplay:true,
    renderer:'canvas',  //渲染方式，有"html"、"canvas"和"svg"三种
    container:document.getElementById('animation')
});
lottie.loadAnimation({
    path:'./json/bulbhead.json',   //json文件路径
    loop:true,
    autoplay:true,
    renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
    container:document.getElementById('animationn')
});
lottie.loadAnimation({
    path:'./json/git.json',   //json文件路径
    loop:true,
    autoplay:true,
    renderer:'svg',  //渲染方式，有"html"、"canvas"和"svg"三种
    container:document.getElementById('animationnn')
});

// =================================== 頁籤
$(function(){
    // 預設顯示第一個 Tab
    var _showTab = 0;
    var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().hide();
    
    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $('ul.tabs li').click(function() {
      // 找出 li 中的超連結 href(#id)
      var $this = $(this),
          _clickTab = $this.find('a').attr('href');
      // 把目前點擊到的 li 頁籤加上 .active
      // 並把兄弟元素中有 .active 的都移除 class
      $this.addClass('active').siblings('.active').removeClass('active');
      // 淡入相對應的內容並隱藏兄弟元素
      $(_clickTab).stop(false, true).fadeIn().siblings().hide();
    
      return false;
    }).find('a').focus(function(){
      this.blur();
    });
    });

// =================================== 輪播
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        el: '.swiper-button-next',
        el: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });

    // =================================== 開關dialog
    const experience_work = document.querySelector('.experience_work');
    const experience_web = document.querySelector('.experience_web')
    const workbox = document.querySelector('#workbox');
    const webbox = document.querySelector('#webbox');

    experience_work.addEventListener('click',()=>{
        workbox.classList.add('work_active')
    })
    workbox.addEventListener('click',()=>{
        workbox.classList.remove('work_active')
    })
    experience_web.addEventListener('click',()=>{
        webbox.classList.add('work_active')
    })
    webbox.addEventListener('click',()=>{
        webbox.classList.remove('work_active')
    })

    // =================================== 作品輪播
    const profolioObj = [
        {
        h1:'API串接 - Covid19',
        p:'利用全球及時疫情報告提供的開放式API，將複雜的資訊串接，並透過網頁美化呈現出最新的資料內容。',
        tools:['Fontawasome','Lottie','chart.js'],
        skills:['API串接','壓縮檔案','RWD'],
        href:'https://www.google.com/'
        },
        {
        h1:'Bootstrap切板 - 牛排廚房',
        p:'運用css框架 - Bootstrap，架構出動態以及響應式網站',
        tools:['Boostrap','Google Map API','Jquery'],
        skills:['MVC','RWD','UI/UX'],
        href:'https://cn.pornhub.com/'
        },
        {
        h1:'Vue.js - 虛擬貨幣',
        p:'以JS框架Vue.js，透過Rapid API提供的開源API，以axios方式將數據呈現，並透過各種方式排序，搜尋關鍵字',
        tools:['Vue.js','Fontawasome','Rapid API'],
        skills:['Vue3'],
        href:'https://www.youtube.com/'
        }
    ]
    const coursel = document.querySelector('.profolio-cards-img')
    const profolioOption = document.querySelector('.profolio-option')
    const profolioHref = document.querySelector('.profolio-href')

    const proH1 = document.querySelector('.profolio-card-tro').querySelector('h1')
    const proP = document.querySelector('.profolio-card-tro').querySelector('p')
    const iconTools = document.querySelector('.icon-tools').querySelector('ul')
    const iconSkills = document.querySelector('.icon-skills').querySelector('ul')
    
    for(let i=0 ; i<coursel.children.length ; i++){
        const profolioLi = document.createElement('li')
        profolioLi.setAttribute('index',i)
        profolioOption.append(profolioLi)

        profolioLi.addEventListener('click',function(){
            for(let i=0; i<profolioOption.children.length; i++){
                profolioOption.children[i].className = ''
            }
            this.className = 'li-current'
            var index = this.getAttribute('index')
            if(index == 0){
                coursel.style.justifyContent = 'flex-start'
                changeText(0)
            }else if(index == 1){
                coursel.style.justifyContent = 'center'
                changeText(1)
            }else{
                coursel.style.justifyContent = 'flex-end'
                changeText(2)
            }
        })
    }

    profolioOption.children[0].className = 'li-current'

    function changeText(num){
      profolioHref.setAttribute("href",profolioObj[num].href);
      proH1.innerHTML = profolioObj[num].h1
      proP.innerHTML = profolioObj[num].p
      iconTools.children[0].innerHTML = profolioObj[num].tools[0]
      iconTools.children[1].innerHTML = profolioObj[num].tools[1]
      iconTools.children[2].innerHTML = profolioObj[num].tools[2]
      iconSkills.children[0].innerHTML = profolioObj[num].skills[0]
      iconSkills.children[1].innerHTML = profolioObj[num].skills[1]
      iconSkills.children[2].innerHTML = profolioObj[num].skills[2]
    }
