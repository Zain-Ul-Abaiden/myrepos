<template>
    <div class ="todos">
        <ul>
            <li v-for="x in todos" :key="x"> {{ x }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'showtodo',
    props:{
        todos: Array
    },

    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },

    methods: {
        printData(){
            console.log(this.form)
        }
    }

}</script>