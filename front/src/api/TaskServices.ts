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
export const getTask = async (id: string): Promise<AxiosResponse<Task>> => {
    const res = await axios.get("/tasks/"+id);
    return res;
}

export const updateTask = async (id: string, task: Task) => {
    const res = await axios.put("/tasks/"+id, task);
    return res;
}

export const deleteTask = async (id: string) => {
    const res = await axios.delete("/tasks/"+id);
    return res;
}