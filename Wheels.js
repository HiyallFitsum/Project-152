AFRAME.registerComponent("wheel", {
    schema:{
        radius: {type: "number", default: .625 },
        height: { type: "number", default: .25 }
    },

    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height,
        });
        this.el.setAttribute("material", { color: "#000000"});
    }
})