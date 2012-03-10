enyo.kind ({
    name: "FoodItem",
    kind: enyo.Control,
    tag: "div",
    style: "border-style: solid; border-width: 2px; " +
        "padding: 10px; margin: 10px; min-height: 50px",

    published: {
        icon: ""
    },
    components: [
        { tag: "img", name: "icon",
            style: "width: 50px; height: 50px; float: left; padding-right: 10px" },
    ],
    create: function() {
        this.inherited(arguments);
        this.iconChanged();
    },
    iconChanged: function() {
        this.$.icon.setAttribute("src", this.icon);
    }


});

