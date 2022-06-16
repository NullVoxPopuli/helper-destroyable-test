import Component from '@glimmer/component';
import { registerDestructor } from '@ember/destroyable';

import { invokeHelper } from '@ember/helper';
import { getValue } from '@glimmer/tracking/primitives/cache';

import { CustomHelper } from './custom-helper';

class MyHelper extends CustomHelper {
  aProperty = 'oh my!';

  constructor(owner) {
    super(owner);

    console.log('creating');
    registerDestructor(this, () => {
      console.log('destroying');
    });
  }
}

export default class DemoComponent extends Component {
  getValue = getValue;
  invokeHelper = invokeHelper;

  myHelper = MyHelper;
}
