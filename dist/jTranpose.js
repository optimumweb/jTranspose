(function($) {
    $.fn.jTranpose = function () {
        return this.each(function () {
            let $table = $(this),
                $rows = $table.find('tr'),
                nRows = $rows.length,
                nColumns = $rows.first().children().length;

            $table.empty();

            for (let c = 0; c < nColumns; c++) {
                let $row = $('<tr>');

                for (let r = 0; r < nRows; r++) {
                    let $r = $rows.eq(r),
                        $cell = $r.children().eq(c).clone();

                    $row.append($cell);
                }

                $table.append($row);
            }
        });
    };
}(jQuery));
