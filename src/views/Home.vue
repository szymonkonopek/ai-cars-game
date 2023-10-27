<template>
  <div class="mt-2">
    <div class="paralax shadow position-relative">
      <div class="position-absolute top-50 start-50 translate-middle">
        <div class="card shadow-lg">
          <div class="card-body d-flex align-items-start flex-column">
            <h5 class="card-title">
              AI powered car card game. <br />Build your car collection and
              challange your friends.
            </h5>
            <router-link
              :to="{ name: 'feed' }"
              class="align-self-center btn btn-primary"
            >
              Let's race!
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-wrap mt-5"
    >
      <MyCarFeedItem
        :carData="{
          data: {
            brand: 'Nissan',
            model: '350Z',
            production_year: '2021',
            description:
              'The Nissan 350Z, known for its sleek design and powerful V6 engine, gained fame as a star in The Fast and the Furious: Tokyo Drift.',
          },
        }"
        :id="'1234567'"
        :isInfoVisible="true"
      />
      <div class="p-5 w-50">
        <h5 class="font-weight-bold">Collect Car Cards</h5>
        Dive into a world of automotive wonder and start amassing your dream car
        collection. With our user-friendly interface, you can effortlessly
        browse and draw your favorite car cards to your personal garage,
        creating a virtual museum of automotive excellence.
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-wrap mt-5"
    >
      <div class="p-5 w-50">
        <h5 class="font-weight-bold">Race with Friends:</h5>

        The adrenaline truly kicks in when you challenge your friends to epic
        races. Pit your prized cars against theirs, rev those virtual engines,
        and experience the thrill of head-to-head competition. Who will prove to
        be the ultimate speed demon in your circle?
      </div>
      <MyCarFeedItem
        :carData="{
          data: {
            brand: 'Audi',
            model: 'R8',
            production_year: '2018',
            description:
              'The Audi R8s V10 engine is based on Lamborghinis Gallardo V10, showcasing its high-performance pedigree.',
          },
        }"
        :id="'1234567'"
        :isInfoVisible="true"
      />
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-wrap mt-5"
    >
      <MyCarFeedItem
        :carData="{
          data: {
            brand: 'Audi',
            model: 'R8',
            production_year: '2018',
            description:
              'The Audi R8s V10 engine is based on Lamborghinis Gallardo V10, showcasing its high-performance pedigree.',
          },
        }"
        :id="'1234567'"
        :isInfoVisible="true"
      />
      <div class="p-5 w-50">
        <h5 class="font-weight-bold">View Their Stats</h5>

        Dive into a world of automotive wonder and start amassing your dream car
        collection. With our user-friendly interface, you can effortlessly
        browse and draw your favorite car cards to your personal garage,
        creating a virtual museum of automotive excellence.
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-wrap mt-5"
    >
      <div class="p-5 w-50">
        <h5 class="font-weight-bold">Discover the Winner</h5>
        As the tires screech and the finish line approaches, the tension mounts.
        But fear not! Our component takes care of all the calculations and
        announces the victor, leaving you and your friends to savor the
        excitement and relish the bragging rights.
      </div>
      <MyCarFeedItem
        :carData="{
          data: {
            brand: 'Audi',
            model: 'R8',
            production_year: '2018',
            description:
              'The Audi R8s V10 engine is based on Lamborghinis Gallardo V10, showcasing its high-performance pedigree.',
          },
        }"
        :id="'1234567'"
        :isInfoVisible="true"
      />
    </div>
    <div style="height: 1000px"></div>
  </div>
</template>

<script>
import "@/../public/paralax.css";
import MyCarFeedItem from "@/components/MyCarFeedItem.vue";

export default {
  name: "AppHomeView",
  components: {
    MyCarFeedItem,
  },
};
</script>
