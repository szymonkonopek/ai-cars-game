<template>
  <div>this is : {{ carData.data.brand }}</div>
</template>

<script>
export default {
  name: "CarFeedItem",
  props: {
    carData: {
      typeof: Object,
      required: true,
    },
  },
};
</script>
