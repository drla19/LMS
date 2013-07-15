function addRole(url){
    jQuery.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery.blockUI({message: result,
                                css: {cursor: 'default',
                                width: '576px'}
                            });
            },
            complete: function() {
                var options = {
                        dataType: 'json',
                        beforeSubmit:  showRequestRole,
                        success: showResponseRole  // post-submit callback
                    }

                    jQuery("#rolesForm").ajaxForm(options);
            }
    })
}

function showRequestRole(formData, jqForm, options) {
    return true;
}

function showResponseRole(responseText, statusText) {
    if(responseText[0] == "succes")
    {
        jQuery.unblockUI();
        jQuery('table.dataGrid').flexReload();
    } else {
        var errors = "<ul>";
        for(var i in responseText) {
            errors += "<li>"+responseText[i]+"</li>";
        }

        errors += "</ul>";

        if(i)
        {
            jQuery('div.errorSummary').html(errors);
        }
    }
}

function deleteRole(url,id)
{
    jQuery.ajax({
            url: url+'/users/roles/delete/id/'+id,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery('table.dataGrid').flexReload();
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                jQuery.unblockUI();
            }
    })
}

function updateRole(url,id)
{
    jQuery.ajax({
            url: url+'/users/roles/update/id/'+id,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery.blockUI({message: result,
                                css: {cursor: 'default',
                                width: '576px'}
                            });
            },
            complete: function() {
                var options = {
                        dataType: 'json',
                        beforeSubmit:  showRequestRole,
                        success: showResponseRole  // post-submit callback
                    }

                    jQuery("#rolesForm").ajaxForm(options);
            }
    })
}

/--------------------------------------------------------------------------------/

function addUser(url){
    jQuery.ajax({
            url: url+'/users/users/create',
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery.blockUI({message: result,
                                css: {cursor: 'default',
                                width: '576px'}
                            });
            },
            complete: function() {
                var options = {
                        dataType: 'json',
                        beforeSubmit:  showRequestUser,
                        success: showResponseUser  // post-submit callback
                    }

                    jQuery("#usersForm").ajaxForm(options);
                    jQuery("#submitButton").slider({'min':0,'max':100,'range':'false','step':1,'animate':'false','values':[0]});
                    jQuery("#submitButton").slider("values", 0, 0);

            }
    })
}

function showRequestUser(formData, jqForm, options) {
    return true;
}

function showResponseUser(responseText, statusText) {
    if(responseText[0] == "succes")
    {
        jQuery.unblockUI();
        jQuery('table.dataGrid').flexReload();
    } else {
        var errors = "<ul>";
        for(var i in responseText) {
            errors += "<li>"+responseText[i]+"</li>";
        }

        errors += "</ul>";

        if(i)
        {
            jQuery('div.errorSummary').html(errors);
        }
    }
}

function deleteUser(url,id)
{
    jQuery.ajax({
            url: url+'/users/users/delete/id/'+id,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery('table.dataGrid').flexReload();
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                jQuery.unblockUI();
            }
    })
}

function updateUser(url,id)
{
    jQuery.ajax({
            url: url+'/users/users/update/id/'+id,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery.blockUI({message: result,
                                css: {cursor: 'default',
                                width: '576px'}
                            });
            },
            complete: function() {
                var options = {
                        dataType: 'json',
                        beforeSubmit:  showRequestUser,
                        success: showResponseUser  // post-submit callback
                    }

                    jQuery("#usersForm").ajaxForm(options);
            }
    })
}

/***************************************************************************************************/

function userPermissions(url,table,operation) {
    jQuery.ajax({
            url: url+'/users/'+table+'/'+operation,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery('#accordionAdminProperties').append(result);
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                var options = {
                        dataType: 'html',
                        beforeSubmit:  showRequestAccessUsers,
                        success: showResponseAccessUsers  // post-submit callback
                    }

                jQuery("#accessUsers").ajaxForm(options);
                jQuery.unblockUI();
            }
    })
}

function showRequestAccessUsers(formData, jqForm, options) {
    jQuery.blockUI({
        message: null
    });
    return true;
}

function showResponseAccessUsers(responseText, statusText) {
    jQuery("#accessUsers").replaceWith(responseText);
    var options = {
            dataType: 'html',
            beforeSubmit:  showRequestAccessUsers,
            success: showResponseAccessUsers  // post-submit callback
        }

    jQuery("#accessUsers").ajaxForm(options);
    jQuery.unblockUI();
}

function rolesPermissions(url,id) {
    jQuery.ajax({
            data: 'id='+id,
            url: url+'/users/access_roles/admin/',
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery('#rolesTable').html(result);
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                var options = {
                        dataType: 'html',
                        beforeSubmit:  showRequestAccessRoles,
                        success: showResponseAccessRoles  // post-submit callback
                    }

                jQuery("#accessRoles").ajaxForm(options);
                jQuery.unblockUI();
            }
    })
}

function showRequestAccessRoles(formData, jqForm, options) {
    jQuery.blockUI({
        message: null
    });
    return true;
}

function showResponseAccessRoles(responseText, statusText) {
    jQuery("#accessRoles").replaceWith(responseText);
    var options = {
            dataType: 'html',
            beforeSubmit:  showRequestAccessRoles,
            success: showResponseAccessRoles  // post-submit callback
        }

    jQuery("#accessRoles").ajaxForm(options);
    jQuery.unblockUI();
}

function deleteAccesRoles(objtodel,url,id) {
    if(confirm("Are you sure you want to delete this access rule?")) {
        jQuery.ajax({
            data: 'objtodel='+objtodel+'&id='+id,
            url: url+'/users/access_roles/delete/',
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                rolesPermissions(url,id);
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            }
        })
    }
}

function checkAccess(url,funkcia) {
   jQuery.ajax({
        url: url+'/special/checkAccess',
        type: 'POST',
        timeout: 30000,
        dataType: 'html',

        error: function() {
            showError();
        },
        
        success: function(result) {
            eval(funkcia);
        }
    })
}

function clearContent(){
    jQuery("div.ui-layout-east").html('');
    jQuery("div.ui-layout-center").html('');
}

function showError() {
    jQuery.blockUI({message: "<div class='error'>Access denied</div>"})
    setTimeout(jQuery.unblockUI, 2000);
}

function loadPageAccess(id,baseUrl) {
    realId = id.split("_");
    jQuery.ajax({
                url: 'tree/tree/loadaccess/id/'+realId[1],
                type: 'POST',
                timeout: 30000,
                dataType: 'html',

                error: function(result) {
                    alert('operácia sa nepodarila');
                },
                success: function(result) {
                    myLayout.sizePane('east', 350);
                    myLayout.open('east');
                    jQuery("div.ui-layout-east").html(result);
                },
                beforeSend: function() {
                    
                },
                complete: function() {
                    jQuery("#accordion3").tabs()
                }
        });
}

function tinyinit(baseUrl) {

    jQuery.ajax({
                url: "languages/languages/getlanguages",
                type: 'POST',
                timeout: 30000,
                dataType: 'json',

                error: function(result) {
                    alert('operácia sa nepodarila');
                },
                success: function(result) {
                    var elem = "";

                    for(var i in result) {
                        elem += result[i]+",";
                    }

                    tinyMCE.init({

                        mode : "exact",
                        elements : elem,
                        theme : "advanced",
                        plugins: "table,advhr,advimage,advlink,insertdatetime,searchreplace,contextmenu,fullscreen,pagebreak,media,paste",
                        setup : function(ed) {
                                ed.addButton('mybutton', {
                                title : 'Fotogaléria',
                                image : 'images/web/gallery_icon.gif',
                                onclick : function() {
                                    // Add you own code to execute something on click
                                    ed.focus();
                                    ed.selection.setContent('<span style="font-weight: bold">|---gallery---|</span>');
                                }
                            });
                        },
                        content_css: "../css/typography.css,../css/form.css",
                        relative_urls: false,
                        file_browser_callback : "myFileBrowser",

                        theme_advanced_buttons3 : "tablecontrols,pastetext,pasteword,selectall,media,mybutton",

                        theme_advanced_toolbar_location : "top",
                        theme_advanced_toolbar_align : "left",
                        theme_advanced_statusbar_location : "bottom",
                        theme_advanced_resizing : true,

                        extended_valid_elements : "object[classid|codebase|width|height|style|data|type],param[name|value],embed[src|quality|width|height|type|pluginspage|bgcolor]"
                    })
                },
                complete: function() {
                    var options = {
                        beforeSubmit:  showRequest,
                        success: showResponse  // post-submit callback
                    }
                    jQuery('#treeForm').bind('form-pre-serialize', function(e) {
                        tinyMCE.triggerSave();
                    });
                    
                    jQuery("#treeForm").ajaxForm(options);
                    hideLoader();
                }
        });
}

function myFileBrowser(field_name, url, type, win) {
    //alert("Field_Name: " + field_name + "\nURL: " + url + "\nType: " + type + "\nWin: " + win); // debug/testing

    var myURL = "/js/tiny_mce/plugins/tinybrowser/tinybrowser.php?type=" + type;

    tinyMCE.activeEditor.windowManager.open({
        file : myURL,
        title : "File Browser",
        width : 770,
        height : 480,
        close_previous : "no",
        resizable : "yes",
        inline : "yes"
    }, {
        window : win,
        input : field_name
    });
    return false;
}

function submitForm(flag) {
    jQuery("#flag").val(flag);
    jQuery("#treeForm").submit();
}

function showRequest(formData, jqForm, options) {
    showLoader("Ukladám");
    return true;
}

function showResponse(responseText, statusText) {

    var retazec = responseText.split("|");

    var id = parseInt(retazec[0]);
    var label = retazec[1];
    alert(id);
    jQuery("#node_"+id).children("a").html('<ins class="jstree-icon">&nbsp;</ins>'+label);
    jQuery("#pageLabel").html(label);
    hideLoader();
}

function addLanguage(url){
    jQuery.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery.blockUI({message: result,
                                css: {cursor: 'default',
                                width: '576px'}
                            });
            },
            complete: function() {
                var options = {
                        dataType: 'json',
                        beforeSubmit:  showRequestLanguage,
                        success: showResponseLanguage  // post-submit callback
                    }

                    jQuery("#languageForm").ajaxForm(options);
            }
    })
}

function showRequestLanguage(formData, jqForm, options) {
    return true;
}

function showResponseLanguage(responseText, statusText) {
    if(responseText[0] == "succes")
    {
        jQuery.unblockUI();
        jQuery('table.dataGrid').flexReload();
    } else {
        var errors = "<ul>";
        for(var i in responseText) {
            errors += "<li>"+responseText[i]+"</li>";
        }

        errors += "</ul>";

        if(i)
        {
            jQuery('div.errorSummary').html(errors);
        }
    }
}

function updateLanguage(url,id)
{
    jQuery.ajax({
            url: url+id,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery.blockUI({message: result,
                                css: {cursor: 'default',
                                width: '576px'}
                            });
            },
            complete: function() {
                var options = {
                        dataType: 'json',
                        beforeSubmit:  showRequestRole,
                        success: showResponseRole  // post-submit callback
                    }

                    jQuery("#languageForm").ajaxForm(options);
            }
    })
}

function deleteLanguage(url,id)
{
    jQuery.ajax({
            url: url+id,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery('table.dataGrid').flexReload();
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                jQuery.unblockUI();
            }
    })
}

function media(url,basePath) {
    jQuery.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery(".ui-layout-center").html('<div style="padding: 10px">'+result+'</div>');
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                loadTree('./media',basePath);
                jQuery.unblockUI();
            }
    })
}

function loadTree(path,basePath) {

    jQuery.ajax({
            data: 'path='+path+'&basePath='+basePath,
            url: basePath+'/media/media/list',
            type: 'POST',
            timeout: 30000,
            dataType: 'json',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery('#mediaTree').html(result.label+result.mediaTree);
                var poleObj = result.mediaView;
                if(poleObj) {
                    var objects = "";
                    //objects += "<div class='submitButton'>Delete all files</div>";
                    for(var n in poleObj) {
                        if(poleObj[n].mime.substr(0,5) == 'image') {
                            if(poleObj[n].name.substr(0,3) == "th_") {
                                objects += "<div class='imageObj'>";
                                objects += "<div class='canvas'>";
                                objects += "<img src='"+poleObj[n].url+"' />";
                                objects += "</div>";
                                objects += "<div class='imageLabel'><b>"+poleObj[n].name.substr(3)+"</b></div>";
                                objects += "<div class='icons'><a href='javascript: deleteImage(\""+poleObj[n].url+"\","+path+","+basePath+")' style='color: red'>[ delete ]</a></div>";
                                objects += "</div>";
                            }
                        }
                    }
                    jQuery('#mediaView').html(objects);
                }
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                jQuery.unblockUI();
            }
    })
}

function createDirectory(url,directory,dir,basePath) {
    if(directory != "") {
        jQuery.ajax({
                data: 'newDir='+directory+'&dir='+dir,
                url: url,
                type: 'POST',
                timeout: 30000,
                dataType: 'json',

                error: function(result) {
                    alert('operácia sa nepodarila, prvdepodobne pretože daný adresár už existuje');
                },
                success: function(result) {
                    if(result[0] == 'succes') {
                        jQuery("#directory").val('');
                        loadTree(dir,basePath);
                    } else {
                        alert('Directory can\'t be create');
                    }
                },
                beforeSend: function() {
                    jQuery.blockUI({
                        message: null
                    });
                },
                complete: function() {
                    jQuery.unblockUI();
                }
        })
    } else {
        alert("Directory name can\'t be empty");
    }
}

function showDeleteTree(obj,path) {
    jQuery("#"+obj.id+" div.dirDelete").css("visibility","visible");
}

function hideDeleteTree(obj,path) {
    jQuery("#"+obj.id+" div.dirDelete").css("visibility","hidden");
}

function deleteDir(dir,url,basePath) {
    if (confirm("Are you sure you want to delete this directory?"))
    {
      jQuery.ajax({
                data: 'dir='+dir,
                url: url,
                type: 'POST',
                timeout: 30000,
                dataType: 'json',

                error: function(result) {
                    alert('operácia sa nepodarila, pravdepodobne pretože daný adresár nie je prázdny');
                },
                success: function(result) {
                    if(result[0] == 'succes') {
                        jQuery("#directory").val('');
                        loadTree(result[1],basePath);
                    } else {
                        alert('Directory can\'t be create');
                    }
                },
                beforeSend: function() {
                    jQuery.blockUI({
                        message: null
                    });
                },
                complete: function() {
                    jQuery.unblockUI();
                }
        })
    }
}

function uploadFile(url,basePath) {
    var destination = jQuery("#dir").html();
    jQuery.ajax({
            url: url,
            type: 'POST',
            timeout: 30000,
            dataType: 'html',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                jQuery(".ui-layout-east").html('<div style="padding: 10px">'+result+'</div>');
            },
            beforeSend: function() {
                myLayout.sizePane('east', 450);
                myLayout.open('east');
            },
            complete: function() {
                loadTree(destination,basePath);
                $("#uploadify").uploadify({
                        'uploader'       : basePath+'/js/upload/uploadify.swf',
                        'script'         : basePath+'/upload/uploadify.php',
                        'cancelImg'      : basePath+'/images/cancel.png',
                        'folder'         : destination,
                        'queueID'        : 'fileQueue',
                        'auto'           : true,
                        'multi'          : true,

                        onComplete: function(event,queueID,fileObj) {
                            resizeImage(fileObj.filePath,destination,basePath);
                        }
                });
            }
    })
}

function resizeImage(filePath,path,basePath) {
    jQuery.ajax({
            data: 'filePath='+filePath,
            url: 'media/media/resizeImage',
            type: 'POST',
            timeout: 30000,
            dataType: 'json',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                if(result[0] == 'succes') {
                    jQuery("#directory").val('');
                    loadTree(path,basePath);
                } else {
                    alert('File can\'t be resized');
                }
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                jQuery.unblockUI();
            }
    })
}

function deleteImage(imagePath, path, basePath) {
    jQuery.ajax({
            data: 'imagePath='+imagePath,
            url: 'media/media/resizeImage',
            type: 'POST',
            timeout: 30000,
            dataType: 'json',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                if(result[0] == 'succes') {
                    jQuery("#directory").val('');
                    loadTree(path,basePath);
                } else {
                    alert('File can\'t be resized');
                }
            },
            beforeSend: function() {
                jQuery.blockUI({
                    message: null
                });
            },
            complete: function() {
                jQuery.unblockUI();
            }
    })
}

function setState(name,value) {
    jQuery.ajax({
            data: 'name='+name+'&value='+value,
            url: 'users/users/setState',
            type: 'POST',
            timeout: 30000,
            dataType: 'json',

            error: function(result) {
                alert('operácia sa nepodarila');
            },
            success: function(result) {
                for(var i in result.hidden) {
                    jQuery("#"+result.hidden[i]).css("display","none");
                }

                for(var j in result.visible) {
                    jQuery("#"+result.visible[j]).css("display","block");
                }
            }
    })
}

var cestaSuboru = "";

function editTemplate(template,isMaster) {
    if(!isMaster) {
        var chunks = template.split("/");
        var realPath = chunks[0]+'/'+chunks[1]+'/'+chunks[2]+'/views/'+chunks[3]+'/'+chunks[4];
    } else {
        var realPath = template;
    }
    var result = '<div style="height: 20px; position: relative"><div style="display:none" id="cestaSuboru">'+realPath+'</div><div style="position: absolute; right: 10px"><a href="javascript: jQuery.unblockUI()" style="font-weight: bold; color: red; text-decoration: none;">X</a></div></div><textarea id="serverSide" cols="120" rows="20"></textarea>';
    jQuery.blockUI({message: result,
        css: {cursor: 'default',
        width: '710px',
        top: '100px', left: '200px'}
    });
    $('#serverSide').markItUp(myServersideSettings);
}

function showLoader(sprava) {
    jQuery.blockUI({ message: "<div style='padding: 20px; color: red; font-weight: bold; font-size: 16px'>"+sprava+"</div>'" });
    jQuery("#loaderBox").css("visibility","visible");
}

function hideLoader() {
    setTimeout($.unblockUI, 500);
    jQuery("#loaderBox").css("visibility","hidden");
}