<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { createAppKit, useAppKit } from '@reown/appkit/vue'
// import { useDisconnect } from 'wagmi'

import { arbitrum, mainnet } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 1. Get projectId from https://cloud.reown.com
const projectId = "23f032046003b9084c924ed6fc3cfe0d";
const networks = [mainnet, arbitrum]

const wagmiAdapter = new WagmiAdapter({
    ssr: false,
    projectId,
    networks
  })

createAppKit({
    adapters: [wagmiAdapter],
    networks: [mainnet, arbitrum],
    projectId,
    features: {
      analytics: true // Optional - defaults to your Cloud configuration
    }
  })

  // 5. Use modal composable
  const { open, close } = useAppKit()
  // const { disconnect } = useDisconnect()

  // disconnect()


</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <div style="color: white">
        address: {{ address }} <br>
        isConnected: {{ isConnected }} <br>
        caipAddress: {{ caipAddress }} <br>
        status: {{ status }}
      </div>
      <button @click="open()">open</button>
      <button @click="close">close</button>
      <!-- <button @click="disconnect()">disconnect</button> -->

      <w3m-button />
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
