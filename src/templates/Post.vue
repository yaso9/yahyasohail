<template>
    <Layout>
        <h1 v-html="$page.post.title"></h1>
        <div id="post-date">{{ $page.post.date }}</div>
        <div id="post-body" v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    date(format: "MMMM DD, YYYY")
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

    #post-body p {
        margin-bottom: 10px;
    }
</style>