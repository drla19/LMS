// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
myServersideSettings = {
    onShiftEnter:   {keepDefault:false, replaceWith:'<br />\n'},
    onCtrlEnter:    {keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
    onTab:          {keepDefault:false, openWith:'     ', placeHolder:''},
    markupSet:  [
        {name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)'},
        {name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)'},
        {name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>'},
        {separator:'---------------'},
        {name:'Save', className:'save', beforeInsert:function(markItUp) {miu.save(markItUp)}},
        {name:'Load', className:'load', beforeInsert:function(markItUp) {miu.load(markItUp)}},
        {separator:'---------------'},
        {name:'Clean', className:'clean', replaceWith:function(markItUp) {return markItUp.selection.replace(/<(.*?)>/g, "")}}
    ]
}

// mIu nameSpace to avoid conflict.
miu = {
    save: function(markItUp) {
        data = markItUp.textarea.value;
        template = jQuery("#cestaSuboru").html();
        ok = confirm("Save the content?");
        if (!ok) {
            return false;
        }
        if(data != "") {
            $.post("tree/tree/savetemplate", "data="+data+"&template="+template, function(response) {
                    if(response === "MIU:OK") {
                        alert("Saved!");
                    }
                }
            );
        }
        
    },
    load: function(markItUp) {
        template = jQuery("#cestaSuboru").html();
        $.post("tree/tree/loadtemplate","template="+template, function(response) {
                if(response === "MIU:EMPTY") {
                    alert("Nothing to load");
                } else {
                    markItUp.textarea.value = response;
                }
            }
        );
    },
    // Deal with Tiny Url server-side Script
   tinyUrl: function (markItUp) {
        var url, tinyUrl;
        url = prompt("Url:", "http://");
        if (url) {
            $.ajaxSetup( {async:false} );
            $.post(markItUp.root+"utils/tinyurl/get.php", "url="+url, function(content) {
                tinyUrl = content;
                }
            );
        } else {
            tinyUrl = "";
        }
        return '<a href="'+tinyUrl+'"(!( title="[![Title]!]")!)>';
    },

    // Deal with Html Tidy server-side Script
    tidyRepair: function(markItUp) {
        var tidy;
        if (markItUp.selection !== "") {
            $.ajax({
                async:   false,
                type:    "POST",
                url:     markItUp.root+"utils/htmltidy/repair.php",
                data:    "selection="+encodeURIComponent(markItUp.selection),
                success:function(content) {
                    tidy = content;
                }
            });
        } else {
            $.ajax({
                async:   true,
                type:    "POST",
                url:     markItUp.root+"utils/htmltidy/repair.php",
                data:    "data="+encodeURIComponent(markItUp.textarea.value),
                success:function(content) {
                    tidy = content;
                    markItUp.textarea.value = tidy;
                }
            });
        }
        return tidy;
    },

    // Deal with Html Tidy server-side Script
    tidyReport: function(markItUp) {
        $.ajax({
            async:    false,
            type:     "POST",
            url:      markItUp.root+"utils/htmltidy/report.php",
            data:     "data="+encodeURIComponent(markItUp.textarea.value),
            success:function(content) {
                win = window.open("", "htmlTidyReport","width=600, height=400, resizable=yes, scrollbars=yes");
                win.document.open();
                win.document.write(content);
                win.document.close();
                win.focus();
            }
        });
    },

    // Deal with Rss Feed Grabber server-side Script
    rssFeedGrabber: function(markItUp) {
        var feed, limit = 100;
        url = prompt('Rss Feed Url', 'http://rss.news.yahoo.com/rss/topstories');
        if (markItUp.altKey) {
            limit = prompt('Top stories', '5');
        }
        $.ajax({
                async:     false,
                type:     "POST",
                url:     markItUp.root+"utils/rssfeed/grab.php",
                data:    "url="+url+"&limit="+limit,
                success:function(content) {
                    feed = content;
                }
            }
        );
        if (feed == "MIU:ERROR") {
            alert("Can't find a valid RSS Feed at "+url);
            return false;
        }
        return feed;
    }
}
