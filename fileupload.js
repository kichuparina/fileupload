var selected_id;
var raddomid = 1;
(function ($) {

    $.fn.fileupload = function () {
        raddomid = new Date().getUTCMilliseconds();
        //this.each(function () {
        //    $(this).text("Hello, World!");
        //});

        $(this).append(' <input type="text" class="form-control" disabled>');
        $(this).append('<span class="input-group-btn"><button class="btn btn-primary btn-sm btn_file"  type="button">Upload new image</button></span>');
        $(this).find('input[type="file"]').attr('id', "file" + raddomid);
        $(this).find('input[type="text"]').attr('id', "text" + raddomid);
        $(this).find('button').attr('data-id', "file" + raddomid);
        $(this).find('button').attr('id', raddomid);
        $('.btn_file').unbind('click').click(function () {

            var id = $(this).attr('data-id');
            selected_id = $(this).attr('id');
            $('#' + id).trigger('click');
        });

        $("input:file").change(function () {
            var fileName = $(this).val();
            $("#text" + selected_id).val(fileName);
        });
    }

}(jQuery));