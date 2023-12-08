"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import DataInfo from './DataInfo';

function Form() {
    const [searchTerm, setSearchTerm] = useState('book');
    const [data, setData] = useState<any[]>([]);

    const fetchData = async (term: string) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`, {
                method: 'GET',
            });
            const fetchedData = await response.json();
            setData(fetchedData);
            console.log('fetched data:', fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(searchTerm);
    }, []);

    const handleSearch = async () => {
        fetchData(searchTerm);
    };

    return (
        <div className='bg-white p-8 max-w-2xl w-full rounded-md shadow-lg'>
            <h1 className='text-xl font-bold mb-2'>Search in the dictionary</h1>
            <div className="flex flex-row items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Search a word..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='focus:border-orange-600 focus:outline-none focus:ring-0 focus-visible:ring-0 focus:ring-orange-600 transition duration-300 shadow-none hover:ring-orange-600 hover:ring-0 hover:border-orange-600'
                />
                <Button type="button" onClick={handleSearch} className='bg-orange-600 hover:bg-orange-500 transition duration-300 hover:shadow-lg shadow-orange-500/40 hover:shadow-orange-500/40'>
                    <Search className='h-4 w-4 mr-2' />Search
                </Button>
            </div>
            <p className='text-gray-500 italic text-sm mt-2'>Such as: tree, house, moon. Only English words.</p>

            <DataInfo data={data} />
        </div>
    );
}

export default Form;
