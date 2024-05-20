import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../components/Quiz';
import CarouselComponent from '../components/Carousel';
import '../styles/QuizPage.css'; 

function QuizPage() {

    return (
        <div className="quiz-page">
            <div className="text-block">
                <h3>
                    Check out pals and try to match them to their description below!
                </h3>  
            </div>
            <CarouselComponent />
            <Quiz />
            <div className="route-item">
                <Link to="/"> Go back</Link>
             </div>
        </div>
      ) 
}

export default QuizPage;