
// Overlay = {
//   data: undefined,
//   config: {},
//   state: {
//     visible: false
//   }
// };

Overlay = function (input) {

};

Overlay.prototype.data = undefined;
Overlay.prototype.config = {};
Overlay.prototype.state = {
  visible: false
};


Overlay.prototype.create = function (input) {
  this.data = input;
  return;
};
Overlay.prototype.config = function (config) {
  this.config = config;
  return;
};
Overlay.prototype.report = function () {
  return this.data;
};

Overlay.prototype.isVisible = function () {
  return this.state.visible;
};
Overlay.prototype.visible = function (input) {
  this.state.visible = input;
  return;
};
