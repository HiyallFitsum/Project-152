AFRAME.registerComponent("rim", {
    schema:{
        radius: {type: "number", default: .5 },
        height: { type: "number", default: .25 }
    },

    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height,
        });
        this.el.setAttribute("material", { color: "grey"});
    }
})