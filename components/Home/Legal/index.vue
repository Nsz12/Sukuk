<template>
    <div>
        <div>
        <H2Text
        :title="title"
        />
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
    props: [
        'title',
        'text'
    ],
    components: {
        H2Text
    }
}
</script>