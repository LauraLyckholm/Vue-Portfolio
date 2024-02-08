<script setup>
import MainHeading from "./reusableComponents/MainHeading.vue";
import LargeText from "./reusableComponents/LargeText.vue";

const techText = "HTML, CSS, Flexbox, Grids, JavaScript, ES7, JSX, React, React Hooks, Node.js, Npm, Web Accessibility, APIs, mob-programming, pair-programming, GitHub."

</script>

<template>
    <section class="tech">
        <div class="tech-text-section">
            <MainHeading className="tech-heading" text="Tech" />
            <LargeText :text="techText" />
        </div>
    </section>
</template>

<style  scoped>
/* ------------ OVERALL ------------ */
.tech {
    background-color: var(--primary);
    color: #fff;
    padding: 128px 16px;
}

.tech-text-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
}

/* ------------ TYPOGRAPHY ------------ */
.tech p.large {
    text-align: left;
}

/* #tech-link {

} */

/* ------------ MEDIA QUERIES ------------ */
/* ------------ Tablet only ------------ */
@media (max-width: 1279px) and (min-width: 744px) {
    .tech {
        padding: 256px 64px;
    }

    .tech p.large {
        text-align: center;
        max-width: 616px;
    }
}

/* ------------ Desktop only ------------ */
@media (min-width: 1280px) {
    .tech {
        padding: 256px 64px;
        display: flex;
        justify-content: center;
    }

    .tech-text-section {
        max-width: 820px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 124px;
    }

    .tech p.large {
        text-align: left;
        /* max-width: 600px; */
    }
}
</style>