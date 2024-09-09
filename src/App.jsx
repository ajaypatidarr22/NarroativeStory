
import React, { useState } from 'react';

function App() {
  const [story, setStory] = useState(null);

  const fetchStory = async(id) => {
     await  fetch(`/api/stories/${id}`)
      .then((response) => {
         return response.json() 
        })

      .then((data) => {
        return setStory(data)
      })
      .catch((error) => {
         console.log(error)
        });
  };

  const handleChoice = (nextId) => {
    fetchStory(nextId);
  };

  if (!story) {
    fetchStory(1);
  }

  return (
    <div className='border-2 border-black border-solid rounded-xl w-1/2 p-5 m-auto mt-20'> 
      { story ? (
        <div>
          <h1>{story.title}</h1>
          <p>{story.content}</p>
          {story.choices.map((choice, index) => (
            <button key={index} onClick={() => handleChoice(choice.nextId)} className='bg-purple-500 border-2 border-solid border-black px-5 mx-10 mt-3 rounded-xl' >
              {choice.text}
            </button>
          ))}
        </div>
      ) : ( <p>Loading...</p>)}
    </div>
  );
}

export default App;










