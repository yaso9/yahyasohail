<template>
    <Layout>
        <h1>Blog Posts</h1>
        <PostBrief v-for="post in $page.allPost.edges.map(post => post.node)" :post="post" :key="post.id" />
    </Layout>
</template>

<page-query>
query {
  allPost {
    edges {
      node {
        id
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