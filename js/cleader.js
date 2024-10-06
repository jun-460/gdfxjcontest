const monthYearElement = document.getElementById('month-year');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentDate = new Date();

    function renderCalendar(date) {
        calendarGrid.innerHTML = ''; // 清空当前日历
        const year = date.getFullYear();
        const month = date.getMonth();

        // 设置月份和年份
        monthYearElement.textContent = date.toLocaleString('default', { month: 'long' }) + ' ' + year;

        // 计算本月的第一天和最后一天
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const totalDays = lastDay.getDate();
        const startDay = firstDay.getDay(); // 获取本月第一天是星期几

        // 填充空白
        for (let i = 0; i < startDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'day';
            calendarGrid.appendChild(emptyDay);
        }

        // 填充日期
        for (let day = 1; day <= totalDays; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = day;

            // 高亮显示今天的日期
            if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayElement.classList.add('today');
            }

            calendarGrid.appendChild(dayElement);
        }
    }

    // 前一个月
    prevButton.addEventListener('click', () => {
        // 添加淡出效果
        calendarGrid.classList.add('fade-out');
        
        // 在 0.3 秒后更改月份
        setTimeout(() => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate);
            calendarGrid.classList.remove('fade-out'); // 移除淡出类
        }, 300);
    });

    // 下一个月
    nextButton.addEventListener('click', () => {
        // 添加淡出效果
        calendarGrid.classList.add('fade-out');
        
        // 在 0.3 秒后更改月份
        setTimeout(() => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate);
            calendarGrid.classList.remove('fade-out'); // 移除淡出类
        }, 300);
    });

    // 初始化日历
    renderCalendar(currentDate);