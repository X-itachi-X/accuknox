import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetForm from './AddWidgetForm';

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  
  console.log(categories)
  return (
    <div>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      
    </div>
  );
};

export default Dashboard;
