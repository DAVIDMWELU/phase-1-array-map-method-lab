const chai = require('chai');
const expect = chai.expect;

// Import the titleCased function
const { titleCased } = require('../index');

describe('index.js', function () {
  it('titleCased()', function () {
    const result = titleCased();
    console.log("Result of titleCased:", result); // Log the result here
    expect(result).to.eql([
      'What Does The This Keyword Mean?',
      'What Is The Constructor OO Pattern?',
      'Implementing Blockchain Web API',
      'The Test Driven Development Workflow',
      'What Is NaN And How Can We Check For It',
      'What Is The Difference Between StopPropagation And PreventDefault?',
      'Immutable State And Pure Functions',
      'What Is The Difference Between == And ===?',
      'What Is The Difference Between Event Capturing And Bubbling?',
      'What Is JSONP?'
    ]);
  });
});
