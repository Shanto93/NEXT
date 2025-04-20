import React from "react";

interface TopicsProps {
  params: {
    topics: string[];
  };
}

const Topics = ({ params }: TopicsProps) => {
  const { topics } = params;

  if (topics) {
    return (
      <div>
        <h2>Topics: </h2>
        {topics.map((topic, index) => (
          <div key={index}>
            <p>{topic}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>Subjects Page</div>;
};

export default Topics;
