import React from 'react'
import StudyCard from '@/components/StudyCard';

const StudyCardPage = ({params}:{params: {cardIndex:number}} ):React.ReactNode => { 
    return (
        <div>
            <StudyCard index={params.cardIndex}/>
        </div>  
    )
}

export default StudyCardPage;
