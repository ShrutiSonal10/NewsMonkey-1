import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  articles= [
    {
      "status": "ok",
      "totalResults": 10,
      "articles": [
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "US military plane carrying eight crashes off Japanese coast",
              "description": "Japanese broadcaster NHK said the Osprey was trying to land at Yakushima airport.",
              "url": "http://www.bbc.co.uk/news/world-asia-67563915",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0E83/production/_115651730_breaking-promo-976.png",
              "publishedAt": "2023-11-29T07:52:18.8294287Z",
              "content": "A US military aircraft with eight servicemen on board has crashed off the coast of Japan.\r\nJapanese officials said the CV-22 Osprey from Yokota air base in Tokyo, crashed off Yakushima Island on Wedn… [+743 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Thalidomide: Australia gives national apology to survivors and families",
              "description": "PM Anthony Albanese calls the birth defects scandal one of Australia's \"darkest\" medical chapters.",
              "url": "http://www.bbc.co.uk/news/world-australia-67562532",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F5EA/production/_131845926_a095e628de6eea6a5924a42fe7e668c3651132e80_474_4567_25701000x563.jpg",
              "publishedAt": "2023-11-29T06:52:15.4241841Z",
              "content": "Australia's prime minister has given a national apology to survivors of the thalidomide scandal and their families. \r\nIt comes over 60 years after the morning sickness drug started causing birth defe… [+2352 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Israel Gaza live news: 12 more Gaza hostages and 30 more Palestinian prisoners released under truce",
              "description": "Israel says 10 of its citizens and two Thais are free - and it has released another 30 Palestinians.",
              "url": "http://www.bbc.co.uk/news/live/world-middle-east-67562488",
              "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
              "publishedAt": "2023-11-29T05:22:17.3139197Z",
              "content": "Israel has\r\nreceived the names of more hostages who may be released from Gaza today, Prime Minister Benjamin Netanyahu's spokesman Tal\r\nHeinrich has told the BBC. \r\n\"We have received the list, we are… [+632 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Sean 'Diddy' Combs steps aside at Revolt TV network",
              "description": "The news comes after the hip hop mogul faced three sexual assault lawsuits in recent weeks.",
              "url": "http://www.bbc.co.uk/news/world-us-canada-67561291",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2D0E/production/_131843511_gettyimages-1641348632-1.jpg",
              "publishedAt": "2023-11-29T03:52:15.6577534Z",
              "content": "In the wake of three sex assault lawsuits against him, rap mogul Sean \"Diddy\" Combs has stepped aside as chairman of a TV network he co-founded. \r\nRevolt said on social media that the hip-hop star ha… [+2379 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Nikki Haley bags Koch endorsement in bid to replace Donald Trump",
              "description": "The endorsement comes as Mrs Haley seeks to establish herself as the alternative to Mr Trump.",
              "url": "http://www.bbc.co.uk/news/world-us-canada-67558465",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/156A2/production/_131841778_gettyimages-1806657823-1.jpg",
              "publishedAt": "2023-11-29T02:52:18.6265843Z",
              "content": "A powerhouse donor base that has funded conservative causes for more than two decades says it is swinging behind Nikki Haley's 2024 presidential bid.\r\nBillionaire Charles Koch's network has raised mi… [+3943 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Watch: Japanese volcano spews ash, rock 200m into sky",
              "description": "An explosive eruption sends volcanic rock hurtling into the sea around Niijima Island, south of Tokyo.",
              "url": "http://www.bbc.co.uk/news/world-asia-67562779",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/B3E6/production/_131845064_p0gwhyxm.jpg",
              "publishedAt": "2023-11-29T01:07:17.6418337Z",
              "content": "An explosive eruption last week sent volcanic rock hurtling into the sea around Niijima Island, located 150km (93 miles) south of the Japanese capital Tokyo. \r\nThe moment of the eruption was captured… [+216 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Burlington, Vermont, shootings leave one troubling question: Why?",
              "description": "Investigators are looking for clues on whether the attack on three Palestinian students was a hate crime.",
              "url": "http://www.bbc.co.uk/news/world-us-canada-67561375",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A3D8/production/_131844914_6c69637c23fded9a67fbfd87b109f4a7aff04946.jpg",
              "publishedAt": "2023-11-29T00:07:22.736232Z",
              "content": "After a gunman shot three students of Palestinian descent in the US state of Vermont, police quickly made an arrest. But days later, they are still searching for a motive and say there is not yet eno… [+7439 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Thundersnow and whiteouts as winter weather hits US",
              "description": "Heavy snow blankets northern states creating dangerous conditions in first major snowfall of the season.",
              "url": "http://www.bbc.co.uk/news/world-us-canada-67548882",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BA6B/production/_131832774_p0gwhdrf.jpg",
              "publishedAt": "2023-11-28T22:37:18.7990998Z",
              "content": "Stolen forklift driver, 12, hits 10 cars in police chase. Video, 00:00:47Stolen forklift driver, 12, hits 10 cars in police chase"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Disgraced ex-lawyer Murdaugh 'stole from those closest to him'",
              "description": "The disgraced South Carolina lawyer, already serving life for murder, awaits sentence for financial fraud.",
              "url": "http://www.bbc.co.uk/news/world-us-canada-67550337",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A23D/production/_131833514_microsoftteams-image-31.png",
              "publishedAt": "2023-11-28T20:22:22.1839728Z",
              "content": "Ex-lawyer Alex Murdaugh has been confronted in court by his fraud victims, with one telling him: \"You chose to break the law that you swore to uphold.\"\r\nAs his victims spoke, he appeared to listen cl… [+3387 chars]"
          },
          {
              "source": {
                  "id": "bbc-news",
                  "name": "BBC News"
              },
              "author": "BBC News",
              "title": "Rosalynn Carter: Bidens and former first ladies in Georgia for tribute service",
              "description": "A host of former US presidents and first ladies - including Jill Biden - are expected to attend.",
              "url": "http://www.bbc.co.uk/news/world-us-canada-67558764",
              "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DA6A/production/_131841955_gettyimages-1806659870-1.jpg",
              "publishedAt": "2023-11-28T17:07:20.3247472Z",
              "content": "A host of ex-US presidents and other leaders are arriving in Atlanta to attend a memorial service for former first lady Rosalynn Carter. \r\nFormer President Jimmy Carter - who is 99 and receiving hosp… [+2203 chars]"
          }
      ]
  }
  ];
  constructor(){
    super();
    console.log("Hello I am a constructor");
    this.state={
      articles : this.articles,
      loading:false

    };
  }
    async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=8acccb607cdd488fb0cae19b6e2628b3";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});


  }
  render() {
    return (
      <div className="container my-3 ">
        <h2>NewsMonkey- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          
          return(
            <div className="col-md-4" key = {element.url}>
            <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
           </div>
          );
            
      
        })}
        
      </div>
    </div>
      
    );
  }
}
    
export default News;
