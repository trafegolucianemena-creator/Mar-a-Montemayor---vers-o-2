(function () {
    var wjEmbedConfig = {"formButtonText":"\u00a1Quiero registrarme GRATIS!","buttonBgColor":"#000000","buttonBgOpacity":0.5,"formBgColor":"#ffffff","formBgOpacity":"1","formAccentColor":"#29b6f6","formAccentOpacity":"0.95","formPadding":null,"registrationPageTemplateId":null,"buttonText":"Register","barBgColor":"#29b6f6","barBgOpacity":0.95,"formTemplate":2,"formColor":1,"hash":"0zzlraz7","memberId":201894,"webinarId":254,"webinarTitle":"Conecta con la Energ\u00eda del Dinero y Sella tus Fugas Financieras","embedType":"form","dependencies":{"js":"https:\/\/event.webinarjam.com\/js\/registration_form_embed.js?v=","css":"https:\/\/event.webinarjam.com\/css\/reg_form_embed\/styles_form_embed_wrapper.css?v="},"routes":{"trackVisitor":"https:\/\/event.webinarjam.com\/register\/0zzlraz7\/visitor","registrationForm":"https:\/\/event.webinarjam.com\/register\/254\/0zzlraz7\/form-embed?ts=1775138766\u0026webinar_id=254"},"views":{"spinningWheel":"\u003Cdiv class=\u0022wj_overlay_inner\u0022\u003E\n    \u003Cdiv class=\u0022wj_css_spinner_coghweel n_s wj_mb-4\u0022\u003E\n        \u003Cdiv\u003E\n            \u003Ci\u003E\u003C\/i\u003E\n            \u003Ci\u003E\u003C\/i\u003E\n        \u003C\/div\u003E\n    \u003C\/div\u003E\n    \u003Cspan\u003E\u003Clang data-tag=\u0022Txt_connecting_to_server\u0022\u003E{{Txt_connecting_to_server}}\u003C\/lang\u003E\u003C\/span\u003E\n\u003C\/div\u003E\n"},"translations":{"Txt_connecting_to_server":"Confirmando disponibilidad..."}},
        webinarHash = wjEmbedConfig['hash'],
        embedType = wjEmbedConfig['embedType'];
    var utmParameters = getUtmQueryParameters(window.location.href);

    wjEmbedConfig['timezoneOffset'] = -(new Date()).getTimezoneOffset();

    if (
        'undefined' !== typeof window['wj'] &&
        'undefined' !== typeof window['wj'][webinarHash] &&
        'undefined' !== typeof window['wj'][webinarHash][embedType]
    ) {
        return;
    }

    window['wj'] = 'undefined' === typeof window['wj'] ? [] : window['wj'];
    window['wj'][webinarHash] = 'undefined' === typeof window['wj'][webinarHash] ? {} : window['wj'][webinarHash];
    window['wj'][webinarHash][embedType] = 'undefined' === typeof window['wj'][webinarHash][embedType] ? wjEmbedConfig : window['wj'][webinarHash][embedType];

    var jqueryScript = document.createElement('script');

    jqueryScript.type = 'text/javascript';
    jqueryScript.onload = loadDependencies;
    jqueryScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';

    document.body.appendChild(jqueryScript);

    function loadDependencies() {
        var cssDependencyLinkId = 'wjCss-form-' + webinarHash,
            jsDependencyScriptId = 'wjJs-form-' + webinarHash;

        if (!document.getElementById(cssDependencyLinkId)) {
            var head  = document.getElementsByTagName('head')[0],
                link  = document.createElement('link');

            link.id   = cssDependencyLinkId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = wjEmbedConfig.dependencies.css;
            link.media = 'all';
            link.onload = proceedAfterCssLoad;

            head.appendChild(link);
        } else {
            proceedAfterCssLoad();
        }

        function proceedAfterCssLoad() {
            document.fonts.load('1em "webinarjam-icons"').then(() => {
                initJsDependencyAndFont();
            });
        }

        const initJsDependencyAndFont = () => {
            if (!document.getElementById(jsDependencyScriptId)) {
                var script = document.createElement('script');

                script.id = jsDependencyScriptId;
                script.type = 'text/javascript';
                script.onload = initEmbedCode;
                script.src = wjEmbedConfig.dependencies.js;

                document.body.appendChild(script);
            } else {
                initEmbedCode();
            }
        }
    }

    function initEmbedCode() {
        if ('undefined' === typeof window['wj'][webinarHash]['jQuery']) {
            window['wj'][webinarHash]['jQuery'] = jQuery.noConflict(true);
            window['wj'][webinarHash]['jQuery'].ajaxSetup({
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true
            });
        }

        var jQ = window['wj'][webinarHash]['jQuery'];

        jQ(document).ready(function() {
            var $embedContainer = jQ('.wj-embed-wrapper[data-webinar-hash="' + webinarHash + '"]'),
                iframeSrc = wjEmbedConfig.routes['registrationForm'] + '&offset=' + wjEmbedConfig.timezoneOffset;
            var allowRedirect = document.location.origin.match(/webinarjam(dev)?\.com/g);
            Object.keys(utmParameters).map(function(utmKey){
                if(iframeSrc.indexOf(utmKey) === -1) {
                    iframeSrc += '&' + utmKey + '=' + utmParameters[utmKey];
                }
            });

            window.removeEventListener('message', embedIframeMessage, true);
            window.addEventListener('message', embedIframeMessage, false);

            if (wjEmbedConfig.registrationPageTemplateId) {
                iframeSrc += '&registrationPageTemplateId=' + encodeURIComponent(wjEmbedConfig.registrationPageTemplateId);
            }

            if (
                wjEmbedConfig.formBgColor &&
                wjEmbedConfig.formBgOpacity
            ) {
                iframeSrc += '&formBgColor=' + encodeURIComponent(wjEmbedConfig.formBgColor);
                iframeSrc += '&formBgOpacity=' + encodeURIComponent(wjEmbedConfig.formBgOpacity);
            }

            if (
                wjEmbedConfig.formAccentColor &&
                wjEmbedConfig.formAccentOpacity
            ) {
                iframeSrc += '&formAccentColor=' + encodeURIComponent(wjEmbedConfig.formAccentColor);
                iframeSrc += '&formAccentOpacity=' + encodeURIComponent(wjEmbedConfig.formAccentOpacity);
            }

            if (wjEmbedConfig.formButtonText) {
                iframeSrc += '&formButtonText=' + encodeURIComponent(wjEmbedConfig.formButtonText);
            }

            if (allowRedirect) {
                iframeSrc += '&allowRedirect=true';
            }

            if ($embedContainer.length) {
                $embedContainer.each(function(i, el) {
                    var $container = jQ(el),
                        $iframe = generateIframe(iframeSrc);

                    if (
                        'undefined' !== typeof wjEmbedConfig.views &&
                        'undefined' !== typeof wjEmbedConfig.views.spinningWheel
                    ) {
                        var $loader = generateSpinningWheel();

                        $container.append($loader);
                    }

                    $container.css({
                        'max-width': '500px',
                        'width': '100%',
                        'height': '220px'
                    });

                    $container.append($iframe);

                    if ($iframe && wjEmbedConfig.registrationPageTemplateId) {
                        var viewportSize = getViewportSize();
                        var contentWindow = $iframe[0].contentWindow;
                        var iframeDoc = $iframe[0].contentDocument || $iframe[0].contentWindow.document;

                        function sendViewportSizeToIframe(size) {
                            contentWindow.postMessage({
                                'func': 'parentViewPortSize',
                                'size': size,
                            }, '*');
                        }

                        (function checkIframeLoaded() {
                            if (iframeDoc.readyState === 'complete') {
                                setTimeout(function(){
                                    sendViewportSizeToIframe(viewportSize);
                                }, 500);
                                return;
                            }
                            setTimeout(checkIframeLoaded, 100);
                        })();
                        jQ(window).resize(function () {
                            var newViewportSize = getViewportSize();
                            if (newViewportSize !== viewportSize) {
                                viewportSize = newViewportSize;
                                sendViewportSizeToIframe(viewportSize);
                            }
                        });
                    }

                });

                trackVisitor();
            }
        });
    }

    function getViewportSize() {
        var docWidth = window.innerWidth;
        return docWidth < 768 ? 'mobile' : (docWidth >= 768 && docWidth <=991 ? 'tablet' : '');
    }

    function uniqueString() {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            string = '';

        for (var i = 0; i < 10; i++) {
            string += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        string = new Date().getTime() + '_' + string;

        return string;
    }

    function trackVisitor() {
        var jQ = window['wj'][webinarHash]['jQuery'],
            hasVisitorCookie = window.wjHasCookie(wjEmbedConfig.memberId, webinarHash);

        if (!hasVisitorCookie) {
            jQ.post(wjEmbedConfig.routes.trackVisitor, {});
            window.wjSetVisitorCookie(wjEmbedConfig.memberId, webinarHash);
        }
    }

    function generateSpinningWheel() {
        var jQ = window['wj'][webinarHash]['jQuery'],
            $loader = jQ(wjEmbedConfig.views.spinningWheel),
            $langEl = $loader.find('lang');

        if ($langEl.length) {
            var langText = $langEl.attr('data-tag');

            $langEl.text(wjEmbedConfig.translations[langText]);
        }

        return $loader;
    }

    function generateIframe(iframeSrc) {
        var jQ = window['wj'][webinarHash]['jQuery'],
            $frameEmbed = jQ('<iframe></iframe>');

        $frameEmbed
            .css({
                'width': '100%',
                'height': '100%',
                'display': 'none'
            })
            .attr({
                'src': iframeSrc,
                'name': 'wj_embed_' + uniqueString(),
                'frameborder': '0',
                'scrolling': 'no'
            });

        return $frameEmbed;
    }

    function embedIframeMessage(message) {
        if ('undefined' === typeof message.data) {
            return;
        }

        if (message.data['func'] === 'error') {
            if (message.data['errorCode'] === '429') {
                var $iframe = $('iframe[name='+message.data['frame']+']');
                var src = $iframe.attr('src');
                $('.wj_overlay_inner span lang').text('High demand, please wait!');
                setTimeout(() => {
                    $iframe.attr('src', src);
                }, 5000);
                return;
            }
        }

        var webinarHash = message.data.hash,
            frameName = message.data.frame;

        switch (message.data['func']) {
            case 'loaded':
                hideLoader(frameName);

                break;

            case 'resize':
                adjustFrameSize(frameName, message.data['height'] + 'px');

                break;

            case 'redirect':
                recursiveRedirect(window.parent, message.data['url']);

                break;
        }
    }

    function hideLoader(frameName) {
        var jQ = window['wj'][webinarHash]['jQuery'],
            $frameEl = jQ('iframe[name="' + frameName + '"]'),
            $frameContainer = $frameEl.closest('.wj-embed-wrapper'),
            $loader = $frameContainer.find('.wj_overlay_inner');

        if ($loader.length) {
            var contentWindow = $frameEl[0].contentWindow;

            $loader.hide();
            $frameEl.show();

            contentWindow.postMessage({
                'func': 'childResize',
            }, '*');
        }
    }

    function adjustFrameSize(frameName, height) {
        var jQ = window['wj'][webinarHash]['jQuery'],
            $frameEl = jQ('iframe[name="' + frameName + '"]'),
            $frameContainer = $frameEl.closest('.wj-embed-wrapper');

        if ($frameContainer.length) {
            $frameContainer.css('height', height);
        }
    }

    function recursiveRedirect(parent, url) {
        try {
            parent.location = url;
        } catch(err) {
            parent = parent.parent;
            recursiveRedirect(parent, url);
        }
    }

    function getUtmQueryParameters(url) {
        var queryStart = url.indexOf('?');
        if (queryStart === -1) {
            return {};
        }

        var queryString = url.substring(queryStart + 1);
        var parameterPairs = queryString.split('&');
        var parameters = {};

        parameterPairs.map(function(pair) {
            var pairSplit = pair.split('=');
            const decodedKey = decodeURIComponent(pairSplit[0]);

            if (decodedKey.indexOf('utm_') === 0) {
                parameters[decodedKey] = decodeURIComponent(pairSplit[1]).trim();
            }
        });

        return parameters;
    }
})();
