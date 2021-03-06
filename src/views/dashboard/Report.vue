<template>
  <v-container
  id="report"
  fluid
  tag="section"
  >
    <v-row>
        <v-col
          cols="12"
          md="10"
        >
          <v-calendar
            ref="calendar"
            v-model="value"
            :weekdays="weekday"
            :type="type"
            :events="events"
            :show-month-on-first=true
            :event-overlap-mode="mode"
            :event-overlap-threshold="30"
            :event-color="getEventColor"
            @change="getEvents"
          ></v-calendar>
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
    name: 'Report',
    data () {
      return {
        type: 'month',
        types: ['month', 'week', 'day', '4day'],
        mode: 'stack',
        modes: ['stack', 'column'],
        weekday: [0, 1, 2, 3, 4, 5, 6],
        weekdays: [
          { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
          { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
          { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
          { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
        ],
        value: '',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['designer', 'editor', 'writer', 'marketer', 'writer1', 'writer2', 'writer3', 'writer3'],
      }
    },
    methods: {
      getEvents ({ start, end }) {
        const events = []
        const eventCount = 30
        for (let i = 0; i < eventCount; i++) {
          const first = new Date()
          const tmpdate = (first.getDate() - i)
          first.setDate(tmpdate)
          console.log(first + '/' + i + '/' + tmpdate)
          //   var indexer = this.rnd(0, this.names.length - 1)
          var indexer = 0
          for (let j = 0; j < this.names.length - 1; j++) {
            first.setHours(this.rnd(1, 10))
            first.setMinutes(this.rnd(1, 59))
            indexer = j
            events.push({
              name: this.names[indexer],
              start: first,
              color: this.colors[indexer],
              timed: 1,
            })
          }
        }
        console.log(events)
        this.events = events
      },
      getEventColor (event) {
        return event.color
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
    },
  }
</script>
