$(function(){
  'use strict';

  var $body = $('body'),
    $tabs = $('.manage__tab'),
    $screenshots = $('.manage__figure'),
    activeClass = 'active',
    shownClass = 'shown',
    $videoOpen = $('#videoOpen'),
    $videoModal = $('#videoModal'),
    modalShownClass = 'isModalOpen',
    $mobileNavOpen = $('#mobileNavOpen'),
    $mobileNavClose = $('#mobileNavClose'),
    mobileNavShownClass = 'isMobileNavOpen';

  var init = function() {
    $('body').addClass('js');
    initTabs();
    initModal();
    initFitVids();
    initMobileNav();
    initAnchors();
  };

  var initTabs = function() {
    $tabs.click(function(e) {
      $tabs.each(function(e) {
        $(this).removeClass(activeClass);
      });
      var handle = $(this).data('handle');
      showScreenshot(handle);
      $(this).addClass(activeClass);
      return false;
    });
  };

  var showScreenshot = function(handle) {
    $screenshots.each(function() {
      if ($(this).data('handle') == handle) {
        if (!$(this).hasClass(shownClass)) {
          // hidden, so show
          $(this).addClass(shownClass);
        }
      } else {
        if ($(this).hasClass(shownClass)) {
          // shown, so hide
          $(this).removeClass(shownClass);
        }
      }
    });
  };

  var iframe = $('#intro')[0],
    player = $f(iframe); // $f == Froogaloop

  var initModal = function() {
    $videoOpen.click(function(e) {
      e.preventDefault();
      showModal(300);
      return false;
    });
    $videoModal.click(function(e) {
      closeModal();
    });
    if (window.location.hash === '#video') {
      showModal(1000);
    }
  };

  player.addEvent('ready', function() {
    console.log('ready');
  });

  var showModal = function(timeout) {
    $body.addClass(modalShownClass);
    setTimeout(function() {
      player.api('play');
    }, timeout);
  };

  var closeModal = function() {
    player.api('pause');
    $body.removeClass(modalShownClass);
  };

  var initFitVids = function() {
    $('.article__content').fitVids();
  };

  // mobile nav
  // ----------

  var initMobileNav = function() {
    $('body').addClass('js--mobileNav');
    $mobileNavOpen.click(function(e) {
      e.preventDefault();
      showMobileNav();
      return false;
    });
    $mobileNavClose.click(function(e) {
      closeMobileNav();
    });
  };

  var showMobileNav = function() {
    $body.addClass(mobileNavShownClass);
    $body.css('height', '100%');
  };

  var closeMobileNav = function() {
    $body.removeClass(mobileNavShownClass);
    $body.css('height', 'auto');
  };

  // keydown handlers
  // ----------------

  $(document).keydown(function(e) {
    if (e.keyCode == 27 && $body.hasClass(modalShownClass)) { // esc
      closeModal();
    } else if (e.keyCode == 27 && $body.hasClass(mobileNavShownClass)) { // esc
      closeMobileNav();
    }
  });

  // anchors
  // -------

  var anchorForId = function(id) {
    var anchor = document.createElement("a");
    anchor.className = "anchor";
    anchor.href      = "#" + id;
    anchor.innerHTML = "#";
    return anchor;
  };

  var linkifyAnchors = function(level, containingElement) {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
      var header = headers[h];

      if (typeof header.id !== "undefined" && header.id !== "") {
        header.appendChild(anchorForId(header.id));
      }
    }
  };

  // Add header anchor links
  var initAnchors = function() {
    var contentBlock = document.getElementsByClassName("article__content")[0];
    if (!contentBlock) {
      return;
    }
    for (var level = 1; level <= 6; level++) {
      linkifyAnchors(level, contentBlock);
    }
  };

  // initialize
  // ----------

  init();
  
    // Add load more
  $(".auctions").slice(0, 10).show();
    if ($(".gallery__main:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".auctions:hidden").slice(0, 6).slideDown();
      if ($(".auctions:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
    //end Add load more
    
// Create Filters
var options = {
  valueNames: [ 'product__title', 'product__description', 'product__identifier' ]
};

var auctions_list = new List('auctions_list', options);

$('.filter').on('click',function(){
  var $q = $(this).attr('data-filter');
   $(".auctions:hidden").show();
   $("#loadMore").hide();
  if($(this).hasClass('active')){
    auctions_list.filter();
    $('.filter').removeClass('active');
  } else {
    auctions_list.filter(function(item) {
      return (item.values().product__identifier == $q);
    });
    $('.filter').removeClass('active');
    $(this).addClass('active');
  }
});

// Return # of items
var $count = $('.count')
$count.append(auctions_list.size());
auctions_list.on('filterComplete', function(){
  $count.text(auctions_list.update().matchingItems.length);
});
 
});
