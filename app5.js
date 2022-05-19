import HikesController from "./hikesController";
// on load grab the array and insert it to the page
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});