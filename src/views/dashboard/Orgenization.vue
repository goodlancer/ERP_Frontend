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
              @click="dialog=true"
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
                  <v-card-title>
                    User Name
                  </v-card-title>
                  <v-card-text>
                    This is Designer have 7 years of strong experince
                  </v-card-text>
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
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template>
          <v-card>
            <v-card-title>
              Add SiteName
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="webstie_Name"
                      label="Website Name"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-action>
              <v-spacer></v-spacer>
              <v-btn
                class="mx-3 my-2"
                color="blue darken-1"
                outlined
                @click="dialog=false"
              >
                Close
              </v-btn>
              <v-btn
                class="mx-3 my-2"
                color="blue darken-1"
                outlined
                @click="addWebstie"
              >
                Add
              </v-btn>
            </v-card-action>
          </v-card>
        </template>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      webstie_Name: '',
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
        if (this.webstie_Name !== '') {
          this.websites.push({
            id: 1,
            websiteName: this.webstie_Name,
          })
          this.webstie_Name = ''
        }
        this.dialog = false
      },
    },
  }
</script>
