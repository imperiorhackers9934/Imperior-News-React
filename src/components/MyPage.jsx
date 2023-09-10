//Importing Required Packages and Dependencies
import React, {useState,useEffect} from 'react'
import Mycard from './Card.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InfiniteScroll from "react-infinite-scroll-component";
import Myplaceholder from "./placeholder.jsx"
import LoadingBar from 'react-top-loading-bar'
const apikey = 'a229f34c73e2407da89d52bc7943d512'
//Main Function to Render page content
function Mypage(props) {
	//Required Hooks
	const [articles, setArticles] = useState([]) //Sets No of Articles to `articles` variable
	const [loading, setLoading] = useState(true) //Sets Loading of page to `true` or `false` to `loading` variable
	const [page, setPage] = useState(1) //Sets the page no `page` variable
	const [totalResults, setTotalResults] = useState(0) //Sets Total no of results provided by API
	const [progress, setProgress] = useState(0) //Sets the progress of loading bar
//Function to Capitalize first letter
  const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
	//Function to Fetch News
  const mynews = async ()=>{
	setProgress(30)
	let getting = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.type}&page=${page}&pageSize=15&apiKey=${apikey}`);
	setProgress(50)
	let result = getting
	setProgress(60)
	let got = await result.json()
	setProgress(70)
	setTotalResults(got.totalResults)
	setArticles(got.articles)
	setProgress(100)
	setLoading(false)
	}//Function to Add More News to page while scrolling
	const Addnewnews = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.type}&apiKey=${apikey}&page=${page+1}&pageSize=15`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
	
 useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.type)} - ImperiorNews`;
        mynews();
        // eslint-disable-next-line
    }, [])
    return (
	<>
	<LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
	 {loading && <Myplaceholder/>}
      <InfiniteScroll dataLength={articles.length} next={Addnewnews} hasMore={articles.length !== totalResults} loader={<Myplaceholder/>}> 
		<Row className="my-5" id="myrow">
       {articles.map((element) => {
                            return <Col key={element.url} style={{display: 'flex',justifyContent: 'space-between',alignItems: 'stretch'}}>
            <Mycard title={element.title} image={element.urlToImage} text={element.description} link={element.url} date={element.publishedAt} source={element.source.name}/>
            </Col>
                        })}
        </Row>
      </InfiniteScroll></>
    );
}

export default Mypage;
