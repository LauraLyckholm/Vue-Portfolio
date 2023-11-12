<template>
    <header tabIndex="0">
        <ImageComponent v-for="imageComp in imagesComp" :key="imageComp.src" :imageComp="imageComp">
        </ImageComponent>

        <section class="headings">
            <h3>{{ h3 }}</h3>
            <h1 class="introduction-h2">{{ h1 }}</h1>
        </section>
        <section class="intro-text">
            <p class="normal">{{ introText }}</p>
        </section>
    </header>
</template>

<script>
import ImageComponent from "./reusableComponents/ImageComponent.vue"

export default {
    name: "Introduction",
    components: {
        ImageComponent,
    },

    data() {
        return {
            imagesComp: [
                {
                    sectionClassName: "profile-image",
                    elementClassName: "circle-img",
                    image: {
                        src: "/images/profile-image-2.webp",
                        alt: "Laura",

                    },
                }],
            h1: "Frontend Developer & Web Designer",
            h3: "Hi, I'm Laura Lyckholm",
            introText: "Laura is a frontend developer with a background in web design, known for her keen eye for details and ability to learn new technologies, languages and programs. She creates applications with both the designer and user in mind, and does so with a constant smile on her face. Her drive for perfection and her background in design makes her a valuable asset to any project and a standout in the technology field."
        }
    }
}
</script>

<style scoped>
/* ------------ TYPOGRAPHY ------------ */
.introduction-h2 {
    color: var(--primary);
}

/* ------------ LAYOUT ------------ */
header {
    margin: 64px 16px 32px 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

header h1,
header h3 {
    line-height: normal;
}


/* ------------ MEDIA QUERIES ------------ */
/* ------------ Tablet only ------------ */
@media (max-width: 1279px) and (min-width: 744px) {
    header {
        margin: 0 auto;
        padding: 128px 64px 0px 64px;
        ;
        display: grid;
        grid-template-columns: 1fr 430px;
        grid-template-rows: auto;
    }

    .headings {
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .profile-image {
        grid-row: 2;
    }

    .intro-text {
        grid-row: 2;
        grid-column: span 2;
    }
}

/* ------------ Desktop only ------------ */
@media (min-width: 1280px) {
    header {
        margin: 0 auto;
        padding: 280px 220px 64px 220px;
        display: grid;
        grid-template-columns: 1fr 600px;
        grid-template-rows: auto;
        max-width: 840px;
    }

    .headings {
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .profile-image {
        grid-row: 2;
    }

    .intro-text {
        grid-row: 2;
        grid-column: 2;
    }
}
</style>