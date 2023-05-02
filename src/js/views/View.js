import icons from '../../img/icons.svg';

export default class View {
  _data;

  /*@use JSDoc*/
  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render = true] if false, create markup string instead of rendering to the DOM
   * @return {undefined | string} A markup string is returned if render = false
   * @this {Object} View instance
   * @author Kyryl Sherstobaiev
   * @todo Finish implementation
   *
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generatorMarkup();

    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    // if (!data || (Array.isArray(data) && data.length === 0))
    //   return this.renderError();

    this._data = data;
    const newMarkup = this._generatorMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    // console.log(curElements);
    // console.log(newElements);

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT
      if (!newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== '') {
        // console.log(newEl.firstChild?.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // Update changed ATTRIBUTES

      if (!newEl.isEqualNode(curEl)) {
        // console.log(newEl.attributes);
        // console.log(Array.from(newEl.attributes));
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value
          ));
      }
    });

  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class='spinner'>
          <svg>
            <use href='${icons}#icon-loader'></use>
          </svg>
        </div>
  `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
     <div class='error'>
            <div>
              <svg>
                <use href='${icons}#icon-alert-triangle'></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _renderMessage(message = this._message) {
    const markup = `
     <div class='message'>
            <div>
              <svg>
                <use href='${icons}#icon-smile'></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

}