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
                //{content: "Nutrition Header Bar" },
                {kind: "onyx.custom.AnimatedToggleButton", onContent: "Nutrition", offContent: "Workouts", onChange: "changePane",
                style: "background: #B1B1B1 url(../images/gradient-invert.png) repeat-x bottom;"}
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
                {kind: "onyx.Slideable", name: "nutritionpane", value: 100, max: 100, min: 0, unit: "%",
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
    changePane: function(inSender, inEvent) {
        // event.value = 0 means nutrition is to be shown.
        var n = this.$.nutritionpane;
        var w = this.$.workoutpane;

        // inEvent.value =0  -> Nutrition to be displayed.
        if ( inEvent.value == 0) {
            // if w is extended, retract it.
            if (w.value != 0) {
                w.toggleMinMax();
            }
            n.toggleMinMax();
        } else {

            if (n.value != 0) {
                n.toggleMinMax();
            }
            w.toggleMinMax();

        }
            //this.$.nutritionpane.toggleMinMax();
            //this.$.workoutpane.toggleMinMax();
        /*
        } else {

            this.$.workoutpane.toggleMinMax();
            this.$.nutritionpane.toggleMinMax();

        }
    */

    }
});