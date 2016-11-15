
      $( function() {
        var dateFormat = "mm/dd/yy",
          from = $( "#page_From" )
            .datepicker({
              defaultDate: "+1w",
              changeMonth: true,
              numberOfMonths: 2,
            })
            .on( "change", function() {
              to.datepicker( "option", "minDate", getDate( this ) );
            }),
          to = $( "#page_To" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
          })
          .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
          });
     
        function getDate( element ) {
          var date;
          try {
            date = $.datepicker.parseDate( dateFormat, element.value );
          } catch( error ) {
            date = null;
          }
          return date;
        }
      });
      
  