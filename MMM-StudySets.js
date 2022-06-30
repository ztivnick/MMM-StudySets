Module.register("MMM-StudySets", {
  defaults: {
    category: "Education",
    text: "Welcome to study sets!",
  },

  getStyles() {
    return [this.file("MMM-StudySets.css")];
  },

  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;
    return wrapper;
  },

  start: function () {
    Log.log(this.name + " started");
  },
});
