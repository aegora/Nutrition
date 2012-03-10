enyo.kind({
    name: "PlayApp",
    kind: "Control",
    components: [
        {name: "input", tag: "input", attributes: {value: "red"}},
        {tag: "br"},
        {tag: "button", content: "Set Color", ontap: "buttonTap"},
        {tag: "br"},
        {name: "output", classes: "sample-output"}
    ],
    buttonTap: function(inSender, inEvent) {
        var color = this.$.input.hasNode().value;
        this.$.output.applyStyle("background", color);
        var dot = this.getComponents();
        var list = ["nil"];
        for (var a in dot) {list.push(a.toString()); }
        this.$.output.setContent(list);
    }
});