<template>
  <div>

    <section class="section hero " id="sec1">

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="hero-image" data-aos="fade-up">
                        <img src="@/assets/images/img-vector.png">
                    </div>
                </div>
                <div class="col-md-6">

                    <div class="hero-text" data-aos="fade-up">
                        <h2> التوسع في مشاريعك أصبح أكثر سهولة!</h2>
                        <p>
                            <vue-typed-js :strings="[' ',
                        'مرونة في اشتراطات التمويل',
                        'تكاليف تمويلية أقل']" :typeSpeed="50" :backSpeed="30" :backDelay="700" :loop="true">
                                <span class="typing"></span>
                            </vue-typed-js>

                        </p>
                        <div class="hero-button text-center mt-5">
                            <a href="null" class="btn action-btn mx-2"> احصل على
                                تمويل</a>

                            <a href="null" class="btn submit-btn mx-2"> سجل
                                كمستثمر</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="section promo" data-aos="fade-up">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 style="color: white;">

                    </h4>
                </div>
            </div>
        </div>
    </section>


    <section class="section services" id="sec2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="heading-title" data-aos="fade-up">أدوات الدين المحلية والعالمية</h2>
                </div>
                <div class="col-sm-4 col-12 ">
                    <div class="box text-center" data-aos="fade-up">
                        
                        <h1> 240 مليون </h1><span>ريال سعودي</span>
                        <p>أصغر حجم إصدار لأدوات الدين في المملكة العربية السعودية</p>
                    </div>
                </div>
                <div class="col-sm-4 col-12 ">
                    <div class="box text-center" data-aos="fade-up">
                       
                        <h1> 60 مليار </h1><span>ريال سعودي</span>
                        <p>حجم إصدارات أدوات الدين في السوق السعودي في عام 2020</p>
                    </div>
                </div>
                <div class="col-sm-4 col-12 ">
                    <div class="box text-center" data-aos="fade-up">
                        
                        <h1> 2.2 تريليون </h1><span>دولار</span>
                        <p>حجم إصدارات أدوات الدين في السوق الأمريكي في عام 2018</p>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <section class="section abouthome pb-5 pt-5 ">

        <div class="fluid-container">
            <div class="row">
                <div class="col-md-6 p-0">
                    <div class="div-1 " data-aos="fade-left">
                        <h3 class="pb-2 font-weight-bold">صكوك المرابحة </h3>
                        <p>لتوفير التمويل قصير الأجل لدعم سيولة المشاريع ورأس المال العامل. مثل: تمويل التعاميد،
                           والمستخلصات، والمشتريات، والرواتب</p>
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <div class="div-2" data-aos="fade-right">
                        <h3 class="pb-2 font-weight-bold">صكوك الإجارة <small>(قريبًا)</small></h3>
                        <p>لتوفير التمويل طويل الأجل لدعم سيولة المشاريع الرأسمالية. مثل: تمويل إنشاء مباني تعليمية، و
                            صحية، وخطوط إنتاج صناعية</p>
                    </div>
                </div>
            </div>


            <!-- Modal 1 -->
            <div class="modal fade" id="sukuk1" tabindex="-1" role="dialog" aria-labelledby="sukuk1Label"
                 aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="sukuk1Label">صكوك المرابحة</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span><i class="far fa-times"></i></span>
                            </button>
                        </div>
                        <div class="modal-body">

                        </div>

                    </div>
                </div>
            </div>


            <!-- Modal 2 -->
            <div class="modal fade" id="sukuk2" tabindex="-1" role="dialog" aria-labelledby="sukuk2Label"
                 aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="sukuk2Label">صكوك الإجارة</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span><i class="far fa-times"></i></span>
                            </button>
                        </div>
                        <div class="modal-body">

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="section services" id="sec2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="heading-title" data-aos="fade-up">الالتزام بالأحكام الشرعية</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-6 col-12 text-center">
                    <div class="text-center" data-aos="fade-up">
                        <p class="text-justify">
                            تمتثل شركة صكوك المالية بقواعد وأحكام الشريعة الإسلامية وذلك عن طريق مراقبة اللجنة الشرعية
                            لجميع العمليات والاتفاقيات والإجراءات والسياسات، حيث تتحقق اللجنة
                            الشرعية وتتأكد من كون المنشأة طالبة التمويل وشركة صكوك المالية ملتزمين بالأحكام الشرعية
                            واجبة التنفيذ.
                            <a href="null">للمزيد</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section parteners py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <h2 class="heading-title m-0" data-aos="fade-up"> تصريح هيئة السوق المالية
                    </h2>
                </div>

                <!-- <div class="col-md-4 col-8">
                   
                </div> -->

                <div class="col-md-6 col-12 mx-auto">
                    <div class="parteners-logo text-center">
                        <img class="img-fluid mx-auto" src="@/assets/images/563.png" width="320">
                    </div>
                    <p class="text-justify mt-4">أصدر مجلس هيئة السوق المالية قراره بالموافقة على طلب تصريح تجربة
                        التقنية المالية المقدم من شركة صكوك المالية لإنشاء منصة لطرح أدوات الدين والاستثمار فيها. <a
                                target="_blank" href="https://cma.org.sa/Market/NEWS/Pages/CMA_N_2807.aspx">للمزيد</a>
                    </p>
                </div>

            </div>
        </div>

    </section>
</div>
</template>

    <script>
    import aosMixin from '~/mixins/aos'
export default {
  name: 'PageIndex',
  mixins: [aosMixin]
}

       
    </script>

