import React, { useState, useEffect } from 'react';
import '../components/App.css';
import Article from '../components/Article';

function Blog() {

const [ articles, setArticles ] = useState([]);

useEffect(() => {
fetch("https://illuminate-website.firebaseio.com/articles.json", {
method: "GET",
})
.then(response => {
return response.json();
})
.then(responseData => {
const updatedArticles = responseData.map(article => {
return ({
...article,
})
})
setArticles(updatedArticles)
})
.catch(error => {
console.log("Something went wrong! " + error);
})
}
, []);

let articleList = articles.map(art => {
return (
<Article key={Math.random()} heading={art.title} subheading={art.subheading} text={art.content} />
)
}
)

return (
<div style={{textAlign: "center"}}>
  {articleList}

  <br /><br /><br />

  <section className='flexSection flex-center'>
    <div className='articleBox'>
      <h1>All I see are ghouls</h1>
      <div className='borderMask'></div>
    </div>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam quibusdam in repellat sit? Recusandae
      omnis eum natus magni dolores.</span>
    <a href="" className='baseButton'>Read full article</a>
  </section>

  <section className='flexSection flex-center'>
    <div className='articleBox'>
      <h1>All I see are ghouls</h1>
      <div className='borderMask'></div>
    </div>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam quibusdam in repellat sit? Recusandae
      omnis eum natus magni dolores.</span>
    <a href="" className='baseButton'>Read full article</a>
  </section>

  <section className='flexSection flex-center'>
    <div className='articleBox'>
      <h1>All I see are ghouls</h1>
      <div className='borderMask'></div>
    </div>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam quibusdam in repellat sit? Recusandae
      omnis eum natus magni dolores.</span>
    <a href="" className='baseButton'>Read full article</a>
  </section>
</div>
);
}

export default Blog;