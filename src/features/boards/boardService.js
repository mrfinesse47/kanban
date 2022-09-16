import axios from 'axios';

//get boards from json file if and when it becomes full stack will get from api server
const getBoards = async () => {
  const response = await axios.get('http://localhost:3000/data.json');

  return response.data.boards;
};
const boardService = { getBoards };

export default boardService;
