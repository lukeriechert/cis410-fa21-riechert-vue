<template>
  <div>
      <h1>Account</h1>
      <hr/>
      <h3>{{firstName}}'s Reports</h3>

      <p v-if="accountError" class="text-danger">Cannot get your account information, please try again later</p>
      <table v-if="reportsByUser" class="table">
        <thead>
          <th>Player PK</th>
          <th>Hit</th>
          <th>Power</th>
          <th>Run</th>
          <th>Field</th>
          <th>Arm</th>
        </thead>
        <tbody>
          <tr v-for="thisReport in reportsByUser" :key="thisReport.ReportPK">
            <th><router-link :to='`/players/${thisReport.PlayerFK}`'>{{thisReport.PlayerFK}}</router-link></th>
            <th>{{thisReport.Hit}}</th>
            <th>{{thisReport.Power}}</th>
            <th>{{thisReport.Run}}</th>
            <th>{{thisReport.Field}}</th>
            <th>{{thisReport.Arm}}</th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
      reportsByUser: null,
      accountError: false,
    };
  },
  computed: {
    firstName(){
      console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.NameFirst;
    },
  },
  created(){
    axios.get("/reports/me", {
      headers: {
        Authorization: `Bearer ${this.$store.state.token}`,
      },
    }).then((theResponse)=>{
      console.log("here is the response", theResponse);
      this.reportsByUser = theResponse.data;
    }).catch(()=>{this.accountError = true});
  },
};
</script>

<style>

</style>