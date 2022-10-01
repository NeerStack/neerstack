<template>
    <main>
    <div class="home">
        <div class="container">
           <table class="table1">
            <tbody>
                <tr class="row1">
                    <th class="story1">
                        <div>
                            <h2 class="intro">Outsource Web
                            Development Agency 
                            With Trained Software Engineers/Developers</h2>
                               
                            <span>
                                <h3>Here at CodinMage<h4>{{wordarr[wordstr]}}</h4></h3> 
                            </span>
                        
                            <div class="button">
                                <button class="quote">
                                    Get Quote Now
                                </button>
                                <button class="learn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </th>
                    <th class="story2">
                        <img :src="homeInterface" alt="homeInterface">
                    </th>
                </tr>
            </tbody>
            </table>
            
            <table class="table2">
                
                <tbody>
                    <tr>
                        <th>
                            <div class="services">
                                <h1>
                                    Our Services
                                </h1>
                                
                            </div>
                        </th>
                    </tr>
                    <tr class="row2" >
                        <th>
                            <div class="card">
                                <div>
                                    <span >
                                        <img :src="UI" alt="ui/ux">
                                        <h5>UI/UX Design</h5>
                                    </span>
                                    <p>We will design accurately based on client's project description</p>
        
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="card">
                                <div>
                                    <span >
                                        <img :src="Web" alt="web design">
                                        <h5>Web Development</h5>
                                    </span>
                                    <p>We will bring the UI design to accessible Web page</p>
        
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="card">
                                <div>
                                    <span >
                                        <img :src="Api" alt="Api design">
                                        <h5>API Development</h5>
                                    </span>
                                    <p>We will create scalable and efficient API for client's project </p>
        
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="card">
                                <div>
                                    <span >
                                        <img :src="Software" alt="software">
                                        <h5>Software Testing</h5>
                                    </span>
                                    <p>We will test every angle of the website to suit the client's project</p>
        
                                </div>
                            </div>
                        </th>
                        <th>
                            <div class="card">
                                <div>
                                    <span >
                                        <img :src="Product" alt="product">
                                        <h5>Product Management</h5>
                                    </span>
                                    <p>We will take full responsiblity of client's product/project</p>
        
                                </div>
                            </div>
                        </th>
                    </tr>
                </tbody>
           </table>
        </div>
        <div class="feature">
            <table>
                <tbody>
                    <tr class="row3">
                        <th>
                            <div>
                            <h2>
                                Better Strategy 
                                With Quality Business
                            </h2>
                            <p>
                                Problems trying to resolve the conflict between 
                                the two major realms of Classical physics: Newtonian mechanics 
                            </p>
                        </div>
                        </th>
                        
                    </tr>
                    <tr class="row4">
                        <th>
                            <img :src="crood" alt="crood2">
                        </th>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
    </main>
</template>
<script setup>
import homeInterface from '@/assets/croods-user-interface.png';
import Fa6SolidUserGroup from '~icons/fa6-solid/user-group'
import UI from '@/assets/ui-design.png'
import Web from '@/assets/web-design.png'
import Product from '@/assets/product-chain.png'
import Software from '@/assets/software.png'
import Api from '@/assets/Api.png'
import crood from '@/assets/crood2.png'
const setdata = {
    title: "CodinMage | Home"
}
useHead({
    title: computed(() => setdata.title)
})

const wordarr = ref(['Your vision plus our expertise equals new impulse to your growth.', 'We work as a remote part of your team', 'we always laugh at your jokes😂.', 'we always go extra mile.', 'we are proud to contribute to our clients\' success.'])
const wordstr = ref(0)
let count = setInterval(()=>{
    word()
}, 3000)

const word = ()=>{
    wordstr.value++
    if(wordstr.value >= wordarr.value.length){
        wordstr.value = 0
    }
}




</script>
<style lang="scss" scoped>

.services{
    text-align: left;
    width: 80%;
    display: inline-flex;
    justify-content: center;
    border: 1px solid #ee2528;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0,0,0,0.25);
    h1{
        font-size: xx-large;
        padding: 20px 10px;
        margin: 5px;
        text-transform: uppercase;
        color: #000
    }
    &:hover{
        background: #ddd;
    }
}

.dark .home .services{
    
    box-shadow: -5px -5px 10px rgba(30, 41, 59,0.8), 5px 5px 10px rgba(0,0,0,0.25);
    h1{
        color: #fff
    }
    &:hover{
        background: var(--black-alt);
    }
}
.home {
    width: 100%;
    
    .container{
        display: inline-table;
        justify-content: center;
        padding: 10px;
        table.table1{
            width: 100%;
            margin-top: 30px;
            margin-bottom: 30px;
            .row1{
                
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: 3%;
                padding-left: 5px;
                .story1{
                    width: 50%;
                    div{
                        h2.intro{
                            display: flex;
                            font-weight: bold;
                            
                            text-align: left;
                            word-wrap: break-word;
                            color: #000;
                            
                        }
                        span{
                            padding: 10px 2px;
                            h3{
                            margin-top: 10px;
                            font-weight: bold;
                            
                            text-align: left;
                            color: #000;
                            h4{
                            
                                font-weight: lighter;
                                
                                text-align: left;
                                color: #ee2528;
                                word-wrap: break-word;
                                
                            }
                            }
                            
                        }
                       
                        .button{
                            display: flex;
                            justify-content: flex-start;
                            button.quote{
                                margin-left: 8px;
                                margin-top: 5px;
                                padding: 5px 5px;
                                border: 2px solid var(--light);
                                box-sizing: border-box;
                                border-radius: 20px;
                                background: #ee2528;
                                color: #fff;
                                
                                font-weight: lighter;
                                box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0,0,0,0.25);
                                &:hover{
                                    background: #833c3c;
                                    box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6), 1px 1px 5px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.6), inset 2px 2px 4px rgba(0,0,0,0.3);
                                }
                            }

                            button.learn{
                                margin-left: 8px;
                                margin-top: 5px;
                                padding: 5px 5px;
                                border: 2px solid var(--light);
                                box-sizing: border-box;
                                border-radius: 20px;
                                background: var(--light);
                                color: #ee2528;
                                font-weight: lighter;
                                box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0,0,0,0.25);

                                &:hover{
                                    background: #ddd;
                                    box-shadow: -1px -1px 5px rgba(255, 255, 255, 0.6), 1px 1px 5px rgba(0,0,0,0.3), inset -2px -2px 5px rgba(255, 255, 255, 0.6), inset 2px 2px 4px rgba(0,0,0,0.3);
                                }
                            }
                        }
                    }
                }
                .story2{
                    width: 50%;
                    margin: 5px;
                    padding: 5px 10px;
                    img{
                        width: 950px
                    }
                }
            }
           
            
        }
        .table2{
            display: inline-table;
            justify-content: center;
            padding-bottom: 20px;
            margin-bottom: 30px;
            .row2{
                margin-left: 10%;
                padding: 10px 10px;
                th{
                    margin-left: 10px;
                    display: inline-flex;
                    justify-content: center;
                    margin-bottom: 20px;
                    .card{
                        
                        border: 1px solid #ee2528;
                        border-radius: 20px;
                        padding: 10px 10px;
                        
                        box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0,0,0,0.25);
                        span{
                            display: flex;
                            margin-left: 5px;
                            justify-content: flex-start;
                            text-align: left;
                            padding: 3px;
                            h5{
                                margin-left: 10px;
                                
                                font-weight: bold;
                                color: #000;
                                margin-top: 11px;
                                text-align: left;
                            }
                            img{
                                width: 50px;
                            }
                        }
                        p{
                            text-align: left;
                            
                            font-weight: lighter;
                            color: #ee2528;
                            padding: 3px;
                        }
                        &:hover{
                            background: #ddd;
                        }
                    }
                }
            }
        }
    }
    .feature{
        display: inline-flex;
        justify-content: center;
        width: 80%;
        padding: 5px 8px;
        background: var(--light);
        border: 1px solid #ee2528;
        border-radius: 40px;
        box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.8), 5px 5px 10px rgba(0,0,0,0.25);
        table{
            display: inline-table;
            justify-content: center;
            .row3{
                th{
                    div{
                        margin-top: 60px;
                        margin-bottom: 30px;
                        justify-content: center;
                        margin-left: 8%;
                        margin-right: 8%;
                        h2{
                            text-align: center;
                            justify-content: center;
                            align-items: center;
                            font-size: large;
                            color: #000;
                        }
                        p{
                            padding: 10px;
                            font-size: medium;
                            text-align: center;
                            font-weight: lighter;
                            font-family:Arial, Helvetica, sans-serif;
                            color: #ee2528
                        }
                    }
                }
            }
            .row4{
                th{
                    img{
                        display: inline-flex;
                        width: 500px;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 40px;
                        
                    }
                }
            }
        }
    &:hover{
       background: #ddd;
        
    }
    }

}
.dark .home {
    .container{
        table{
            .row1{
                .story1{
                    div{
                        h2.intro{
                            color: #fff;
                        }
                        h3{
                            color: #fff;
                            h4{
                                color: #ee2528
                            }
                        }
                        
                        .button{
                            button.quote{
                                box-shadow: -5px -5px 10px rgba(30, 41, 59,0.8), 5px 5px 10px rgba(0,0,0,0.25);
                            }
                            button.learn{
                                box-shadow: -5px -5px 10px rgba(30, 41, 59,0.8), 5px 5px 10px rgba(0,0,0,0.25);
                                border: 2px solid #ee2528;
                                background: var(--black);
                                color: #fff;

                                &:hover{
                                    background: var(--black-alt);
                                }
                            }
                        }
                    }
                }
            }
            .row2{
                th{
                    .card{
                        border: 1px solid #ee2528;
                        box-shadow: -5px -5px 10px rgba(30, 41, 59,0.8), 5px 5px 10px rgba(0,0,0,0.25);
                        span{
                            h5{
                                color: #fff;
                               
                            }
                            svg{
                                
                                color: #fff;
                            }
                        }
                        p{
                            color: #ee2528;
                            
                        }
                        &:hover{
                            background: var(--black-alt);
                        }
                    }
                }
            }
            
        }
    }
    .feature{
        box-shadow: -5px -5px 10px rgba(30, 41, 59,0.8), 5px 5px 10px rgba(0,0,0,0.25);
        background: var(--black);
        border: 1px solid #ee2528;
        table{
            .row3{
                th{
                    div{
                       
                        h2{
                            
                            color: #fff;
                        }
                        
                    }
                }
            }
            
            .row3{
                th{
                    div{
                        p{
                            color: #ee2528
                        }
                    }
                }
            }
        }
    &:hover{
       background: var(--black-alt);
        
    }
    }

}

@media only screen and (orientation: landscape) {
    .button{
        button.quote{
            width: 160px;
            height: 50px;
            font-size: medium;
        }
        button.learn{
            width: 130px;
            height: 50px;
            font-size: medium;
        }
    }
    .home .container .row1{
        .story1{
        div{
            h2.intro{
                font-size: xx-large;
                word-wrap: break-word;
            }
            h3{
                font-size: large;
                h4{
                    font-size: large;
                }
            }
        }
        
    }
}
    .story2{
        top: 0;
        display: flex;
        justify-content: center;
        img{
            
            width: 400px;
            height: auto;
        }
    }
    .table2{
        
        .row2{
           
            th{
                
                .card{
                    width: 500px;
                    
                    span{
                        h5{
                            margin-left: 10px;
                            font-size: medium;
                            font-weight: bold;
                            color: #000;
                            margin-top: 11px;
                            text-align: left;
                        }
                        img{
                            width: 50px;
                        }
                    }
                    p{
                        text-align: left;
                        font-size: medium;
                        font-weight: lighter;
                        color: #ee2528;
                        padding: 3px;
                    }
                    &:hover{
                        background: #ddd;
                    }
                }
            }
        }
    }

}

@media(max-width: 1280px ){
    .button{
        button.quote{
            width: 160px;
            height: 50px;
            font-size: medium;
        }
        button.learn{
            width: 130px;
            height: 50px;
            font-size: medium;
        }
    }
    .home .container .row1{
        .story1{
        div{
            h2.intro{
                font-size: xx-large;
                word-wrap: break-word;
            }
            h3{
                font-size: medium;
                h4{
                    font-size: medium;
                }
            }
        }
        
    }
    .table2{
        
        .row2{
           
            th{
                
                .card{
                    width: 500px;
                    
                    span{
                        h5{
                            margin-left: 10px;
                            font-size: medium;
                            font-weight: bold;
                            color: #000;
                            margin-top: 11px;
                            text-align: left;
                        }
                        img{
                            width: 50px;
                        }
                    }
                    p{
                        text-align: left;
                        font-size: medium;
                        font-weight: lighter;
                        color: #ee2528;
                        padding: 3px;
                    }
                    &:hover{
                        background: #ddd;
                    }
                }
            }
        }
    }
}
    .story2{
        top: 0;
        display: flex;
        justify-content: center;
        img{
           
            width: 400px;
            height: auto;
        }
    }

    
}
@media (max-width: 1080px) {

    .button{
        button.quote{
            width: 160px;
            height: 50px;
            font-size: small;
        }
        button.learn{
            width: 130px;
            height: 50px;
            font-size: small;
        }
    }
    .story2{
        top: 0;
        display: flex;
        justify-content: center;
        img{
            
            width: 400px;
            height: auto;
        }
    }
    .home .container .row1{
        .story1{
        div{
            h2.intro{
                font-size: medium;
                word-wrap: break-word;
            }
            h3{
                font-size: small;
                h4{
                    font-size: small;
                }
            }
        }
        
    }
}
.table2{
        
    .row2{
       
        th{
            
            .card{
                width: 500px;
                
                span{
                    h5{
                        margin-left: 10px;
                        font-size: medium;
                        font-weight: bold;
                        color: #000;
                        margin-top: 11px;
                        text-align: left;
                    }
                    img{
                        width: 50px;
                    }
                }
                p{
                    text-align: left;
                    font-size: medium;
                    font-weight: lighter;
                    color: #ee2528;
                    padding: 3px;
                }
                &:hover{
                    background: #ddd;
                }
            }
        }
    }
}
    
}

@media (max-width: 520px) {
    .button{
        button.quote{
            width: 80px;
            height: 30px;
            font-size: xx-small;
        }
        button.learn{
            width: 80px;
            height: 30px;
            font-size: xx-small;
        }
    }
    .home .container .row1{
        .story1{
        div{
            h2.intro{
                font-size: medium;
                word-wrap: break-word;
            }
            h3{
                font-size: small;
                h4{
                    font-size: small;
                }
            }
        }
        
    }
    .story2{
        margin: 5px;
        padding: 5px 10px;
        img{
            width: 950px
        }
    }
    }
    .table2{
        
        .row2{
           
            th{
                
                .card{
                    width: 300px;
                    
                    span{
                        h5{
                            margin-left: 10px;
                            font-size: medium;
                            font-weight: bold;
                            color: #000;
                            margin-top: 11px;
                            text-align: left;
                        }
                        img{
                            width: 50px;
                        }
                    }
                    p{
                        text-align: left;
                        font-size: medium;
                        font-weight: lighter;
                        color: #ee2528;
                        padding: 3px;
                    }
                    &:hover{
                        background: #ddd;
                    }
                }
            }
        }
    }
    
    
}

@media (max-width: 420px) {
    .button{
        button.quote{
            width: 80px;
            height: 30px;
            font-size: calc(8px);
        }
        button.learn{
            width: 80px;
            height: 30px;
            font-size: xx-small;
        }
    }
    .home .container .row1{
        .story1{
        div{
            h2.intro{
                font-size: medium;
                word-wrap: break-word;
            }
            h3{
                font-size: small;
                h4{
                    font-size: small;
                }
            }
        }
        
    }
    .story2{
        margin: 5px;
        padding: 5px 10px;
        img{
            width: 950px
        }
    }
    }

    .table2{
        
        .row2{
           
            th{
                
                .card{
                    width: 300px;
                    
                    span{
                        h5{
                            margin-left: 10px;
                            font-size: medium;
                            font-weight: bold;
                            color: #000;
                            margin-top: 11px;
                            text-align: left;
                        }
                        img{
                            width: 50px;
                        }
                    }
                    p{
                        text-align: left;
                        font-size: medium;
                        font-weight: lighter;
                        color: #ee2528;
                        padding: 3px;
                    }
                    &:hover{
                        background: #ddd;
                    }
                }
            }
        }
    }
    
    
}

@media (max-width: 300px) {
    .button{
        button.quote{
            width: 80px;
            height: 30px;
            font-size: calc(6px);
        }
        button.learn{
            width: 80px;
            height: 30px;
            font-size: calc(7px);
        }
    }
    .home .container .row1{
        .story1{
        div{
            h2.intro{
                font-size: medium;
                word-wrap: break-word;
            }
            h3{
                font-size: small;
                h4{
                    font-size: small;
                }
            }
        }
        
    }
    .story2{
        margin: 5px;
        padding: 5px 10px;
        img{
            width: 950px
        }
    }
    }
    .table2{
        
        .row2{
           
            th{
                
                .card{
                    width: 200px;
                    
                    span{
                        h5{
                            margin-left: 10px;
                            font-size: small;
                            font-weight: bold;
                            color: #000;
                            margin-top: 11px;
                            text-align: left;
                        }
                        img{
                            width: 50px;
                        }
                    }
                    p{
                        text-align: left;
                        font-size: smaller;
                        font-weight: lighter;
                        color: #ee2528;
                        padding: 3px;
                    }
                    &:hover{
                        background: #ddd;
                    }
                }
            }
        }
    }
    
}

</style>
