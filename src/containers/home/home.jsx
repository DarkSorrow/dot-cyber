import React, { PureComponent } from 'react';
import {
  Button,
  Input,
  Pane,
  SearchItem,
  Text,
  TextInput,
} from '@cybercongress/gravity';
import Electricity from './electricity';

import { StartState } from './stateActionBar';

import {
  getIpfsHash,
  getString,
  search,
  getRankGrade,
  getDrop,
  formatNumber as format,
} from '../../utils/search/utils';
import { formatNumber } from '../../utils/utils';
import { Loading, ActionBarLink } from '../../components';
import Gift from '../Search/gift';

import { CYBER, PATTERN } from '../../utils/config';

const giftImg = require('../../image/gift.svg');

// const grade = {
//   from: 0.0001,
//   to: 0.1,
//   value: 4
// };

const obj = {
  a: 1,
  b: [1, 2, 3],
  c: {
    ca: [5, 6, 7],
    cb: 'foo',
  },
};

class Home extends PureComponent {
  constructor(props) {
    super(props);
    localStorage.setItem('LAST_DURA', '');
    this.state = {
      valueSearchInput: '',
      result: false,
      searchResults: [],
      loading: false,
      targetColor: false,
      boxShadow: 3,
      keywordHash: '',
      resultNull: false,
      query: '',
      drop: false,
    };
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange = newPath => {
    const { history } = this.props;
    const path = newPath;
    history.push(path);
  };

  onChangeInput = async e => {
    const { value } = e.target;
    if (value.length === 0) {
      await this.setState({
        result: false,
      });
    }
    await this.setState({
      valueSearchInput: value,
    });
  };

  handleKeyPress = async e => {
    const { valueSearchInput } = this.state;
    const { funcUpdate } = this.props;

    if (valueSearchInput.length > 0) {
      if (e.key === 'Enter') {
        this.setState({
          targetColor: true,
        });
        this.chengColorButton();
        this.setState({
          loading: true,
        });
        this.routeChange(`/search/${valueSearchInput}`);
        funcUpdate(valueSearchInput);
      }
    }
  };

  onCklicBtn = () => {
    const { valueSearchInput } = this.state;
    const { funcUpdate } = this.props;

    if (valueSearchInput.length > 0) {
      this.setState({
        loading: true,
      });
      this.routeChange(`/search/${valueSearchInput}`);
      funcUpdate(valueSearchInput);
    }
  };

  chengColorButton = () => {
    setTimeout(() => {
      this.setState({
        targetColor: false,
      });
    }, 200);
  };

  showCoords = event => {
    let boxShadow = 0;

    const mX = event.pageX;
    const mY = event.pageY;
    const from = { x: mX, y: mY };

    const element = document.getElementById('search-input-home');
    const off = element.getBoundingClientRect();
    const { width } = off;
    const { height } = off;

    const nx1 = off.left;
    const ny1 = off.top;
    const nx2 = nx1 + width;
    const ny2 = ny1 + height;
    const maxX1 = Math.max(mX, nx1);
    const minX2 = Math.min(mX, nx2);
    const maxY1 = Math.max(mY, ny1);
    const minY2 = Math.min(mY, ny2);
    const intersectX = minX2 >= maxX1;
    const intersectY = minY2 >= maxY1;
    const to = {
      x: intersectX ? mX : nx2 < mX ? nx2 : nx1,
      y: intersectY ? mY : ny2 < mY ? ny2 : ny1,
    };
    const distX = to.x - from.x;
    const distY = to.y - from.y;
    const hypot = Math.sqrt(distX * distX + distY * distY);
    // consoleelement = document.getElementById('some-id');.log(width, height);
    // console.log(`X coords: ${x}, Y coords: ${y}`);
    if (width > hypot) {
      boxShadow = ((width - hypot) / 100) * 2.5;
    }

    if (boxShadow < 5) {
      boxShadow = 6;
    }
    this.setState({
      boxShadow,
    });
  };

  render() {
    const {
      valueSearchInput,
      result,
      searchResults,
      loading,
      targetColor,
      boxShadow,
      keywordHash,
      resultNull,
      query,
      drop,
    } = this.state;

    let searchItems = [];

    if (loading) {
      return (
        <div
          style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Loading />
          <div style={{ color: '#fff', marginTop: 20, fontSize: 20 }}>
            Searching
          </div>
        </div>
      );
    }

    if (drop) {
      searchItems = searchResults.map(item => <Gift item={item} />);
    } else {
      searchItems = searchResults.map(item => (
        <SearchItem
          key={item.cid}
          hash={item.cid}
          rank={item.rank}
          grade={item.grade}
          status="success"
          // onClick={e => (e, links[cid].content)}
        >
          {item.cid}
        </SearchItem>
      ));
    }

    return (
      <div style={{ position: `${!result ? 'relative' : ''}` }}>
        <main
          onMouseMove={e => this.showCoords(e)}
          className={!result ? 'block-body-home' : 'block-body'}
        >
          <Pane
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={result ? 0.3 : 0.9}
            transition="flex 0.5s"
            minHeight={100}
          >
            <input
              style={{
                width: '60%',
                height: 41,
                fontSize: 20,
                boxShadow: `0 0 ${boxShadow}px 0 #00ffa387`,
                textAlign: 'center',
              }}
              placeholder="joint for validators"
              value={valueSearchInput}
              onChange={e => this.onChangeInput(e)}
              onKeyPress={this.handleKeyPress}
              className="search-input"
              id="search-input-home"
              autoComplete="off"
              autoFocus
            />
            {loading && (
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bottom: '30%',
                }}
              >
                <Loading />
              </div>
            )}
          </Pane>
          {result && (
            <Pane
              width="90%"
              marginX="auto"
              marginY={0}
              display="flex"
              flexDirection="column"
            >
              {!resultNull && (
                <Text
                  fontSize="20px"
                  marginBottom={20}
                  color="#949292"
                  lineHeight="20px"
                >
                  {`I found ${searchItems.length} results`}
                </Text>
              )}

              {resultNull && (
                <Text
                  fontSize="20px"
                  marginBottom={20}
                  color="#949292"
                  lineHeight="20px"
                >
                  I don't know{' '}
                  <Text fontSize="20px" lineHeight="20px" color="#e80909">
                    {query}
                  </Text>
                  . Please, help me understand.
                </Text>
              )}
              <Pane>{searchItems}</Pane>
            </Pane>
          )}
        </main>
        {!result && (
          <StartState
            targetColor={targetColor}
            valueSearchInput={valueSearchInput}
            onClickBtn={this.onCklicBtn}
          />
        )}
      </div>
    );
  }
}

export default Home;
