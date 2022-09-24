import React, { useState } from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoardIndex } from '../features/boards/boardSlice';
import IconBoard from './icons/IconBoard';
import LightDarkSwitch from './LightDarkSwitch';
import Modal from './Modal/Modal';
import AddNewTaskForm from './forms/AddNewTaskForm';

const drawerVariants = {
  hide: {
    position: 'fixed',
    x: '-300px',
    opacity: 0,
    zIndex: 10,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      type: 'linear',
    },
  },
  initial: { x: '-300px', position: 'fixed', zIndex: 10 },
  show: {
    x: 0,
    opacity: 1,
    zIndex: 10,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      type: 'linear',
      position: 'fixed',
    },
  },
};

const SideDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  const { boards, selectedIndex } = useSelector((state) => state.board);
  const [showNewBoardMenu, setShowNewBoardMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal setShowModal={setShowNewBoardMenu} showModal={showNewBoardMenu}>
        <AddNewTaskForm setShowModal={setShowNewBoardMenu} />
      </Modal>

      <AnimatePresence>
        <motion.div
          variants={drawerVariants}
          initial='initial'
          animate={showSideDrawer}
          className='drawer'
        >
          <StyledSideDrawer showSideDrawer={showSideDrawer}>
            <div className='container'>
              <div className='menu'>
                <h4>ALL BOARDS ({boards.length})</h4>
                <ul className='list-boards'>
                  {boards.map((board, index) => (
                    <li
                      key={index}
                      className={`list-boards-item ${
                        index === selectedIndex && 'selected'
                      }`}
                    >
                      <button
                        onClick={() => {
                          dispatch(selectBoardIndex(index));
                        }}
                      >
                        <div className='left'>
                          <IconBoard />
                        </div>
                        <div className='right'>{board.name}</div>
                      </button>
                    </li>
                  ))}
                  <li className='list-boards-item new-board'>
                    <button
                      onClick={() => {
                        setShowNewBoardMenu(true);
                      }}
                    >
                      <div className='left' id='new-board'>
                        <IconBoard />
                      </div>
                      <div className='right'>+ Create New Board</div>
                    </button>
                  </li>
                </ul>
              </div>
              <footer>
                <div className='toggle-container'>
                  <LightDarkSwitch />
                </div>
                <div className='close-container'>
                  <button onClick={() => setShowSideDrawer('hide')}>
                    <img
                      src='./assets/icon-hide-sidebar.svg'
                      alt='close menu'
                    />
                    <span>Hide Sidebar</span>
                  </button>
                </div>
              </footer>
            </div>
          </StyledSideDrawer>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SideDrawer;
