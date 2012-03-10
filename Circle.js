enyo.kind({
    name: "Circle",
    kind: "Control",
    published: {
        color: "magenta",
        bgColor: "black"
    },
    handlers: {
        down: "downHandler",
        up: "upHandler"
    },
    content: "Hi",
    style: "padding: 2px 6px; border: 3px solid; border-radius: 20px; cursor: pointer;",
    create: function() {
        this.inherited(arguments);
        this.colorChanged();
    },
    colorChanged: function() {
        this.applyStyle("border-color", this.color);
    },
    bgColorChanged: function() {
        this.applyStyle("background-color", this.bgColor);
    },
    downHandler: function(inSender, inEvent) {
        this.applyStyle("background-color", "white");
    },
    upHandler: function(inSender, inEvent) {
        this.applyStyle("background-color", "black");
    }
});