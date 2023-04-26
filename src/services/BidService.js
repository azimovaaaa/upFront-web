import axios from "axios";


class BidService {
  static url = 'http://localhost:8000/landlord/api/bids';
  
  /* Gets all bids */
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
      console.error('Error retrieving bid data:', error);
      return null;
    }
  }

  /* Gets all bids for property */
  static async getByProperty(propertyId) {
    try {
      const response = await axios({
        method: 'get',
        url: this.url,
        params: {
          user: 1,
          property: propertyId,
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error retrieving bid data:', error);
      return null;
    }
  }

  /* POSTs a single bid */
  static async post(property, bidder, amount) {
    try {
      const response = await axios({
        method: 'post',
        url: this.url,
        data: {
          "property": property,
          "bidder": bidder,
          "bid_amount": amount
        }
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.error('Error sending bid data:', error);
      return null;
    }
  }
}

export default BidService;