<template>
  <button
    class="
      fixed
      fab
      rounded-full
      bg-gray-900
      dark:bg-gray-800
      text-yellow-400
      shadow-xl
      border-4 border-gray-200
      dark:border-gray-900
      w-16
      h-16
      text-xl
      hover:text-2xl
      z-20
      transition
      duration-100
    "
    @click="toggleDarkMode"
  >
    {{ isDark ? "🌙" : "☀️" }}
  </button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isDark: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
  },
  watch: {
    isDark: {
      immediate: true,
      handler() {
        const html = document.querySelector("html");

        if (this.isDark) {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      },
    },
  },
  mounted() {
    this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
};
// import { onMounted, ref } from "vue";
// const html = document.querySelector("html");

// const isDark = ref(html.classList.contains("dark"));

// function toggleDarkMode() {
//   isDark.value = !isDark.value;
//   html.classList.toggle("dark");
// }

// onMounted(() => {
//   isDark.value = !isDark.value;
//   toggleDarkMode();
// });
</script>
