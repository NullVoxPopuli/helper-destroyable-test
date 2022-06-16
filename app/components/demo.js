import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { registerDestructor } from '@ember/destroyable';

import { CustomHelper } from './custom-helper';

class MyHelper extends CustomHelper {
  aProperty = 'oh my!';

  constructor(owner) {
    super(owner);

    console.log('creating');
    registerDestructor(() => {
      console.log('destroying');
    });
  }
}

export default class DemoComponent extends Component {
  myHelper = MyHelper;

  @tracked show = true;

  toggle = () => (this.show = !this.show);
}
