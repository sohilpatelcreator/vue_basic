<template>
    <alert-message-widget :type="type" :message="message"/>
</template>
<script>
import AlertMessageWidget from './AlertMessageWidget.vue'
import {useCommonStore} from '../../stores/commonStore';

export default {
    components:{AlertMessageWidget},
    setup() {
        const commonStore=useCommonStore();
        return {
            type:commonStore.flashMessage.type,
            message:commonStore.flashMessage.message,
        }
    },
}
</script>