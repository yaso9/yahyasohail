<template>
    <Layout>
        <h1>Blog Posts</h1>
        <PostBrief v-for="idx in 10" :key="idx" />
    </Layout>
</template>

<script>
import PostBrief from '~/components/PostBrief.vue'

export default {
    metaInfo: {
        title: 'Blog Posts'
    },
    components: {
        PostBrief
    }
}
</script>