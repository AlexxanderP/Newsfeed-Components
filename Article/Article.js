
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in article element
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = document.querySelectorAll('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.forEach (item => item.innerText = 'Open Seseme!!');
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    this.expandButton.forEach(item => item.addEventListener('click', this.expandArticle));
  }

  expandArticle() {
  // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.parentNode.classList.toggle('article-open');
  }
}


// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles  = document.querySelectorAll('.article');

// - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.
articles.forEach(article => new Article(article));



const articleHeader = document.querySelector(".articles .article h2");

articleHeader.addEventListener("dblclick", (e) => {
    e.target.style.cssText = "font-size : 3rem";
}); 

const titleHeader = document.querySelector(".articles .article h2");

titleHeader.addEventListener("dblclick", (e) => {
    e.target.style.cssText = "font-size : 3rem";
}); 


