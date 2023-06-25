import axios from "axios";

// GOAL: Fetch some data and print the results

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => console.log(response.data));
