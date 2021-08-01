import React from "react";

const Gshow = (props) => {
  const { result, info } = props;
  console.log(result, info);
  console.log(result.link);
  return (
    <div className="show">
      <div className="show__info">
        {info ? `Total results :${info.totalResults}` : ""}
        {/* {result ? `Total results :${result.totalResult}` : ""} */}
      </div>
       {result.length > 0
        ? result.map((results) => {
            <div className="show__details" key={results}>
              <div className="show__link">
                <a href={results.displayLink}>{results.displayLink}</a>
              </div>
              <div className="show__title">
                <a href={results.title}> {results.title}</a>
              </div>
              <div className="show__description">
                <p>{results.snippet}</p>
              </div>
            </div>;
          })
        : ""} 
      {/* <div className="show__details">
        <div className="show__link">
          <a href={result[0].displayLink}>{result[0].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[0].link}> {result[0].title}</a>
        </div>
        <div className="show__description">
          <p>{result[0].snippet}</p>
        </div>
      </div>
    <div className="show__details">
        <div className="show__link">
          <a href={result[1].displayLink}>{result[1].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[1].link}> {result[1].title}</a>
        </div>
        <div className="show__description">
          <p>{result[1].snippet}</p>
        </div>
      </div>
       <div className="show__details">
        <div className="show__link">
          <a href={result[2].displayLink}>{result[2].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[2].link}> {result[2].title}</a>
        </div>
        <div className="show__description">
          <p>{result[2].snippet}</p>
        </div>
      </div>
      <div className="show__details">
        <div className="show__link">
          <a href={result[3].displayLink}>{result[3].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[3].link}> {result[3].title}</a>
        </div>
        <div className="show__description">
          <p>{result[3].snippet}</p>
        </div>
      </div>
      <div className="show__details">
        <div className="show__link">
          <a href={result[4].displayLink}>{result[4].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[4].link}> {result[4].title}</a>
        </div>
        <div className="show__description">
          <p>{result[4].snippet}</p>
        </div>
      </div>
      <div className="show__details">
        <div className="show__link">
          <a href={result[5].displayLink}>{result[5].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[5].link}> {result[5].title}</a>
        </div>
        <div className="show__description">
          <p>{result[5].snippet}</p>
        </div>
      </div>
      <div className="show__details">
        <div className="show__link">
          <a href={result[6].displayLink}>{result[6].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[6].link}> {result[6].title}</a>
        </div>
        <div className="show__description">
          <p>{result[6].snippet}</p>
        </div>
      </div>
      <div className="show__details">
        <div className="show__link">
          <a href={result[7].displayLink}>{result[7].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[7].link}> {result[7].title}</a>
        </div>
        <div className="show__description">
          <p>{result[7].snippet}</p>
        </div>
      </div>
      <div className="show__details">
        <div className="show__link">
          <a href={result[8].displayLink}>{result[8].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[8].link}> {result[8].title}</a>
        </div>
        <div className="show__description">
          <p>{result[8].snippet}</p>
        </div>
      </div>
       <div className="show__details">
        <div className="show__link">
          <a href={result[9].displayLink}>{result[9].displayLink}</a>
        </div>
        <div className="show__title">
          <a href={result[9].link}> {result[9].title}</a>
        </div>
        <div className="show__description">
          <p>{result[9].snippet}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Gshow;
