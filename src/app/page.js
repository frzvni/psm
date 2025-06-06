'use client';
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbase';

export default function Home() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Example of fetching records from a collection
    // Replace 'your_collection' with your actual collection name
    const fetchRecords = async () => {
      try {
        const result = await pb.collection('your_collection').getList(1, 50);
        setRecords(result.items);
      } catch (error) {
        console.error('Error fetching records:', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
        My Next.js + PocketBase App
      </h1>
      <div>
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>
          Records from PocketBase:
        </h2>
        <ul>
          {records.map((record) => (
            <li key={record.id} style={{ marginBottom: '10px' }}>
              {JSON.stringify(record)}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
