<template>
    <div class="footer dark:bg-slate-900 text-center text-white">
        <footer>
           <div class=" box flex justify-center">
            <div class="flex justify-between max-w-lg mb-9 mt-10 space-x-10">
                <div>
                    twitter
                </div>

                <div>
                    linkedin
                </div>

                <div>
                    discord
                </div>
            </div>
        </div> 
        </footer> 
    </div> 
</template>
<style scoped>
    .dark .footer{
        border-top: 1px solid #ee2528;
    }
    .footer{
       
        margin-top: 200px;
        margin-left: 0;
        margin-right: 0;
        display: inline-flex;
        justify-content: center;
        position: relative;
        bottom: 0;
        width: 100%;
        max-width: 100%;
    }
    .footer footer{
        display: flex;
        justify-content: center;
        clear: both;
        background: #000;
        color: white;
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 9rem;
    }
    .footer div.box{
        bottom: 0;
        left: 0;
        position: relative;
    }
</style>