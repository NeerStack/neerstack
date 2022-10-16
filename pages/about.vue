<template>
    <main>
       <div class="grid-wrapper about">
        <div class="row">
            <h1> About Us</h1>
             <div class="title">
                <p class="col-xl-12">CodinMage is a Digital Agency Company that Design Websites for Clients All Over the World Using Latest Technologies. Our team of experts is highly experienced in their respective fields. We offer services like Web Development, Graphic Designing, SEO Services etc.
                </p>
            </div>
            <div class="flex mission">
                <h1 class="col-lg-6" >Our Mission</h1>
                <div class="col-xl-4">
                    <p >Our mission is to help our customers succeed through web design and development. We work closely together to understand their business goals, processes, and challenges. In order to achieve these goals, we focus on meeting the following objectives:
                    </p>
                    <ul>
                        <li>
                            <p>Deliver quality web solutions</p>  
                        </li>
                        <li>
                            <p>Provide timely service</p> 
                        </li>
                        <li>
                            <p>Ensure that your project meets its deadlines</p> 
                        </li>
                        <li>
                            <p>Keep costs down</p>
                        </li>
                        <li>
                            <p>Increase sales</p>
                        </li>
                    </ul>
                                        
                </div>
                
            </div>
            <div class="flex vision">
                <h1 class="col-lg-6">Our Vision</h1>
                <p class="col-xl-4">We believe in providing the best products and services to our clients. We strive to deliver high-quality results, while exceeding expectations. To us, success means being able to exceed customer's expectations. We encourage innovation and creativity to achieve success. We value integrity, professionalism, hard work, loyalty, respect, and teamwork. When we do well, we do right. We welcome challenges.</p>
            </div>
         
            <div class="flex value">
                <h1 class="col-lg-6">Our Value</h1>
                <div class="col-xl-4">
                    <p>We have several values that guide our behavior and motivate us to keep striving to be the best. These values are: </p>   
                    <p><span>Passionate</span> - Passionate people are driven by their interests and talents. They take pride in what they do and enjoy the journey.</p>
                    <p><span>Dedicated</span> - Dedicated people put 100% of their effort into everything they do. They make decisions based upon facts rather than emotions.</p> 
                    <p><span>Creative</span> - Creative people think outside the box to find innovative solutions to problems.</p>     
                </div>
            </div>
        </div>
            <!-- <div id="team">
                <div class="team_str">
                    <h1>Meet Our Team</h1>
                    <p>team story can be writen here</p>
                </div>
                <div>
                    <ul class="team">
                        <li class="card">
                            <div>
                                <img :src="image" alt="userImage">
                                <h1>Name</h1>
                                <p>position</p>
                            </div>
                            <ul class="flex justify-center social_media">
                                <li>
                                    <a href="#">
                                        <fa6-brands-facebook-f/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <fa6-brands-twitter/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <fa6-brands-instagram/>
                                    </a>
                                </li>
                            </ul>
                        </li>  
                        <li class="card">
                            <div>
                                <img :src="image" alt="userImage">
                                <h1>Name</h1>
                                <p>position</p>
                            </div>
                            <ul class="flex justify-center social_media">
                                <li>
                                    <a href="#">
                                        <fa6-brands-facebook-f/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <fa6-brands-twitter/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <fa6-brands-instagram/>
                                    </a>
                                </li>
                            </ul>
                        </li>  
                        <li class="card">
                            <div>
                                <img :src="image" alt="userImage">
                                <h1>Name</h1>
                                <p>position</p>
                            </div>
                            <ul class="flex justify-center social_media">
                                <li>
                                    <a href="#">
                                        <fa6-brands-facebook-f/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <fa6-brands-twitter/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <fa6-brands-instagram/>
                                    </a>
                                </li>
                            </ul>
                        </li>  
                    </ul>

                </div>
            </div>  -->
            </div>

        
    </main>
    
    

</template>

<script setup>
import under from '@/assets/under-construction.png'
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/twitter'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import image from '@/assets/og.png'
const setdata = {
    title: "CodinMage | About"
}
useHead({
    title: computed(() => setdata.title)
})
</script>

<style lang="scss" scoped>
.about{
    margin-top: 100px;
    margin-bottom: 70px;
    display: inline-block;
    justify-content: center;
    max-width: 100%;
    width: 97%;
    h1{
        color: #000;
    }
    .title{
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 20%;
        width: 60%;
        display: inline-flex;
        
        p{
            display: inline-flex;
            justify-content: center;
            color: #000;
            text-align: center;
            padding: 10px 40px 10px 40px;
        }
    }
    .vision{
        background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('@/assets/Rectangle\ 2.png');
        background-size: cover;
        h1{
            font-size: xx-large;
            color: #fff;
            margin-top: 120px;
        }
        p{
            color: #fff;
            padding: 50px 40px 50px 40px;
            text-align: justify;
        }
    }
    .mission{
        background: #030B4E;
        color: #fff;
        
        div{
            padding: 50px 40px 50px 40px;
        }
        h1{
            font-size: xx-large;
            color: #fff;
            margin-top: 150px;
        }
        p{
            color: #fff;
            text-align: justify;
            
        }
        ul{
            li{
                text-align: justify;
                list-style: disc;
            }
        }
    }
    .value{
        div{
            padding: 50px 40px 50px 40px;
        }
        h1{
            font-size: xx-large;
            color: #000;
            margin-top: 160px;
        }
        p{
            color: #000;
            text-align: justify;
            span{
                font-weight: bold;
            }
        }
       
    }
    .team_str{
        margin-top: 100px;
        margin-bottom: 10px;
        h1{
            color: #000;
        }
        p{
            color: #000;
            margin-bottom: 30px;
        }
        
    }
    .team{
        padding: 5px 10px;
        margin: 15px 15px;
        display: inline-flex;
        justify-content: center;
        width: 80%;
        .card{
            display: inline-block;
            justify-content: center;
            margin: 5px;
            padding: 8px 8px;
            border: none;
            img{
                width: 300px;
                border-radius: 20px;
            }
            h1{
                font-size: larger;
                color: #000;
            }
            p{
                color: #000;
                font-size: large;
            }
            .social_media{
                display: inline-flex;
                justify-content: center;
                li{
                    a{
                        
                        
                        svg{
                            margin: 5px;
                            font-size: large;
                            margin-left: 10px;
                            color: #000;
                        }
                        
                    }
                    
                }
            }
        }
    }

}

@media screen and (max-width: 991px) {
   
    .about{
        width: 96%;
        .title{
            width: 95%;
            margin: 0px 10px 0px 10px;
            p{
                text-align: center;
                padding: 10px 10px 10px 10px;
            }
        }
        .vision{
            background:linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('@/assets/Rectangle\ 2.png');
            background-size: cover;
            max-width: 100%;
            h1{
                font-size: medium;
                color: #fff;
                width: 30%;
                margin-left: 0px;
                margin-top: 120px;
            }
            p{
                color: #fff;
                width: 70%;
                padding: 50px 20px 50px 20px;
                font-size: x-small;
                text-align: justify;
            }
        }
        .mission{
            background: #030B4E;
            color: #fff;
            
            max-width: 100%;
            div{
                padding: 50px 20px 50px 20px;
                width: 70%;
            }
            h1{
                font-size: medium;
                width: 30%;
                margin-left: 0px;
                color: #fff;
                margin-top: 150px;
            }
            p{
                color: #fff;
                text-align: justify;
                font-size: x-small;
                
            }
            ul{
                li{
                    text-align: justify;
                    list-style: disc;
                }
            }
        }
        .value{
            max-width: 100%;
            div{
                padding: 50px 20px 50px 20px;
                width: 70%;
            }
            h1{
                font-size: medium;
                width: 30%;
                margin-left: 0px;
                color: #000;
                margin-top: 160px;
            }
            p{
                font-size: x-small;
                color: #000;
                
                text-align: justify;
                span{
                    font-weight: bold;
                }
            }
           
        }
        .team_str{
            margin-top: 100px;
            margin-bottom: 10px;
            h1{
                color: #000;
            }
            p{
                color: #000;
                margin-bottom: 30px;
            }
            
        }
        .team{
            padding: 5px 10px;
            margin: 15px 15px;
            display: inline-flex;
            justify-content: center;
            width: 80%;
            .card{
                display: inline-block;
                justify-content: center;
                margin: 5px;
                padding: 8px 8px;
                border: none;
                img{
                    width: 300px;
                    border-radius: 20px;
                }
                h1{
                    font-size: larger;
                    color: #000;
                }
                p{
                    color: #000;
                    font-size: large;
                }
                .social_media{
                    display: inline-flex;
                    justify-content: center;
                    li{
                        a{
                            
                            
                            svg{
                                margin: 5px;
                                font-size: large;
                                margin-left: 10px;
                                color: #000;
                            }
                            
                        }
                        
                    }
                }
            }
        }
    
    }
}

</style>