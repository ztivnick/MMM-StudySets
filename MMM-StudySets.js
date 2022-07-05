Module.register("MMM-StudySets", {
  defaults: {
    category: "Education",
    card: "Welcome to study sets!",
    // Update progress every second
    timerInterval: 1000,
    progress: 0,
  },

  getStyles() {
    return [this.file("MMM-StudySets.css")];
  },

  notificationReceived(notification, payload, sender) {
    if (notification === 'MODULE_DOM_CREATED') {
      setInterval(() => {
        const currentProgress = this.defaults.progress;
        if (currentProgress >= 10) {
          // Start back at 10% so cycle only takes 10 seconds
          this.defaults.progress = 1;
          this.getNewStudySetCard();
        }
        else {
          this.defaults.progress = this.defaults.progress + 1;
        }
        this.updateDom();
      }, this.config.timerInterval);
    }
  },

  getDom: function () {
    var wrapper = document.createElement("div");
    var card = document.createElement("div");
    card.innerHTML = this.defaults.card;
    wrapper.innerHTML = this.cardTimer(this.defaults.progress)
    wrapper.appendChild(card);

    return wrapper;
  },

  cardTimer: function (progress) {
    let timer = "";
    for (let i = 1; i <= 10; i += 1) {
      timer = (i > progress) ? timer + "◯" : timer + "⬤";
    }
    console.log("Updated timer at " + progress + "0%");
    return timer;
  },

  getNewStudySetCard: function (card) {
    // Pick a random new card or use specified card
    // TODO: Use specified card
    // TODO: Get card from file
    this.defaults.card = (card == null) ? Math.floor(Math.random() * 10) : "";
  }

});
