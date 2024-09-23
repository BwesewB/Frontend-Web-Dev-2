import { useState } from "react";

export default function Story({ story }){
    const[popup, setPopup] = useState(true)

    return(
        <>
            {
                popup ?
                    <div className="story">
                        <span className="delete" onClick={() => setPopup(false)}>x</span>
                        <div className="story_header">
                            <div className="story_image">
                                <img src={story.image_url ? story.image_url : 'https://placehold.co/600x400'} alt={`${story.title}`} className="storyImage"/>
                            </div>
                            <div>
                                <h1><a href={story.link}>{story.title}</a></h1>
                                <h3 className="story_creator">By: {story.creator}</h3>
                            </div>
                        </div>
                        <p className="storyDescription">{story.description}</p>
                    </div>
                        : <></>
            }
        </>
    )
}