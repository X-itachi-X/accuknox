import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const categories = useSelector((state) => state.dashboard.categories);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWidgets = categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredWidgets.map((widget) => (
          <div key={widget.id}>
            <h4>{widget.name}</h4>
            <p>{widget.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
