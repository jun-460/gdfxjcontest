 // 获取所有新闻卡片
        const newsCards = document.querySelectorAll('.news-card');

        // 为每个卡片添加点击事件
        newsCards.forEach(card => {
            card.addEventListener('click', function() {
                // 获取卡片上的data-url属性，跳转到对应的新闻详情页
                const url = this.getAttribute('data-url');
                let path = window.location.protocol +  '//' + url
                window.location.href = url;
            });
        });