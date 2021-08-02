<template>
    <div>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    </div>
</template>
<script>
export default {
    props: [
        'title',
        'text'
    ]
}
</script>