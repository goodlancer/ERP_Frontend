<template>
  <v-container
    id="Orgenization"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="10"
      >
        <v-row
          class="px-10"
        >
          <v-col
            cols="10"
          >
            <v-chip
              v-for="website in websites"
              :key="website.id"
              class="ma-2"
              color="green"
            >
              {{ website.websiteName }}
            </v-chip>
            <v-chip
              class="ma-2"
              color="green"
            >
              WebSite CDE
            </v-chip>
          </v-col>
          <v-col
            cols="2"
          >
            <v-btn
              class="mx-2"
              fab
              small
              color="gray"
              @click="addWebstie"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row
          class="px-10"
        >
          <v-col
            cols="12"
          >
            <v-row>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Admin
              </v-btn>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Editor
              </v-btn>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Writer
              </v-btn>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Other
              </v-btn>
            </v-row>
            <v-row>
              <v-col
                cols="5"
              >
                <v-treeview
                  class="my-16"
                  :open="initiallyOpen"
                  activatable
                  big
                  color="blue"
                  :items="websiteItem"
                  item-key="name"
                  open-on-click
                >
                  <template v-slot:prepend="{ item }">
                    <v-icon v-if="item.name">
                      mdi-account
                    </v-icon>
                  </template>
                </v-treeview>
              </v-col>
              <v-col
                cols="7"
              >
                <v-card class="py-3 px-3 fill-height">
                  User details
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      websites: [
        {
          id: 1,
          websiteName: 'Website ABC',
        },
        {
          id: 2,
          websiteName: 'Website DEF',
        },
      ],
      initiallyOpen: ['public'],
      websiteItem: [
        {
          name: 'Admin: Bob Slod',
          children: [
            {
              name: 'Editor: Dan Kemp',
              children: [
                {
                  name: 'writer: JusttimOveloder',
                },
                {
                  name: 'writer: Gray Flink',
                },
                {
                  name: 'writer: Aron Think',
                },
                {
                  name: 'writer: Chrise Kring',
                },
              ],
            },
          ],
        },
      ],
    }),
    methods: {
      addWebstie () {
        this.websites.push({
          id: 1,
          websiteName: 'Website ABC',
        })
      },
    },
  }
</script>
