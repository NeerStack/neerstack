<template>
    <main>
    <div class="banner home-banner d-flex align-items-center">
        <div class="container">
            <div class="row_reverse row no-gutters align-items-center">
                <div class="desc col-lg-6  text-lg-left">
                    <h1>Outsource Web Development Gig With<br> Professional Software Engineers/Developers.</h1>
                    <h3 class="section-title">Here at CodinMage</h3>
                    <p class="larger-txt ">{{wordarr[wordstr]}}</p>
                    <div class="ini_project">
                         <a href="#our-projects" class="custom-btn secondary-btn">Check our Projects</a>
                    </div>
                   

                </div>
                <!-- End of .col-lg-5 -->

                <div class="col-lg-6">
                    <div class="img-container text-center text-lg-right">
                        <img :src="homeInterface" alt="Home banner image" class="img-fluid">
                    </div>
                    <!-- End of .img-container -->
                </div>

                <div class="final_project">
                    <a href="#our-projects" class="custom-btn secondary-btn">Check our Projects</a>
                </div>
                <!-- End of .col-lg-7 -->
            </div>
            <!-- End of .row -->
        </div>
        <!-- End of .container -->
    </div>
    <!-- End of .banner -->

    <!-- achievements starts -->
    <div class="achievements section-gap theme-bg-d achievement-extra-padding-bottom">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="counter-block d-flex align-items-center justify-content-center">
                        <div class="icon-container">
                            <img src="@/assets/achievements/counter/counter-icon-1.png" alt="Happy Clients">
                        </div>
                        <!-- End of .icon-container -->

                        <div class="counter-wrapper">
                            <div class="number">
                                <span>{{client_count}}</span>+
                            </div>
                            <!-- End of .number -->
                            Happy <br>Clients
                        </div>
                        <!-- End of .counter-wrapper -->
                    </div>
                    <!-- End of .counter-block -->
                </div>
                <!-- End of .col-4 -->
                <div class="col-4">
                    <div class="counter-block d-flex align-items-center justify-content-center">
                        <div class="icon-container">
                            <img src="@/assets/achievements/counter/counter-icon-2.png" alt="Running Projects">
                        </div>
                        <!-- End of .icon-container -->

                        <div class="counter-wrapper">
                            <div class="number">
                                <span  >{{project_run}}</span>+
                            </div>
                            <!-- End of .number -->
                            Running <br>Projects
                        </div>
                        <!-- End of .counter-wrapper -->
                    </div>
                    <!-- End of .counter-block -->
                </div>
                <div class="col-4">
                    <div class="counter-block d-flex align-items-center justify-content-center">
                        <div class="icon-container">
                            <img src="@/assets/achievements/counter/counter-icon-3.png" alt="Project Completed">
                        </div>
                        <!-- End of .icon-container -->

                        <div class="counter-wrapper">
                            <div class="number">
                                <span >{{project_com}}</span>+
                            </div>
                            <!-- End of .number -->
                            Project <br>Completed
                        </div>
                        <!-- End of .counter-wrapper -->
                    </div>
                    <!-- End of .counter-block -->
                </div>
            </div>
            <!-- End of .row -->
        </div>
        <!-- End of .container -->
    </div>
    <!-- End of .achievements -->

    <section class="services light-grey-bg" id="cynic-services" data-scroll-offset="165">
        <div class="floating-service-wrapper section-gap">
            <div class="container">
                <h2 class="section-title text-center">Services We Provide</h2>
                <!--p class="larger-txt text-center">we offer a wide range of services from our list of professionals.</p-->
                <div class="grid-wrapper">
                    <div class="row justify-center">

                        <div class="col-xl-4 col-lg-6">
                            <a href="" class="service-block text-center">
                                <img class="inline-flex justify-center" src="@/assets/services/service-icon-1.png" alt="UI/UX Design">
                                <h4>UI/UX Design</h4>
                                <p>We will design accurately based on client's project description.</p>
                            </a>
                            <!-- End of .service-block -->
                        </div>
                        <!-- End of .col-lg-4 -->

                        <div class="col-xl-4 col-lg-6">
                            <a href="" class="service-block text-center">
                                <img class="inline-flex justify-center" src="@/assets/services/service-icon-2.png" alt="Web Development">
                                <h4>Web Development</h4>
                                <p>We will bring the UI design to accessible Web page.</p>
                            </a>
                            <!-- End of .service-block -->
                        </div>
                        <!-- End of .col-lg-4 -->

                        <div class="col-xl-4 col-lg-6">
                            <a href="" class="service-block text-center">
                                <img class="inline-flex justify-center" src="@/assets/services/service-icon-3.png" alt="Mobile App Development">
                                <h4>Mobile App Development</h4>
                                <p>From simple Content Management System to complex eCommerce developer, we cover it all.</p>
                            </a>
                            <!-- End of .service-block -->
                        </div>
                        <!-- End of .col-lg-4 -->

                        <div class="col-xl-4 col-lg-6">
                            <a href="" class="service-block text-center">
                                <img class="inline-flex justify-center" src="@/assets/services/Api.png" alt="API Development">
                                <h4>API Development</h4>
                                <p>We will create scalable and efficient API for client's project.</p>
                            </a>
                            <!-- End of .service-block -->
                        </div>
                        <!-- End of .col-lg-4 -->

                        <div class="col-xl-4 col-lg-6">
                            <a href="" class="service-block text-center">
                                <img class="inline-flex justify-center" src="@/assets/services/software.png" alt="Software Testing">
                                <h4>Software Testing</h4>
                                <p>We will test every angle of the website to suit the client's project.</p>
                            </a>
                            <!-- End of .service-block -->
                        </div>
                        <!-- End of .col-lg-4 -->

                        <div class="col-xl-4 col-lg-6">
                            <a href="#" class="service-block text-center">
                                <img class="inline-flex justify-center" src="@/assets/services/product-chain.png" alt="Product Management">
                                <h4>Product Management</h4>
                                <p>We will take full responsiblity of client's product/project.</p>
                            </a>
                            <!-- End of .service-block -->
                        </div>
                        <!-- End of .col-lg-4 -->

                    </div>
                    <!-- End of .row -->
                </div>
                <!-- End of .grid-wrapper -->
            </div>
            <!-- End of .container -->
        </div>
        <!-- End of .floating-service-wrapper -->
    </section>

    <!-- our features starts -->
    <section class="features light-grey-bg" id="cynic-about" data-scroll-offset="165">
        <div class="container">


            <div class="features-grid text-left">
                <div class="row align-items-center">
                    <div class="col-lg-6 order-lg-2 offset-lg-1 text-center text-lg-right">
                        <div class="img-container">
                            <img src="@/assets/features/features-img-1.png" alt="why choose us" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5">
                        <div class="features-content">
                            <h2 class="section-title">Why choose us?</h2>
                            <p>This is where we brag about everything we can do or have done but more importantly let them know we are proffesionals and they are in good hands.</p>





                            <a href="" class="hyperlink">Learn More About Us</a>

                        </div>
                        <!-- End of .features-content -->
                    </div>
                    <!-- End of .col-lg-6 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .features-grid -->

            <div class="features-grid text-left">
                <div class="row align-items-center">
                    <div class="col-lg-6 text-center text-lg-left">
                        <div class="img-container">
                            <img src="@/assets/features/features-img-2.png" alt="why choose us" class="img-fluid">

                        </div>
                        <!-- End of .img-container -->
                    </div>
                    <!-- End of .col-lg-6 -->

                    <div class="col-lg-5 offset-lg-1">
                        <div class="features-content">
                            <h2 class="section-title">Better Strategy With Quality Business.</h2>
                            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>





                            <a href="" class="hyperlink">Learn More About Us</a>

                        </div>
                        <!-- End of .features-content -->
                    </div>
                    <!-- End of .col-lg-6 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .features-grid -->


        </div>
        <!-- End of .container -->
    </section>
    <!-- End of .features -->

    <!-- Projects starts -->
    <section class="projects section-gap grey-bg" id="our-projects" data-scroll-offset="75">
        <div class="container">
            <h2 class="section-title text-center">Portfolio section</h2>
            <p class="larger-txt text-center">(we can all add our best individual gigs here)</p>


            <!-- End of .project-showcase -->
        </div>
        <!-- End of .container -->
    </section>
    <!-- End of .projects -->

    <section class="team section-gap light-grey-bg" id="cynic-team" data-scroll-offset="75" data-scroll-offset-mobile="75">
        <div class="container">
            <h2 class="section-title text-center">Teamwork Makes the Dream Work</h2>
            <p class="larger-txt text-center">Take a moment to meet the Mages working to satisfy your needs</p>

            <div class="grid-wrapper">
                <div class="row">



                    <div class="col-12 text-center">
                        <a href="" class="custom-btn secondary-btn">SEE ALL TEAM MEMBERS</a>
                    </div>

                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .grid-wrapper -->
        </div>
        <!-- End of .container -->
    </section>
    <!-- End of .team -->

    <section class="newsletter section-gap theme-bg-d ">
        <div class="container">
            <h2 class="text-center">Sign up for our Mageletter to stay up to
                <br>date with tech news!</h2>

            <form @submit.prevent  class="newsletter-form">
                <div class="row justify-content-between">
                    <div class="col-md">
                        <input v-model="News.fullname" type="text" name="fname" placeholder="Firstname Lastname" required>
                    </div>
                    <div class="col-md">
                        <input v-model="News.email" type="text" name="email" placeholder="Email" required>
                    </div>

                    <div class="col-md-auto">
                        <a @click="sendEmail" class="custom-btn secondary-btn">SUBSCRIBE</a>
                    </div>
                </div>
                <!-- End of .row -->
            </form>
            <!-- End of .newsletter-form -->

            <div class="social-icons-wrapper d-flex justify-content-center">
                <p>Follow us:</p>
                <ul class="social-icons">
                    <li>
                        <a href="http://www.facebook.com/" target="_blank" rel="noopener">
                            <fa6-brands-facebook-f/>
                        </a>
                    </li>
                    <li>
                        <a href="http://twitter.com/CodinMage" target="_blank" rel="noopener">
                            <fa6-brands-twitter/>
                        </a>
                    </li>

                    <li>
                        <a href="http://instagram.com" target="_blank" rel="noopener">
                            <!-- <i class="fab fa-google-plus-g"></i> -->
                            <fa6-brands-instagram/>
                        </a>
                    </li>
                </ul>
                <!-- End of .social-icons -->
            </div>
            <!-- End of .social-icons-wrapper -->
        </div>
        <!-- End of .container -->
    </section>

    <!-- customer-reviews starts -->
    <section class="customer-reviews section-gap grey-bg">
        <div class="container">
            <h2 class="section-title text-center">Feedback from our clients</h2>
            <p class="larger-txt text-center">something good to build the trust of prospective clients should be here.</p>
            <div class="grid-wrapper">
                <div class="row justify-content-center justify-center">
                    <div class="col-lg-4 col-md-6">
                        <div class=" img-card review-card text-center white-bg">
                            <div class="media align-items-center">
                                <img class="inline-flex justify-center img-fluid " src="@/assets/review/reviewer-1.png" alt="reviewer image">
                                <div class="media-body">
                                    <h5>007</h5>
                                    <p>CEO at
                                        <a href="#">company 1</a>
                                    </p>
                                </div>
                            </div>
                            <!-- End of .media -->
                            <p>“I like CodinMage.” </p>
                        </div>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->

                    <div class="col-lg-4 col-md-6">
                        <div class="img-card review-card text-center white-bg">
                            <div class="media align-items-center">
                                <img class="inline-flex justify-center img-fluid " src="@/assets/review/reviewer-2.png" alt="reviewer image">
                                <div class="media-body">
                                    <h5>008</h5>
                                    <p>CTO at
                                        <a href="#">Company 2</a>
                                    </p>
                                </div>
                            </div>
                            <!-- End of .media -->
                            <p>“I love CodinMage” </p>
                        </div>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->

                    <div class="col-lg-4 col-md-6">
                        <div class="img-card review-card text-center white-bg">
                            <div class="media align-items-center">
                                <img class="inline-flex justify-center img-fluid " src="@/assets/review/reviewer-3.png" alt="reviewer image">
                                <div class="media-body">
                                    <h5>009</h5>
                                    <p>COO at
                                        <a href="#">Company 3</a>
                                    </p>
                                </div>
                            </div>
                            <!-- End of .media -->
                            <p>“CodinMages are very professional.” </p>
                        </div>
                        <!-- End of .img-card -->
                    </div>
                    <!-- End of .col-lg-4 -->
                </div>
                <!-- End of .row -->
            </div>
            <!-- End of .grid-wrapper -->
        </div>
        <!-- End of .container -->
    </section>
    <!-- End of .customer-reviews -->

    <!-- Team-modal starts -->
    <div class="modal fade team-modal" id="team-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <!-- <i class="fas fa-times"></i> -->
                    <fa6-solid-xmark/>
                </button>
                    <!-- End of .close -->
                </div>
                <!-- End of .modal-header -->

                <div class="modal-body text-center">
                    <img src="@/assets/team/team-modal-img.png" alt="team modal image" class="img-fluid modal-feat-img">
                    <div class="modal-title">
                        <h4>Steve Johnson
                            <span>Chief Exicutive Officer</span>
                        </h4>
                    </div>
                    <!-- End of .modal-title -->
                    <p>To be fair, in certain contexts, your professional bio does need to be more formal, like Mr. Erickson's up there. But in many cases, writing a bio that's readable even conversational is actually a really good thing. But once created,
                        this bio should represent who you are in the eyes.</p>

                    <ul class="social-icons">
                        <li>
                            <a href="http://www.behance.net/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-behance"></i> -->
                                <fa6-brands-behance/>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-twitter"></i> -->
                                <fa6-brands-twitter/>
                            </a>
                        </li>
                        <li>
                            <a href="http://instagram.com" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-google-plus-g"></i> -->
                                <fa6-brands-instagram/>
                            </a>
                        </li>
                        <li>
                            <a href="http://dribbble.com/" target="_blank" rel="noopener">
                                <!-- <i class="fab fa-dribbble"></i> -->
                                <fa6-brands-dribbble/>
                            </a>
                        </li>
                    </ul>
                    <!-- End of .social-icons -->
                </div>
                <!-- End of .modal-body -->
            </div>
            <!-- End of .modal-content -->
        </div>
        <!-- End of .modal-dialog -->
    </div>
    <!-- End of .team-modal -->

    <!-- Product Modal Starts -->
    <div class="modal fade full-width-modal product-modal" id="product-modal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <!-- <i class="fas fa-times"></i> -->
                    <fa6-solid-xmark/>
                </button>
                    <!-- End of .close -->
                </div>
                <!-- End of .modal-header -->

                <div class="modal-body">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                            <div class="modal-img text-center">
                                <img src="@/assets/products/portfolio-modal.png" alt="product-modal" class="img-fluid">
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="modal-body__inner-content">
                                <h4>
                                    <span>Chief Exicutive Officer</span> Creative Web Design
                                </h4>
                                <p>In the early years of the commercial web, we were all Web Designers. Digital interactions, at that stage, were not incredibly sophisticated: most websites were structured as a set of individual pages connected to each other
                                    via buttons and links.</p>

                                <p>In more complex websites and information-heavy systems, the web designer would pair with an Information Architect to make sure content was organized in a way that made for that.</p>
                                <NuxtLink to="/about" class="hyperlink">Launch Website</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End of .modal-body -->
            </div>
            <!-- End of .modal-content -->
        </div>
        <!-- End of .modal-dialog -->
    </div>
    <!-- End of .portfolio-modal -->

    <!-- <div class="home">
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
    </div> -->
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
import Fa6BrandsFacebookF from '~icons/fa6-brands/facebook-f'
import Fa6BrandsTwitter from '~icons/fa6-brands/twitter'
import Fa6SolidXmark from '~icons/fa6-solid/xmark'
import Fa6BrandsBehance from '~icons/fa6-brands/behance'
import Fa6BrandsDribbble from '~icons/fa6-brands/dribbble'
import Fa6BrandsInstagram from '~icons/fa6-brands/instagram'
import Fa6BrandsYoutube from '~icons/fa6-brands/youtube'
import { setNews } from '@/store/email'
import Swal from 'sweetalert2'

const News = setNews();

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
const client_count = ref(0);
const project_run = ref(0);
const project_com = ref(0);


    var client = setInterval(()=>{
        client_work()
    }, 50)
    var project1 =  setInterval(()=>{
    project1_work()
    }, 50)
    var project2 = setInterval(()=>{
        project2_work()
    }, 50)

    

const client_work = () =>{
    client_count.value++
    if(client_count.value === 20){
        clearInterval(client)
        client_count.value = 20
    }
}

const project1_work = () =>{
    project_run.value++
    if(project_run.value === 5){
        clearInterval(project1)
        project_run.value = 5
    }
}
const project2_work = () =>{
    project_com.value++
    if(project_com.value === 50){
        clearInterval(project2)
        project_com.value = 50
    }
}

const sendEmail = () => {
    News.news()
    .then(() =>{
        if(News.status){
            Swal.fire('Done', News.message, 'success')
        }else{
            Swal.fire('Oops..', News.error, 'error')
        }
        if(News.error){
            Swal.fire('Oops..', News.error, 'error')
        }
    })
}



</script>
<!-- <style lang="scss" scoped>

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

</style> -->
