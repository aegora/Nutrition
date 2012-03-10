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
          {name: "output", classes: "sample-output"},
          {kind: "onyx.IconButton", src: "images/larrow.png" }

        ] }
    ], // end base components
    extendWorkoutPane: function(inSender, inEvent) {
        //var color = this.$.workoutpane.hasNode().value;
        this.$.workoutpane.toggleMinMax();
        //var dot = this.getComponents();
        //var list = ["nil"];
        //for (var a in dot) {list.push(a.toString()); }
        //this.$.output.setContent(list);
    },
    extendNutritionPane: function(inSender, inEvent) {
        //var color = this.$.input.hasNode().value;
        this.$.nutritionpane.toggleMinMax();
        //var dot = this.getComponents();
        //var list = ["nil"];
        //for (var a in dot) {list.push(a.toString()); }
        //this.$.output.setContent(list);
    }
});