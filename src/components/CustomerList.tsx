import React from 'react';
import { FixedSizeList as List } from 'react-window';
import { Customer } from '../types/Customer';
import CustomerCard from './CustomerCard';

interface CustomerListProps {
    customers: Customer[];
    selectedCustomerId: number;
    onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
    const Row = ({ index, style }: { index: number, style: React.CSSProperties }) => {
        const customer = customers[index];
        return (
            <div style={style}>
                <CustomerCard
                    key={customer.id}
                    customer={customer}
                    onClick={() => onSelectCustomer(customer.id)}
                    isSelected={customer.id === selectedCustomerId}
                />
            </div>
        );
    };

    return (
        <List
        height={window.innerHeight}
        itemCount={customers.length}
        itemSize={180}
        width={300}
    >
        {Row}
    </List>
    );
}

export default CustomerList;