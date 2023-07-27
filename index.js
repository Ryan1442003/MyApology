function notForgiveClicked() {
    var notForgiveBtn = document.getElementById('notForgiveBtn');
    notForgiveBtn.style.transform = 'translateX(500px)';
    notForgiveBtn.style.pointerEvents = 'none';
  }

  function forgiveClicked() {
    window.location.href = 'terimakasih_my_love.html';
  }