<template>
  <div class="card">
    <h1>Battle info</h1>
    {{ car }}
  </div>
</template>

<script>
export default {
  name: "AppBattle",
  props: {
    car: {
      typeof: Object,
      required: true,
    },
  },
};
</script>
