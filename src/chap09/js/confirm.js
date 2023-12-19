document .querySelector('#fm').addEventListener('submit', function(e) {
  if (!window.confirm('OK to send?')) {
    e.preventDefault();
  }
}, false);