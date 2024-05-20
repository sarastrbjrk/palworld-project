import React from 'react';
import { Link } from 'react-router-dom';
import { Quiz } from '../components/Quiz';

function QuizPage() {

    return (
        <>
            <Quiz />
            <div className="route-item">
                <Link to="/"> Go back</Link>
             </div>
        </>
      ) 
}

export default QuizPage;