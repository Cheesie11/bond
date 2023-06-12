document.addEventListener('DOMContentLoaded', () => {
  const currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '.');
  document.getElementById('date').value = currentDate;
});
