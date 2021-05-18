const app1 = Vue.createApp({    
    data(){
        return{
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api');
            const results = await res.json();
            data = results.results[0];
            console.log(data);

            this.firstName = data.name.first;
            this.lastName = data.name.last;
            this.email = data.email;
            this.gender = data.gender;
            this.picture = data.picture.large;
        },
    }
});

app1.mount('#app');