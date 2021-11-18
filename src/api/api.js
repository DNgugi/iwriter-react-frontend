import Axios from 'axios';


/*
 * Create a Api object with Axios and
 * configure it for the WordPRess Rest Api.
 *
 * The 'mynamespace' object is injected into the page
 * using the WordPress wp_localize_script function.
 */
const Api = Axios.create({
    baseURL: 'http://localhost/wordpress/wp-json/iwriter-pro/v1/',
});

export default Api;

export const sendForm = async (values) => {
    const calculateOrderTotal = () => {
        return Math.floor(Math.random() * 30);
    }
    
    await Api.post('orders', {
        "amount": calculateOrderTotal(),
        "topic" : values.subject,
        "deadline": values.deadline,
        "instructions": values.instructions,
        "attachment" : values.attachment
      })
      .then(function (response) {
        alert(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export const getAllOrders = async () => {
    
}

