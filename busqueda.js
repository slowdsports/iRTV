<!--TODO-->
        <script>
        $(document).ready(function(){
          $("#channelSearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#channelsList div").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });
        </script>
        <!--PAIS-->
        <script>
        $(document).ready(function(){
          $("#countrySearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#countryList div").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });
        </script>
        <!--CATEGORIA-->
        <script>
        $(document).ready(function(){
          $("#categorySearch").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#categoryList div").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });
        </script>