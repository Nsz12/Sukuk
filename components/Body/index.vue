<template>
    <section>
        <div>
            <LeftColumn 
            title="التوسع في مشاريعك أصبح أكثر سهولة!"
            preview="مرونة في اشتراطات التمويل"
            registerInvestor="null"
            registerInvestorText="سجل كمستثمر"
            regstierEntrepreneur="null"
            registerEntrpreneurText="احصل على تمويل"
            />
            <RightColumn 
            image="null"
            />
        </div>
    </section>
</template>
<script lang="ts">
import LeftColumn from './LeftColumn.vue'
import RightColumn from './RightColumn.vue'

export default {
    components: {
        LeftColumn,
        RightColumn
    }
}
</script>
