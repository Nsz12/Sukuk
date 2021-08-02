<template>
    <header>
    <Logo 
    logo= 'null'
    />
    
    <Links 
    aboutLink= "null"
    aboutText= "من نحن"
    investorLink= 'null'
    investorText= 'المستثمر'
    entrepenuerLink= 'null'
    entrepenuerText= 'طالب التمويل'
    />

    <LoginButton
    
    loginButtonLink= "null"
    loginButtonText= "تسجيل الدخول"
    
    />
    </header>
    
    
    
</template>

<script>
import Logo from './Logo.vue'
import Links from './Links.vue'
import LoginButton from './LoginButton.vue'


export default {
    
    components: {
        Logo,
        Links,
        LoginButton,
        LoginButton,
    }
}
</script>
