<script setup>
import { ref } from "vue";
import Introduction from "./components/Introduction.vue";
import Tech from "./components/Tech.vue";
import FeaturedProjects from "./components/FeaturedProjects.vue";
import ImageComponent from "./components/reusableComponents/ImageComponent.vue";

const techSectionRef = ref(null);

// Creates a visually hidden focusable element, so that tabIndex can be used. Otherwise it jumps directly to the buttons. Only used on the sections before all the buttons start
// const visuallyHidden = {
//   render() {
//     return (
//       <span style="position: absolute; clip: rect(0 0 0 0); width: 1px; height: 1px; margin: -1px; padding: 0; overflow: hidden;">
//         {this.$slots.default()}
//       </span>
//     )
//   }
// }


// Function to handle the scroll effect on techSectionRef
const handleScrollToTech = () => {
  if (techSectionRef.value) {
    // Scroll to the tech section with smooth behavior
    techSectionRef.value.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

<template>
  <div>
    <Introduction tabIndex="-1" />
    <a href="#tech-link" @click="handleScrollToTech">
      <ImageComponent tabIndex="1" sectionClassName="arrow-divider" elementClassName="image" link="./images/arrow.svg"
        ImageAltText="Follow arrow down " />
    </a>

    <Tech ref="techSectionRef" tabIndex="-1" />

    <FeaturedProjects />
  </div>
</template>

<style scoped></style>