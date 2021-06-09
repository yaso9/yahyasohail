<template>
    <g-link :to="post.path">
        <div class="post-card">
            <g-image src="~/assets/images/hero.jpg" />
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
        </div>
    </g-link>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style scoped>
    a {
        display: contents;
        text-decoration: none;
    }

    .post-card {
        width: 30%;
        max-width: 500px;
        height: 100%;
        background-color: #11CDE2;
        border-radius: 20px;
        font-family: Roboto;
        padding-bottom: 20px;
        margin-bottom: 30px;
    }

    img {
        width: 100%;
        border-radius: 10px 10px 0 0;
        margin-bottom: 10px;
    }

    h3 {
        color: #eee;
        font-weight: 500;
        font-size: 36px;
        margin: 0 20px 5px 20px;
    }

    p {
        color: #151515;
        font-weight: 500;
        font-size: 18px;
        margin: 0 20px;
    }

    @media (max-width: 1024px) {
        .post-card {
            width: 100%;
        }
    }
</style>