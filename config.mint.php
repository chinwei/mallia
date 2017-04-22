<?php
    session_start();
    
    class SwitchConfig
    {
        public $name;
        public $rocker;
        public $plate;
    }
    
    // Store all the POST variables into switchConfig classes
    $i = 0;
    $switchConfigArray = array();
    while(isset($_POST["name" . $i]))
    {
        $switchConfig = new SwitchConfig();
        $switchConfig->name = $_POST["name" . $i];
        $switchConfig->rocker = $_POST["rocker" . $i];
        $switchConfig->plate = $_POST["plate" . $i];
        $switchConfigArray[$i] = $switchConfig;
        $i++;
    }
    
    // If switchConfigArray has been assigned, set as a session for use by preview.php
    if($i != 0)
    {
        $_SESSION["SwitchConfigArray"] = $switchConfigArray;
        //echo "<pre>";
        //echo print_r($_SESSION);
        //echo "</pre>";
        header('Location: preview.php');
        exit(); // exit() is needed to preserve the objects in the session variables across pages
    }
?>

<!DOCTYPE html>
<html class='no-js'>
  <head>
    <title>Mallia&trade; - Express Yourself Like Never Before</title>
    <meta name="viewport" content="initial-scale=1, user-scalable=no">
    <meta charset='utf-8' />
    
    
    <!-- MODIFIED BY CHUCK: Added. -->
    <script type="text/javascript">
        // Loop through all the saved switches, and create 3 fields each to store the name, rocker image and plate image.
        // The fields will be submitted when the form in a iframe is posted.
        function saveSwitches() {
            var postForm = $('#post_frame').contents().find('#form1');
            // alert($(postForm).length);
        
            if($('.panel ul li').length == 0)
                return;
            
            $('.panel ul li').each(function (index) {
                var name = $(this).data('id');
                var product = $(this).data('product');
                var rockerSrc = $(this).find('.rockerItem img').attr('src');
                var rockerColor = $(this).data('colorname');
                var plateSrc = $(this).find('.plateItem img').attr('src');
                var plateColor = $(this).data('platename');
                $("<input type='text' style='display:inline' />").attr('name', 'name' + index).val(name + '|' + product).appendTo(postForm);
                $("<input type='text' style='display:inline' />").attr('name', 'rocker' + index).val(rockerColor + '|' + rockerSrc).appendTo(postForm);
                $("<input type='text' style='display:inline' />").attr('name', 'plate' + index).val(plateColor + '|' + plateSrc).appendTo(postForm);
            });

            postForm.submit();
        }
    </script>
    <!-- / MODIFIED BY CHUCK: Added. -->
    
    
    <script src='http://code.jquery.com/jquery-1.7.2.min.js'></script>
    <script src='http://code.jquery.com/ui/1.10.0/jquery-ui.js'></script>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js'></script>
    <!-- jQuery -->
    <!-- %script{:src => "javascripts/jcoverflip.js"} -->
    <!-- bxSlider -->
    <script src='javascripts/bxSlider.js'></script>
    <script src='javascripts/easing.js'></script>
    <!-- jQuery UI -->
    <!-- %script{:src=>"javascripts/jquery-ui-1.9.2.custom.min.js"} -->
    <link href='stylesheets/jquery-ui-1.7.2.custom.css' media='screen' rel='stylesheet' type='text/css' />
    <!-- Roundabout -->
    <script src='javascripts/jquery.roundabout.js'></script>
    <!-- Colorbox -->
    <script src='javascripts/colorbox.js'></script>
    <link href='stylesheets/colorbox/colorbox.css' media='screen' rel='stylesheet' type='text/css' />
    <!-- JQuery SuperScrollarama -->
    <script src='javascripts/jquery.superscrollorama.js'></script>
    <!-- Caroufredsel -->
    <script src='http://cdn.jsdelivr.net/caroufredsel/6.1.0/jquery.carouFredSel-6.1.0-packed.js'></script>
    <!--[if gt IE 8]><!-->
	    <script src='http://cdn.jsdelivr.net/caroufredsel/6.1.0/helper-plugins/jquery.touchSwipe.min.js'></script>
    <!--<![endif]-->
    <!-- jQuery Qtip -->
    <link href='javascripts/qtip/jquery.qtip.css' rel='stylesheet' />
    <script src='javascripts/qtip/jquery.qtip.min.js'></script>
    <!-- Mousewheel -->
    <script src='javascripts/jquery.mousewheel.min.js'></script>
    <!-- Jquery ImageLoaded -->
    <script src='javascripts/jquery.imagesloaded.js'></script>
    <!-- Tweenlite -->
    <script src='javascripts/TweenMax.min.js'></script>
    <script src='javascripts/gs-plugins/ScrollToPlugin.min.js'></script>
    <!-- jQuery Draggable -->
    <script src='javascripts/jquery.ui.touch-punch.js'></script>
    <!-- Respond -->
    <script src='javascripts/jsmediaqueries.js'></script>
    <!-- Bootstrap -->
    <link href='stylesheets/bootstrap.css' media='screen' rel='stylesheet' type='text/css' />
    <!-- Nice Scroll -->
    <script src='javascripts/nicescroll.js'></script>
    <!-- Chosen -->
    <script src='javascripts/chosen/chosen.jquery.min.js'></script>
    <link href='javascripts/chosen/chosen.css' rel='stylesheet' />
    <!-- Main -->
    <link href='stylesheets/screen.css' media='screen' rel='stylesheet' type='text/css' />
    <script src='javascripts/scripts.js'></script>
    <script type="text/javascript">
    
        $(function() {
            <?php
                // If the switch session exists, port the PHP variables to Javascript 
                if(isset($_SESSION["SwitchConfigArray"]))
                {
                    echo "var nameArray = new Array();\r\n";
                    echo "var rockerArray = new Array();\r\n";
                    echo "var plateArray = new Array();\r\n";
             
                    $switchConfigArray = $_SESSION["SwitchConfigArray"];
                    $i = 0;

                    foreach($switchConfigArray as $switchConfig)
                    {
                        echo "nameArray[" . $i . "] = '" . $switchConfig->name . "';\r\n";
                        echo "rockerArray[" . $i . "] = '" . $switchConfig->rocker . "';\r\n";
                        echo "plateArray[" . $i . "] = '" . $switchConfig->plate . "';\r\n";
                        $i++;
                    }
                }
            ?>
            
            // Loop through the Javascript variables and create a row in the preview table for each group
            var i = 0;
            while(typeof nameArray !== 'undefined' && typeof nameArray[i] !== 'undefined')
            {
                var name = nameArray[i].split('|');
                var savedName = name[0];
                var product = name[1];
                
                var rocker = rockerArray[i].split('|');
                var rockerColor = rocker[0];
                var rockerSrc = rocker[1];
                
                var plate = plateArray[i].split('|');
                var plateColor = plate[0];
                var plateSrc = plate[1];
                
                var carouFredselList = $('.panel ul');
                
                // Add a new item to the carousel
                var sampleItem = "<li data-id='" + savedName + "' data-product='" + product + "' data-colorname='" + rockerColor + "' data-platename='" + plateColor + "'>";
                sampleItem += "<div class='edit'></div>";
                sampleItem += "<div class='del'></div>";
                sampleItem += "<div class='fauxItem'>";
                sampleItem += "<div class='rockerItem'><img alt='' src='" + rockerSrc + "' /></div>";
                sampleItem += "<div class='plateItem'><img alt='' src='" + plateSrc + "' /></div>";
                sampleItem += "</div>";
                sampleItem += "<p>" + savedName + "</p>";
                sampleItem += "</li>";
                carouFredselList.trigger('insertItem', '[' + sampleItem + ']');                
                
                // If the querystring has a selected switch which is the same as the one being looped through now, set the dropdown lists and name to it
                if(decodeURIComponent(location.search) == '?s=' + savedName)
                {
                    var listItem = $('li[data-id="' + savedName + '"]');
                    if (listItem.length > 0) {
                        listItem.addClass('active');
                        
                        // Load the name
                        $('#appendedInputButtons').val(savedName);
                        
                        var rockerSrc = listItem.find('.rockerItem img').attr('src');
                        var rockerTypeAndColor = rockerSrc.split('/').slice(-1)[0].split('.')[0];
                        var rockerType = rockerTypeAndColor.substring(0, rockerTypeAndColor.indexOf('rocker'));
                        var rockerColor = rockerTypeAndColor.substring(rockerTypeAndColor.indexOf('rocker'));

                        var plateSrc = listItem.find('.plateItem img').attr('src');
                        var plateColor = plateSrc.split('/').slice(-1)[0].split('.')[0];

                        $('#type').val('catalogue/' + rockerType + '.html').trigger('liszt:updated');
                        loadContent($('#type').val(), false, rockerColor, plateColor);
                        
                        // Show the 'Add New' button
                        $('#btnAddNewSwitch').css('display','inline');
                    }
                }
                
                i++;
            }
            // Hide the slideshow previous button at the start
		    $('.panel-container .prev').hide();
            
        });
         
        // Loop through all the saved switches, and create 3 fields each to store the name, rocker image and plate image.
        // The fields will be submitted when the form is posted.
        function getSwitchesAndSubmit() {
            if($('.panel ul li').length == 0)
            {
                alert('There are currently no switches in your shopping list to preview.');
                return;
            }
                
            $('.panel ul li').each(function (index) {
                var name = $(this).data('id');
                var product = $(this).data('product');
                var rockerSrc = $(this).find('.rockerItem img').attr('src');
                var rockerColor = $(this).data('colorname');
                var plateSrc = $(this).find('.plateItem img').attr('src');
                var plateColor = $(this).data('platename');
                $("<input type='text' style='display:none' />").attr('name', 'name' + index).val(name + '|' + product).appendTo('#form1');
                $("<input type='text' style='display:none' />").attr('name', 'rocker' + index).val(rockerColor + '|' + rockerSrc).appendTo('#form1');
                $("<input type='text' style='display:none' />").attr('name', 'plate' + index).val(plateColor + '|' + plateSrc).appendTo('#form1');
            });

            $('#form1').submit();
        }
        
        function loadContent($target, $random, $rockerColor, $plateColor) {
			    $.ajax({
			        url: $target,
			        cache: false,
			        success: function(message)
			        {
			            var HTMLContent = $(message)


			            /*
			            Loop through HTMLContent and find object with matching ID and store it in lookup object, then output as HTML.
			            */
			            var lookup = {};
			            for (var i = 0, len = HTMLContent.length; i < len; i++)
			            {
			                lookup[HTMLContent[i].id] = HTMLContent[i];
			            }
			            var $rockerList = $(lookup['rocker-color']).html()
			            var $plateList = $(lookup['plate-color']).html()

			            $('#rocker-color').empty().html($rockerList).trigger("liszt:updated");
			            $('select#plate-color').empty().html($plateList).trigger("liszt:updated");
                        
                        if ($rockerColor)
			                $('#rocker-color').val($rockerColor).trigger("liszt:updated");
			            if ($plateColor)
			                $('select#plate-color').val($plateColor).trigger("liszt:updated");
			                
			            updateImage()
			        },
			        statusCode: {
			            404: function()
			            {
			                alert("page not found");
			            }
			        }

			    });
		}
        
        function updateImage() {
			var rocker = $('select#type').val().replace('catalogue/', "").replace('.html','') + $('select#rocker-color').val() + '.png'
			var plate = $('select#plate-color').val() + '.png'
			var rockerImage = 'images/configurator/rocker/' + rocker
			var plateImage = 'images/configurator/plate/' + plate

			$('#rocker img').attr('src', rockerImage)
			$('#plate img').attr('src', plateImage)
        }
        
        
    </script>
  </head>
  <body class='config'>
    <form id="form1" action="config.php" method="post">
    <div class='container'>
      <div class='content-wrapper'>
        <div class='logo'>
          <a href='http://www.legrand.com.sg/products/wiring-devices/' target='_blank'>
            <h1>Legrand&reg;</h1>
          </a>
        </div>
        <div class='content'>
          <div class='config-wrapper scrollable'>
  <div class='padall'>
    <div class='col1'>
      <h2>Your desired Switch</h2>
      <p class='tiny'>Choose your Product &amp; Rocker</p>
      <select id='type' style='z-index: 9999'>
        <option class='tt01' data-target='type1' value='catalogue/type1.html'>1-gang switch</option>
        <!-- %option.tt02{:value=>"catalogue/type2.html", 'data-target'=>'type2'} 1-gang switched socket (BS) -->
        <!-- %option.tt03{:value=>"catalogue/type3.html", 'data-target'=>'type3'} 1-gang unswitched socket (BS) -->
        <option class='tt04' data-target='type4' value='catalogue/type4.html'>2-gang switch</option>
        <option class='tt05' data-target='type5' value='catalogue/type5.html'>2-gang illuminated switch</option>
        <option class='tt06' data-target='type6' value='catalogue/type6.html'>3-gang switch</option>
        <option class='tt07' data-target='type7' value='catalogue/type7.html'>4-gang switch</option>
        <!-- %option.tt08{:value=>"catalogue/type8.html", 'data-target'=>'type8'} Automatic switch -->
        <option class='tt09' data-target='type9' value='catalogue/type9.html'>Double data socket</option>
        <!-- %option.tt10{:value=>"catalogue/type10.html", 'data-target'=>'type10'} Downlighter -->
        <!-- %option.tt11{:value=>"catalogue/type11.html", 'data-target'=>'type11'} Euro-US socket -->
        <option class='tt12' data-target='type12' value='catalogue/type12.html'>Fan speed control</option>
        <!-- %option.tt13{:value=>"catalogue/type13.html", 'data-target'=>'type13'} German standard socket -->
        <!-- %option.tt14{:value=>"catalogue/type14.html", 'data-target'=>'type14'} Multistandard socket -->
        <option class='tt15' data-target='type15' value='catalogue/type15.html'>Rotary dimmer</option>
        <option class='tt16' data-target='type16' value='catalogue/type16.html'>Stand alone tuner</option>
        <option class='tt17' data-target='type17' value='catalogue/type17.html'>Telephone / data socket</option>
        <!-- %option.tt18{:value=>"catalogue/type18.html", 'data-target'=>'type18'} Television socket -->
      </select>
      <select id='rocker-color'></select>
      <p class='tiny'>Choose your Color</p>
      <select id='plate-color'></select>
      <p class='tiny'>Or take a chance and be suprised</p>
      <a class='btn' href='#' id='random' style='float: right'>Random</a>
      <p class='tiny' style='float: right; margin-right: 10px; text-align: right'>Or take a chance<br/>and be suprised</p>
    </div>
    <div class='col2'>
      <div class='faux' style='width: 278px; height: 278px; border:1px solid #f5f5f5; margin: 0 auto'>
        <div id='rocker'>
          <img alt='' src='images/configurator/rocker/type1rocker-1g-pearl.png' />
        </div>
        <div id='plate'>
          <img alt='' src='images/configurator/plate/silver.png' />
        </div>
      </div>
      <h5>Name your switch</h5>
      <div class='input-append'>
        <input id='appendedInputButtons' placeholder='e.g. Kitchen Switch 1' size='14' maxlength='30' type='text' style='width:200px' />
        <button id="btnSaveSwitch" class='btn' type='button'>Save</button>
        <button id="btnResetSwitch" class='btn' type='button' style='display:none'>Reset</button>
        <button id="btnAddNewSwitch" class='btn' type='button' style='display:none'>Add New</button>
      </div>
      <div class='clearfix'></div>
    </div>
    <h5>Shopping List</h5>
    <div class='cart'>
      <div class='col1'>
        <div class='panel-container'>
          <a class='prev'>
            &laquo;
          </a>
          <a class='next'>
            &raquo;
          </a>
          <div class='panel'>
            <ul>
                <!-- List items inserted in saveItemToCarousel() in javascripts/scripts.js -->
            </ul>
          </div>
        </div>
      </div>
      <div class='col2'>
        <p class='tiny'>Ready to share your designs with your friends and family?</p>
        <a class='btn' onclick='getSwitchesAndSubmit()' style='float: right'>Preview &rarr;</a>
      </div>
      <div class='clearfix'></div>
    </div>
  </div>
</div>
        </div>
        <nav>
          <div class='nav-wrapper'>
  <a href='index.html'>
    <div class='nav-switch'></div>
  </a>
  <div class='nav-btn'>
    <hr />
    <div class='navigation'>
      <ul>
        <li>
          <a class='look' href='look.html'>Look</a>
        </li>
        <li>
          <a class='touch' href='touch.html'>Touch</a>
        </li>
        <li>
          <a class='love' href='love.html'>Love</a>
        </li>
        <li>
          <a class='config' href='config.php'>
            <img alt='' height='30' src='images/nav/config.png' width='30' />
            <br/>
            <span>Your desired switch</span>
          </a>
        </li>
        <li class='prev'>
          <a href='#'>&larr;<br/><span>Prev</span></a>
        </li>
        <li class='next last'>
          <a>&rarr;<br/><span>Next</span></a>
        </li>
      </ul>
    </div>
    <div class='download'>
      <h3>
        <a href='#'>
          <img alt='' height='30' src='images/nav/dl.png' width='30' />
          <br/>
          <span>Brochure</span>
        </a>
      </h3>
    </div>
    <div class='clearfix'></div>
  </div>
</div>
          <div class='clearfix'></div>
        </nav>
      </div>
    </div>
    </form>
    
    
    <!-- MODIFIED BY CHUCK: Added -->
    <!-- <iframe id="post_frame" src="save.php" style="width:300px; height:300px; border:solid 1px black;" /> -->
    <iframe id="post_frame" src="save.php" style="width:0px; height:0px; border:none 1px black;" />
  </body>
</html>
