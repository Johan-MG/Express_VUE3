<template>
    <form @submit.prevent="saveTasks()">
        <input type="text" placeholder="Write a title" v-model="task.title">
        <textarea rows="3" placeholder="Write a description" v-model="task.description"></textarea>
        <button>Save</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, DefineComponent } from 'vue';
import { Task } from '@/interfaces/Task';
import { createTask } from '@/api/TaskServices';

export default defineComponent({
    data(){
        return{
            task: {} as Task
        }
    },
    methods:{
        async saveTasks(){
            const res = await createTask(this.task);
            console.log(res);
        }
    }
})

</script>