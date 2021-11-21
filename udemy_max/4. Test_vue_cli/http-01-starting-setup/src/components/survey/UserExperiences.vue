<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <h1 v-if="isLoading">Loading....</h1>
      <h1 v-else-if="messageError"> {{messageError}} </h1>
      <div v-else-if="!isLoading && results.length > 0">
        <ul>
          <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
          ></survey-result>
        </ul>
      </div>
      <h1 v-else>No Data Brooo !!!!</h1>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      messageError : null,
    }
  },
  methods: {
    loadExperiences(){
      this.isLoading = true;
      fetch(`https://vue-htttp-demo-1bac3-default-rtdb.firebaseio.com/surveys.json`).then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
        }
      ).then((data) => {
          const results = [];
          for (const id in data){
            let datas = data[id]
            for (const key in datas) {
              results.push({
                id : key,
                name : datas[key].name,
                rating : datas[key].rating,
              })
            }
          }
          this.results = results;
          this.isLoading = false;
      }).catch((error) => {
        this.isLoading = false;
        this.messageError = `${error}. Please Try Again`;
      });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>