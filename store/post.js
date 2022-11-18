import {defineStore} from 'pinia'

export const setPost = defineStore('post', {
    state: () => ({
        word: '',
        wordarr: ['we offer best quality service at affordable price.', 'We work as a remote part of your team.', 'We always laugh at your jokes😂.', 'we always go extra mile.', 'We are proud to contribute to our clients\' success.', ' We Have Good Team Of Professionals Who Will Be Able To Meet Your Expectations.', 'We Use Latest Technology To Give Your Business A Unique Look.', 'We Work On Time And Deliver On Time.', 'We Provide 100% Satisfaction Guaranteed.', ' We Are Available 24/7 To Help You Out.', 'Your vision plus our expertise equals new impulse to your growth.' ],
        sleepTime: 100,
        curPhraseIndex: 0
    }),
    actions:{
        sleep(ms){
            return new Promise((resolve) => setTimeout(resolve, ms));
        },
        async writeLoop(){
            while(true){
                let curWord = this.wordarr[this.curPhraseIndex];
                
                for(let i = 0; i < curWord.length; i++){
                    this.word = curWord.substring(0, i+1).toLowerCase(); 
                    await this.sleep(this.sleepTime);
                }
    
                await this.sleep(this.sleepTime * 10);
    
                for(let i = curWord.length; i > 0; i--){
                    this.word = curWord.substring(0, i-1).toLowerCase(); 
                    await this.sleep(this.sleepTime);
                }
    
                await this.sleep(this.sleepTime * 5);
    
                if(this.curPhraseIndex === this.wordarr.length - 1){
                    this.curPhraseIndex = 0;
                }else{
                    this.curPhraseIndex++;
                }
               
            }
        }
    },

})