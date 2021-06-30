import React from 'react';
import './App.css';

import NavBar from  './components/NavBar/NavBar';
import Bbc from './components/Bbc/Bbc';
import Tvn24 from './components/Tvn24/Tvn24';
import FirstNews from './components/FirstNews/FirstNews';
import HackerNews from './components/HackerNews/HackerNews';
import Aljazeera from './components/Aljazeera/Aljazeera';
import Footer from './components/Footer/Footer';




class  App extends React.Component {
  constructor() {
    super()
    this.state = {
      allNews: {},
      showNews: false,
      route: 'home'
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({ route: newRoute })
  }

  componentWillMount() {
    fetch('https://eyobkibret15.pythonanywhere.com/')
      .then(res => res.json())
      .then(news => {
        this.setState({ showNews: true, allNews: news })
        console.log(this.state.allNews)
      })
  }
  render(){
    return (
      <div className="App">
        <NavBar />
        {this.state.showNews ? 
        <div className="newsCompnentsContainer">
          <div className="news"><FirstNews newsList={this.state.allNews.firstnews} /></div>
            <div className="news"><Tvn24 newsList={this.state.allNews.tvn24} /></div>
            <div className="news"><Aljazeera newsList={this.state.allNews.aljazeera} /></div>
            <div className="news"><HackerNews newsList={this.state.allNews.hackernews} /></div>
            <div className="news"><Bbc newsList={this.state.allNews.bbc} /></div>
            
        </div> :
        'Loading news....'}
        <Footer />
      </div>
      
    );
  }
}

export default App;
