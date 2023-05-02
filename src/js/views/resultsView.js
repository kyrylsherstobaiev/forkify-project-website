import View from './View';
import icon from '../../img/icons.svg';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again!';
  _message = '';

  _generatorMarkup() {
    // console.log(this._data);

    return this._data
      .map(result => previewView.render(result,false))
      .join('');
  }
}

export default new ResultsView();