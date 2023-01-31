const { createApp } = Vue;
createApp({
    data() {
      return {
        mail:[]
      }
    },
    mounted() {

      for (let i = 1; i <= 50; i++) {
          
          axios
              .get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((resp) => {

                  this.mail.push(resp.data.response);

              });

      }

      

  }
    
       
    
  }).mount('#app')