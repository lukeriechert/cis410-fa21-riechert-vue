<template>
  <div>
      <h1>Players</h1>
      <hr/>
      <table class="table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Position</th>
            <th>Position Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="aPlayer in thePlayers" :key="aPlayer.PlayerPK">
            <th>{{aPlayer.FName}} {{aPlayer.LName}}</th>
            <th>{{aPlayer.PositionName}}</th>
            <th>{{aPlayer.PositionFK}}</th>
            <th><router-link :to="`/players/${aPlayer.PlayerPK}`"><button class="btn btn-primary">Details</button></router-link></th>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  computed: {
    thePlayers(){
      return this.$store.state.players;

    }
  }
}
</script>

<style>

</style>