// Registering component in log-component.js
AFRAME.registerComponent("lights", {
    schema:{
        width: {type: "number", default: 0.75 },
        depth: { type: "number", default: 0.06125 },
        height: { type: "number", default: 0.375}
    },
  
    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "box",
            width: this.data.width,
            depth: this.data.depth,
            height: this.data.height
        });
        this.el.setAttribute("material", { color: "yellow"});
    }
  })
  