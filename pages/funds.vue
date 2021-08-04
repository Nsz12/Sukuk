<template>
    
<div>
    <section class="section about pb-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="">طالب التمويل</h2>
                </div>
                <div class="col-md-12">
                    <h3 style="text-align: center;border: 0;"><vue-typed-js :strings="[' ',
                         'حجم تمويل الشركات الأمريكية عن طريق أدوات الدين يتجاوز ٣ أضعاف تمويلها من البنوك',]" 
                         :typeSpeed="50" :backSpeed="30" :backDelay="700" :loop="false">
                                <span class="typing"></span>
                            </vue-typed-js></h3>
                </div>
                <div class="col-md-12">
                    <div class="text-center mt-5 mb-5">
                        <a href="null" class="btn action-btn"> احصل على تمويل</a>
                    </div>
                </div>
                <div class="col-md-12">

                    <h3>لماذا صكوك؟</h3>

                    <ul class="order-list">
                        <li>
                            إمكانية الحصول على التمويل للشركات المتوسطة والكبيرة عن طريق طرح أدوات الدين والاستثمار فيها، حيث تعتبر منصة صكوك من أوائل الشركات المصرح لها بطرح أدوات الدين والاستثمار فيها
                        </li>
                        <li>كان أصغر حجم طرح في المملكة هو ٢٤٠ مليون ريال، مما يعني أن الشركات المتوسطة والكبيرة لم تتوفر لها خيارات للتمويل من خلال أدوات الدين</li>
                        <li>جميع التعاملات متوافقة مع أحكام الشريعة الإسلامية</li>
                        <li>مصرحة من مختبر التقنية المالية في هيئة السوق المالية لإنشاء منصة لطرح أدوات الدين والاستثمار فيها</li>
                    </ul>

                    <h3> ماذا تقدم صكوك لطالب التمويل؟</h3>

                    <ul class="order-list">
                        <li>تمويل من خلال أدوات الدين بطرح يبدأ من نصف مليون ريال</li>
                        <li>الحصول على التمويل خلال 5 أيام عمل</li>
                        <li>تمويل طويل الأجل بمدة تصل إلى 10 سنوات</li>
                        <li>مواعيد سداد مرنة</li>
                        <li>معدل مرابحة يبدأ من 0.5% شهريًا</li>
                        <li>دراسة ائتمانية للشركة بدون رسوم إضافية</li>
                    </ul>

                </div>

            </div>

        </div>
    </section>
    <section class="section steps">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="heading-title mt-0" data-aos="fade-up">كيف تحصل على التمويل ؟</h2>
                </div>
                <div class="col-md-6" data-aos="fade-left">
                    <img src="@/assets/images/sukuk/icon-2.png">
                </div>
                <div class="col-md-6">
                    <ul class="start">
                        <li data-aos="fade-up" class="d-flex flex-row">
                            <span>1</span>
                            <div class="text-box">
                                <h4 class="">التسجيل في المنصة</h4>
                                <p>التسجيل بكل سهولة من المنصة في دقائق معدودة</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" class="d-flex flex-row">
                            <span>2</span>
                            <div class="text-box">
                                <h4 class="">التحقق من العميل</h4>
                                <p>التحقق من السجل التجاري والموافقة على مشاركة المعلومات الإئتمانية</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" class="d-flex flex-row">
                            <span>3</span>
                            <div class="text-box">
                                <h4 class="">الدراسة الائتمانية</h4>
                                <p>دراسة الشركة ائتمانياً وتحديد درجة المخاطر ونسبة الربح</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" class="d-flex flex-row">
                            <span>4</span>
                            <div class="text-box">
                                <h4 class="">الموافقة النهائية</h4>
                                <p>موافقة شركة صكوك المالية النهائية وتوقيع اتفاقية الطرح</p>
                            </div>
                        </li>
                        <li data-aos="fade-up" class="d-flex flex-row">
                            <span>5</span>
                            <div class="text-box">
                                <h4 class="">طرح الصكوك</h4>
                                <p>فتح باب الاستثمار في صكوك الشركة طالبة التمويل</p>
                            </div>
                        </li>
                    </ul>
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

