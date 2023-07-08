<template>
  <div class="relative h-screen">
    <div
      class="absolute top-0 bottom-0 left-0 w-[256px] h-full border-r border-neutral-800"
    >
      <div class="flex items-center gap-3 h-[48px] border-b border-neutral-800">
        <p class="text-sm text-neutral-500 px-3">QCrow v0.0.1</p>
      </div>
      <div class="absolute top-[48px] right-0 bottom-0 left-0">
        <div class="flex flex-col h-full gap-3">
          <div class="grow">
            <UVerticalNavigation :links="primaryMenu" />
          </div>
          <UVerticalNavigation :links="secondaryMenu" class="mb-2" />
        </div>
      </div>
    </div>

    <div class="absolute top-0 right-0 bottom-0 left-[256px]">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { signOut } = useAuth();

const primaryMenu = [
  {
    label: "Test Suites",
    icon: "i-heroicons-folder-open",
    to: "/",
  },
  {
    label: "History",
    icon: "i-heroicons-clock",
    to: "/history",
  },
  {
    label: "Users",
    icon: "i-heroicons-user-group",
    to: "/users",
  },
];

const secondaryMenu = [
  {
    label: "Your Account",
    icon: "i-heroicons-user-circle",
    to: "/account",
  },
  {
    label: "Signout",
    icon: "i-heroicons-arrow-left-on-rectangle",
    click: () => {
      signOut().then(() => {
        useRouter().replace({ path: "/" });
      });
    },
  },
];
</script>
