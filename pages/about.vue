<template>
    <main>
       <div class="about">
            <div class="title">
                <h1> About Us</h1>
                <p>CodinMage is a Digital Agency Company that Design Website for Clients All Over the World Using Latest Technologies.Our team of experts is highly experienced in their respective fields. We offer services like Web Development, Graphic Designing, SEO Services, SMO Services, Content Writing etc.
                </p>
            </div>
            <div class="vision">
                <h1>Our Vision Statement</h1>
                <p>We believe in providing the best products and services to our clients. We strive to deliver high-quality results, while exceeding expectations. To us, success means being able to exceed customer's expectations. We encourage innovation and creativity to achieve success. We value integrity, professionalism, hard work, loyalty, respect, and teamwork. When we do well, we do right. We welcome challenges.</p>
            </div>
            <div class="mission">
                <h1>Mission Statement</h1>
                <p>Our mission is to help our customers succeed through web design and development. We work closely together to understand their business goals, processes, and challenges. In order to achieve these goals, we focus on meeting the following objectives:
                    <ul>
                        <li>
                            Deliver quality web solutions 
                        </li>
                        <li>
                            Provide timely service
                        </li>
                        <li>
                            Ensure that your project meets its deadlines
                        </li>
                        <li>
                            Keep costs down
                        </li>
                        <li>
                            Increase sales
                        </li>
                    </ul>
                    </p>
            </div>
            <div class="value">
                <h1>Value</h1>
                <p>We have several values that guide our behavior and motivate us to keep striving to be the best. These values are:
                    <ul>
                        <li>
                            <p><h4> Passionate </h4>Passionate people are driven by their interests and talents. They take pride in what they do and enjoy the journey.</p>
                   
                        </li>
                        <li>
                            <p><h4>Dedicated</h4>Dedicated people put 100% of their effort into everything they do. They make decisions based upon facts rather than emotions.</p> 
                        </li>
                        <li>
                            <p><h4>
                                Creative
                            </h4>Creative people think outside the box to find innovative solutions to problems.</p>  
                        </li>
                    </ul>
                    
                    </p>
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
    margin-bottom: 70px;
    display: inline-block;
    justify-content: center;
    width: 60%;
    .title{
        margin-top: 150px;
        margin-bottom: 150px;
        h1{
            color: #000;
        }
        p{
            color: #000;
            text-align: center;
            padding: 10px 40px 10px 40px;
            
        }
        ul{
            padding-bottom: 0px;
            h3{
                text-align: left;
                color: #000;
                margin-left: 20px;
            }
            li{
                text-align: justify;
                padding-left: 25px;
            }
        }
    }
    .vision{
        margin-top: 150px;
        margin-bottom: 150px;
        
        
        h1{
            color: #000;
        }
        p{
            color: #000;
            padding: 10px 40px 10px 40px;
            text-align: center;
        }
    }
    .mission{
        margin-top: 150px;
        margin-bottom: 150px;
        
        
        h1{
            color: #000;
        }
        p{
            color: #000;
            padding: 10px 40px 10px 40px;
            text-align: center;
        }
        ul{
            li{
                text-align: justify;
                padding-left: 45px;
            }
        }
    }
    .value{
        margin-top: 150px;
        margin-bottom: 150px;
        
        
        h1{
            color: #000;
        }
        p{
            color: #000;
            padding: 10px 40px 10px 40px;
            text-align: center;
        }
        ul{
            li{
                text-align: justify;
                padding-left: 45px;
                padding-right: 40px;
                p{
                    color: #000;
                    h4{
                        color: #000;
                    }
                }
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
        width: 90%;
        .title{
            
            
            p{
                
                text-align: center;
                
                
            }
            
        }
        .vision{
            
            p{
               
                text-align: center;
            }
        }
        .mission{
            
            p{
                
                text-align: center;
            }
           
        }
        .value{
           
            p{
                
                text-align: center;
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
            
            .card{
                
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
                                font-size: medium;
                                
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