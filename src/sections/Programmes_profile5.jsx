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
      <h2 className="text-3xl font-bold mb-8 text-center">LATEST NEWS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-center items-center h-48 bg-gray-200">
              <img className="object-cover" src={article.imageUrl} alt={article.title} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <h5 className="text-gray-600 text-sm mb-4">{article.date}</h5>
              <h4 className="text-gray-700">{article.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </section>
  );
};

export default NewsSection;
