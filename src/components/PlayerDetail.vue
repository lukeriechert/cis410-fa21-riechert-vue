<template>
  <div>
      <div class="card">
        <div class="card-body">
          <h2 class="text-primary">{{player.FName}} {{player.LName}}</h2>
          <br/>

          <p>Position: <br/><strong>{{player.PositionName}}</strong></p>
          <p>Position Number: <br/><strong>{{player.PositionFK}}</strong></p>
        </div>
      </div>
      <br/>

      <router-link v-if="auth" :to="`/players/${this.$route.params.pk}/report`"><button class="btn btn-success">Add a Report</button></router-link>

      <router-link v-else :to="`/login`"><button class="btn btn-outline-success">Sign In to Add a Report</button></router-link>
  </div>
</template>

<script>
export default {
  computed: {
    player(){
      let allPlayers = this.$store.state.players;

      let thisPlayer = allPlayers.find((aPlayer)=>{
        return aPlayer.PlayerPK == this.$route.params.pk;
      });

      return thisPlayer;
    },
    auth(){return this.$store.state.token},
  },
};
</script>

<style>

</style>