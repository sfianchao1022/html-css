$(document).ready(function () {
    // $(function () {
    $.ajax({
        url: "https://spring-rest-hw.herokuapp.com/demo/all",
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data[0].id);
            console.log("fetch json in api success!");
            // var markup = '<tr><td text="book-id">'+data[0].id+'</td><td class="book-title">'+data[0].title+'</td><td class="book-author">'+data[0].author+'</td><td class="book-isbn">'+data[0].isbn+'</td><td class="book-publisher">'+data[0].publisher+'</td></tr> ';

            for (var i = 0; i < data.length; i++) {
                var markup = '<tr><td>' + data[i].id + '</td><td>' + data[i].title + '</td><td>' + data[i].author + '</td><td>' + data[i].isbn + '</td><td>' + data[i].publisher + '</td><td>' + data[i].publication_year + '</td><td>' + data[i].last_modified_date + '</td><td>' + data[i].created_date + '</td><td>' + data[i].created_at + '</td><td>' + data[i].updated_at + '</td></tr> ';
                $(".table-body").append(markup);
            }
            // $(".table-body").append(markup);

            // $('.greeting-id').append(data[0].id);
            // $('.greeting-title').append(data[0].title);
            // $('.greeting-author').append(data[0].author);
            // $('.greeting-isbn').append(data[0].isbn);
            // $('.greeting-publisher').append(data[0].publisher);

        },
        error: function (thrownError) {
            console.log(thrownError);
        }
        // }).then(function (data) {
        //     console.log(data);
        //     $('.greeting-id').append(data.id);
        //     $('.greeting-title').append(data.title);
        //     $('.greeting-author').append(data.author);
        //     $('.greeting-isbn').append(data.isbn);
        //     $('.greeting-publisher').append(data.publisher);
    });

    $('.btn').click(function (e) {
        e.preventDefault(); // prevent form from reloading page
        $.ajax({
            url: 'https://spring-rest-hw.herokuapp.com/demo/get',
            type: 'POST',
            data: {
                id: $("#id-input").val()
            },
            // beforeSend: function () {
            //     alert("searching book Info with id");
            // },
            error: function () {
                alert("no this id");
            },
            'success': function (data) {
                alert("get book Info success");
                var searched_id_markup = '<tr><td>' + data.id + '</td><td>' + data.title + '</td><td>' + data.author + '</td><td>' + data.isbn + '</td><td>' + data.publisher + '</td><td>' + data.publication_year + '</td><td>' + data.last_modified_date + '</td><td>' + data.created_date + '</td><td>' + data.created_at + '</td><td>' + data.updated_at + '</td></tr> ';
                $(".searched-id-table-body").append(searched_id_markup);
                // $('.book-id').append(data.id);
                // $('.book-title').append(data.title);
                // $('.book-author').append(data.author);
                // $('.book-isbn').append(data.isbn);
                // $('.book-publisher').append(data.publisher);
            }
        });

        // return false;
    });


    // $("#id-input").submit(function () {
    //     var item = $("#id-input-form").val();
    //     alert("button clicked " + item);
    //     // $.post("http://127.0.0.1:8081/demo/get",
    //     // {
    //     //     id:item
    //     // },
    //     // function(data){
    //     //   alert("Data: " + data.title);
    //     // });
    //     $.ajax({
    //         type: "POST",
    //         url: "http://127.0.0.1:8081/demo/get",
    //         data: {
    //             id: item
    //         },
    //         dataType: 'json',
    //         success: function (data) {
    //             alert(data.author);
    //             $('.book-id').append(data.id);
    //             $('.book-title').append(data.title);
    //             $('.book-author').append(data.author);
    //             $('.book-isbn').append(data.isbn);
    //             $('.book-publisher').append(data.publisher);
    //         }
    //     });
    // });

});