import PropTypes from 'prop-types';
import * as BaseClasses from '../styles/BaseClasses';

const propTypes = {
  book: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  verse: PropTypes.string.isRequired,
};


function convertBookForURL(bookName) {

  if (!bookLookup[bookName]) {
    throw new Error('Unable to find book name ' + bookName);
  }

  return bookLookup[bookName];

}

const bookLookup = {
  '2 Corinthians': '2CO',
  'Colossians': 'COL',
  'John': 'JHN',
  'Ephesians': 'EPH',
};

const ScriptureLink = (props) =>
<a
  href={'https://www.bible.com/bible/114/' + convertBookForURL(props.book) + '.' + props.chapter + '.' + props.verse}
  target="_blank"
  className={`${BaseClasses.link}`}
  css={{color: 'black'}}
>
  {props.book + ' ' + props.chapter + ':' + props.verse}
</a>

ScriptureLink.propTypes = propTypes;

export default ScriptureLink;