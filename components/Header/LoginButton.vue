<template>
<div>
    <a :href="loginButtonLink">{{ loginButtonText }}</a>
    </div>
</template>

<script>


export default {
    props: [
        'loginButtonLink',
        'loginButtonText'
    ]
}
</script>
