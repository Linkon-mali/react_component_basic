import axios from "axios";

export const getTaskData = async () => {
    // const data = [];
   const data = await axios.get('https://todo-app37.herokuapp.com/loadTodo')
    .then(res => {
       return res.data;
    })
    return data;
}
