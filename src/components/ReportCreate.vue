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
                  <input type="number" class="form-control" id="hit-input" required="" min="20" max="80" v-model="hit">
                </div>
                <div class="mb-3">
                  <label for="power-input" class="form-label">Power</label>
                  <input type="number" class="form-control" id="power-input" required="" min="20" max="80" v-model="power">
                </div>
                <div class="mb-3">
                  <label for="run-input" class="form-label">Run</label>
                  <input type="number" class="form-control" id="run-input" required="" min="20" max="80" v-model="run">
                </div>
                <div class="mb-3">
                  <label for="field-input" class="form-label">Field</label>
                  <input type="number" class="form-control" id="field-input" required="" min="20" max="80" v-model="field">
                </div>
                <div class="mb-3">
                  <label for="arm-input" class="form-label">Arm</label>
                  <input type="number" class="form-control" id="arm-input" required="" min="20" max="80" v-model="arm">
                </div>
                <button type="submit" class="btn btn-primary">Submit Review</button>
                <button type="clear" class="btn btn-outline-danger"> Cancel </button>
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
      hit: null,
      power: null,
      run: null,
      field: null,
      arm: null,
      errorMessage: null 
    }
  },
  methods: {
    submitReport(){
      let myReport = {
        hit: this.hit,
        power: this.power,
        run: this.run,
        field: this.field,
        arm: this.arm,
        playerFK: this.$route.params.pk
      }
      axios.post("/reports", myReport, {
        headers: {Authorization: `Bearer ${this.$store.state.token}`}
      }).then(()=>{
        this.$router.replace("/account")
      })
    }
  }
};
</script>

<style>
button{
  margin-right: 5px;
}

</style>