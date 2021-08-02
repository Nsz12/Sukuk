<template>
    <div>
    <ul>
        <li><a :href="aboutLink">{{ aboutText }}</a></li>
        <li><a :href="investorLink">{{ investorText }}</a></li>
        <li><a :href="entrepenuerLink">{{ entrepenuerText }}</a></li>
    </ul>
    </div>
</template>
<script>


export default {
    props: [
        'aboutLink',
        'aboutText',
        'investorLink',
        'investorText',
        'entrepenuerLink',
        'entrepenuerText'
    ]
}
</script>
