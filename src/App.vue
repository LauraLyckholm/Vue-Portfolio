<template>
  <div>
    <Introduction></Introduction>
    <FeaturedProjects></FeaturedProjects>
  </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import FeaturedProjects from "@/components/FeaturedProjects.vue";

export default {
  name: "App",
  components: {
    Introduction,
    FeaturedProjects,
  }
}
</script>

<style scoped></style>