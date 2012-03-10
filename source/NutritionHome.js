/* The Nutrition Home contains the following components

 Button 1: Add/ Review Daily Meal Details
 Button 2: Review Nutrition Statistics
 Button 3: Add/ Modify Nutrition Goals

 */

enyo.kind({
    name: "NutritionHome",
    kind: "Control",
    tag: "div",
    published: {
        dateOffset: 0
    },
    components: [
        // Toolbar widget
        { kind: "onyx.Toolbar", components: [

            {kind: "FittableColumns", components: [
                // Buttons to change the date being recorded.
                {kind: "onyx.IconButton", src: "images/larrow.png", style: "height: 32px; width: 32px;", onTap: "decrementDate" },
                {kind: "onyx.Button", id: "date_display_button", content: "nil", onTap: "showMonth"},
                {kind: "onyx.IconButton", src: "images/rarrow.png", style: "height: 32px; width: 32px;", onTap: "incrementDate" }
            ]}

        ]}, // end toolbar components.

        // page body content

            // Styling shell for input region
            {kind: "onyx.InputDecorator", components: [
                // Actual input field for widget
                {kind: "onyx.Input", name: "input0", value: "green", placeholder: "Set Color"},
                {kind: "onyx.Button", content: "spleen", onTap: "buttonTap"}
            ]},
        // Styling shell for input region
        {tag:"br"},
        {kind: "onyx.InputDecorator", components: [
            // Actual input field for widget
            {kind: "onyx.Input", name: "input1", placeholder: "Food name"},
            {kind: "onyx.Input", name: "input2", placeholder: "Calories"},
            {kind: "onyx.Input", name: "input3", placeholder: "Carbohydrate"},
            {kind: "onyx.Input", name: "input4", placeholder: "Protein"},
            {kind: "onyx.Input", name: "input5", placeholder: "Fat"},
            {kind: "onyx.Button", onTap: "buttonTap"}
        ]}



        ], // end object contents..
        decrementDate: function(insender, inevent) { // decrease the date counter.
            dateOffset -= 1;
            var d = new Date();
            // Note: values less than 1 or greater than the daily month limit automatically wrap to next month.
            d. set_date(dateOffset);
            this.$.date_display_button.content = d.toLocaleDateString();
            this.$.date_display_button.render();
        },
        incrementDate: function(insender, inevent) { // increase the date counter.
            dateOffset += 1;
            var d = new Date();
            // Note: values less than 1 or greater than the daily month limit automatically wrap to next month.
            d. set_date(dateOffset);
            this.$.date_display_button.content = d.toLocaleDateString();
            this.$.date_display_button.render();
        },
        showMonth: function() {
            // bring up the monthly date chooser.
        }
});