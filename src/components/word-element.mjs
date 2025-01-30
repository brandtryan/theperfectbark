// word-element.mjs

class WordElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.animation = this.getAttribute('data-animation') || 'breath'; // Default animation
    this.frames = this.getAttribute('data-frames') || '';
    this.timing = this.getAttribute('data-timing') || '';
    this.startTime = this.getAttribute('data-start-time') || '';

    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add any styles for the word element here */
      .word {
          animation: ${this.animation} 2s ease-in-out infinite;
        }
      </style>
      <span class="word">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define('word-element', WordElement);
