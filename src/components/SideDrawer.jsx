import React, { useState } from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoardIndex } from '../features/boards/boardSlice';
import IconBoard from './icons/IconBoard';
import LightDarkSwitch from './LightDarkSwitch';
import Modal from './Modal/Modal';
import AddNewBoard from './forms/AddNewBoard';
import { openModal, setSideDrawerMode } from '../features/ui/uiSlice';

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

const SideDrawer = () => {
  const { sideDrawerMode } = useSelector((state) => state.ui);
  const { boards, selectedIndex } = useSelector((state) => state.board);
  const [showNewBoardMenu, setShowNewBoardMenu] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal showModal={showNewBoardMenu}>
        <AddNewBoard setShowModal={setShowNewBoardMenu} />
      </Modal>

      <AnimatePresence>
        <motion.div
          variants={drawerVariants}
          initial='initial'
          animate={sideDrawerMode}
          className='drawer'
        >
          <StyledSideDrawer showSideDrawer={sideDrawerMode}>
            <div className='container'>
              <div className='menu'>
                <h4>ALL BOARDS ({boards.length})</h4>
                <ul className='list-boards'>
                  {boards.map((board, index) => (
                    <li
                      onClick={() => {
                        dispatch(selectBoardIndex(index));
                      }}
                      role='button'
                      key={index}
                      className={`list-boards-item ${
                        index === selectedIndex && 'selected'
                      }`}
                    >
                      <div className='left'>
                        <IconBoard />
                      </div>
                      <div className='right'>{board.name}</div>
                    </li>
                  ))}
                  <li
                    className='list-boards-item new-board'
                    role='button'
                    onClick={() => {
                      dispatch(openModal('new-board-menu'));
                    }}
                  >
                    <div className='left' id='new-board'>
                      <IconBoard />
                    </div>
                    <div className='right'>+ Create New Board</div>
                  </li>
                </ul>
              </div>
              <footer>
                <div className='toggle-container'>
                  <LightDarkSwitch />
                </div>
                <div className='close-container'>
                  <button onClick={() => dispatch(setSideDrawerMode('hide'))}>
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
