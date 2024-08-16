import React from 'react';
import { Customer } from '../types/Customer';

interface CustomerCardProps {
    customer: Customer;
    onClick: () => void;
    isSelected: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = React.memo(({ customer, onClick, isSelected }) => {
    return (
        <div 
            className={`customer-card ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <h3>{customer.name}</h3>
            <p>{customer.details}</p>
        </div>
    );
});

export default CustomerCard;
