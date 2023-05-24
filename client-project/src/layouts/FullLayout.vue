<template>
  <v-card>
    <v-layout>
      <!-- <v-container> -->
      <v-app-bar class="d-flex justify-space-between" :elevation="0">
        <div class="pa-16 ma-16">
          <RouterLink to="/">
            <img src="../assets/images/logos/logo-dark.svg" />
          </RouterLink>
        </div>
        <NavigationMenu />
        <LogInOut />
      </v-app-bar>
      <!-- </v-container> -->
      <v-main style="min-height: 600px">
        <RouterView />
        <v-footer class="bg-black">
          <v-container>
            <v-row class="d-flex align-center justify-center">
              <v-col cols="3" class="text-center">
                <img src="../assets/images/logos/logo-dark.svg" alt="" />
              </v-col>
            </v-row>
          </v-container>
        </v-footer>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import NavigationMenu from "./NavigationMenu.vue";
import LogInOut from "./Loginout/LogInOut.vue";
</script>
<style></style>
