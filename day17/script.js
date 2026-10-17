// DOM Element Selectors
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let visibleItems = [];
let currentIndex = 0;

// Update array of currently visible gallery items
function updateVisibleItems() {
  visibleItems = Array.from(galleryItems).filter(
    (item) => item.style.display !== 'none'
  );
}

// 1. Filtering Logic
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update active button styling
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galleryItems.forEach((item) => {
      const category = item.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    updateVisibleItems();
  });
});

// 2. Open Lightbox Function
function openLightbox(index) {
  currentIndex = index;
  const currentItem = visibleItems[currentIndex];
  const imgElement = currentItem.querySelector('img');
  const captionText = currentItem.querySelector('.overlay span').textContent;

  lightboxImg.src = imgElement.src;
  lightboxCaption.textContent = captionText;
  lightbox.classList.add('active');
}

// 3. Close Lightbox Function
function closeLightbox() {
  lightbox.classList.remove('active');
}

// Attach click events to gallery items
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    updateVisibleItems();
    const index = visibleItems.indexOf(item);
    if (index !== -1) {
      openLightbox(index);
    }
  });
});

// 4. Navigation Handlers
function showPrev() {
  if (visibleItems.length === 0) return;
  currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
  openLightbox(currentIndex);
}

function showNext() {
  if (visibleItems.length === 0) return;
  currentIndex = (currentIndex + 1) % visibleItems.length;
  openLightbox(currentIndex);
}

// Event Listeners
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Close on clicking outside image container
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Keyboard Navigation (Escape, Left Arrow, Right Arrow)
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

// Initialize visible items list on load
updateVisibleItems();