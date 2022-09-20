import React from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { selectBoardIndex } from '../features/boards/boardSlice';
import IconBoard from './icons/IconBoard';
import LightDarkSwitch from './LightDarkSwitch';

const drawerVariants = {
  hide: {
    x: '-300px',
    opacity: 0,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
  initial: { x: '-300px' },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
};

const SideDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  const { boards, selectedIndex } = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const determineIconColor = (isSelected) => {
    return isSelected ? '#fff' : '#828FA3';
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={drawerVariants}
        initial='initial'
        animate={showSideDrawer}
        className='drawer'
      >
        <StyledSideDrawer>
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
                        <IconBoard
                          color={`${determineIconColor(
                            index === selectedIndex
                          )}`}
                        />
                      </div>
                      <div className='right'>{board.name}</div>
                    </button>
                  </li>
                ))}
                <li className='list-boards-item new-board'>
                  <button>
                    <div className='left'>
                      <IconBoard color='#635FC7' />
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
                  <img src='./assets/icon-hide-sidebar.svg' alt='close menu' />
                  <span>Hide Sidebar</span>
                </button>
              </div>
            </footer>
          </div>
        </StyledSideDrawer>
      </motion.div>
    </AnimatePresence>
  );
};

export default SideDrawer;
