<template>
    <div>
        <br>
        <br>
        Information:
        {{ users[index].name }}
        {{ users[index].age }}
    </div>
</template>

<script>
    export default{
        name:'UserList',
        data(){
            return{
                users:[
                    {
                        name: 'Ilya',age: 25
                    },
                    {
                        name: 'Timur',age: 15
                    },
                    {
                        name: 'Oleg',age: 17
                    }
                ],
                index: this.$route.params.index
            }
        },
        watch:{
            $route(to, from){
                if(to.params.index != from.params.index){
                    this.index = to.params.index
                }
            }
        }
    }
</script>