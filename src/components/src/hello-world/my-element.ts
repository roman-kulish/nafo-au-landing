import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
    static styles = css`div {
  color: blue;
}`;

    protected render() {
        return html`<div>Hello World!</div>`;
    }
}