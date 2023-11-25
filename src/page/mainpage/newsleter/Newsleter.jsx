import { useState } from 'react';
import axios from 'axios';

const Newsleter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where your server handles the subscription.
          await axios.post('YOUR_API_ENDPOINT', formData);
          alert('Subscription successful!');
          setFormData({
            name: '',
            email: '',
          });
        } catch (error) {
          console.error('Error subscribing:', error);
          alert('Subscription failed. Please try again later.');
        }
      };
    return (
       <section>
        <div>
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Subscribe Now</button>
      </form>
    </div>
       </section>
    );
};

export default Newsleter;