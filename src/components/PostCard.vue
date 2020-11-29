<template>
    <div class="post-card">
        <g-image src="~/assets/images/hero.jpg" />
        <h3>Really Interesting Title Goes Here</h3>
        <p>A really interesting excerpt goes here. Like this: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</template>

<style lang="scss" scoped>
    .post-card {
        width: 30%;
        height: 100%;
        background-color: #11CDE2;
        border-radius: 20px;
        font-family: Roboto;
        padding-bottom: 20px;
        margin-bottom: 30px;

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
    }
</style>