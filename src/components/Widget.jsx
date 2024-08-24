import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../redux/actions/dashboardActions';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget(categoryId, widget.id));
  };

  return (
    <div className=' border-2 rounded-lg w-[24rem] h-[12rem] bg-slate-400 mx-4'>
      <div className='flex flex-row justify-between'>
      <h2 className='m-2 mt-3 font-bold '>{widget.name}</h2>
      <button className='mb-2' onClick={handleRemove}>✖️</button>
      </div>
      
      
      <span>content: {widget.content}</span>
      
    </div>
  );
};

export default Widget;
