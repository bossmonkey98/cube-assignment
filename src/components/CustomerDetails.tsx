import React, { useEffect, useState } from 'react';
import { Customer } from '../types/Customer';
import { fetchPhotos } from '../services/api';

interface CustomerDetailsProps {
    customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
    const [photos, setPhotos] = useState<string[]>([]);
    
    useEffect(() => {
        const updatePhotos = async () => {
            const newPhotos = await fetchPhotos();
            setPhotos(newPhotos);
        };
        
        updatePhotos();
        const interval = setInterval(updatePhotos, 10000);

        return () => clearInterval(interval);
    }, [customer]);

    return (
        <div className="customer-details">
            <h2>{customer.name} details here</h2>
            <p>{customer.details}</p>
            <div className="photo-grid">
                {photos.map((url, index) => (
                    <img key={index} src={url} alt={`Photo ${index + 1}`}/>
                ))}
            </div>
        </div>
    );
}

export default CustomerDetails;
