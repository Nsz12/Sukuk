<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ preview }}</p>
        <div>
            <a :href="regstierEntrepreneur">{{ registerEntrpreneurText }}</a>
            <a :href="registerInvestor">{{ registerInvestorText }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title',
        'preview',
        'regstierEntrepreneur',
        'registerEntrpreneurText',
        'registerInvestor',
        'registerInvestorText'
    ]
}
</script>