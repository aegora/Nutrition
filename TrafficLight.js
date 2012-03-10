enyo.kind({
    name: "TrafficLight",
    kind: "Control",
    style: "position: absolute; padding: 4px; border: 1px solid black; background-color: silver;",
    components: [
        {kind: "Circle", color: "red", ontap: "circleTap"},
        {kind: "Circle", color: "yellow", ontap: "circleTap"},
        {kind: "Circle", color: "green", ontap: "circleTap"}
    ],
    circleTap: function(inSender, inEvent) {
        var lights = {red: "tomato", yellow: "#FFFF80", green: "lightgreen"};
        if (this.lastCircle) {
          this.lastCircle.setBgColor("black");
        }
        this.lastCircle.setBgColor(lights[inSender.color]);
        this.lastCircle = inSender;
    }
});