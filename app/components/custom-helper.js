import { createCache, getValue } from '@glimmer/tracking/primitives/cache';
import { setOwner } from '@ember/application';
import { associateDestroyableChild } from '@ember/destroyable';
import {
  capabilities as helperCapabilities,
  setHelperManager,
} from '@ember/helper';

export class CustomHelper {
  constructor(owner) {
    setOwner(this, owner);
  }
}

class CustomManager {
  capabilities = helperCapabilities('3.23', {
    hasValue: true,
    hasDestroyable: true,
  });

  constructor(owner) {
    this.owner = owner;
  }

  createHelper(Class) {
    return new Class(this.owner);
  }

  getValue(instance) {
    return instance;
  }

  getDestroyable(instance) {
    return instance;
  }
}

setHelperManager((owner) => new CustomManager(owner), CustomHelper);
