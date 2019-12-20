import React from 'react';
import './TextArea.css';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import axios from 'axios';
import Highlighter from 'react-highlight-words';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: ''
    };
  }

  monitorEditorChanges = value => {
    this.setState({ editor: value });
    console.log(this.state.editor);
  };

  sendInput = () => {
    let bodyFormData = new FormData();
    bodyFormData.set('text', this.state.editor);
    axios({
      method: 'post',
      url: 'http://localhost:5000/convert',
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  };

  wordCount = str => {
    let count = 0;
    let result = str
      .split(' ')
      .map(word => word.split("'"))
      .map(sequence => {
        if (sequence.length >= 2) {
          count++;
        }
        return sequence;
      });
    for (let i = 0; i < count; i++) {
      result.push('countword');
    }
    return result.length - 1;
  };

  keyword = str => {
    let countWord = [];
    const stopWord = [
      'à',
      'à demi',
      'à peine',
      'à peu près',
      'absolument',
      'actuellement',
      'ainsi',
      'alors',
      'apparemment',
      'approximativement',
      'après',
      'après-demain',
      'assez',
      'assurément',
      'au',
      'aucun',
      'aucunement',
      'aucuns',
      "aujourd'hui",
      'auparavant',
      'aussi',
      'aussitôt',
      'autant',
      'autre',
      'autrefois',
      'autrement',
      'avant',
      'avant-hier',
      'avec',
      'avoir',
      'beaucoup',
      'bien',
      'bientôt',
      'bon',
      "c'",
      'ça',
      'car',
      'carrément',
      'ce',
      'cela',
      'cependant',
      'certainement',
      'certes',
      'ces',
      'ceux',
      'chaque',
      'ci',
      'comme',
      'comment',
      'complètement',
      "d'",
      "d'abord",
      'dans',
      'davantage',
      'de',
      'début',
      'dedans',
      'dehors',
      'déjà',
      'demain',
      'depuis',
      'derechef',
      'des',
      'désormais',
      'deux',
      'devrait',
      'diablement',
      'divinement',
      'doit',
      'donc',
      'dorénavant',
      'dos',
      'droite',
      'drôlement',
      'du',
      'elle',
      'elles',
      'en',
      'en vérité',
      'encore',
      'enfin',
      'ensuite',
      'entièrement',
      'entre-temps',
      'environ',
      'essai',
      'est',
      'et',
      'étaient',
      'état',
      'été',
      'étions',
      'être',
      'eu',
      'extrêmement',
      'fait',
      'faites',
      'fois',
      'font',
      'force',
      'grandement',
      'guère',
      'habituellement',
      'haut',
      'hier',
      'hors',
      'ici',
      'il',
      'ils',
      'infiniment',
      'insuffisamment',
      'jadis',
      'jamais',
      'je',
      'joliment',
      'la',
      'là',
      'le',
      'les',
      'leur',
      'leurs',
      'lol',
      'longtemps',
      'lors',
      'ma',
      'maintenant',
      'mais',
      'MDR',
      'même',
      'mes',
      'moins',
      'mon',
      'mot',
      'naguère',
      'ne',
      'ni',
      'nommés',
      'non',
      'notre',
      'nous',
      'nouveaux',
      'nullement',
      'ou',
      'où',
      'oui',
      'par',
      'parce',
      'parfois',
      'parole',
      'pas',
      'pas mal',
      'passablement',
      'personnes',
      'peu',
      'peut',
      'peut-être',
      'pièce',
      'plupart',
      'plus',
      'plutôt',
      'point',
      'pour',
      'pourquoi',
      'précisément',
      'premièrement',
      'presque',
      'probablement',
      'prou',
      'puis',
      'quand',
      'quasi',
      'quasiment',
      'que',
      'quel',
      'quelle',
      'quelles',
      'quelque',
      'quelquefois',
      'quels',
      'qui',
      'quotidiennement',
      'rien',
      'rudement',
      "s'",
      'sa',
      'sans',
      'sans doute',
      'ses',
      'seulement',
      'si',
      'sien',
      'sitôt',
      'soit',
      'son',
      'sont',
      'soudain',
      'sous',
      'souvent',
      'soyez',
      'subitement',
      'suffisamment',
      'sur',
      "t'",
      'ta',
      'tandis',
      'tant',
      'tantôt',
      'tard',
      'tellement',
      'tellement',
      'tels',
      'terriblement',
      'tes',
      'ton',
      'tôt',
      'totalement',
      'toujours',
      'tous',
      'tout',
      'tout à fait',
      'toutefois',
      'très',
      'trop',
      'tu',
      'un',
      'une',
      'valeur',
      'vers',
      'voie',
      'voient',
      'volontiers',
      'vont',
      'votre',
      'vous',
      'vraiment',
      'vraisemblablement'
    ];
    str
      .replace("'", ' ')
      .split(' ')
      .forEach(word => {
        if (!stopWord.includes(word)) {
          if (countWord.filter(test => test[0] === word).length === 0) {
            const result = [word, 1];
            countWord = [...countWord, result];
          } else {
            countWord.forEach(test => {
              if (test[0] === word) {
                test[1] += 1;
              }
            });
          }
        }
      });
    let final = countWord
      .sort((number1, number2) => {
        if (number1[1] === number2[1]) return number1[0] > number2[0] ? 1 : -1;
        else return number1[1] - number2[1];
      })
      .map(number => number[0]);
    final.reverse();
    return final[0];
  };

  render() {
    return (
      <>
        <ReactMde
          value={this.state.editor}
          onChange={this.monitorEditorChanges}
        />
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[this.keyword(this.state.editor)]}
          autoEscape={true}
          textToHighlight={this.state.editor}
        />
        <p>Nombre de mot(s) : {this.wordCount(this.state.editor)}</p>
        <button
          onClick={this.sendInput}
          class="example_e"
          href="add-website-here"
          target="_blank"
          rel="nofollow noopener"
        >
          Convert into HTML
        </button>
      </>
    );
  }
}
