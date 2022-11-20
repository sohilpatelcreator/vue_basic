<template>
    <div v-if="message" :class="['alert','alert-dismissible','fade','show','alert-'+type]" role="alert">
        {{message}}
        <button type="button" class="close" @click="this.$emit('resetFlash')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>
<script>
export default {
    props: ['type','message'],
}
</script>