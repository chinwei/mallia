<?php
    session_start();
    
    class SwitchConfig
    {
        public $name;
        public $rocker;
        public $plate;
    }
    
    // If the user has selected a switch to delete and the SwitchConfigArray array exists
    if(isset($_POST["sessionIndexToDelete"]) && isset($_SESSION["SwitchConfigArray"]))
    {
        $index = $_POST["sessionIndexToDelete"];
        $switchConfigArray = $_SESSION["SwitchConfigArray"];
        
        // Remove the item from the array by index and reindex the array
        unset($switchConfigArray[$index]);
        $switchConfigArray = array_values($switchConfigArray);
        
        // Reassign the new array to the session
        $_SESSION["SwitchConfigArray"] = $switchConfigArray;
    }
?>

<!DOCTYPE html>
<html class='no-js'>
  <head>
    <title>Mallia&trade; - Express Yourself Like Never Before</title>
    <meta name="viewport" content="initial-scale=1, user-scalable=no">
    <meta charset='utf-8' />
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
    <script src='http://cdn.jsdelivr.net/caroufredsel/6.1.0/helper-plugins/jquery.touchSwipe.min.js'></script>
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
    <script type='text/javascript'>
        $(function() {
            <?php
            
                // Port the PHP variables to Javascript 
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
            while(nameArray[i] != undefined)
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
                
                // Create the table row to insert
                var row = "<tr data-index='" + i + "'>";
                row += "<td class='vtop' style='border-bottom: 1px solid #f5f5f5' valign='top' width='278'>";
                row += "<h3 style='margin: 10px 0'>" + savedName + "</h3>";
                row += "<table>";
                row += "<tr>";
                row += "<td height='30px' style='font: bold 12px Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: #999;' valign='top' width='78'>Product</td>";
                row += "<td height='30px' style='font: 14px Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: #999;' valign='top' width='278'>" + product + "</td>";
                row += "</tr>";
                row += "<tr>";
                row += "<td height='30px' style='font: bold 12px Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: #999;' valign='top' width='78'>Rocker</td>";
                row += "<td height='30px' style='font: 14px Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: #999;' valign='top' width='278'>" + rockerColor + "</td>";
                row += "</tr>";
                row += "<tr>";
                row += "<td height='30px' style='font: bold 12px Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: #999;' valign='top' width='78'>Color (Plate)</td>";
                row += "<td height='30px' style='font: 14px Arial, &quot;Helvetica Neue&quot;, Helvetica, sans-serif; color: #999;' valign='top' width='278'>" + plateColor + "</td>";
                row += "</tr>";
                row += "</table>";
                row += "</td>";
                row += "<td align='center' class='acenter' style='border-bottom: 1px solid #f5f5f5' valign='top' width='278'>";
                row += "<div style='width: 200px; height: 200px; border:1px solid #f5f5f5; margin: 0 auto' class='faux'>";
                row += "<div id='rocker'>";
                row += "<img width='200' height='200' src='" + rockerSrc + "' alt=''>";
                row += "</div>";
                row += "<div id='plate'>";
                row += "<img width='200' height='200' src='" + plateSrc + "' alt=''>";
                row += "</div>";
                row += "</div>";
                row += "</td>";
                row += "<td class='vbottom acenter' style='border-bottom: 1px solid #f5f5f5; padding-bottom: 10px' valign='bottom' width='100'>";
                row += "<a href='#' onclick='editSwitch(this)'><img src='images/preview/edit.png' alt='Edit Switch' style='padding-right: 9px; border-right: 1px solid #eee;'/></a>";
                row += "<a href='#' onclick='deleteSwitch(this)'><img src='images/preview/del.png' alt='Delete Switch'/></a>";
                row += "</td>";
                row += "</tr>";
                
                $('table.preview').append(row);
                i++;
            }
        });
        
        // Delete the switch in the same row as the trash icon
        function deleteSwitch(deleteAnchorTag) {
            if (confirm('Are you sure you want to delete this switch?') == false)
                return;

            // First parent is for td, second is for tr
            var rowIndex = $(deleteAnchorTag).parent().parent().data('index');

            $("<input type='text' name='sessionIndexToDelete' style='display:none' />").val(rowIndex).appendTo('#form1');

            $('#form1').submit();
        }
            
        // Edit the switch in the same row as the edit icon
        function editSwitch(editAnchorTag) {
            // First parent is for td, second is for tr
            var switchName = $(editAnchorTag).parent().parent().find('h3').text();
                
            location.href = 'config.php?s=' + encodeURIComponent(switchName);
        }
        </script>
        
        <?php
        
            // Function for basic field validation (present and neither empty nor only white space)
            function IsNullOrEmptyString($question){
                return (!isset($question) || trim($question)==='');
            }
        
            // If the "Send" button was pressed
            if(isset($_POST["btnSubmit"]))
            {
                $error = false;
                $message = "";
                // Validation
                if (isset($_POST["inputEmail"]) == false || filter_var($_POST["inputEmail"], FILTER_VALIDATE_EMAIL) == false) {
                    $error = true;
                    $message = "Please enter a valid email address.";
                }
                else if(IsNullOrEmptyString($_POST["inputMessage"])) {
                    $error = true;
                    $message = "Please enter a message.";
                }
            
                if($error == true)
                {
                    echo "<script type='text/javascript'>\r\n";
                    echo "window.onload = function() {\r\n";
                    echo "var email = '" . $_POST["inputEmail"] . "';\r\n";
                    echo "var message = '" . $_POST["inputMessage"] . "';\r\n";
                    echo "$('#inputEmail').val(email);\r\n";
                    echo "$('#inputMessage').val(message);\r\n";
                
                    // Scroll to the bottom of the div
                    echo "$('.overflow-wrapper').scrollTop($('.overflow-wrapper')[0].scrollHeight);\r\n";
                    echo "alert('" . $message . "');\r\n";
                    echo "};\r\n";
                    echo "</script>\r\n";
                }
                else // No error, send email out
                {
                    require_once 'Swift-4.3.0/lib/swift_required.php';
                    
                    // Create the Transport
                    //$transport = Swift_SmtpTransport::newInstance('localhost', 25);

                    // Mail
                    //$transport = Swift_MailTransport::newInstance();

                    $transport = Swift_SmtpTransport::newInstance('127.0.0.1');

                    // Create the Mailer using your created Transport
                    $mailer = Swift_Mailer::newInstance($transport);
                    
                    // Create a message
                    $message = Swift_Message::newInstance('Your Mallia Switch Configurations');
                    $message->setFrom(array('codeslinger007@hotmail.com' => 'James'));
                    $message->setTo(array('jameslow84@gmail.com', 'codeslinger007@hotmail.com' => 'Hotmail name', 'jameslow1984@yahoo.com'));
                    
                    $body = "
                    <html>
                    <head>
                      <title>Your Mallia Switches</title>
                    </head>
                    <body>
                      <div>
                      <p style=\"font: bold 16px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #333;\">Dear Bob</p>
                      <p style=\"font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #666; margin-bottom: 20px\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                    </div>
                    <div>
                      <p style=\"font: 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #333; margin-bottom: 20px\">" . $_POST["inputMessage"] . "</p>
                    </div>
                    <table style='margin-bottom: 20px; border-top: 1px solid #f5f5f5'>";
                    
                    // Loop through each switch in the session
                    if(isset($_SESSION["SwitchConfigArray"]))
                    {                    
                        $switchConfigArray = $_SESSION["SwitchConfigArray"];
                        $i = 0;

                        foreach($switchConfigArray as $switchConfig)
                        {
                            // Get the name
                            $nameArray = explode('|', $switchConfig->name);
                            $savedName = $nameArray[0];
                            $product = $nameArray[1];
                            
                            // Get the rocker src
                            $rockerArray = explode('|', $switchConfig->rocker);
                            $rockerColor = $rockerArray[0];
                            $rockerSrc = $rockerArray[1];
                            
                            // Get the plate src
                            $plateArray = explode('|', $switchConfig->plate);
                            $plateColor = $plateArray[0];
                            $plateSrc = $plateArray[1];
                            
                            // Imaging (outputs the composite into $img)
                            //-------------------------------------------------------------------
                            // Create image instances
                            $dest = imagecreatefrompng($plateSrc);
                            imageAlphaBlending($dest, true);
                            imageSaveAlpha($dest, true);
                            $src = imagecreatefrompng($rockerSrc);
                            imageAlphaBlending($src, true);
                            imageSaveAlpha($src, true);

                            // Copy
                            imagecopy($dest, $src, 0, 0, 0, 0, 278, 278);

                            ob_start();
                            imagepng($dest); // no second parameter, will do output instead of writing to file
                            $img = ob_get_clean();

                            imagedestroy($dest);
                            imagedestroy($src);
                            //-------------------------------------------------------------------
                        
                            $body .= "
                              <tr>
                                <td style='border-bottom: 1px solid #f5f5f5' valign='top' width='278'>
                                  <h3 style='margin: 10px 0'>" . $savedName . "</h3>
                                  <table>
                                    <tr>
                                      <td height='30px' style=\"font: bold 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;\" valign='top' width='78'>Product</td>
                                      <td height='30px' style=\"font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;\" valign='top' width='278'>" . $product . "</td>
                                    </tr>
                                    <tr>
                                      <td height='30px' style=\"font: bold 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;\" valign='top' width='78'>Rocker</td>
                                      <td height='30px' style=\"font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;\" valign='top' width='278'>" . $rockerColor . "</td>
                                    </tr>
                                    <tr>
                                      <td height='30px' style=\"font: bold 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;\" valign='top' width='78'>Color (Plate)</td>
                                      <td height='30px' style=\"font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;\" valign='top' width='278'>" . $plateColor . "</td>
                                    </tr>
                                  </table>
                                </td>
                                <td align='center' style='border-bottom: 1px solid #f5f5f5' valign='top' width='278'><img width='200' height='200' src='" .
                                      $message->embed(Swift_Image::newInstance($img, 'switch' + $i + '.png', 'image/png')) .
                                "' /></td>
                              </tr>";
                              
                            $i++;
                        }
                    }

                    $body .= "
                    </table>
                    <div>
                      <p style=\"font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #666; margin-bottom: 20px\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                      <p style=\"font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #666;\">Regards,<br/> Jim</p>
                    </div>
                    </body>
                    </html>
                    ";
                    
                    $message->setBody($body, 'text/html');

                    // Send the message (check for failure)
                    $result = $mailer->send($message);
                    
                    echo "<script type='text/javascript'>\r\n";
                    echo "window.onload = function() {\r\n";
                    echo "alert('Your switches have been emailed to you.');\r\n";
                    echo "};\r\n";
                    echo "</script>\r\n";
                }
            }
        ?>
  </head>
  <body class='preview'>
    
    <div class='container'>
      <div class='content-wrapper'>
        <div class='logo'>
          <a href='http://www.legrand.com.sg/products/wiring-devices/' target='_blank'>
            <h1>Legrand&reg;</h1>
          </a>
        </div>
        <div class='content'>
          <div class='config-wrapper'>
  <div class='overflow-wrapper'>
    <h2>Preview your Switches!</h2>
    <!-- Start of EDM -->
    <div class='msg'>
      <p style="font: bold 16px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #333;">Dear Bob</p>
      <p style="font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #666; margin-bottom: 20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
    </div>
    <div class='note'>
      <p style="font: 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #333; margin-bottom: 20px">From text box below. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
    </div>
    <table class='preview' style='margin-bottom: 20px; border-top: 1px solid #f5f5f5'>
      <!-- %tr -->
      <!-- %th{:valign=>"top", :width=>"242", :style=> "font: bold 11px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #aaa; padding-bottom: 10px"} Info -->
      <!-- %th{:valign=>"top", :width=>"278", :style=> "font: bold 11px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #aaa; padding-bottom: 10px"} Switch -->
      <!-- %th{:valign=>"top", :width=>"100"} -->
      <!-- <tr>
        <td class='vtop' style='border-bottom: 1px solid #f5f5f5' valign='top' width='278'>
          <h3 style='margin: 10px 0'>Name</h3>
          <table>
            <tr>
              <td height='30px' style="font: bold 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;" valign='top' width='78'>Product</td>
              <td height='30px' style="font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;" valign='top' width='278'>-</td>
            </tr>
            <tr>
              <td height='30px' style="font: bold 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;" valign='top' width='78'>Rocker</td>
              <td height='30px' style="font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;" valign='top' width='278'>-</td>
            </tr>
            <tr>
              <td height='30px' style="font: bold 12px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;" valign='top' width='78'>Color (Plate)</td>
              <td height='30px' style="font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #999;" valign='top' width='278'>-</td>
            </tr>
          </table>
        </td>
        <td align='center' class='acenter' style='border-bottom: 1px solid #f5f5f5' valign='top' width='278'>
          <img alt='' height='200' src='images/configurator/switch.jpg' width='200' />
        </td>
        <td class='vbottom acenter' style='border-bottom: 1px solid #f5f5f5; padding-bottom: 10px' valign='bottom' width='100'>
          <a href="#"><img src="images/preview/edit.png" alt="Edit Switch" style="padding-right: 9px; border-right: 1px solid #eee;"/></a>  <a href="#"><img src="images/preview/del.png" alt="Delete Switch"/></a>
        </td>
      </tr>-->
    </table>
    <div class='signoff'>
      <p style="font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #666; margin-bottom: 20px">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
      <p style="font: 14px Arial, 'Helvetica Neue', Helvetica, sans-serif; color: #666;">Regards,<br/> Jim</p>
    </div>
    <!-- End of EDM -->
    <h2>Send</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo laboris nisi ut aliquip ex ea commodo.</p>
    <p>&nbsp;</p>
    <form id="form1" action="preview.php" method="post">
      <div class='control-group'>
        <label class='control-label' for='inputEmail'>Please enter your email</label>
        <div class='controls'>
          <input id='inputEmail' name='inputEmail' placeholder='Email' type='text' />
        </div>
      </div>
      <div class='control-group'>
        <label class='control-label' for='inputMsg'>Please enter your message</label>
        <div class='controls'>
          <textarea id='inputMessage' name='inputMessage' rows='5'></textarea>
        </div>
      </div>
      <div class='control-group'>
        <div class='controls'>            
          <button name='btnSubmit' class='btn' type='submit'>Send</button>
        </div>
      </div>
    </form>
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
    
  </body>
</html>
