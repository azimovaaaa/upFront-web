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

  static async getPosted() {
    try {
      const response = await axios({
        method: 'get',
        url: this.url,
        params: {
          is_posted: true,
          user: 1,
        },
        data: {
          is_posted: true
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

  /* Marks a property as posted and updates the percent upfront */
  static async postProperty(propertyId, isPosted, percentUpfrontProposed) {
    try {
      const response = await axios({
        method: 'patch',
        url: this.url + `/${propertyId}/`,
        data: {
          "is_posted": isPosted,
          "percent_upfront_proposed": percentUpfrontProposed,
        }
      });
      // Handle successful response
      console.log('Property updated:', response.data);
      return response.data;
    } catch (error) {
      // Handle error
      console.error('Failed to update property:', error);
      throw error;
    }
  }
}

export default PropertyService;