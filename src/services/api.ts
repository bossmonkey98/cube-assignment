import axios from 'axios';
import { Customer } from '../types/Customer';

// Fetch Customer Data
export const fetchCustomers = async (): Promise<Customer[]> => {
    const response = await axios.get('/customers.json');
    return response.data;
};

// Fetch Images
export const fetchPhotos = async (): Promise<string[]> => {
    const promises = Array.from({ length: 9 }, () => 
        axios.get(`https://picsum.photos/500/333`, { responseType: 'arraybuffer' })
    );
    const responses = await Promise.all(promises);
    return responses.map(response => {
        const imageUrl = URL.createObjectURL(new Blob([response.data]));
        return imageUrl;
    });
};