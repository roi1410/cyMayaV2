import axios from 'axios';

const createNewCourse = async () => {
 const response = await axios.post("http://localhost:8002/course/create", {
    name: "fullStack july 2023",
 });
 return response;
};

const createNewGantt = async (body) => {
 const response = await axios.post("http://localhost:8002/gantt/create/65df182bc9e7210350f7b814", body);
 return response;
};

export { createNewCourse, createNewGantt };
