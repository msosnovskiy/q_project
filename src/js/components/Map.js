export default class Map {
  constructor(map, classPrompt) {
    this.map = map;
    this.classPrompt = classPrompt;
  }

  setEventListener() {
    this.map.addEventListener('touchmove', handler, {passive: true}, (event) => {
      if (this.map.contains(event.target) && (event.targetTouches.length < 2)) {
        this.map.classList.add(this.classPrompt);
      }
    });

    this.map.addEventListener('touchend', (event) => {
      if (this.map.contains(event.target)) {
        this.map.classList.remove(this.classPrompt);
      }
    });
  }

}