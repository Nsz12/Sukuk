<template>
    

<!-- <div> -->

<!-- <div class="menu-mobile d-lg-done d-block">

    <div class="title">
        <div class="split-container">
            <a href="/"> <img src="@/asset/svg/logo-color-sukuk.svg" alt="صكوك المالية" style="width:100px"
                title=""> </a>
                <span class="menu-btn-close mr-4">
                    <i class="text-white fal fa-2x fa-times"></i>
                </span>
        </div>
       
    </div>
    <div class="mobilemenu">
        <ul>

            
                <li><a href="{{route('user.dashboard')}}"> صفحتي الشخصية</a></li>
            
                <li><a href="{{route('public_pages.investor')}}"> {{__('header.investor')}} </a></li>
                <li><a href="{{route('public_pages.funds')}}"> {{__('header.funds')}} </a></li>
            
           
            <li><a href="null"> المستثمر </a></li>
            <li><a href="null"> طالب التمويل </a></li> -->
            <!-- <li><a onclick="window.fcWidget.open();window.fcWidget.show();"
                   style="color:#fff">تواصل معنا</a></li> -->
            
                <!-- <li><a id="logout_user" href="{{ route('logout') }}" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();"> {{ __('header.logout') }} </a></li>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                   
                </form> -->
            
                <!-- <li><a href="null"> تسجيل الدخول </a></li> -->
            


        <!-- </ul>
    </div>

</div>

<div class="mobile-overlay"></div>  -->
<FixedHeader :threshold="82">
<header id="header">
    <div class="container-fluid clearfix">
        <div class="top-header">
            <div class="logo ">
                <NuxtLink to="/"> <img src="@/assets/images/svg/logo-color-sukuk.svg" width="100"
                                  height="40" alt=" " title=" "> </NuxtLink>
            </div>

            
            <div>
  <b-nav>
    <b-nav-item><NuxtLink to="/about"> من
                            نحن </NuxtLink></b-nav-item>
    <b-nav-item><NuxtLink to="/investor">
                            المستثمر </NuxtLink></b-nav-item>
    <b-nav-item><NuxtLink to="/funds"> طالب
                            التمويل </NuxtLink></b-nav-item>
    
  </b-nav>
</div>

            <div class="">

                    <a href="null" class="btn btn-login">تسجيل الدخول
                    </a>
            </div>
        </div>
    </div>
</header>
 </FixedHeader>
</template>
<script>
import FixedHeader from 'vue-fixed-header'
 


export default {
    // methods: {
    //     handleSCroll (event) {
    //     let header = document.querySelector("#header");
    //     if (window.scrollY > 100) {
    //     console.log(window.scrollY);
    //     header.classList.add(".menu-fixed");          
    //     }
    //   }
    // },
    //  created () {
    //   window.addEventListener('scroll', this.handleSCroll);

    // },
    // destroyed () {
    //   window.removeEventListener('scroll', this.handleSCroll);
    // } 
    components: {
    FixedHeader
  }
}
</script>


<style>
#header.vue-fixed-header--isFixed {
  background: white;
    width: 100%;
    top: 0px;
    right: 0px;
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;
    position: fixed !important;
    padding: 5px 30px !important;
}
</style>