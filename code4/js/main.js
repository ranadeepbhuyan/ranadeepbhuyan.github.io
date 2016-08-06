$(function() {



	// Open interuptive upsell modal after 2 seconds
	setTimeout(function() {
		$('#interuptiveUpsell').modal('show');
	}, 2000);



	// Drawers
	$(".open-drawer").click(function(e){
		e.preventDefault();
		$(".drawer").removeClass("open");

		var getClickedVal = $(this).attr("data-drawer");
		var getDrawer = $("html").find("[data-drawer='" + getClickedVal + "']");
		getDrawer.addClass("open");
		$(".overlay").show();
	});
	$(".drawer .close").click(function(){
		$(".drawer").removeClass("open");
		$(".overlay").hide();
	});
	

	// Close Messaging Tooltips
	$(".messaging .close").click(function(){
		$(this).parents(".messaging").hide();
	});


	// Customization Form
	$(".business-name").focus(function(){
		$(this).siblings(".messaging").hide();
	});
	$(".upload-logo-button").click(function(){
		$(this).parents(".modal").hide();
	});

	// Tooltips
	$(".tooltip button").hover(function(){
		$(this).next().toggle();
	});
	$(".colors li a").hover(
		function(){
			$(this).siblings(".messaging").show();
		}, function() {
			$(this).siblings(".messaging").hide();
		}
	);


	// Display progress indicator
	$(".progress-indicator .button").click(function(){
		$(".progress-indicator img").show();
	});

	// Toggle payment method
	$("input[name=payment-method]").on('click', function(){
		$(".requires-check").removeClass("show");
		$(this).siblings(".requires-check").addClass("show");
	});

	// Custom HTML popover modals
    // The modal popovers found on the checkout, cart, and homepage are built on top of Bootstrap, but are custom
    // Documentation for the popovers can be found at http://scruffles.github.io/BootstrapModalPopover/
    // The following code I wrote to handle the page overlay when the modal is displayed    
	$(".overlay").on("click", function(){
	    $(".overlay").hide();
	    $(".drawer").removeClass("open");
	    $(".open-popover").blur();
	});
	$(".open-popover").click(function(){
		$(".overlay").show();
	});
	$(".open-popover").blur(function(){
    	$(".overlay").hide();
    	$(".popover").modalPopover("hide");
    });

	$(".popover .cancel").on("click", function(){
	    $(".overlay").hide();
	});
	$(".popover .close").on("click", function(){
	    $(".overlay").hide();
	});

});