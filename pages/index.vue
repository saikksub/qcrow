<template>
  <NuxtLayout name="app">
    <div class="flex items-center gap-3 h-[48px] px-3 border-b border-neutral-800">
      <p class="text-lg text-neutral-400">Test Suites</p>
      <div class="grow" />
      <UButton icon="i-heroicons-plus" color="white" variant="solid"> Add Suite </UButton>
    </div>

    <UTable :rows="people" />
  </NuxtLayout>
</template>

<script setup>
const people = [
  {
    id: 1,
    name: "Lindsay Walton",
    title: "Front-end Developer",
    "Last updated": "",
    Actions: "",
  },
];
</script>
