function titleCased(tutorials) {
  return tutorials.map(tutorial => {
    return tutorial.split(' ')
      .map(word => word.toUpperCase())  // Force all words to uppercase
      .join(' ');
  });
}
