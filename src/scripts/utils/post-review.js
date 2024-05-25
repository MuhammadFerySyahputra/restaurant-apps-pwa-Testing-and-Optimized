import RestaurantSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';

const PostReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputReviewName = document.getElementById('inputName');
  const inputReview = document.getElementById('inputReview');
  const reviewContainer = document.querySelector('.detail-review');

  const dataInput = {
    id: url.id,
    name: inputReviewName.value,
    review: inputReview.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="detail-review-item">
      <i class="bi bi-person-circle"></i>
      <div class"tester">            
        <p class="name-review">${dataInput.name}</p>
        <p class="date-review">${date}</p>
      </div>
      <div class="body-review">
        ${dataInput.review}
      </div>
    </div>
  `;

  const abcsasd = await RestaurantSource.postReview(dataInput);
  if (abcsasd) {
    reviewContainer.innerHTML += newReview;
    const Swal = (await import('sweetalert2')).default;
    Swal.fire({
      icon: 'success',
      title: 'Berhasil membuat note!',
    });
    inputReviewName.value = '';
    inputReview.value = '';
  }
};

export default PostReview;
