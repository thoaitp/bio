

function renderHTML() {
    const root = document.querySelector('#root');

    const data = {
        fullName: "Trần Phúc Phúc Thoại",
        avatar: "https://www.imgworlds.com/wp-content/uploads/2016/04/img-worlds-of-adventure-new-low.jpg",
        banner: "https://images6.alphacoders.com/568/568500.jpg",
        des: "Độc thân nhưng hông có vui tính ^_^",
        infos: [
            {
                title: "Youtobe",
                icon: "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png",
                link: "https://www.youtube.com/",
            },
            {
                title: "Facebook",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1024px-2021_Facebook_icon.svg.png",
                link: "https://www.facebook.com/",
            },
            {
                title: "Tiktok",
                icon: "https://cdn-icons-png.flaticon.com/512/4138/4138198.png",
                link: "https://www.tiktok.com/explore?",
            },
            {
                title: "Zalo",
                icon: "https://nongsankhaianh.com/wp-content/uploads/2021/10/icon-zalo.png",
                link: "https://www.tiktok.com/explore?",
            },
            {
                title: "Twitter",
                icon: "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png",
                link: "https://twitter.com/?lang=vi",
            }
        ]
    }

    const dataMap = data.infos.map((item, index) => (
        ` <li class="info-item">
        <a target="_blank" href="${item.link}" class="info__link">
            <div class="icon">
                <img src="${item.icon}" alt="">
            </div>
            <div class="title">${item.title}</div>
        </a>
    </li>`
    ));

    const html = `
    <div class="wrap">
    <div class="bio">
        <div class="bio-banner">
        <img src="${data.banner}"
        alt="">
        </div>
        <div class="bio-avatar">
            <div class="bio-avatar__inner">
                <img src="${data.avatar}"
                alt="">
            </div>
        </div>
        <div class="bio-name">
            <div class="bio-name__txt">${data.fullName}
            <div class="bio-name__icon">
            <img src="https://lh6.googleusercontent.com/Dp8gy-syT7bw_RWrxeBjM1ASl-nTwiK-leBzrIEfwStNY4En8M0XmwFTWLu9CNod3Q_4QtEA-iVdz2AeDtlzwR0yffjkA42WyGDF4qp6Z46FalWSCrcgvwEouET47BbvvsccOEDH"
                alt="">
        </div>
            </div>
        </div>
        <div class="bio-des">${data.des}</div>
        <div class="bio-info">
            <ul class="info-list">
            ${dataMap.join('')}
            </ul>
        </div>
        <div class="bio-snows">
  <div class="bio-snows__1"></div>
  <div class="bio-snows__2"></div>
    <div class="bio-snows__3"></div>
</div>
    </div>
</div>
    `
    root.innerHTML = html;
}

renderHTML();