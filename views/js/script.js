/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-multiplebgs-cssanimations-csscolumns-cssgradients-csstransforms-csstransforms3d-localstorage-websockets-webworkers-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-css_calc-css_filters-script_async-script_defer-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},q.multiplebgs=function(){return z("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},q.cssanimations=function(){return F("animationName")},q.csscolumns=function(){return F("columnCount")},q.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return z((a+"-webkit- ".split(" ").join(b+a)+m.join(c+a)).slice(0,-a.length)),C(j.backgroundImage,"gradient")},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},q.webworkers=function(){return!!a.Worker};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("csscalc",function(){var a="width:",b="calc(10px);",c=document.createElement("div");return c.style.cssText=a+Modernizr._prefixes.join(b+a),!!c.style.length}),Modernizr.addTest("cssfilters",function(){var a=document.createElement("div");return a.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!a.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("scriptasync","async"in document.createElement("script")),Modernizr.addTest("scriptdefer","defer"in document.createElement("script"));

window.phile = {
  message: function(string) {
    $('.messages').html(string).addClass('show').transition({
      translate: [0,0],
      duration: 500
    }).transition({
      translate: [0,'-150%'],
      duration: 500,
      delay: 2000
    });
  }
};

var area = document.getElementById('editor');
var editor;

function doSaveContent() {
  var data = {
    path: area.dataset.path,
    value: area.value
  };
  $.post(admin.url+'save', data).done(function(res) {
    phile.message(res.message);
  });
}

function parseMarkdown(value) {
  $.post(admin.url+'parse_markdown', { content: value }).done(function(res) {
    var $viewer = $('#viewer');
    $viewer.html(res);
    area.style.height = $viewer.outerHeight() + 30 + 'px';
  });
}

function makeEditor(callback) {
  BehaveHooks.add('keyup', function(data) {
    var val = data.editor.element.value;
    if (val !== '') {
      // clear the timeout so we dont fire in succession
      clearTimeout(this.delayer);
      this.delayer = setTimeout(function () {
        parseMarkdown(val);
      }, 500);
    }
  });
  editor = new Behave({
    textarea: area,
    replaceTab: false,
    softTabs: false,
    tabSize: 4,
    autoOpen: false,
    overwrite: true,
    autoStrip: true,
    autoIndent: false,
    fence: true
  });
  $('#save-content').on('click', doSaveContent);
  callback();
}

$(function() {
  if ($('body').hasClass('editor-template')) {
    makeEditor(function() {
      // $.get('action/cheatsheet.md', function(data) {
      //   area.innerText = data;
      //   parseMarkdown(area.value);
      // });
    area.style.height = $('#viewer').outerHeight() + 30 + 'px';
  });
  }
});

(function() {
  $.fn.extend({
    swappable: function(options) {
      this.defaults = {
        id: 'swappable-temp-input',
        class: 'swappable-input',
        name: 'swappable-temp',
        type: 'input',
        evt: 'click',
        end: 'blur',
        detectTag: true,
        swapStart: function() {},
        swapEnd: function() {}
      };
      var settings = $.extend({}, this.defaults, options);

      function makeTemplate() {
        if (settings.type === 'input') {
          return '<input type="text" class="' + settings.class + '" name="' + settings.name + '" id="' + settings.id + '" value="' + settings.temp + '">';
        } else if (settings.type === 'textarea') {
          return '<textarea class="' + settings.class + '" name="' + settings.name + '" id="' + settings.id + '">' + settings.temp + '</textarea>';
        } else {
          // something is messed. let there be inputs
          return '<input type="text" class="' + settings.class + '" name="' + settings.name + '" id="' + settings.id + '" value="' + settings.temp + '">';
        }
      }

      function handleClick() {
        var $this = $(this);
        settings.swapStart();
        settings.temp = $this.text();
        settings.tag = (typeof(settings.detectTag) !== 'string') ? $this.prop('tagName') : settings.detectTag;
        $this.replaceWith(makeTemplate());
        var $input = $('#' + settings.id);
        // when you focus the new input/textarea
        $input.on(settings.end, function() {
          var $p = $('<' + settings.tag + '>' + settings.temp + '</' + settings.tag + '>');
          $(this).replaceWith($p);
          // call itself with the settings from the first run
          $p.swappable(settings);
          settings.swapEnd();
        }).focus();
      }
      return this.each(function() {
        $(this).on(settings.evt, handleClick);
      });
    }
  });
})();
function addEvents() {
  $('.upload-thumb p').swappable();
}

function getFiles() {
  $.get('media_template', function(res) {
    $('#file-area').html(res);
    addEvents();
  });
}

$(function() {
  if ($('body').hasClass('media-template')) {
    if (typeof(Dropzone) !== 'undefined') {
      Dropzone.options.mediaUpload = {
        init: function() {
          this.on("complete", getFiles);
        }
      };
    }
  }
});

function pageControls(active) {
  $('.page-controls').on('click', '.btn', function(event) {
    var target = this.id.split('-')[0];
    var path = $(this).parent().attr('data-url');
    if (target == 'delete') {
      event.preventDefault();
      if(confirm('Are You Sure You Want To Delete ' + active + '?')) {
        $.post(admin.url+'delete_file', { filename: path }).then(function(res) {
          phile.message(res.message);
          $('.page-info').transit({
            x: '100%',
            opacity: 0
          }, 400, function() {
            $('.nested-sortable li.active').remove();
            $('.nested-sortable li a').first().trigger('click');
          });
        }, function(res) {
          phile.message(res.message);
        });
      }
      return false;
    }
  });
}

function changePage() {
  var that = this;
  $('.nested-sortable li.active').removeClass('active');
  $('.page-info').transit({
    x: '100%',
    opacity: 0
  }, 200, 'easeInOutQuad', function() {
    $(this).transit({
      x:0,
      y:'100%'
    }, 0);
    $(that).parent().addClass('active');
    $.post('get_page_info', {path: that.dataset.path }, function(res) {
      $('.page-info').html(res).transit({
        y: 0,
        opacity: 1
      }, 300, 'easeInOutQuad');
      pageControls(that.id);
    });
  });
}

function pageFunctions() {
  var activePage = $('.nested-sortable li a')[1].id;
  $('ul.nested-sortable').sortable({
    placeholder: '<li><a href="#" class="placeholder">Move Here</a></li>',
    exclude: '.excluded',
    onDrop: function  (item, targetContainer, s) {
      var clonedItem = $('<li/>').css({height: 0});
      item.before(clonedItem);
      clonedItem.transit({'height': item.height()});
      item.transit(clonedItem.position(), function() {
        clonedItem.detach();
        s(item);
      });
    }
  }).on('click', 'a', function(event) {
    event.preventDefault();
    if ((this.id === activePage) || (this.id === 'item_root')) {
      return false;
    }
    activePage = this.id;
    changePage.call(this);
    return false;
  });

  pageControls(activePage);
}

$(document).ready(function() {
  if ($('body').hasClass('pages-template')) {
    // changePage.call($('.nested-sortable li a')[0]);
    pageFunctions();
    // load up the first item
    $('.nested-sortable li a').first().trigger('click');
  }
});

function updateSettings() {
  var data = {};
  $('.settings-control').each(function(index, el) {
    data[$(el).find('.prop-key').val()] = $(el).find('.prop-value').val();
  });
  $.post('save_settings', { settings: data }).done(function(res) {
    phile.message(res.message);
  });
}

function buttonFns() {
  $('#delete-setting').on('click', function(event) {
    event.preventDefault();
    $('.settings-control').find('.prop-check').each(function(index, el) {
      if ($(el).prop('checked')) {
        $(el).parent().transit({
          opacity: 0,
          scale: 0,
          height: 0
        }, 400, function() {
          $(this).remove();
        });
      }
    });
    return false;
  });

  $('#new-setting').on('click', function(event) {
    event.preventDefault();
    $.get(admin.asset_path + 'template-input.php', function(data) {
      $('.settings-form').append(data);
      $('.settings-control').last().transit({
        x: '100%',
        opacity: 0
      }, 0).transit({
        x: 0,
        opacity: 1
      }, 400);
    });
    return false;
  });

  $('#save-setting').on('click', function(event) {
    event.preventDefault();
    updateSettings();
    return false;
  });

  $('.settings-control').on('click', '.prop-check', function() {
    if (this.checked) {
      $('#delete-setting').addClass('active');
    } else {
      // check and see if there are any checked items
      if ($('.settings-control').find('.prop-check').filter(':checked').length === 0) {
        $('#delete-setting').removeClass('active');
      }
    }
  });
}

$(function() {
  if ($('body').hasClass('settings-template')) {
    $('#check-all').on('click', function(event) {
      $('.settings-control').find('.prop-check').prop('checked', $(this).prop('checked'));
      if (this.checked) {
        $('#delete-setting').addClass('active');
      } else {
        $('#delete-setting').removeClass('active');
      }
    });
    buttonFns();
  }
});
