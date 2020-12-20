<template>
    <div class="post-brief">
        <g-link :to="post.path"><h2>{{ post.title }}</h2></g-link>
        <span class="post-date">{{ post.date }}</span>
        <div class="excerpt">{{ post.excerpt }}</div>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style scoped>
    .post-brief {
        padding-bottom: 25px;
        border-bottom: 2px solid #11CDE2;
        margin-bottom: 25px;
    }

    a {
        text-decoration: none;
    }

    h2 {
        color: #11CDE2;
        font-size: 32px;
        font-family: Roboto;
        font-weight: 900;
        margin-bottom: 5px;
    }

    .post-date {
        color: #11CDE2;
        font-family: Roboto;
        font-size: 16px;
        font-weight: 300;
    }

    .excerpt {
        font-family: Roboto;
        font-size: 20px;
        color: #eee;
        margin-top: 15px;
    }
</style>