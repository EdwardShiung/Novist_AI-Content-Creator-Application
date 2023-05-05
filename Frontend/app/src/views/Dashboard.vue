<template>
    <div>
      <!--Stats cards-->
      <div class="row">
        <div
          class="col-md-6 col-xl-3"
          v-for="stats in statsCards"
          :key="stats.title"
        >
          <stats-card>
            <div
              class="icon-big text-center"
              :class="`icon-${stats.type}`"
              slot="header"
            >
              <i :class="stats.icon"></i>
            </div>
            <div class="numbers" slot="content">
              <p>{{ stats.title }}</p>
              {{ stats.value }}
            </div>
            <div class="stats" slot="footer">
              <i :class="stats.footerIcon"></i> {{ stats.footerText }}
            </div>
          </stats-card>
        </div>
      </div>
      <!-- Table List -->
        <div class="row my-5" v-if="tableData.length > 0">
                    <div class="col">
                        <table class="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">#</th>
                                    <th scope="col">User</th>
                                    <th scope="col">To-Do List</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in tableData" :key="item.id">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ item.userId.name }}</td>
                                    <td>{{ item.taskName }}</td>
                                    <td>{{ item.status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </div>
    </div>
  </template>
  <script>
  import { StatsCard} from "@/components/index";

  export default {
    components: {
      StatsCard,
    },
    computed:{
      user(){
        return this.$store.getters.user;
      }
    },
    data() {
      return {
        statsCards: [
          {
            type: "warning",
            icon: "ti-pencil",
            title: "Today",
            value: "10",
            footerText: "Today",
            footerIcon: "ti-reload",
          },
          {
            type: "success",
            icon: "ti-pencil-alt",
            title: "Last Day",
            value: "4",
            footerText: "Last day",
            footerIcon: "ti-timer",
          },
          {
            type: "danger",
            icon: "ti-folder",
            title: "A Week Ago",
            value: "23",
            footerText: "A Week Ago",
            footerIcon: "ti-timer",
          },
          {
            type: "info",
            icon: "ti-server",
            title: "A Month Ago",
            value: "+45",
            footerText: "A Month Ago",
            footerIcon: "ti-calendar",
          },
        ],
        tableData: [],

      };
    },
    created(){
      if(this.isUserAllowedToGetAllTask()) {
          this.getAllTask();
      }
    },
    methods: {
      getAllTask(){
        this.$http.get('task/allTasks').then((res) => {
          try {
            //data
            this.tableData = res.data;
            console.log(this.tableData);
            //UserID
            const userIds = data.map(item => item.userId);
            // console.log(userIds);
          } catch (error) {

          }
        })
      },
      isUserAllowedToGetAllTask(user) {
        return this.user.identity === 'Admin';
      }
    }
  };
  </script>
  <style></style>
