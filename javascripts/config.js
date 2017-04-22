var itemsLoaded = 0
var initialLoad = true


    function initDropdown()
    {
        $('select').chosen({
            "disable_search": true
        })
        $("select").val($("#target option:first").val()).trigger("liszt:updated")
        
    }

    function initCarousel()
    {
        $('.panel ul').caroufredsel({
            //              width: 440, // causes bug with insertion
            height: 115,
            circular: false,
            infinite: false,
            auto: false,
            prev: {
                button: $('.panel-container .prev'),
                onEnd: function (data)
                {
                    // Hide the prev button at the beginning
                    $('.panel-container .prev').hide();
                },
                onBefore: function (data)
                {
                    // Always show the next button when prev button is clicked
                    $('.panel-container .next').show();
                }
            },
            next: {
                button: $('.panel-container .next'),
                onEnd: function (data)
                {
                    // Hide the next button at the end
                    $('.panel-container .next').hide();
                },
                onBefore: function (data)
                {
                    // Always show the prev button when next button is clicked
                    $('.panel-container .prev').show();
                }
            },
            swipe: {
                onTouch: true,
                onMouse: true
            }
        })
    }

    function loadContent($target, $random, $rockerColor, $plateColor)
    {
                
                
                 $('select').attr('disabled', 'disabled').trigger("liszt:updated")
                    // console.log($page)
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
                            
                        // console.log($rockerList)
                       
                        if ($random)
                        {
                            var Rocker = $('select#rocker-color')
                            var rockerItems = $('select#rocker-color option')
                            var rockerIndex = Math.floor(Math.random() * rockerItems.length);
                            Rocker[0].selectedIndex = rockerIndex;
                            Rocker.trigger("liszt:updated");

                            var Plate = $('select#plate-color')
                            var plateItems = $('select#plate-color option')
                            var plateIndex = Math.floor(Math.random() * plateItems.length);
                            Plate[0].selectedIndex = plateIndex;
                            Plate.trigger("liszt:updated");

                            // updateImage()
                        }
                        // Why 2 ajax calls???
                     
                        
                      
                        if (!initialLoad) {
                         updateImage(revealImage) 
                         }

                         initialLoad = false;


                    },
                    complete: function() 
                    {
                        
                        // alert ('complete')
                     
                        $('select').attr('disabled', null).trigger("liszt:updated")
                       

                    }

                });
                }

    function imageSelector()
    {
        var $prependPath = ''
        var $selectedImage
     
        loadContent('catalogue/type1.html')

        $('select#type').change(function ()
        {
            itemsLoaded = 0
            
            
            loadContent($(this).val())


            // console.log($(this).val())

        })

        $('select#rocker-color, select#plate-color').change(function ()
        {
            itemsLoaded = 0

            $('#rocker-color').trigger("liszt:updated");
            $('select#plate-color').trigger("liszt:updated");

            updateImage(revealImage)
        })

    }

    var timer;
    $(window).load(function(){
        $('#random').on('click', startTimer)
        $('#random').removeClass('disabled')
    })
            

            function startTimer() {
                itemsLoaded = 0;
                // console.log('start timer')
                $('#rocker').hide()
                $('#plate').hide()

                // Clear selected(active) switch, and clear the switch name if one is selected
                var activeItem = $('.config-wrapper .cart .col1 .panel-container .panel ul li.active');

                if (activeItem.length > 0)
                {
                    activeItem.removeClass('active');

                    // Clear the switch name
                    $('#appendedInputButtons').val('');

                    // Hide the 'Add New' button
                    $('#btnAddNewSwitch').css('display', 'none');
                }



                Randomiser()
                if(timer) clearTimeout(timer);
                timer = setTimeout(process, 500);
            }
        

            function Randomiser() {
            
            $('#random').off('click')
            $('#random').addClass('disabled')
            var select = $('select#type')
            var items = $('select#type option')
            var index = Math.floor(Math.random() * items.length);
            select[0].selectedIndex = index;
            select.trigger("liszt:updated");
            loadContent(select.val(), true)

            }
            $(document).ready(function(){
                $('#plate img, #rocker img').load(function(){
                // console.log($(this).attr('src'))
                itemsLoaded++
                // console.log(itemsLoaded)

                if (itemsLoaded == 2) {
                    $('#rocker').show()
                    $('#plate').show()
                    // console.log('image displayed')
                }
                
            })
            })
            
            // console.log('load event')
            
            function process(){

            //Called 5000ms after #myButton was last clicked 
            $('#random').on('click', startTimer)
            $('#random').removeClass('disabled')
       
            // console.log('after')
        }


    function updateImage(callback)
    {
        // console.log('update image')
        $('#rocker img, #plate img').attr('src','images/configurator/ui/blank.gif');
         $('.faux').css('background', 'url(stylesheets/img/ajax-loader.gif) no-repeat center center')

      
             $('#rocker').hide()
        $('#plate').hide()
         
        
        // console.log('image hidden')
        
        var rocker = $('select#type').val().replace('catalogue/', "").replace('.html', '') + $('select#rocker-color').val() + '.png'
        var plate = $('select#plate-color').val() + '.jpg'
        var rockerImage = 'images/configurator/rocker/' + rocker
        var plateImage = 'images/configurator/plate/jpg/' + plate

    
        // console.log('this is:'+rockerImage)

      
            $('#rocker img').attr('src', rockerImage)
        $('#plate img').attr('src', plateImage)
        
        

       callback()

        
    }

    function revealImage() {
      
         $('.faux img').load(function(){
            // $('.faux').css('background', '')
            // $('#rocker').show()
            // $('#plate').show()
        })
            
    }



    function initSwitchConfiguration()
    {
        function saveItemToCarousel(switchName, isAddNew)
        {
            var carouFredselList = $('.panel ul');

            // Check if in 'Add New' mode
            var addNewMode = false;
            if (typeof isAddNew != 'undefined')
                addNewMode = isAddNew;

            // Check if in 'Edit' mode
            var editMode = false;
            var activeListItem = carouFredselList.children('li.active');
            if (activeListItem.length > 0)
                editMode = true;

            // Check if there is any switch with the same name
            var listItemWithSameName = carouFredselList.children('li');
            // If the user has not clicked the 'Add New' button, it could be in edit mode, so don't check against any active list items
            if (addNewMode == false)
                listItemWithSameName = listItemWithSameName.not('.active');

            var duplicateNameExists = false;
            listItemWithSameName.each(function ()
            {
                if ($(this).data('id') == switchName)
                {
                    duplicateNameExists = true;
                    return;
                }
            });

            if (duplicateNameExists == true)
            {
                alert('Switch name already exists. Please choose another.');
                return;
            }

            // Type e.g. "type1"
            var type = $('#type option:selected').data('target');
            var product = $('#type option:selected').text();
            // Color e.g. "rocker-2g-silver"
            var color = $('#rocker-color').val();
            var colorName = $('#rocker-color option:selected').text();
            // Plate e.g. "brass"
            var plate = $('#plate-color').val();
            var plateName = $('#plate-color option:selected').text();

            if (addNewMode == false && editMode == true)
            {
                activeListItem.data('id', switchName);
                activeListItem.find('p').text(switchName);
                activeListItem.data('product', product);
                activeListItem.data('colorname', colorName);
                activeListItem.data('platename', plateName);
                activeListItem.find('.rockerItem img').attr('src', 'images/configurator/rocker/' + type + color + '.png');
                activeListItem.find('.plateItem img').attr('src', 'images/configurator/plate/' + plate + '.png');
            }
            else // Else add a new item to the carousel
            {
                var sampleItem = "\"<li data-id='" + switchName + "' data-product='" + product + "' data-colorname='" + colorName + "' data-platename='" + plateName + "'>";
                sampleItem += "<div class='edit'></div>";
                sampleItem += "<div class='del'></div>";
                sampleItem += "<div class='fauxItem'>";
                sampleItem += "<div class='rockerItem'><img alt='' src='images/configurator/rocker/" + type + color + ".png' /></div>";
                sampleItem += "<div class='plateItem'><img alt='' src='images/configurator/plate/" + plate + ".png' /></div>";
                sampleItem += "</div>";
                sampleItem += "<p>" + switchName + "</p>";
                sampleItem += "</li>\"";

                // Add a new item to the carousel to the end
                carouFredselList.trigger("insertItem", [sampleItem, "end", true]);

                // Clear the switch name after adding a new item
                $('#appendedInputButtons').val('');

                // Clear selected(active) switch if in 'Add New' mode
                if (addNewMode == true)
                {
                    carouFredselList.children('li.active').removeClass('active');
                    // No longer in 'Edit' mode, so hide the 'Add New' button
                    // $('#btnAddNewSwitch').css('display', 'none');
                    $('#btnAddNewSwitch').attr('class', 'btn disabled');
                    $('#btnAddNewSwitch').attr('disabled', 'disabled');
                }
            }
        }

        // Loop through all the saved switches, and create 3 fields each to store the name, rocker image and plate image.
        // The fields will be submitted when the form in a iframe is posted.
        function saveSwitches()
        {

            var postForm = $('#post_frame').contents().find('#form1');

            // Even if there are no items in the panel, we still want to set as a session for later use
            // for cases when the last item has been deleted
            // if($('.panel ul li').length == 0)
            //    return;

            $('.panel ul li').each(function (index)
            {
                var name = $(this).data('id');
                var product = $(this).data('product');
                var rockerSrc = $(this).find('.rockerItem img').attr('src');
                var rockerColor = $(this).data('colorname');
                var plateSrc = $(this).find('.plateItem img').attr('src');
                var plateColor = $(this).data('platename');

                // IE7 has a bug when appending jQuery/DOM objects to the element in the iframe, so append as a string instead.
                //$("<input type='text' style='display:inline' />").attr('name', 'name' + index).val(name + '|' + product).get(0).appendTo(postForm);
                //$("<input type='text' style='display:inline' />").attr('name', 'rocker' + index).val(rockerColor + '|' + rockerSrc).appendTo(postForm);
                //$("<input type='text' style='display:inline' />").attr('name', 'plate' + index).val(plateColor + '|' + plateSrc).appendTo(postForm);

                postForm.append("<input type='text' name='name" + index + "' value='" + name + '|' + product + "' />");
                postForm.append("<input type='text' name='rocker" + index + "' value='" + rockerColor + '|' + rockerSrc + "' />");
                postForm.append("<input type='text' name='plate" + index + "' value='" + plateColor + '|' + plateSrc + "' />");
            });

            postForm.submit();
        }

        $('#btnSaveSwitch').click(function ()
        {
            // Get the name, trimmed, to remove spaces in front and behind
            var switchName = $.trim($('#appendedInputButtons').val());

            // Name must have a value
            if (switchName == '')
            {
                // alert('Please enter a switch name.');
                $('#SavePrompt').css('visibility', 'visible');

                return;
            }
            else
                $('#SavePrompt').css('visibility', 'hidden');

            saveItemToCarousel(switchName);

            saveSwitches();
        });

        $('#btnResetSwitch').click(function ()
        {

            // Clear selected(active) switch
            $('.config-wrapper .cart .col1 .panel-container .panel ul li.active').removeClass('active');

            // Product
            $('#type').val('catalogue/type1.html').trigger("liszt:updated");

            // Clear the switch name
            $('#appendedInputButtons').val('');

            // Load the default settings for the other dropdown lists and the images
            loadContent('catalogue/type1.html');
        });

        $('#btnAddNewSwitch').click(function ()
        {
            // Get the name, trimmed, to remove spaces in front and behind
            var switchName = $.trim($('#appendedInputButtons').val());

            // Name must have a value
            if (switchName == '')
            {
                // alert('Please enter a switch name.');
                $('#SavePrompt').css('visibility', 'visible');

                return;
            }
            else
                $('#SavePrompt').css('visibility', 'hidden');

            saveItemToCarousel(switchName, true);

            saveSwitches();
        });

        // Edit mode after clicking on an item or its top left icon
        $('.config-wrapper .cart .col1 .panel-container .panel ul').on('click touchstart', 'li', function ()
        {
            // Show the 'Add New' button
            // $('#btnAddNewSwitch').css('display', 'inline');
            $('#btnAddNewSwitch').attr('class', 'btn');
            $('#btnAddNewSwitch').removeAttr('disabled');

            // Remove other active items
            $('.config-wrapper .cart .col1 .panel-container .panel ul li.active').removeClass('active');
            // Set this item as active
            $(this).addClass('active');

            // Load the name
            $('#appendedInputButtons').val($(this).data('id'));

            // Get the rocker details from the item
            var rockerSrc = $(this).find('.rockerItem img').attr('src');
            var rockerTypeAndColor = rockerSrc.split('/').slice(-1)[0].split('.')[0];
            var rockerType = rockerTypeAndColor.substring(0, rockerTypeAndColor.indexOf('rocker'));
            var rockerColor = rockerTypeAndColor.substring(rockerTypeAndColor.indexOf('rocker'));

            // Get the plate details from the item
            var plateSrc = $(this).find('.plateItem img').attr('src');
            var plateColor = plateSrc.split('/').slice(-1)[0].split('.')[0];

            $('#type').val('catalogue/' + rockerType + '.html').trigger('liszt:updated');
            loadContent($('#type').val(), false, rockerColor, plateColor);
        });

        // Delete an item after clicking the top right icon on an item
        $('.config-wrapper .cart .col1 .panel-container .panel ul').on('click touchstart', 'li .del', function ()
        {
            if (confirm('Are you sure you want to remove this switch?'))
            {
                var carouFredselList = $('.panel ul');
                var listItem = $(this).parent();

                // If the deleted item is currently selected, clear the switch name
                if (listItem.hasClass('active'))
                {
                    listItem.removeClass('active');

                    // Clear the switch name
                    $('#appendedInputButtons').val('');
                }

                // Delete the item and remove from the carousel
                listItem.fadeOut('slow', function ()
                {
                    carouFredselList.trigger('removeItem', listItem);

                    saveSwitches();
                });

                // Hide the 'Add New' button
                // $('#btnAddNewSwitch').css('display', 'none');
                $('#btnAddNewSwitch').attr('class', 'btn disabled');
                $('#btnAddNewSwitch').attr('disabled', 'disabled');
            }
            return false; // Stop event from bubbling up
        });

        // Deselect the active item after clicking anywhere on the carousel div outside of any items
        $('.cart .col1, .cart .col1 .panel').click(function ()
        {
            // Clear selected(active) switch, and clear the switch name if one is selected
            var activeItem = $('.config-wrapper .cart .col1 .panel-container .panel ul li.active');
            if (activeItem.length > 0)
            {
                activeItem.removeClass('active');

                // Clear the switch name
                $('#appendedInputButtons').val('');
            }

            // Hide the 'Add New' button
            // $('#btnAddNewSwitch').css('display', 'none');
            $('#btnAddNewSwitch').attr('class', 'btn disabled');
            $('#btnAddNewSwitch').attr('disabled', 'disabled');

        }).children().click(function () // Prevent click events from children bubbling up, otherwise clicking an item will deselect as well
        {
            return false;
        });
    }

    // Loop through all the saved switches, and create 3 fields each to store the name, rocker image and plate image.
    // The fields will be submitted when the form is posted.
    function getSwitchesAndSubmit()
    {
        if ($('.panel ul li').length == 0)
        {
            alert('There are currently no switches in your shopping list to preview.');
            return;
        }

        $('.panel ul li').each(function (index)
        {
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

    $(function ()
    {
        initDropdown()
        initCarousel()
        imageSelector()
        // Randomiser()
        initSwitchConfiguration();
    });