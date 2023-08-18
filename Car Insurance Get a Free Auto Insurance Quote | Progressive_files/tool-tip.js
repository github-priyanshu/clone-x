function getUniqueTipId(){var n="tip-"+Math.floor(0+999*Math.random());if(document.getElementById(n)===null)return n;getUniqueTipId()}function openToolTip(){(positioningElement===undefined||positioningElement===null)&&(positioningElement="body");var n=getUniqueTipId();_p(positioningElement).append("<div id='ToolTipDialog' class='tool-tip "+variant+"' data-tool-tip='"+hash+"' role='dialog' tabindex='-1' aria-label='disclosure' aria-describedby='"+n+"'><div class='tip-scroll' id='"+n+"'>"+text+"<\/div><button type='button' class='tooltip-close'>"+closeBox+"<span class='sr-only'>Close Dialog<\/span><\/button><div class='arrow'><\/div><\/div>");positioningElement.setAttribute("tooltip-open","");_p(".tool-tip[data-tool-tip='"+hash+"']").find(".tooltip-close").on("click",function(n){n.preventDefault();closeToolTip(_p("[tooltip-open] #ToolTipDialog"),n,!0)});bindTabFeatures();setTimeout(function(){_p(tip).focus()},500);tip=_p("[data-tool-tip='"+hash+"']");toolTipArrow=_p(".tool-tip .arrow");positionToolTip();checkEdges();positionArrow()}function resizeFunctions(){_p("[data-tool-tip='"+hash+"']").length>0&&(positionToolTip(),checkEdges(),positionArrow())}function positionToolTip(){tipDims=tip.dimensions();parentDims=_p(positioningElement).dimensions();arrowDims=toolTipArrow.dimensions();var n=-(tipDims.width/2),t=-(tipDims.height+arrowDims.height);tip.css("left",n+"px");tip.css("top",t+"px")}function checkEdges(){var t,f,e,n;tip.removeClass("flip");t=document.getElementsByTagName("body")[0].offsetWidth;switch(forceOutView){case"top":i=!0;break;case"left":r=!0;break;case"right":u=!0;break;default:var i=parentDims.top<=tipDims.height+arrowDims.height,r=tip.dimensions("left")<=0,u=tip.dimensions("right")>t}tip.closest("[data-tooltip=below]").length&&(i=!0);f=t<=450;i&&(e=parentDims.height+arrowDims.height,tip.css("top",e+"px"),tip.addClass("flip"));f?(n=-parentDims.left+t/2-tipDims.width/2,tip.css("left",n+"px")):(r&&!u&&(n=-arrowDims.width,tip.css("left",n+"px")),u&&!r&&(n=-tipDims.width+arrowDims.width,tip.css("left",n+"px")))}function positionArrow(){toolTipArrow.css("left","0px");arrowDims=toolTipArrow.dimensions();var n;n=parentDims.left-arrowDims.left-arrowDims.width/2+parentDims.width/2;n<0&&(n=0);n>tipDims.width&&(n=tipDims.width-arrowDims.width);toolTipArrow.css("left",n+"px")}function bindTabFeatures(){var n=_p(".tip-body a");_p(".tool-tip .tooltip-close").tabGoTo(".tool-tip");n.length>0?(_p(".tool-tip").tabGoBack(".tool-tip .tooltip-close"),n.first().tabGoBack(".tool-tip"),_p(".tool-tip .tooltip-close").tabGoBack(n.last())):(_p(".tool-tip .tooltip-close").tabGoBack(".tool-tip"),_p(".tool-tip").tabGoBack(".tool-tip .tooltip-close"));_p(".tool-tip").on("keydown",function(n){var t=n.which||n.keyCode;t==key.escape&&(event.preventDefault(),event.stopPropagation(),closeToolTip(_p("[tooltip-open] #ToolTipDialog"),n,!0));t==key.enter&&n.target.tagName.toLowerCase()!=="a"&&n.preventDefault()});_p(".tool-tip[data-tool-tip='"+hash+"']").find(".tooltip-close").on("keydown",function(n){var t=n.which||n.keyCode;t==key.enter&&n.stopPropagation()})}function closeToolTip(n,t,i,r){var f,u,e;_p("[tooltip-open] #ToolTipDialog").length>0&&(u=1,f=i?30:0,_p("[tooltip-open]").removeAttr("tooltip-open"),e=setInterval(function(){n.css("opacity")>0?(u+=-.1,n.css("opacity",u)):(clearInterval(e),(t.target.parentNode.className=="tooltip-close"||t.target.className=="tooltip-close"||t instanceof KeyboardEvent)&&_this.focus(),n.remove(),r&&r())},f))}var tip,_this,variant,text,positioningElement,hash,forceOutView,toolTipArrow,tipDims,parentDims,arrowDims,closeBox="<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='416' height='416' viewBox='0 0 416 416'><path d='M251.869 207.985l148.759-148.759c12.137-12.137 12.137-31.752 0-43.884s-31.752-12.137-43.884 0l-148.759 148.79-148.759-148.697c-12.137-12.137-31.752-12.137-43.884 0s-12.137 31.752 0 43.884l148.759 148.697-148.759 148.759c-12.137 12.137-12.137 31.752 0 43.884 6.053 6.053 13.995 9.093 21.942 9.093s15.894-3.044 21.942-9.093l148.759-148.79 148.759 148.697c6.053 6.053 13.995 9.093 21.942 9.093s15.894-3.044 21.942-9.093c12.137-12.137 12.137-31.752 0-43.884l-148.759-148.697z'><\/path><\/svg>";_p("body").on("tool-tip",function(n){_this=n.detail.target;variant=n.detail.variant;text=n.detail.text;positioningElement=n.detail.positioningElement;hash=text.hashCode();forceOutView=n.detail.forceOutView;positioningElement.hasAttribute("tooltip-open")?closeToolTip(_p("[tooltip-open] #ToolTipDialog"),n,!0):_p(".tool-tip").length>0?closeToolTip(_p("[tooltip-open] #ToolTipDialog"),n,!1,openToolTip):openToolTip()});_p(window).on("click",function(n){_p("[tooltip-open]").length>0&&_p(n.target).closest("[tooltip-trigger]",!0).length==0&&closeToolTip(_p("[tooltip-open] #ToolTipDialog"),n,!0)});_p().throttleResize(resizeFunctions);