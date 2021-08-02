<template>
    <div>
        <div>
        <H2Text
        :title="title"
        />
        </div>
        <div>
            <img :src="image" alt="souq image">
        </div>
        <div>
            <p>{{ text }}</p>
            <a href="null">للمزيد</a>
        </div>
    </div>
</template>
<script>
import H2Text from "@/components/H2-Text"
export default {
    components: {
        H2Text
    },
    props: [
        'title',
        'image',
        'text'
    ]
}
</script>