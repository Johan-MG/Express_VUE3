<template>
    

    <div class="col-md-4 offset-md-4">
        
        <form @submit.prevent="handleUpdate()" class="card card-body">
            <h2 class="text-center h3 mb-3">task detail</h2>
            <input type="text" class="form-control mb-3" v-model="currentTask.title" />
            <textarea class="form-control mb-3" rows="3" v-model="currentTask.description"></textarea>
            <div class="row">
                
                <button class="btn btn-primary col-6">Update</button>
                <button v-on:click="handleDelete()" class="btn btn-danger col-6">Delete</button>
            </div>
        </form>
    </div>
    

    

</template>

<script lang="ts">
import { getTask, updateTask, deleteTask} from '@/api/TaskServices';
import { defineComponent } from 'vue';
import { Task } from '@/interfaces/Task';

export default defineComponent({
    mounted(){
        if(typeof this.$route.params.id === "string"){
            this.loadTask(this.$route.params.id);
        }
        
    },
    methods:{
            async loadTask(id: string){
                const res = await getTask(id);
                this.currentTask = res.data;
            },
            async handleUpdate(){
                if(typeof this.$route.params.id === "string"){
                    const res = await updateTask(this.$route.params.id, this.currentTask);
                } 
            },
            async handleDelete(){
                if(typeof this.$route.params.id === "string"){
                    const res = await deleteTask(this.$route.params.id);
                    this.$router.push({ name:"tasks" });
                } 
            },
        },
    data(){
        return {
            currentTask: {} as Task
        }
    }
})
</script>