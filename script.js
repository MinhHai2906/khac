document.addEventListener('DOMContentLoaded', function () {
  const imgs = document.querySelectorAll('.about-images img');
  const prevBtn = document.querySelector('.about-images .prev');
  const nextBtn = document.querySelector('.about-images .next');
  let index = 0;

  function showImage(idx) {
    imgs.forEach(img => img.classList.remove('active'));
    imgs[idx].classList.add('active');
  }

  // Chuyển ảnh khi click Next
  function goNext() {
    index = (index + 1) % imgs.length;
    showImage(index);
  }

  // Chuyển ảnh khi click Prev
  function goPrev() {
    index = (index - 1 + imgs.length) % imgs.length;
    showImage(index);
  }

  // Gán sự kiện cho nút
  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);
});






