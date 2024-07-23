<template>
    <div>
      <Toast
        :breakpoints="{ '920px': { width: '100%', right: '0', left: '0' } }"
      />
  
      <NuxtLayout class="layouts">
        <NuxtPage />
      </NuxtLayout>
    </div>
  </template>
  
  <style lang="scss">
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
  </style>