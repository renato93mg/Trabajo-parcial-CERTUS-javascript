// div con id renderizado
const renderizado = document.getElementById('renderizado')

axios.get('bd.json', {
    responseType: 'json'
})
    .then(function (res) {
        if (res.status = 200) {
            const arreglo = res.data
            for (let i = 0; i < arreglo.productos.length; i++) {
                
                // div card
                let carta = "<div class='card' style='width: 18rem;'>" +
                    "<img src=" + arreglo.productos[i].url + " class='card-img-top' alt='...' width='100px' height='250px'>" +
                    "<div class='card-body'>" +
                    "<h5 class='card-title'>Codigo: " + arreglo.productos[i].id + "</h5>" +
                    "<p class='card-text'>Descripcion: " + arreglo.productos[i].nombre + "</p>" +


                    // boton para activar el modal
                    "<button type='button' class='btn btn-success' data-toggle='modal' data-target='#exampleModal"+arreglo.productos[i].id+"'>" +
                    "Comprar" +
                    "</button>" +

                    // modal por cada producto
                    "<div class='modal fade' id='exampleModal"+arreglo.productos[i].id+"' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>" +
                    "<div class='modal-dialog'>" +
                    "<div class='modal-content'>" +
                    "<div class='modal-header'>" +
                    "<h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>" +
                    "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                    "<span aria-hidden='true'>&times;</span>" +
                    "</button>" +
                    "</div>" +
                    "<div class='modal-body'>" + arreglo.productos[i].nombre +
                    "</div>" +
                    "<div class='modal-footer'>" +
                    "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>" +
                    "<button type='button' class='btn btn-primary'>Save changes</button>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +

                    "</div>" +
                    "</div>";
                // imprime un div de clase card por cada producto ademas de su respectivo modal
                renderizado.innerHTML = renderizado.innerHTML + carta;
            }
        }
    })
    .catch(function (err) {
        console.log(err)
    })


