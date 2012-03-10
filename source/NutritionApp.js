/* The application contains three main components:

 Workout tracking
 Food tracking
 Settings

 */
enyo.kind({
    name: "NutritionApp",
    kind: "Control",
    tag: "div",
    components: [
        // Header bar with Title.
        {kind: "onyx.Toolbar", components: [
            {kind: "FittableColumns",  components:[
                {content: "Nutrition Header Bar" },
                {kind: "onyx.Button", ontap: "extendNutritionPane", content: "Nutrition", style: "margin-left: 10px;"},
                {kind: "onyx.Button", ontap: "extendWorkoutPane", content: "Workouts"}

            ]}
        ]},

        // body region..
        {style: "padding: 10px;", components: [



            {style: "border: 1px solid silver; height: 250px; position: relative; overflow: hidden;", components: [
                {kind: "onyx.Slideable", name:"workoutpane", value: 0, max: 0, min: -100, unit: "%",
                    classes: "enyo-fit", style: "background: #404040;", components: [
                        {kind: "WorkoutHome"},
                        {kind: "onyx.Grabber", style: "position: absolute; bottom: 14px; right: 14px;"}
                ]},
                {kind: "onyx.Slideable", name: "nutritionpane", value: 0, max: 100, min: 0, unit: "%",
                    classes: "enyo-fit", style: "background: #1E5D89;", components: [
                        {kind: "NutritionHome"},
                        {kind: "onyx.Grabber", style: "position: absolute; bottom: 14px; left: 14px;"}
                ]}
            ]},

          {tag: "br"},

          {tag: "br"},
          {name: "output", classes: "sample-output box o", content: "test"},
          {kind: "onyx.IconButton", src: "images/larrow.png" }

        ] }
    ], // end base components
    extendWorkoutPane: function(inSender, inEvent) {
        // if the nutrition window is open AND the
        if (this.$.nutritionpane.value != 100 &&
            this.$) {
            this.$.nutritionpane.toggleMinMax();
        }
        this.$.workoutpane.toggleMinMax();
    },
    extendNutritionPane: function(inSender, inEvent) {
        // if the workout pane is open, close it b4 opening nutrition pane
        /*if (this.workoutpane.value != 0) {
            this.$.workoutpane.toggleMinMax();
        }     */
        this.$.nutritionpane.toggleMinMax();

    }
});