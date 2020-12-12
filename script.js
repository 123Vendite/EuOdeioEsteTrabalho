function share(titulo, texto, url) {
  if (navigator.share) {
    navigator.share({
      title: 'web.dev',
      text: 'Check out web.dev.',
      url: url,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
}
