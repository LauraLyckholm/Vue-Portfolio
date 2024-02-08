<script setup>

import ImageComponent from "./reusableComponents/ImageComponent.vue";

const props = defineProps({
    repositories: {
        type: Array,
        required: true,
    }
})


console.log(props.repositories);
// Declaring a variable that uses the images to find the relevant repositories. If the name in the image-json is in the list of repos in the Fetch it will be saved in the filteredRepos. 



// .filter((repo) => repoImages.find((img) => img.repoName === repo.name))
// .sort((a, b) => {// Parsing the "created_at" dates into Date objects
//     const dateA = new Date(a.created_at);
//     const dateB = new Date(b.created_at);
//     // Compare the dates to determine the order
//     return dateB - dateA;
// });

// const repoImage = repoImages.find((img) => img.repoName === repo.name);
// console.log(repoImage);
// const topics = repo.topics || []; // Saving repo.topics in a variable and sets an empty array as a default
// const projectName = repo.name;
// const cleanProjectName = projectName.replace(/-/g, " "); // Saving the name of the project in a cleaner format, removing the dashes from the API name.

</script>

<template>
    <article class="project-cards" v-for="repo in repositories" :key="repo.id">
        <!-- <ImageComponent :sectionClassName="image" :link="repoImage?.imageUrl" :ImageAltText="cleanProjectName" />
        <p>{{ repo.name }}</p> -->
        <!-- <ImageComponent :sectionClassName="image" :link="repoImage?.imageUrl" :ImageAltText="cleanProjectName">
        </ImageComponent> -->
    </article>
</template>


<style scoped></style>