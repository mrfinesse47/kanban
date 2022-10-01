import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

const DynamicList = ({ title, items, setItems }) => {
  const handleItemChange = (e, index) => {
    setItems((prev) => {
      const arr = [...prev];
      arr[index].value = e.target.value;
      return arr;
    });
  };

  const handleItemDelete = (index) => {
    setItems((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  const handleAddItem = (e) => {
    setItems((prev) => {
      const arr = [...prev];
      arr.push({
        id: uuid(),
        value: '',
        tasks: [],
        error: { status: false, message: '' },
      });
      return arr;
    });
  };

  const setErrorMessageOnItemFalse = (index) => {
    setItems((prev) => {
      const arr = [...prev];
      arr[index].error = { status: false, message: '' };
      return arr;
    });
  };
  return (
    <div className='form-group'>
      <AnimatePresence>
        {items.length > 0 && (
          <motion.label
            transition={{ duration: 0.45 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {title}
          </motion.label>
        )}
      </AnimatePresence>
      <ul className='dynamic-list'>
        <AnimatePresence delay>
          {items.length > 0 &&
            items.map((item, index) => {
              return (
                <motion.li
                  transition={{ duration: 0.45 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='dynamic-container'
                  key={item.id}
                >
                  <input
                    autoFocus
                    type='text'
                    onClick={() => {
                      setErrorMessageOnItemFalse(index);
                    }}
                    className={`dynamic ${
                      item.error.status === true && 'error'
                    }`}
                    value={
                      item.error.status === true
                        ? item.error.message
                        : item.value
                    }
                    onChange={(e) => handleItemChange(e, index)}
                  />

                  <button
                    className='delete'
                    onClick={() => handleItemDelete(index)}
                    type='button'
                  >
                    <img src='./assets/icon-cross.svg' alt='delete' />
                  </button>
                </motion.li>
              );
            })}
        </AnimatePresence>

        <button
          className='btn btn-light'
          type='button'
          onClick={() => handleAddItem()}
        >
          + Add New item
        </button>
      </ul>
    </div>
  );
};

export default DynamicList;
