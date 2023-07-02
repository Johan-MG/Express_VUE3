<template>
    <div class="col-md-4 offset-md-4">
        <form @submit.prevent="saveTasks()" class="card card-body">
            <h2 class="text-center h3 mb-3">Create task</h2>
            <input type="text" class="form-control mb-3" placeholder="Write a title" v-model="task.title">
            <textarea class="form-control mb-3" rows="3" placeholder="Write a description" v-model="task.description"></textarea>
        <button class="btn btn-primary" :disabled="!task.title || !task.description">Save</button>
        </form>
    </div>
    
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
            this.$router.push({ name:"tasks" });
        }
    }
})

</script>