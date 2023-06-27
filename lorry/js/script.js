document.querySelectorAll('.products-container img','.products-container input').forEach(product =>{
  product.onclick = () =>{
    document.querySelector('.products-preview ').style.display = 'flex';
    document.querySelector('.preview img').src= product.getAttribute('src');
    let text= document.getElementsByClassName("product-text");
    console.log(text[1]);
  };
});
document.querySelector('.preview span').onclick = () =>{
  document.querySelector('.products-preview').style.display = 'none';
}