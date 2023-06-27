import axios from './axios';
import {AxiosResponse} from 'axios';
import { Task } from '@/interfaces/Task';

export const createTask = async (task: Task) =>{
    await axios.post("/tasks", task);
}
export const getTasks = async (): Promise<AxiosResponse<Task[]>> => {
    const res = await axios.get("/tasks");
    return res;
}