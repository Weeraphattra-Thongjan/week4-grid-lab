document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');
  
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active')); // ลบ active class จากปุ่มทั้งหมด
        filter.classList.add('active'); // เพิ่ม active class ให้ปุ่มที่ถูกคลิก
        const category = filter.dataset.filter;
  
        items.forEach(item => {
          item.style.opacity = '0'; // ซ่อน item ทุกตัว
          setTimeout(() => {
            if (category === 'all' || item.classList.contains(category)) {
              item.style.display = 'block';
              setTimeout(() => item.style.opacity = '1', 50);
            } else {
              item.style.display = 'none';
            }
          }, 300);
        });
      });
    });
  });
  