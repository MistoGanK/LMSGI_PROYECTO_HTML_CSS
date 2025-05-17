// Objetos con value link

const rutas = {
  'link_index': '/proyecto_html_css/index.html',
  'link_subir_meme': '/proyecto_html_css/views/subir_meme.html',
  'link_inicio': '/proyecto_html_css/views/inicio.html',
  'link_ultimos': '/proyecto_html_css/views/favoritos.html',
  'link_trending': '/proyecto_html_css/views/inicio.html',
  'link_aleatorio': '/proyecto_html_css/views/inicio.html',
  'link_favoritos': '/proyecto_html_css/views/favoritos.html',
  'link_subidas': '/proyecto_html_css/views/mis_subidas.html',
  'link_ranking': '/proyecto_html_css/views/ranking.html',
  'link_post': '/proyecto_html_css/views/post.html',
  'link_twitter': 'https://twitter.com',
  'link_instagram': 'https://instagram.com'
};

for (let clase in rutas){
  const elementos = document.getElementsByClassName(clase);
  // Esto equivale a; const link_index = document.getElementsByClassName('link_index');
  // Pero iteramos en nuestra constante rutas por cada uno de sus indices
  for (let i of elementos){
    i.addEventListener('click',()=>{
      window.location.href = rutas[clase];
    });
  };
};
// // Debug
// for (let clase in rutas){
//   const elementos = document.getElementsByClassName(clase);
//   console.log('elemento:',elementos);

//   for (let i of elementos){
//     console.log('i:',i);
//   }
// };
