import axios from 'axios';

export const sendForm = async (values) => {
    const calculateOrderTotal = () => {
        return Math.floor(Math.random() * 30);
    }
    
    await axios.post('http://localhost/wordpress/wp-json/iwriter-pro/v1/orders', {
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