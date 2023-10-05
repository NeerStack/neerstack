import {defineStore} from 'pinia'

export const setPost = defineStore('post', {
    state: () => ({
        word: '',
        wordarr: [
            "We take pride in delivering unparalleled quality services at prices that won't break the bank.",
            "We seamlessly become a remote part of your team, working together as one cohesive unit.",
            "We cherish your sense of humor, making every collaboration a joyous experience 😂.",
            "Our commitment knows no bounds as we consistently go the extra mile to exceed your expectations.",
            "We celebrate every milestone in our clients' success stories, knowing we've played a vital role.",
            "Our team of dedicated professionals is poised to not just meet but surpass your lofty expectations.",
            "We harness cutting-edge technology to craft a distinctive, future-ready image for your business.",
            "Our unwavering dedication to punctuality ensures that we always work and deliver on time.",
            "We take pride in offering a 100% satisfaction guarantee, ensuring you're delighted with our services.",
            "We're at your service 24/7, ready to assist you whenever you need us.",
            "We believe that your vision, combined with our expertise, sparks a powerful catalyst for your growth."
        ],
        sleepTime: 70,
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
