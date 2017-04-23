$(document).ready(function () {
    var array = [];
    var MyRows = $('table#tbl').find('tr');

    for (var i = 0; i < MyRows.length; i++) {
        array[i] = $(MyRows[i]).find('td');
        for (var j = 0; j < array[i].length; j++) {
            array[i][j] = $(MyRows[i]).find('td:eq(' + j + ')').html();
        }
    }

    $("button.sort").click(function () {
        var ind = $(this).parent().index();
        $("button.red").removeClass("red");
        $(this).addClass("red");

        if ($(this).hasClass("up")) {
            Array.prototype.sort.call(array, function (obj1, obj2) {
                if (obj1[ind] < obj2[ind]) return -1;
                if (obj1[ind] > obj2[ind]) return 1;
                return 0;
            });
        } else {
            Array.prototype.sort.call(array, function (obj1, obj2) {
                if (obj1[ind] < obj2[ind]) return 1;
                if (obj1[ind] > obj2[ind]) return -1;
                return 0;
            });
        }

        $.each(array, function (key, val) {
            var str = "";
            if (key > 0) {
                for (var i = 0; i < val.length; i++) {
                    str += "<td>" + val[i] + "</td>";
                }
                $("tr:eq(" + key + ")").html(str);
            }
        });
    });

});  
