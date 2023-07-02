<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary" data-bs-theme="dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">Vue Typescript</router-link>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">tasks</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/tasks/new" class="nav-link">Create task</router-link>
                </li>
            </ul>
        </div> 
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core" 

export default defineComponent({
    name: "NavBar",
});

</script>