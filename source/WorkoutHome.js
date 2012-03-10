enyo.kind({
    name: "WorkoutHome",
    kind: enyo.Control,
    tag: "div",
    style: "border-style: solid; border-width: 2px; " +
        "padding: 10px; margin: 10px; min-height: 50px",
    /* The Workout Home contains these items:

       Button 1: Add/ Review Workout
       Button 2: Add/ Review workout templates
       Button 3: Review Workout Statistics (graphs)
     */

    components: [
        new enyo.Control({
            tag: "div",
            components: [
            { tag: "table", name: "layout_table",
                components: [
                    { tag: "tr", name: "header_row", components: [
                        { tag: "td", name: "header_label", content: "Workout Tracker" }
                    ]
                    },
                    { tag: "tr", name: "first_row", components: [
                        { tag: "td", name: "add_workout", components: [
                            { tag: "button", content: "Add/ Review Workout", onTap: "do_nothing" }
                        ] }
                    ]
                    },
                    { tag: "tr", name: "second_row", components: [
                        { tag: "td", name: "add_template", components: [
                            { tag: "button", content: "Add/ Modify Workout Template", onTap: "do_nothing" }
                        ]}
                    ]
                    },
                    { tag: "tr", name: "third_row", components: [
                        { tag: "td", name: "workout_statistics", components: [
                            {tag: "button", content: "Statistics", onTap: "do_nothing" }
                        ]}
                    ]
                    },
                    { tag: "tr", name: "fourth_row", components: [
                        { tag: "td", name: "retreat", components: [
                            {tag: "button", content: "Main Menu", onTap: "go_home" }
                        ]}
                    ]
                    }
                ]
            }
        ],
            do_nothing: function() {
                // do nothing.
            },
            go_home: function() {
                var nutritionapp = new NutritionApp();
                nutritionapp.renderInto(document.body);
            }
    })
] // end components of WorkoutHome

});