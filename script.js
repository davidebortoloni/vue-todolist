Vue.config.devtools = true;

const root = new Vue({
  el: "#root",
  data: {
    newTask: "",
    tasks: [
      "Fare la revisione",
      "Riconquistare la Corsica",
      "Comprare il latte",
      "Salvare il mondo",
      "Aggiustare gli occhiali",
    ],
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTask.trim()) this.tasks.push(this.newTask);
      this.newTask = "";
    },
  },
});
