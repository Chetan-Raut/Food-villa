<script>
  $(document).ready(function() {
    // Image Slider
    const slider = $('.slider');
    const images = slider.find('img');
    let currentIndex = 0;

    function showImage(index) {
      images.hide().eq(index).fadeIn();
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    // Start the image slider
    showImage(currentIndex);
    setInterval(nextImage, 3000); // Change image every 3 seconds
  });
</script>
