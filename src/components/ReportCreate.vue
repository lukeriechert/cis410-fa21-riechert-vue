<template>
  <div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="card">
            <div class="card-body">
              <h4>Create a Review</h4>
              <form id="report-form" @submit.prevent="submitReport">
                <div class="mb-3">
                  <label for="hit-input" class="form-label">Hit</label>
                  <input type="number" class="form-control" id="hit-input" required="" min="20" max="80" v-model="Hit">
                </div>
                <div class="mb-3">
                  <label for="power-input" class="form-label">Power</label>
                  <input type="number" class="form-control" id="power-input" required="" min="20" max="80" v-model="Power">
                </div>
                <div class="mb-3">
                  <label for="run-input" class="form-label">Run</label>
                  <input type="number" class="form-control" id="run-input" required="" min="20" max="80" v-model="Run">
                </div>
                <div class="mb-3">
                  <label for="field-input" class="form-label">Field</label>
                  <input type="number" class="form-control" id="field-input" required="" min="20" max="80" v-model="Field">
                </div>
                <div class="mb-3">
                  <label for="arm-input" class="form-label">Arm</label>
                  <input type="number" class="form-control" id="arm-input" required="" min="20" max="80" v-model="Arm">
                </div>
                <button type="submit" class="btn btn-primary">Submit Review</button>
                <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger"> Cancel </button>

                <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return {
      Hit: null,
      Power: null,
      Run: null,
      Field: null,
      Arm: null,
      errorMessage: null 
    }
  },
  methods: {
    submitReport(){
      let myReport = {
        Hit: this.Hit,
        Power: this.Power,
        Run: this.Run,
        Field: this.Field,
        Arm: this.Arm,
        PlayerFK: this.$route.params.pk,
        scoutFK: this.$store.state.ScoutPK
      }
      axios.post("/reports", myReport, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{
        this.$router.replace("/account")
      }).catch(()=>{
        this.errorMessage = "Unable to create review, please try again later"
      });
    },
    cancelReview(){
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button{
  margin-right: 5px;
}

</style>