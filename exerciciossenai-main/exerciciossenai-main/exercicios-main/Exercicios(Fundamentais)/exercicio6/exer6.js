// Yasmin Siqueira Lobo
document.getElementById('formComentario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    var comentario = document.getElementById('comentario').value;

    
    var novoComentario = document.createElement('li');
    novoComentario.textContent = comentario;

   
    var listaComentarios = document.getElementById('listaComentarios');
    listaComentarios.appendChild(novoComentario);

    
    document.getElementById('comentario').value = '';
});
