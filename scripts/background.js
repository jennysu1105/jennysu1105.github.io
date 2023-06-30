function createStar(classname) {
    const star = document.createElement('div');
    star.className = 'star ' + classname;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = `${Math.random()*3}px`;
    star.style.height = star.style.width;
    document.getElementById('stars').appendChild(star);
  }
  
  function createStars(count, classname) {
    for (let i = 0; i < count; i++) {
      createStar(classname);
    }
  } 