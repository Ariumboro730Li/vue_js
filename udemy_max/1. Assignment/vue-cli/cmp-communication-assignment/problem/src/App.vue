<template>
    <div>
        <user-data @add-data="addNewData"></user-data>
        <!-- <active-user
            v-for="user in users"
            :key="user.id"
            :username="user.username"
            :age="user.age"
        ></active-user> -->

        <active-user :username="users.username" :age="users.age"></active-user>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users : 
                {
                    // id : 0,
                    username : "Mister Tampan",
                    age : 23
                },
                // {
                //     id : 1,
                //     username : "Mister Ganteng",
                //     age : 22
                // }
            
        }
    }, 
    methods: {
        addNewData(username, age){
            this.users = {
                // id : Math.floor(Math.random() * 100),
                username : username,
                age : age,
            };

            // const newData = {
            //     id : Math.floor(Math.random() * 100),
            //     username : username,
            //     age : age,
            // };

            // this.users.push(newData);
        }
    },
}
</script>

<style>
    
</style>