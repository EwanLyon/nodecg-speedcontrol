<template>
  <div id="App">
    <!-- Not enabled. -->
    <div v-if="!config.enabled">
      Twitch integration is not enabled.
    </div>
    <!-- Enabled but not logged in server-side. -->
    <div v-else-if="apiData.state === 'off'">
      <a
        :href="url"
        target="_blank"
      ><img src="./twitch-login.png"></a>
      <br><br>Click the image above to connect to Twitch to auto-sync data.
    </div>
    <!-- Enabled, authenticating server-side. -->
    <div v-else-if="apiData.state === 'authenticating'">
      Authenticating...
    </div>
    <!-- Ready server-side. -->
    <div v-else>
      <button
        id="Logout"
        @click="logout"
      >
        Logout ({{ apiData.channelName }})
      </button>
      <br><br>Auto-sync title/game?
      <input
        v-model="sync"
        type="radio"
        name="autoSyncRadio"
        :value="true"
      >On
      <input
        v-model="sync"
        type="radio"
        name="autoSyncRadio"
        :value="false"
      >Off
      <br><br><input
        v-model="title"
        class="TextBox"
        @input="inputActivity"
        @focus="inputActivity"
        @blur="inputActivity"
      >
      <input
        v-model="game"
        class="TextBox"
        @input="inputActivity"
        @focus="inputActivity"
        @blur="inputActivity"
      >
      <button @click="updateChannelInfo">
        Update
      </button>
      <br><br><button @click="startCommercial">
        Start 3m Commercial
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import { nodecg } from '../_misc/nodecg';
import { Configschema } from '../../../configschema';
import { store } from '../_misc/replicant-store';

export default Vue.extend({
  data() {
    return {
      focus: false,
      title: '',
      game: '',
    };
  },
  computed: {
    config() {
      return nodecg.bundleConfig.twitch;
    },
    apiData() {
      return store.state.twitchAPIData;
    },
    channelInfo() {
      return store.state.twitchChannelInfo;
    },
    sync: {
      get() {
        return store.state.twitchAPIData.sync;
      },
      set(value: boolean) {
        store.commit('updateTwitchSyncToggle', { value });
      },
    },
    url() {
      const config = this.config as Configschema['twitch'];
      return `https://id.twitch.tv/oauth2/authorize
?client_id=${config.clientID}
&redirect_uri=${config.redirectURI}
&response_type=code
&scope=channel_editor+user_read+chat:read+chat:edit+channel_commercial
&force_verify=true`;
    },
  },
  watch: {
    channelInfo: {
      handler() {
        this.updateInputs();
      },
      immediate: true,
    },
  },
  created() {
    this.blurInput = _.debounce(this.blurInput, 20 * 1000);
  },
  methods: {
    inputActivity(evt: Event) {
      if (['input', 'focus'].includes(evt.type)) {
        this.focus = true;
        this.blurInput(evt);
      } else if (evt.type === 'blur') {
        this.focus = false;
      }
    },
    blurInput(evt: Event) {
      (evt.target as HTMLTextAreaElement).blur();
    },
    updateInputs() {
      if (!this.focus) {
        this.title = this.channelInfo.status;
        this.game = this.channelInfo.game;
      }
    },
    updateChannelInfo() {
      nodecg.sendMessage('updateChannelInfo', {
        status: this.title,
        game: this.game,
      }).then(() => {
        // successful
      }).catch(() => {
        // unsuccessful
      });
    },
    startCommercial() {
      nodecg.sendMessage('startTwitchCommercial').then(() => {
        // successful
      }).catch(() => {
        // unsuccessful
      });
    },
    logout() {
      nodecg.sendMessage('twitchLogout').then(() => {
        // successful
      }).catch(() => {
        // unsuccessful
      });
    },
  },
});
</script>

<style scoped>
  .TextBox {
    box-sizing: border-box;
    width: 100%;
  }

  button {
    width: 100%;
  }

  #Logout {
    width: unset;
    float: right;
  }
</style>