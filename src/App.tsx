import React, { useEffect, useState } from 'react';
import { fetchCustomers } from './services/api';
import { Customer } from './types/Customer';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import './App.css';

const App: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

    useEffect(() => {
        const getCustomers = async () => {
            const data = await fetchCustomers();
            setCustomers(data);
            if (data.length > 0) setSelectedCustomerId(data[0].id);
        };
        getCustomers();
    }, []);

    const selectedCustomer = customers.find(c => c.id === selectedCustomerId);

    return (
        <div className="app">
            <CustomerList 
                customers={customers} 
                selectedCustomerId={selectedCustomerId || 0} 
                onSelectCustomer={setSelectedCustomerId}
            />
            {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        </div>
    );
}

export default App;
