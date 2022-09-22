import axios from 'axios';

//get boards from json file if and when it becomes full stack will get from api server
const getBoards = async () => {
  const response = await axios.get('./data.json');

  return response.data.boards;
};

const setBoard = async ({ boardData, callBack }) => {
  console.log(callBack());
};

const boardService = { getBoards, board: { setBoard } };

export default boardService;
