import React, { useState, useRef } from 'react'
import { Sheet, Header, Content, Footer, detents, Portal } from 'react-sheet-slide'
import 'react-sheet-slide/style.css'
import Widget from './Widget';
import { FaPlus } from "react-icons/fa6";
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const [cat,setCat] = useState('');

  return (
    <div className='ml-16 p-2'>
      <h2>{category.name}</h2>
      <div className='flex flex-row flex-wrap mt-6 mb-8'>
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
        <div className=' border-2 rounded-lg w-[24rem] h-[12rem] bg-slate-400 mx-4 flex justify-center' >
                <button type="button" onClick={() => (setOpen(true), setCat(category.id))} className=' flex flex-row my-auto' ><FaPlus className='my-1 mx-1'/> Add Widget</button>
      </div>
      </div>
      <Portal>
        <Sheet
          ref={ref}
          open={open}
          onDismiss={() => setOpen(false)}
          onClose={() => {
            console.log('Component unmounted')
          }}
          selectedDetent={detents.medium}
          detents={props => [
            detents.large(props),
            detents.medium(props)
          ]}
          useModal={true}
          useDarkMode={false}
          scrollingExpands={true}
        >
          <Header className="rss-header" scrolledClassName="rss-header-scrolled">Add Widget</Header>
          <Content className="rss-content">
            <div style={{ padding: '54px 16px 24px' }}>
              <AddWidgetForm props={cat}/>
            </div>
          </Content>
          <Footer className="rss-footer">
            <button type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </Footer>
        </Sheet>
      </Portal>
    </div>
  );
};

export default Category;
