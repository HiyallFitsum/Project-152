AFRAME.registerComponent("rotate-car", {
    schema:{
        clickCounter: {type: "number", default: 0 },
        yRotation: {type: "number", default: 0 },
    },

    init: function() {
        this.el.setAttribute("geometry", {
            primitive: "box",
            width: this.data.width,
            depth: this.data.depth,
            height: this.data.height
        });
    },

    update: function() {
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1;
            if (this.data.clickCounter%2 != 0) {
                const rotation = { x: 0, y: 20, z: 0};
                this.el.setAttribute("rotation", rotation);
            } else if (this.data.clickCounter%2 === 0)
            {
                const rotation = { x: 0, y: 0, z: 0};
                this.el.setAttribute("rotation", rotation);
            }
        })
      }
  })
