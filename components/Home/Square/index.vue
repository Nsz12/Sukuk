<template>
    <div>
        <div>
            <h1>{{ title }}</h1>
            <span>{{ span }}</span>
            <p>{{ text }}</p>
        </div>
    </div>
</template>
<script>


export default {
    props: [
        'title',
        'span',
        'text'
    ]
}
</script>
