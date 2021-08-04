<template>
    

<section class="section about pb-5">


        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="">الشروط والاحكام </h2>
                </div>
                <div class="col-md-12">
                    <div class="conditions">
                        <div class="mb-5">
                            <h3>التمهيد:</h3>
                            <Intro />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل الأول: الشروط والأحكام:</h3>
                            <Term1 />
                        </div>

                        <div class="mb-5">                   
                            <h3>الفصل الثاني: المحفظة:</h3>
                           <Term2 />
                        </div> 

                        <div class="mb-5">
                            <h3>الفصل الثالث: المدفوعات المحضورة:</h3>
                            <Term3 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل الرابع: إيداع واستلام الأموال:</h3>
                            <Term4 />
                        </div>

                        <div class="mb-5">    
                            <h3>الفصل الخامس: إرسال الدفعات المالية:</h3>
                            <Term5 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل السادس: الرسوم:</h3>
                            <Term6 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل السابع: مدة الاتفاقية وإنهائها:</h3>
                            <Term7 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل الثامن: الخصوصية وحماية البيانات:</h3>
                            <Term8 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل التاسع: الضمانات:</h3>
                            <Term9 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل العاشر: المسؤولية:</h3>
                           <Term10 />
                        </div>   
                        
                        <div class="mb-5">
                            <h3>الفصل الحادي عشر: التعويضات والشروط الجزائية:</h3>
                            <Term11 />
                        </div>

                        <div class="mb-5">
                            <h3>الفصل الثاني عشر: سياسة تضارب المصالح:</h3>
                           <Term12 />
                        </div>

                        <div class="mb-5"></div>
                            <h3>الفصل الثالث عشر: حماية البيانات:</h3>
                            <Term13 />
                        </div>
                    </div>
                </div>

            </div>

        
    </section>
    
    </template>
<script scoped>
        import Intro from "@/components/partial/term_of_services/introduction.vue"
        import Term1 from "@/components/partial/term_of_services/term_1.vue"
        import Term2 from "@/components/partial/term_of_services/term_2.vue"
        import Term3 from "@/components/partial/term_of_services/term_3.vue"
        import Term4 from "@/components/partial/term_of_services/term_4.vue"
        import Term5 from "@/components/partial/term_of_services/term_5.vue"
        import Term6 from "@/components/partial/term_of_services/term_6.vue"
        import Term7 from "@/components/partial/term_of_services/term_7.vue"
        import Term8 from "@/components/partial/term_of_services/term_8.vue"
        import Term9 from "@/components/partial/term_of_services/term_9.vue"
        import Term10 from "@/components/partial/term_of_services/term_10.vue"
        import Term11 from "@/components/partial/term_of_services/term_11.vue"
        import Term12 from "@/components/partial/term_of_services/term_12.vue"
        import Term13 from "@/components/partial/term_of_services/term_13.vue"
export default {
        components: {
            Intro,
            Term1,
            Term2,
            Term3,
            Term4,
            Term5,
            Term6,
            Term7,
            Term8,
            Term9,
            Term10,
            Term11,
            Term12,
            Term13,
        }
    }
</script>

