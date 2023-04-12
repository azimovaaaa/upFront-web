import axios from "axios";


class PropertyService {
  static url = 'http://localhost:8000/landlord/api/properties';
  
  static async get() {
    try {
      const response = await axios({
        method: 'get',
        url: this.url,
        params: {
          user: 1,
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error retrieving property data:', error);
      return null;
    }
  }

  /* POSTs a single property */
  static async post(payload) {
    try {
      const response = await axios({
        method: 'post',
        url: this.url,
        data: payload,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error sending property data:', error);
      return null;
    }
  }
}

export default PropertyService;