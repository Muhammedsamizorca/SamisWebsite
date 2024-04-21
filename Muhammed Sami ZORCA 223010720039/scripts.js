function showContent(sectionId) {
  var contents = document.querySelectorAll('.content');
  contents.forEach(function(content) {
    content.classList.add('hidden');
  });

  var selectedContent = document.getElementById(sectionId);
  selectedContent.classList.remove('hidden');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  console.log('İsim:', name);
  console.log('E-posta:', email);
  console.log('Mesaj:', message);
  alert('Mesajınız başarıyla gönderildi. Teşekkür ederiz!');
});
