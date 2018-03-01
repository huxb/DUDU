# YouQianDUDU

Placed in placeholder index and css

Will need to work on resizing for phone

Then dynamic and accessibility

Then security

Then format of the page itself

also SSH huxb@vergil.u.washington.edu

structural data markup
https://developers.google.com/search/docs/guides/intro-structured-data?visit_id=1-636310460033663888-1150720839&hl=en&rd=1
http://searchengineland.com/how-to-use-rich-snippets-structured-markup-for-high-powered-seo-99081

call to action "discover how", "read more about", "click here"
cliffhangers

full white background with huge grey box as footer <----
grey and orange theme
huge interactive text top left
large pictures of author

social media brick win8 style

attraction:bullet heads, summary, voice over, important phrases. relevant and helpful links to previous papers which shares similar qualities

fidget spinner method: (30 sec of intersting videos) + test

light and dark mode
size of words

sort by levels, toughness, relevancy, chance of appearing

request submission of school paper for subscription duration
    readable photos would do
    credited within 24hrs upon valid first submission

get terminal using ctrl `

moving sidebar
<div class="codeWrap fixedRight" id="fixedRight" style="top: 333px;">
    <div class="code_hd">
        <a class="code_close" id="fixedRight_closeBtn" href="javascript:;" title="关闭"></a>
    </div>
    <div class="code_bd">
        <span class="code_pic"><img src="http://img1.chuangshi.qq.com/chuangshi/p1/code01.png" width="80" height="80" alt=""></span>
        <p class="code_txt">QQ阅读<br>客户端下载</p>
    </div>
</div>


Bootstrap from CDN / copy from server

Both:
<head>
  <!-- Bootstrap CSS CDN -->
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
</head>
<body>
  <!-- APP CONTENT -->

  <!-- jQuery CDN -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <!-- jQuery local fallback -->
  <script>window.jQuery || document.write('<script src="/local/jquery.min.js"><\/script>')</script>
  <!-- Bootstrap JS CDN -->
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
  <!-- Bootstrap JS local fallback -->
  <script>if(typeof($.fn.modal) === 'undefined') {document.write('<script src="/local/bootstrap.min.js"><\/script>')}</script>
  <!-- Bootstrap CSS local fallback -->
  <div id="bootstrapCssTest" class="hidden"></div>
  <script>
    $(function() {
      if ($('#bootstrapCssTest').is(':visible')) {
        $("head").prepend('<link rel="stylesheet" href="/local/bootstrap.min.css">');
      }
    });
  </script>
</body>

Placed here just in case I would need it again later
      <!--Left Navigation-->
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
          <!--Home-->
          <li class="navLink nav-item">
            <a class="active navLink nav-link" href="#">Home</a>
          </li>
          <!--Exercise-->
          <li class="navLink nav-item">
            <a class="navLink nav-link" href="">Exercise</a>
          </li>
          <!--Composition-->
          <li class="navLink nav-item">
            <a class="navLink nav-link" href="">Composition</a>
          </li>
          <!--Schedule-->
          <li class="navLink nav-item">
            <a class="navLink nav-link" href="">Schedule</a>
          </li>
        </ul>
      </div>
      <!--Center Navigation-->
      <div class="mx-auto order-0">
        <a class="name navbar-brand mx-auto" href="#">优倩</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!--Right Navigation-->
      
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <form class="form-inline" action="/action_page.php">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">寻找作文</span>
              </div>
              <input type="text" class="form-control" placeholder=" ">
            </div> 
          </form>
        </nav>
        <ul class="navbar-nav ml-auto">
          <!--Search bar-->
          <li class="navLink nav-item active">
          </li>
          <!--Back to top-->
          <li class="navLink to_top nav-item active">
            <a class="nav-link" href="#" aria-label="To page top">
              <i class="fas fa-arrow-circle-up"></i>   To Top</a>
            </href>
          </li>
        </ul>
      </div>


    
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    }

/* remove bullet points */
ol, ul{
    list-style: none outside none;
    list-style-type: none;
    list-style-position: outside;
    list-style-image: none;
}

ul{
    margin-bottom: 0;
}
li{
    font-size: 18px;
    margin-left: 2em;
    margin-top: .5em;
    margin-bottom: .5em;
    font-variant: small-caps;
    text-decoration: none;
    color: white;
}

#searchBar{
    display: inline;
}

Specificity issue:
  First selector is overriding the second because of having an ID
  e.g. .icon would not work if .topNav was not referenced previously