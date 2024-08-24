import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../redux/actions/dashboardActions';

const AddWidgetForm = ({ props }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetContent, setWidgetContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(props);
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();
  console.log("widget",props);
  

  const handleSubmit = (e) => {
    e.preventDefault();

   
      const newWidget = {
        id: Date.now(), // Simple ID generator
        name: widgetName,
        content: widgetContent
      };
      console.log(newWidget)
      dispatch(addWidget(selectedCategory, newWidget));

      setWidgetName('');
      setWidgetContent('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex justify-evenly my-2'>
        <label>Widget Name:</label>
        <input
          type="text"
          value={widgetName}
          placeholder='Enter Widget Name'
          onChange={(e) => setWidgetName(e.target.value)}
          required
        />
      </div >
      <div className='flex justify-evenly my-2'>
        <label>Widget Content:</label>
        <input
          type="text"
          value={widgetContent}
          placeholder='Enter Widget Content'
          onChange={(e) => setWidgetContent(e.target.value)}
          required
        />
      </div>
      {/* <div>
        <label>Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div> */}
      <div className='flex justify-center my-2'><button  onClick={handleSubmit}>+ Add Widget</button></div>
      
    </form>
  );
};

export default AddWidgetForm;
