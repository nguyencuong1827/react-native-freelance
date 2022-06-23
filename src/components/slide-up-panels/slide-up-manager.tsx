import React from 'react';

class SlideUpManager {
  childComponentFunc = null;
  containerHandler: any = {};
  config: any = {};
  hasPreMotion = false;
  constructor() {
    this.childComponentFunc = null;
    this.config = {layoutConfig: {}};
    this.hasPreMotion = false;
  }

  setContainerHandler(handler: React.MutableRefObject<{}>) {
    this.containerHandler = handler;
  }

  resetChildComponentFunc() {
    this.childComponentFunc = null;
    this.config = {};
    this.containerHandler?.rerenderIfAny(false);
  }

  present(comFunc: any, config: any) {
    this.childComponentFunc = comFunc;
    if (config) {
      this.config = config;
    }
    if (this.containerHandler) {
      this.containerHandler?.rerenderIfAny(true);
    }
  }
  dismiss() {
    if (this.containerHandler) {
      this.containerHandler.dismissAnimation();
    }
  }
}

const instance = new SlideUpManager();
export {instance as SlideUpManager};
