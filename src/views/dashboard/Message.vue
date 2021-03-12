<template>
  <v-container>
    <v-row>
      <v-col
        cols="10"
      >
        <v-row>
          <v-col
            cols="4"
          >
            <v-list enabled>
              <v-subheader class="text-h3">Contacts/Team</v-subheader>
              <v-list-item-group
                v-model="selectedItem"
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-cols
            cols="8"
          >
            <v-col
              cols="12"            
            >
              <v-card>
                <v-chip
                  close-icon="mdi-delete"
                  color="green"
                  filter
                  label
                  link
                  pill
                ></v-chip>
              </v-card>
            </v-col>
            <v-col
              cols="12"
            >
              <v-text-field
                v-model="message"
                :append-outer-icon="message ? 'mdi-send' : 'mdi-send'"
                :prepend-icon="icon"
                filled
                clear-icon="mdi-close-circle"
                clearable
                label="Message"
                type="text"
                @click:clear="clearMessage"
              ></v-text-field>
            </v-col>
          </v-cols>
        </v-row>
      </v-col>
      <v-col
        cols="2"
      >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Card from '../../components/base/Card.vue'
  export default {
  components: { Card },
    name: 'Message',
    data () {
      return {
        show: false,
        message: 'Hey!',
        marker: true,
        iconIndex: 0,
        icons: [
          'mdi-emoticon',
          'mdi-emoticon-cool',
          'mdi-emoticon-dead',
          'mdi-emoticon-excited',
          'mdi-emoticon-happy',
          'mdi-emoticon-neutral',
          'mdi-emoticon-sad',
          'mdi-emoticon-tongue',
        ],
        selectedItem: 1,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
      }
    },
    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },
    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
  }
</script>
