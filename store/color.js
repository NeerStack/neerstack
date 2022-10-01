import {defineStore} from 'pinia'
import {useStorage} from '@vueuse/core'

export const setColor = defineStore('color', {
    state: () =>({
        color: 'light',
        colorBol: false
    }),
    getters:{
        getColor: (state) =>{
            return state.color
        }
        
    },
    actions:{
        changeColor(){
            if((this.colorBol == false || this.colorBol == true) && !this.color){
                this.color = 'light'
            }
            else if(this.colorBol == false && this.color === 'dark'){
                this.color = 'light'
            }else if(this.colorBol == true && this.color === 'light'){
                this.color = 'dark'
            }
            
        },
        toggleColor(){
           this.colorBol = !this.colorBol
            if(this.colorBol == false){
                    this.color= 'light'
            }else{
                this.color = 'dark'
            }
        }
    },
    persist: true
})