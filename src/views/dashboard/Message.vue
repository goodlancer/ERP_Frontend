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
            lsikjd
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
  export default {
    name: 'Message',
    data () {
      return {
        selectedItem: 1,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
      }
    },
  }
</script>
