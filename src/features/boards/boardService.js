import axios from 'axios';

//get boards from json file if and when it becomes full stack will get from api server
const getBoards = async () => {
  const response = await axios.get('./data.json');

  return response.data.boards;
};

const setBoard = async ({ boardData, callBack }) => {
  // console.log(callBack());
};

const addBoard = async (newBoard) => {
  //here you should push to local storage or database
  newBoard.columns = newBoard.columns.map((column) => {
    const { error, ...filtered } = column; //filters out error
    return filtered;
  });
  console.log(newBoard);
  return newBoard;
};

const boardService = { getBoards, board: { setBoard, addBoard } };

export default boardService;
