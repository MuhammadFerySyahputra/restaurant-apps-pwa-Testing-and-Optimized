import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const Swal = (await import('sweetalert2')).default;
    try {
      document.getElementById('loadingIndicator').style.display = 'block';
      const response = await fetch(API_ENDPOINT.RESTAURANTS);
      const responseJSON = await response.json();
      document.getElementById('loadingIndicator').style.display = 'none';

      if (responseJSON.message === 'success') {
        return responseJSON.restaurants;
      }
      console.error(' Error mengambil data dari api', responseJSON.message);
      Swal.fire({
        icon: 'error',
        title: 'Error mengambil data dari api!',
      });
      return [];
    } catch (error) {
      document.getElementById('loadingIndicator').style.display = 'none';
      console.error('Error fetching restaurants:', error);
      Swal.fire({
        icon: 'danger',
        title: 'Gagal mengambil data restaurants!',
      });
      throw error;
    }
  }

  static async restaurantDetail(id) {
    const Swal = (await import('sweetalert2')).default;
    try {
      document.getElementById('loadingIndicator').style.display = 'block';
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseData = await response.json();
      document.getElementById('loadingIndicator').style.display = 'none';
      if (responseData.message === 'success') {
        return responseData;
      }
      console.error('Gagal memuat detail restoran. Status kode:', responseData.message);
      return [];
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Terjadi kesalahan saat memuat detail restoran. Silakan coba lagi.',
      });
      return [];
    }
  }

  static async postReview(data) {
    const Swal = (await import('sweetalert2')).default;
    try {
      document.getElementById('loadingIndicator').style.display = 'block';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const responseData = await response.json();
      document.getElementById('loadingIndicator').style.display = 'none';
      if (responseData.message === 'success') {
        console.log('Review added successfully:', responseData.data);
        return responseData;
      }
      console.error('Error adding note:', responseData.message);
      Swal.fire({
        icon: 'error',
        title: 'Gagal menambahkan Review!',
      });
      return null;
    } catch (error) {
      document.getElementById('loadingIndicator').style.display = 'none';
      console.error('Error adding note:', error);
      Swal.fire({
        icon: 'error',
        title: 'Gagal menambahkan Review!',
      });
      return null;
    }
  }
}

export default RestaurantSource;
