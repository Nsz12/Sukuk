<template>
    <div>
        <img :src="image" alt="finance image">
    </div>
</template>
<script>
export default {
    props: [
        'image',
    ]
}
</script>