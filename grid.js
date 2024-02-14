function openCarousel(imageSrc) {
    document.getElementById('carousel').src = imageSrc;
    document.getElementById('carouselContainer').style.display = 'flex';
  }

  function closeCarousel() {
    document.getElementById('carouselContainer').style.display = 'none';
  }