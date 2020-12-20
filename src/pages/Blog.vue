<template>
    <Layout>
        <h1>Blog Posts</h1>
        <PostBrief v-for="edge in $page.allPost.edges" :post="edge.node" :key="edge.node.id" />
    </Layout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        path
        title
        date(format: "MMMM DD, YYYY")
        excerpt
      }
    }
  }
}
</page-query>

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