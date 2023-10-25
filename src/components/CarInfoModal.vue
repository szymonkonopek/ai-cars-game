<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Car info</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <ul class="list-group list-group-flush">
          <div
            v-for="(key, index) in Object.keys(this.carData.data)"
            :key="index"
          >
            <li class="list-group-item" v-if="key != 'logoImg'">
              {{ key }} : {{ carData.data[key] }}
              <span
                v-if="key == 'colour'"
                :style="{ color: this.carData.data[key] }"
                class="fs-5"
                >●</span
              >
            </li>
          </div>
        </ul>
      </div>
      <div class="modal-footer" v-if="!this.disableDelete">
        <button type="button" class="btn btn-danger" @click="handleDelete">
          Delete this car
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { actionTypes } from "@/store/modules/firebaseDatabase";
export default {
  name: "carInfo",
  props: {
    carData: {
      typeOf: Object,
      required: false,
    },
    id: {
      typeOf: String,
      required: false,
    },
    disableDelete: {
      typeOf: Boolean,
      required: false,
    },
  },
  methods: {
    handleDelete() {
      this.$store
        .dispatch(actionTypes.deleteCarById, { id: this.id })
        .then(() => {
          this.$router.go();
        });
    },
  },
  mounted() {
    console.log("cardata", this.carData);
  },
};
</script>
