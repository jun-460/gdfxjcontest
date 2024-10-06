// 模拟一些分页数据
const contentData = {
    1: "当前是第 1 页的内容",
    2: "当前是第 2 页的内容",
    3: "当前是第 3 页的内容",
  };
  
  // 初始化当前页
  let currentPage = 1;
  const totalPages = 3;
  
  // 获取页面元素
  const paginationItems = document.querySelectorAll('.pagination .page-item');
  const contentDiv = document.getElementsByClassName('col-md-6');
  const prevPageButton = document.getElementById('prev-page');
  const nextPageButton = document.getElementById('next-page');
  
  // 更新内容显示
  function updateContent(page) {
    contentDiv.innerHTML = `<p>${contentData[page]}</p>`;
  }
  
  // 更新分页的样式和按钮状态
  function updatePagination() {
    // 更新分页项的 active 状态
    paginationItems.forEach((item, index) => {
      if (index === currentPage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  
    // 更新上一页和下一页按钮的禁用状态
    prevPageButton.classList.toggle('disabled', currentPage === 1);
    nextPageButton.classList.toggle('disabled', currentPage === totalPages);
  }
  
  // 点击分页项时的处理
  paginationItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const page = parseInt(this.innerText);
  
      if (!isNaN(page)) {
        currentPage = page;
        updateContent(page);
        updatePagination();
      }
    });
  });
  
  // 上一页按钮点击处理
  prevPageButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updateContent(currentPage);
      updatePagination();
    }
  });
  
  // 下一页按钮点击处理
  nextPageButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      updateContent(currentPage);
      updatePagination();
    }
  });
  
  // 初始化页面
  updateContent(currentPage);
  updatePagination();
  