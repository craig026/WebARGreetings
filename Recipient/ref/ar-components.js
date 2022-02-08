/* jshint esversion: 9 */
/* global THREE, AFRAME */

AFRAME.registerComponent("hide-in-ar-mode", {
	// Set this object invisible while in AR mode.
	// TODO: could this be replaced with bind="visible: !ar-mode"
	// with https://www.npmjs.com/package/aframe-state-component ?
	init: function () {
		this.el.sceneEl.addEventListener("enter-vr", () => {
			if (this.el.sceneEl.is("ar-mode")) {
				this.el.setAttribute("visible", false);
			}
		});
		this.el.sceneEl.addEventListener("exit-vr", () => {
			this.el.setAttribute("visible", true);
		});
	},
});

AFRAME.registerComponent("hide-on-hit-test-start", {
  init: function() {
    var self = this;
    this.el.sceneEl.addEventListener("ar-hit-test-start", function() {
      self.el.object3D.visible = false;
    });
    this.el.sceneEl.addEventListener("exit-vr", function() {
      self.el.object3D.visible = true;
    });
  }
});

window.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector("a-scene");
  const message = document.getElementById("dom-overlay-message");
	const taptoplace = document.getElementById("taptoplace");
	const welcomeScreen = document.getElementById("welcomeScreen");

  // If the user taps on any buttons or interactive elements we may add then prevent
  // Any WebXR select events from firing
  message.addEventListener("beforexrselect", e => {
    e.preventDefault();
  });

  sceneEl.addEventListener("enter-vr", function() {
    if (this.is("ar-mode")) {
      // Entered AR
			welcomeScreen.style.display = "none";
			message.style.display = "block";
			message.textContent = "";

      // Hit testing is available
      this.addEventListener(
        "ar-hit-test-start",
        function() {
          message.innerHTML = `Scanning environment, finding surface.`;
        },
        { once: true }
      );

      // Has managed to start doing hit testing
      this.addEventListener(
        "ar-hit-test-achieved",
        function() {
          message.innerHTML = `Select the location to place<br />By tapping on the screen.`;
					taptoplace.style.display = "block";
        },
        { once: true }
      );

      // User has placed an object
      this.addEventListener(
        "ar-hit-test-select",
        function() {
          // Object placed for the first time
          message.textContent = "Well done!";
					taptoplace.style.display = "none";
        },
        { once: true }
      );
    }
  });

  sceneEl.addEventListener("exit-vr", function() {
    message.textContent = "Exited Immersive Mode";
  });
});
