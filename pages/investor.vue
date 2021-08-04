<template>
    

<div>
    <section class="section about pb-5" style="
            background-image: @/assets/images/sukuk/pattren.png;
            background-position: bottom left;
            background-repeat: no-repeat;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="heading-title mt-5 mb-4">المستثمر</h2>
                </div>
                <div class="col-md-12">
                    <h3 style="text-align: center;border: 0;"><vue-typed-js :strings="[' ',
                         'فرص استثمارية متنوعة',
                         'يمكنك الاستثمار بدءًا من 1,000 ريال',
                         'أرباح سنوية ونصف سنوية',]" :typeSpeed="50" :backSpeed="30" :backDelay="700" :loop="true">
                                <span class="typing"></span>
                            </vue-typed-js></h3>
                </div>
            </div>
            <div class="col-md-12">
                <div class="text-center m-4">
                    <a href="null" class="btn action-btn"> سجل كمستثمر</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section investor mt-5 mb-5">
        <div class="fluid-container">
            <div class="row">
                <div class="col-md-12 ">
                </div>
                <div class="col-md-6 " data-aos="fade-left">
                    <div class="why-investor" data-aos="fade-up">
                        <img src="@/assets/images/sukuk/logo-white.png">
                    </div>
                </div>
                <div class="col-md-6">
                    <p>استثمر في صكوك الشركات التي تحقق لك أرباحًا مجزية</p>
                    <p>يساعدك الاستثمار في الصكوك على المحافظة على رأس المال وتحقيق عوائد إضافية</p>
                    <h3 class="">لماذا تستثمر في صكوك؟</h3>
                    <div class="p-2">
                        <ul>
                            <li>ادخار أموالك في استثمار مدر للأرباح</li>
                            <li>استثمار طويل الأجل</li>
                            <li>أرباح دورية ثابتة</li>
                            <li>تحقيق التنويع في استثماراتك</li>
                            <li>متوافق مع أحكام الشريعة الإسلامية</li>
                        </ul>
                        <h3 class="mt-4"> ماذا تقدم لك صكوك؟</h3>
                        <p>نقوم بدراسة الشركة الراغبة بطرح الصكوك و تقييمها وطرحها للاستثمار</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section investor mt-5 mb-0 bg-light">
        <div class="fluid-container">
            <div class="row">
                <div class="col-md-12 ">
                    <h2 class="heading-title mb-2">الاستثمار في أدوات الدين</h2>
                    <div class="text-center p-3">
                        <p> خلال عام 2018 بلغ حجم الاستثمار في أدوات الدين في أمريكا 2.2 ترليون دولار مقارنة بـ220 مليار دولار في الأسهم</p>
                    </div>
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

