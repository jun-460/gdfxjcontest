 document.addEventListener('DOMContentLoaded', function() {
        const imageContainer = document.getElementById('image-container');
        const imageElement = document.getElementById('image');

        const images = [
            'images/template/path/01.png',  // 第一张图片
            'images/template/path/02.png',  // 第二张图片
            'images/template/path/03.png',
            'images/template/path/05.png',
            'images/template/path/06.png',
            'images/template/path/07.png',
            'images/template/path/08.png',
            'images/template/path/09.png',
            'images/template/path/10.png',
            'images/template/path/11.png',
            'images/template/path/12.png',
            'images/template/path/13.png',
            'images/template/path/14.png',
            'images/template/path/15.png',
            'images/template/path/16.png',   // 第三张图片
        ];

        let currentImageIndex = 0;  // 当前图片索引

        function showImage(x, y) {
            // 设置图片源
            imageElement.src = images[currentImageIndex];

            // 获取页面的滚动偏移量
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            // 计算点击位置，考虑滚动偏移量
            imageContainer.style.left = `${x - imageContainer.offsetWidth / 2}px`;
            imageContainer.style.top = `${y + scrollTop - imageContainer.offsetHeight / 2}px`;

            // 显示图片容器
            imageContainer.style.display = 'block';

            // 使用 requestAnimationFrame 触发动画
            requestAnimationFrame(() => {
                imageContainer.style.opacity = 1;  // 渐显
                imageContainer.style.transform = 'translateY(0)';  // 向上浮动
            });

            // 2 秒后开始淡出图片并向下浮动
            setTimeout(() => {
                imageContainer.style.opacity = 0;  // 渐隐
                imageContainer.style.transform = 'translateY(30px)';  // 向下浮动
            }, 1000);

            // 2.3 秒后彻底隐藏图片容器
            setTimeout(() => {
                imageContainer.style.display = 'none';
            }, 2300);

            // 切换到下一张图片
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // 给 body 添加点击事件监听
        document.body.addEventListener('click', (event) => {
            const x = event.clientX;  // 获取点击的 X 坐标
            const y = event.clientY;  // 获取点击的 Y 坐标
            showImage(x, y);  // 在点击处显示图片
        });
    });

    
    function handleSelectChange(event) {
        var selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue; // 跳转到选中链接
        }
    }