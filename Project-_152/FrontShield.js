// Registering component in log-component.js
AFRAME.registerComponent("front", {
    schema:{
        width: {type: "number", default: 1.85 },
        depth: { type: "number", default: 0.06125 },
        height: { type: "number", default: 1.5}
    },
  
    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "box",
            width: this.data.width,
            depth: this.data.depth,
            height: this.data.height
        });
        this.el.setAttribute("material", { color: "#40EDFF"});
    }
  })
  