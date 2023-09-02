import React from "react";

function About(props) {
  return (
    <div
      className={` p-3 mb-2 text-${props.Mode === "light" ? "dark" : "light"}`}>
      <div className="container mt-5">
        <h1 className="text-center">Text Utilities</h1>
        <p className="lead">
          Text utilities, often referred to as text tools or text processing
          tools, are software or web-based applications designed to perform
          various operations on text data.
        </p>
        <p>
          These tools are used to manipulate, analyze, and transform text in
          different ways. The specific functions of text utilities can vary, but
          here are some common tasks they typically perform:
        </p>
        <ul>
          <li>
            Text Formatting: Text utilities  facilitate
            tasks like  converting between upper and lower case.
            
          </li>
          <li>
            Character and Word Count: These tools can count the number of
            characters, words, paragraphs, and sentences in a given text. This
            is useful for tracking text length in documents, essays, or social
            media posts.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
