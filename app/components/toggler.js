import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

export default class Toggler extends Component {
  @tracked show = true;

  toggle = () => (this.show = !this.show);
}

setComponentTemplate(
  hbs`
    <div class="border">
      {{#if this.show}}
        {{yield}}
      {{/if}}

      <br>

      <button type="button" {{on 'click' this.toggle}}>
        Toggle {{@label}}
      </button>

      <br><br>

      Current value: {{this.show}}
    </div>
`,
  Toggler
);
