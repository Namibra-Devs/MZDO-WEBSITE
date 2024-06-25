// src/components/NewsSection.jsx

import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import news from "../assets/images/news.jpg"
import float1 from "../assets/images/float1.jpg"
import float2 from "../assets/images/float2.jpg"





const NewsSection = () => {
  const newsArticles = [
    {
      title: "Community Garden Project Launched",
      date: "June 1, 2024",
      description: "The Moshie Zongo Development organization has launched a new community garden project to promote sustainable agriculture and community engagement.",
      imageUrl: news
    },
    {
      title: "New Health Clinic Opens",
      date: "May 25, 2024",
      description: "A new health clinic has been opened in the Moshie Zongo community to provide essential health services to residents.",
      imageUrl: float1
    },
    {
      title: "Educational Workshop Series Announced",
      date: "May 15, 2024",
      description: "A series of educational workshops focusing on financial literacy, health, and wellness will be held over the next three months.",
      imageUrl: float2
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
    <Navbar />
    <div className="container mx-auto px-4">
  <h2 className="text-center mb-5 bg-success text-white ">LATEST NEWS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
    {newsArticles.map((article, index) => (
      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
        <div className="flex justify-center items-center h-48 bg-gray-200">
          <img className="object-cover w-full h-full" style={{width:"100%",  borderTopRightRadius: '70px', 
         borderTopLeftRadius: '70px', 
         borderBottomRightRadius: '70px',  
         borderBottomLeftRadius: '70px', }} src={article.imageUrl} alt={article.title} />
        </div>
        <div className="p-4 md:p-6 flex flex-col justify-between flex-grow">
          <h3 className="text-xl font-bold mb-2 text-center ">{article.title}</h3>
          <h5 className="text-gray-600 text-sm mb-4 text-center">{article.date}</h5>
          <h4 className="text-gray-700 text-center">{article.description}</h4>
        </div>

      </div>
    ))}
  </div>
</div>
<div class="container mt-5 flex flex-col items-start px-4 sm:px-0">
    <label class="text-lg font-semibold mb-2">Leave a comment</label>
    <textarea class="rounded-2xl bg-gray-200 border-0 w-full max-w-3xl mb-2 p-3 resize-vertical" style={{borderRadius:'30px',backgroundColor:'#F2F2F2'}} name="" id="" cols="100" rows="5"></textarea>
    
    <div class="flex items-center mb-2">
        <i class="bi bi-check2-square mr-2"></i>
        <span>Remember me</span>
    </div>
    
    <a href="#" class="btn btn-success btn-sm flex items-center justify-center mt-2 px-4 py-2 text-sm">
        POST COMMENTS <i class="bi bi-send ml-2"></i>
    </a>
</div>


    <Footer />
  </section>
  );
};

export default NewsSection;
