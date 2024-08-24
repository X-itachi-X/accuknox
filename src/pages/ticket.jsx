import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions/dashboardActions';

function TICKET() {
  const categories = useSelector(state => state.dashboard.categories);
  const dispatch = useDispatch();
  const [checkedWidgets, setCheckedWidgets] = useState({});

  if (!categories || categories.length < 3) {
    return <div>Loading or insufficient categories...</div>;
  }

  const secondCategory = categories[3];

  const handleCheckWidget = (widgetId) => {
    setCheckedWidgets(prev => ({
      ...prev,
      [widgetId]: !prev[widgetId]
    }));
  };

  const handleConfirmRemoval = () => {
    secondCategory.widgets.forEach(widget => {
      if (!checkedWidgets[widget.id]) {
        dispatch(removeWidget(secondCategory.id, widget.id));
      }
    });
  };

  return (
    <div>
      <h2>{secondCategory.name}</h2>
      {secondCategory.widgets.map(widget => (
        <div key={widget.id}>
          <input 
            type="checkbox" 
            id={widget.id} 
            checked={checkedWidgets[widget.id] || false}
            onChange={() => handleCheckWidget(widget.id)}
          />
          <label htmlFor={widget.id}>{widget.name}</label>
        </div>
      ))}
      <button className='absolute bottom-0 mb-2 end-0 mr-10' onClick={handleConfirmRemoval}>Confirm</button>
    </div>
  );
}

export default TICKET;
