<script>
import MainLayout from './MainLayout.vue'
import BlankLayout from './BlankLayout.vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
    name: "AppLayout",
    setup() {
        const route = useRoute();
        watch(() => route.meta, async (meta) => {
                console.log(meta.layout);
        }, { immediate: true });
        return {layout:meta.layout};
    },
    components: { MainLayout }
}
</script>
<template>
  <div>
    <MainLayout>
        <slot />
    </MainLayout>
  </div>
</template>
