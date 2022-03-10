import React from 'react';
import './App.css';
import CharComponent from './CharComponent';

class App extends React.Component {
  componentDidMount() {
    document.title = "공백 문자 모음"
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="title">공백 문자 모음</p>
          <p className="title-description">Instagram에서 사용될 수 있는 공백 문자들 모음입니다.</p>
        </header>
        <body>
          <hr />
          <p className="title">목록</p>
          <CharComponent char={"​"} name={"폭 없는 공백"} unicode={"U+200B"} />
          <CharComponent char={"ᅟ"} name={"한글 초성 채움 문자"} unicode={"U+115F"} />
          <CharComponent char={"ᅠ"} name={"한글 중성 채움 문자"} unicode={"U+1160"} />
          <CharComponent char={"ㅤ"} name={"한글 채움 문자"} unicode={"U+3164"} />
          <CharComponent char={"ﾠ"} name={"반각 한글 채움 문자"} unicode={"U+FFA0"} />
          <CharComponent char={"⠀"} name={"점자 패턴 공백"} unicode={"U+2800"} />
        </body>
        <footer>
          <p>© Huntingbear21. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
