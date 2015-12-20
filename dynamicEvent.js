function dynamicEvent() {
    return  ("ontouchstart" in document.documentElement) ? "touchstart": "click";
}
