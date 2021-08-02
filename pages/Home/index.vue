<template>
  <div>
    <Header />
    <Body />
    <Break />
    <div>
    <H2Text 
    text="أدوات الدين المحلية والعالمية"
    />
    <Square
    title="2.2 تريليون"
    span="دولار"
    text="حجم إصدارات أدوات الدين في السوق الأمريكي في عام 2018"
    />
    <Square
    title="60 مليار"
    span="ريال سعودي"
    text="حجم إصدارات أدوات الدين في السوق السعودي في عام 2020"
    />
    <Square
    title="240 مليون"
    span="ريال سعودي"
    text="أصغر حجم إصدار لأدوات الدين في المملكة العربية السعودية"
    />
    </div>
    <div>
      <div>
        <TwoSides 
        title = "صكوك الإجارة (قريبًا)"
        text = "لتوفير التمويل طويل الأجل لدعم سيولة المشاريع الرأسمالية. مثل: تمويل إنشاء مباني تعليمية، و صحية، وخطوط إنتاج صناعية"
        />
      </div>
      <div>
        <TwoSides 
        title = "صكوك المرابحة"
        text = "لتوفير التمويل قصير الأجل لدعم سيولة المشاريع ورأس المال العامل. مثل: تمويل التعاميد، والمستخلصات، والمشتريات، والرواتب"
        />
      </div>
    </div>
    <section>
      <Legal
      title="الالتزام بالأحكام الشرعية"
      text="
تمتثل شركة صكوك المالية بقواعد وأحكام الشريعة الإسلامية وذلك عن طريق مراقبة اللجنة الشرعية لجميع العمليات والاتفاقيات والإجراءات والسياسات، حيث تتحقق اللجنة الشرعية وتتأكد من كون المنشأة طالبة التمويل وشركة صكوك المالية ملتزمين بالأحكام الشرعية واجبة التنفيذ."
/>
    </section>
    <section>
      <Souq
      title="تصريح هيئة السوق المالية"
      image="null"
      text="أصدر مجلس هيئة السوق المالية قراره بالموافقة على طلب تصريح تجربة التقنية المالية المقدم من شركة صكوك المالية لإنشاء منصة لطرح أدوات الدين والاستثمار فيها."
      />
    </section>
    <Footer
    logo = 'null'
        twitter = 'null'
        linkedin = 'null'
        about= 'null'
        investor= 'null'
        entreprenuer= 'null'
        blog= 'null'
        commonQuestions= 'null'
        legal= 'null'
        rules= 'null'
        creditScore= 'null'
        />

  </div>
</template>

<script scoped>
import Header from "@/components/Header"
import Body from "@/components/Home/Body"
import Break from "@/components/Break"
import H2Text from "@/components/H2-Text"
import Square from "@/components/Home/Square"
import TwoSides from "@/components/Home/TwoSides"
import Legal from "@/components/Home/Legal"
import Souq from "@/components/Home/Souq"
import Footer from "@/components/Footer"
export default {
components: {
  Header,
  Body,
  Break,
  H2Text,
  Square,
  TwoSides,
  Legal,
  Souq,
  Footer
}
}
</script>
