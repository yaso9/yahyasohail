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
    title
    date(format: "MMMM DD, YYYY")
    featuredImage
    content
  }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
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