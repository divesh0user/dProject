import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryTerm, setCategoryTerm] = useState(''); // New input state for category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64181efc5c2e5b1e0fc40c09.mockapi.io/items'); // Example endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    item.category.toLowerCase().includes(categoryTerm.toLowerCase()) // Assuming items have a category property
  );

  return (
    <div>
      <h1>Data List</h1>

      {/* Search by name */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Search by category */}
      <input
        type="text"
        placeholder="Search by category..."
        value={categoryTerm}
        onChange={(e) => setCategoryTerm(e.target.value)}
      />
      
      <ul>
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <li key={item.id}>{item.name} - {item.category}</li> // Assuming each item has a category
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default App;
