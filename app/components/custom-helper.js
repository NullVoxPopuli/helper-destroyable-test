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
    let owner = this.owner;

    let instance;

    let cache = createCache(() => {
      if (instance === undefined) {
        instance = new Class(owner);

        associateDestroyableChild(cache, instance);
      }

      return instance;
    });

    return cache;
  }

  getValue(cache) {
    let instance = getValue(cache);

    return instance;
  }

  getDestroyable(cache) {
    return cache;
  }
}

setHelperManager((owner) => new CustomManager(owner), CustomHelper);
