<template>
    <Layout>
        <h1 v-html="$page.post.title"></h1>
        <div id="post-date">{{ $page.post.date }}</div>
        <g-image id="post-image" :src="$page.post.featuredImage" />
        <div id="post-body" v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    path
    title
    date(format: "MMMM DD, YYYY")
    featuredImage
    excerpt
    content
  }

  metadata {
    siteUrl
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                // Google
                { name: 'description', content: this.$page.post.excerpt },

                // Twitter
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: this.$page.post.title },
                { name: 'twitter:description', content: this.$page.post.excerpt },
                { name: 'twitter:image', content: this.$page.metadata.siteUrl + this.$page.post.featuredImage.src },

                // Facebook
                { property: 'og:url', content: this.$page.metadata.siteUrl + this.$page.post.path },
                { property: 'og:type', content: 'article' },
                { property: 'og:title', content: this.$page.post.title },
                { property: 'og:description', content: this.$page.post.excerpt },
                { property: 'og:image', content: this.$page.metadata.siteUrl + this.$page.post.featuredImage.src }
            ]
        }
    }
}
</script>

<style>
    #post-date {
        color: #11CDE2;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 300;
        margin-top: -20px;
        margin-bottom: 20px;
    }

    #post-image {
        width: 100%;
        margin-bottom: 20px;
    }

    #post-body {
        margin-bottom: 400px;
    }

    #post-body * {
        margin-bottom: 10px;
        line-height: 135%;
    }

    #post-body ol, #post-body ul {
        list-style-position: inside;
    }
</style>