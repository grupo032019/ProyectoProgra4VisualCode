/*
$(document).ready(function () {
    $("#tabla").DataTable({
        "scrollx": true
    });
    $('.dataTables_length').addClass('bs-select');
});
$.ajax({
    url: "http://www.json-generator.com/api/json/get/bOqGJTkDaW?indent=2",
    type: "GET",
    success: function (response) {
        console.log(response);
        for (i in response) {
            $("#datos").append(`
                            <tr>
                             <td>`+ response[i].cedula + `</td>
                             <td>`+ response[i].nombre + `</td>
                             <td>`+ response[i].apellidos + `</td>
                             <td>`+ response[i].email + `</td>
                             <td>`+ response[i].phone + `</td>
                             <td>
                              <button><i class="fas fa-edit"> </i></button>
                              <button><i class="fas fa-trash-alt"> </i></button>
                              </td>
                            </tr>
                        `);
        }
    }

});*/