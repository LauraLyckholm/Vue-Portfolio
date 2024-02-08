<script setup>
import { onMounted, ref, watchEffect } from "vue";
import repoImages from "../data/repoImages.json";

import MainHeading from "./reusableComponents/MainHeading.vue";
import ProjectCard from "./ProjectCard.vue";

const token = import.meta.env.GH_TOKEN;
const API = "https://api.github.com/users/LauraLyckholm/repos";

const projects = ref([]);
const errorMessage = ref("");
const filteredRepos = ref([]);

const fetchProjects = async () => {
    try {
        const response = await fetch(API, {
            headers: {
                Authorization: `${token}`,
                Accept: "application/vnd.github+json",
            },
        });

        if (!response.ok) {
            throw new Error("An error occurred while fetching the data from GitHub");
        } else {
            const rawData = await response.json();
            projects.value = rawData;
        }
    } catch (error) {
        errorMessage.value = error.message;
        console.error(error);
    }
}


// watchEffect(() => {
//     filteredRepos.value.filter((repo) => repoImages.find((img) => img.repoName === repo.name)).sort((a, b) => {// Parsing the "created_at" dates into Date objects
//         const dateA = new Date(a.created_at);
//         const dateB = new Date(b.created_at);

//         // Compare the dates to determine the order
//         return dateB - dateA;
//     });
// });


onMounted(() => {
    fetchProjects();
});

</script>

<template>
    <section className="projects-section">
        <MainHeading v-if="projects" className="featured-projects-heading" text="Featured Projects" />
        <p className="error-message" v-else="">{{ errorMessage }}</p>
        <ProjectCard :repositories="projects" />
    </section>
</template>

<style scoped>
/* ------------ OVERALL ------------ */
.featured-projects-heading {
    color: var(--primary);
}

.projects-section {
    padding: 128px 16px;
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.image {
    margin-right: 10px;
    margin-bottom: 14px;
}

.project-text-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
}

.buttons-section {
    display: flex;
    gap: 16px;
}

/* Shows the error message in red to make it clearer for the user */
.error-message {
    color: red;
}

/* ------------ MEDIA QUERIES ------------ */
/* ------------ Tablet only ------------ */
@media (max-width: 1279px) and (min-width: 744px) {
    .projects-section {
        display: flex;
        gap: 64px;
    }

    .buttons-section {
        display: flex;
        gap: 32px;
    }

    .project-cards {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 37px;
    }

    .image {
        grid-column: 1 /span 2;
        grid-row: 1 / span 2;
    }

    .project-text-section {
        grid-column: 3 / span 6;
        grid-row: 1 / span 2;
    }

}

/* ------------ Desktop only ------------ */
@media (min-width: 1280px) {
    .projects-section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 128px 230px 124px 230px;
        gap: 128px;
    }

    .featured-projects-heading {
        margin-left: -90px;
        /* My css was really bugging me out, so this is a quick fix to get the headline to not be centered, text-align: left wasn't working*/
    }

    .buttons-section {
        display: flex;
        gap: 32px;
    }

    .project-cards {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 40px;
        max-width: 820px;
    }

    .image {
        grid-column: 1 /span 4;
        grid-row: 1 / span 2;
    }

    .project-text-section {
        grid-column: 5 / span 12;
        grid-row: 1 / span 2;
    }
}
</style>