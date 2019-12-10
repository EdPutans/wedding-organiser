import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import colors from '../../colors.scss';
import { getIsMobile } from '../../redux/app/selectors';

const testtext = `<div>Find me atwww.example.com agnfple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjv>Find me atwww.example.com agnfple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjv>Find me atwww.example.com agnfple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjv>Find me atwww.example.com agnfple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjv>Find me atwww.example.com agnfple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjv>Find me atwww.example.com agnfple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjkghdfkg fhgdkghnd also at httple.com agnfhdjkghdfkg fhgdkghnd also at htthdjkghdfkg fhgdkghnd also at http://stackoverflow.com  </div></div></div></div></div></div>`;

function urlify(text) {
  // TODO: sanitize this shit  https://dev.to/jam3/how-to-prevent-xss-attacks-when-using-dangerouslysetinnerhtml-in-react-1464
  // /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return `<a href="${url}">${url}</a>`;
  });
}

const ListItem = ({ item, onClickEdit, isMobile }) => {
  const [hovering, setHovering] = React.useState(false);

  const mobileIcons = () => (
    <React.Fragment>
      <ClickableIcon
        size={30}
        color={item.isFav ? colors.pink : 'lightgrey'}
        icon="fav_on"
        className="ListItem_mobile_fav"
      />
      <ClickableIcon
        size={30}
        onClick={onClickEdit}
        color={colors.blackish}
        icon="edit"
        className="ListItem_mobile_edit"
      />
    </React.Fragment>
  );

  return (
    <Paper
      className="ListItem"
      onMouseLeave={() => setHovering(false)}
      onMouseEnter={() => setHovering(true)}
    >
      {isMobile ? (
        mobileIcons()
      ) : (
        <ClickableIcon size={30} color={item.isFav ? colors.pink : 'lightgrey'} icon="fav_on" />
      )}
      <div className="ListItem_image" style={{ background: `url(${item.img})` }} />

      <div className="ListItem_description_container">
        <h3 className="ListItem_description_title">Item title</h3>
        <div
          className="ListItem_description_text"
          dangerouslySetInnerHTML={{ __html: urlify(testtext) }}
        />
      </div>
      {!isMobile && (
        <div className="ListItem_edit">
          {hovering && <ClickableIcon onClick={onClickEdit} color={colors.blackish} icon="edit" />}
        </div>
      )}
    </Paper>
  );
};

ListItem.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  item: {
    id: PropTypes.number.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string,
      }),
    ),
    img: PropTypes.string.isRequired,
    text: PropTypes.string,
  },
};

ListItem.defaultProps = {
  item: {
    links: [],
    id: null,
    img: null,
    text: '',
  },
};

const mapDispatchToProps = dispatch => ({
  isMobile: getIsMobile(dispatch),
});

export default connect(mapDispatchToProps)(ListItem);
