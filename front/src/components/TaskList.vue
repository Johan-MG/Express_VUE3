<template>
    <ul class="list-group">
            <li 
                class="list-group-item"
                style="cursor: pointer;"
                v-for="(task, index) in tasks" 
                :key="index" 
                @click="this.$router.push(`/tasks/${task._id}`)"
            >
                {{ index + 1 }}.
                {{ task.title }}
            </li>
        </ul>
</template>

<script lang="ts">
    import { defineComponent, DefineComponent } from 'vue';
    import { getTasks } from '@/api/TaskServices';
    import { Task } from '@/interfaces/Task';

    export default defineComponent({
        data(){
            return{
                tasks: [] as Task[],
            }
        },
        mounted(){
            this.loadTasks();
        },
        methods:{
            async loadTasks() {
                const res = await getTasks();
                this.tasks = res.data;
                console.log(this.tasks);
            }
        }
    })
</script>