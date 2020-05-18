import React from 'react'

export const RatingDisplay = ({rating}) => {

    
    let ratingColor = {
        border: '30px solid green'
    }
    
    // if (rating >= 8.5){
    //     ratingColor = {
    //         backgroundColor: "green"
    //     }
    // }else if (rating >= 7){
    //     ratingColor = {
    //         backgroundColor: "yellow"
    //     }
    // } else if (rating >= 4){
    //     ratingColor = {
    //         backgroundColor: "orange"
    //     }
    // } else {
    //     ratingColor = {
    //         backgroundColor: "red"
    //     }
    // }

    return (
        <div className="RatingDisplay">
            <span className="ratingContainer">
                <span className="rating" >
                    {rating}
                </span>
            </span>
        </div>
    )
}
