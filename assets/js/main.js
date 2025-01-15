(function ($) {
    'use strict';

    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')

        },

        methods: function (e) {
            imJs.featherAtcivation();
            imJs.backToTopInit();
            imJs.mobileMenuActive();
            imJs.vedioActivation();
            imJs.stickyHeader();
            imJs.smothScroll();
            imJs.smothScroll_Two();
            imJs.stickyAdjust();
            imJs.testimonialActivation();
            imJs.contactForm();
            imJs.wowActive();
            imJs.awsActivation();
            imJs.demoActive();
            imJs.activePopupDemo();
            
        },

        
        activePopupDemo: function (e) {
            $('.popuptab-area li a.demo-dark').on('click', function (e) {
                $('.demo-modal-area').addClass('dark-version');
                $('.demo-modal-area').removeClass('white-version');
            });

            $('.popuptab-area li a.demo-light').on('click', function (e) {
                $('.demo-modal-area').removeClass('dark-version');
                $('.demo-modal-area').addClass('white-version');
            })
        },

        demoActive: function (e) {
            $('.rn-right-demo').on('click', function (e) {
                $('.demo-modal-area').addClass('open');
            })
            $('.demo-close-btn').on('click', function (e) {
                $('.demo-modal-area').removeClass('open');
            })
        },
        /*
        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
				e.preventDefault();
				var _self = $(this);
				var __selector = _self.closest('input,textarea');
				_self.closest('div').find('input,textarea').removeAttr('style');
				_self.find('.error-msg').remove();
				_self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
				var data = $(this).serialize();
				$.ajax({
					url: 'https://formspree.io/f/xjvngryw',
					type: "post",
					dataType: 'json',
					data: data,
					success: function (data) {
						_self.closest('div').find('button[type="submit"]').removeAttr('disabled');
						if (data.code == false) {
							_self.closest('div').find('[name="' + data.field + '"]');
							_self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
						} else {
							$('.error-msg').hide();
							$('.form-group').removeClass('focused');
							_self.find('.rn-btn').after('<div class="success-msg"><p>' + data.success + '</p></div>');
							_self.closest('div').find('input,textarea').val('');

							setTimeout(function () {
								$('.success-msg').fadeOut('slow');
							}, 5000);
						}
					}
				});
			});
        },   */


        contactForm: function () {
            $('.rwt-dynamic-form').on('submit', function (e) {
                e.preventDefault();
                var _self = $(this);
                var __selector = _self.closest('input,textarea');
                _self.closest('div').find('input,textarea').removeAttr('style');
                _self.find('.error-msg').remove();
                _self.closest('div').find('button[type="submit"]').attr('disabled', 'disabled');
        
                // Valid fields
                var requiredFields = ['contact-name', 'contact-email', 'subject', 'contact-message'];
                var isValid = true;
        
                // Verify if all fields are fill
                $.each(requiredFields, function (index, fieldName) {
                    var fieldValue = $('[name="' + fieldName + '"]').val().trim();
        
                    if (fieldValue === '') {
                        isValid = false;
                    }
                });
        
                if (!isValid) {
                    // Error message for all the fields
                    _self.find('.rn-btn').after('<div class="error-msg"><p>* Insert data into required fields *</p></div>');
        
                    // Error message desapear in 5 sec
                    setTimeout(function () {
                        _self.find('.error-msg').fadeOut('slow', function () {
                            $(this).remove();
                        });
                    }, 5000);
        
                    _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                    return; // If fields are empty he dont send nothing
                }
        
                // Check email to see if he is valid
                var emailValue = $('[name="contact-email"]').val().trim();
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
                if (!emailRegex.test(emailValue)) {
                    _self.find('.rn-btn').after('<div class="error-msg"><p>* Enter a valid email address *</p></div>');
                    isValid = false;
        
                    // Error message desapear in 5 sec
                    setTimeout(function () {
                        _self.find('.rn-btn').siblings('.error-msg').fadeOut('slow', function () {
                            $(this).remove();
                        });
                    }, 5000);
                }
        
                if (!isValid) {
                    _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                    return; // If email invalid, he dont send data
                }
        
                var data = $(this).serialize();
                $.ajax({
                    url: 'https://formspree.io/f/xbjnqozd',
                    type: "post",
                    dataType: 'json',
                    data: data,
                    success: function (data) {
                        _self.closest('div').find('button[type="submit"]').removeAttr('disabled');
                        if (data.code == false) {
                            _self.closest('div').find('[name="' + data.field + '"]');
                            _self.find('.rn-btn').after('<div class="error-msg"><p>*' + data.err + '</p></div>');
        
                            // Error message desapear in 5 sec
                            setTimeout(function () {
                                _self.find('.error-msg').fadeOut('slow', function () {
                                    $(this).remove();
                                });
                            }, 5000);
                        } else {
                            $('.error-msg').hide();
                            $('.form-group').removeClass('focused');
                            _self.find('.rn-btn').after('<div class="success-msg"><p> Message Sent! </p></div>');
                            _self.closest('div').find('input,textarea').val('');
        
                            setTimeout(function () {
                                $('.success-msg').fadeOut('slow');
                            }, 5000);
                        }
                    }
                });
            });
        },
        

        wowActive: function () {
            new WOW().init();
        },

        smothScroll: function () {
            $(document).on('click', '.smoth-animation', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 50
                }, 300);
            });
        },
        // two scroll spy
        smothScroll_Two: function () {
            $(document).on('click', '.smoth-animation-two', function (event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 0
                }, 300);
            });
        },


        stickyAdjust: function (e) {
            // Sticky Top Adjust..,
            $('.rbt-sticky-top-adjust').css({
                top: 120
            });

            $('.rbt-sticky-top-adjust-two').css({
                top: 200
            });
            $('.rbt-sticky-top-adjust-three').css({
                top: 25
            });
        },

        testimonialActivation: function () {
            $('.testimonial-activation').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>'
            });

            $('.testimonial-item-one').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                adaptiveHeight: true,
                cssEase: 'linear',
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                    }
                }]
            });


            $('.portfolio-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });


            $('.blog-slick-activation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-arrow-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-arrow-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.testimonial-activation-item-3').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
            });

            $('.brand-activation-item-5').slick({
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                adaptiveHeight: true,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="feather-chevron-left"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="feather-chevron-right"></i></button>',
                responsive: [{
                        breakpoint: 1124,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 868,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        },

        featherAtcivation: function () {
            feather.replace()
        },


        backToTopInit: function () {
            // declare variable
            var scrollTop = $('.backto-top');
            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                    $(scrollTop).css('opacity', '1');

                } else {
                    $(scrollTop).css('opacity', '0');
                }
            });
            
            //Click event to scroll to top
            $(scrollTop).on('click', function () {
                $('html, body').animate({
                    scrollTop: 0,
                    easingType: 'linear',
                }, 0);
                return false;
            });

        },

        stickyHeader: function (e) {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 250) {
                    $('.header--sticky').addClass('sticky')
                } else {
                    $('.header--sticky').removeClass('sticky')
                }
            })
        },

        vedioActivation: function (e) {
            $('#play-video').on('click', function (e) {
                e.preventDefault();
                $('#video-overlay').addClass('open');
                $("#video-overlay").append('<iframe width="80%" height="80%" src="https://www.youtube.com/embed/7e90gBu4pas" frameborder="0" allowfullscreen></iframe>');
            });

            $('.video-overlay, .video-overlay-close').on('click', function (e) {
                e.preventDefault();
                close_video();
            });

            $(document).keyup(function (e) {
                if (e.keyCode === 27) {
                    close_video();
                }
            });

            function close_video() {
                $('.video-overlay.open').removeClass('open').find('iframe').remove();
            };
        },

        mobileMenuActive: function (e) {
            $('.humberger-menu').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').addClass('menu-open');
                imJs._html.css({
                    overflow: 'hidden'
                })
            });

            $('.close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a').on('click', function (e) {
                e.preventDefault();
                $('.popup-mobile-menu').removeClass('menu-open');
                $('.has-droupdown > a').removeClass('open').siblings('.submenu').removeClass('active').slideUp('400');
                imJs._html.css({
                    overflow: ''
                })
            });

            $('.popup-mobile-menu').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.has-droupdown > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open');
                imJs._html.css({
                    overflow: ''
                })
            });


            $('.nav-pills .nav-link').on('click', function (e) {
                $('.rn-popup-mobile-menu').removeClass('menu-open');
                imJs._html.css({
                    overflow: ''
                })
            })


        },

        awsActivation:function(e){
            AOS.init();
        },
        

    }
    imJs.m();


})(jQuery, window)

// ========================== Videos ===========================
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.querySelector('video').getAttribute('src');
            
            // Fade out the main video before changing the source
            $(mainVideo).fadeOut(200, function() {
                mainVideo.src = src;
                mainVideo.play();

                // Fade in the main video after the source is changed
                $(mainVideo).fadeIn(200);
            });
        }
    }
});

document.getElementById('openpopup0').addEventListener('click', function(event) {
    event.preventDefault();
    let popupContainer = document.getElementById('videopopup');

    // Use fadeIn for a smooth appearance
    $(popupContainer).fadeIn().css('display', 'flex');
});

document.getElementById('closepopup0').addEventListener('click', function() {
    let popupContainer = document.getElementById('videopopup');

    // Use fadeOut for a smooth disappearance
    $(popupContainer).fadeOut(200, function() {
        let videos = document.querySelectorAll('#videopopup video');

        videos.forEach(function(video) {
            video.pause();   
            video.currentTime = 0; 

            if (video.hasAttribute('poster')) {
                video.load(); 
            }
        });

        mainVideo.src = 'assets/v-content/Video/Phase1.mp4';
        mainVideo.load(); 
    });
});

/*
let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.querySelector('video').getAttribute('src');
            mainVideo.src = src;
            mainVideo.play();
        }
    }
});

document.getElementById('openpopup0').addEventListener('click', function(event) {
    event.preventDefault();
    let popupContainer = document.getElementById('videopopup');
    popupContainer.style.display = 'block';
    popupContainer.style.display = 'flex';
});

document.getElementById('closepopup0').addEventListener('click', function() {
    var popupContainer = document.getElementById('videopopup');
    popupContainer.style.display = 'none';

    
    var videos = document.querySelectorAll('#videopopup video');

    videos.forEach(function(video) {
        video.pause();   
        video.currentTime = 0; 

        if (video.hasAttribute('poster')) {
            video.load(); 
        }
    });

    mainVideo.src = 'assets/v-content/Video/Phase1.mp4';
    mainVideo.load(); 
}); */
//=================== 

function createCodeEditor(elementId) {
    var editorElement = document.getElementById(elementId);
    var editor;

    if (!editorElement.classList.contains("CodeMirror")) {
        editor = CodeMirror.fromTextArea(editorElement, {
            lineNumbers: true, // Show line numbers
            mode: "python", // Set mode to CSS
            theme: "dracula", // Set theme to dark mode
            readOnly: true, // Make the editor read-only
            spellcheck: false, // Disable spellcheck
            cursorBlinkRate: 0, // Disable cursor blinking
            cursor: false,
            inputStyle: "contenteditable", // Set input style to contenteditable to disable built-in copy functionality
            lineWrapping: false, // Enable line wrapping
            lineNumberWidth: 50, // Definir a largura dos números das linhas
            lineWiseCopyCut: true, // Habilitar cópia e recorte de linhas inteiras
            fixedGutter: true, // Fixar a coluna de números das linhas
        });

        editor.setOption("extraKeys", {
            "Ctrl-C": function(cm) { } 
        });
    }
    return editor;
}
/*
function handlePopupLinkClick(popupLink, popup, detailsPopupId, editor) {
    popupLink.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "block";
        document.getElementById("d-open" + detailsPopupId).addEventListener("click", function() {
            document.getElementById("details-popup" + detailsPopupId).style.display = "block";
            document.getElementById("d-close" + detailsPopupId).addEventListener("click", function() {
                document.getElementById("details-popup" + detailsPopupId).style.display = "none";
            });
        });

        if (editor) {
            editor.refresh();
        }

        document.getElementById("p-close" + detailsPopupId).addEventListener("click", function() {
            popup.style.display = "none";
        
        });
    });
}
*/


function handlePopupLinkClick(popupLink, popup, detailsPopupId, editor) {
    popupLink.addEventListener("click", function(event) {
        event.preventDefault();

        // Exibe o popup com fadeIn
        $(popup).fadeIn();

        document.getElementById("d-open" + detailsPopupId).addEventListener("click", function() {
            // Exibe o popup de detalhes com fadeIn
            $("#details-popup" + detailsPopupId).fadeIn();

            document.getElementById("d-close" + detailsPopupId).addEventListener("click", function() {
                // Esconde o popup de detalhes com fadeOut
                $("#details-popup" + detailsPopupId).fadeOut();
            });
        });

        if (editor) {
            editor.refresh();
        }

        document.getElementById("p-close" + detailsPopupId).addEventListener("click", function() {
            // Esconde o popup principal com fadeOut
            $(popup).fadeOut();
        });
    });
}


const editors = [];
const popupLinks = [];
const popups = [];

for (let i = 0; i <= 12; i++) {
    if (i !== 6) {
        editors[i] = createCodeEditor(`code-editor${i}`);
        popupLinks[i] = document.getElementById(`popup-link${i}`);
        popups[i] = document.getElementById(`popup${i}`);
        handlePopupLinkClick(popupLinks[i], popups[i], `${i}`, editors[i]);
    }
} 











document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i <= 4; i++) {
        let openBtn = document.getElementById(`openpopup${i}`);
        let closeBtn = document.getElementById(`closepopup${i}`);

        if (openBtn) {
            openBtn.addEventListener('click', function() {
                document.documentElement.style.overflow = 'hidden';
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                document.documentElement.style.overflow = 'hidden';
                document.documentElement.style.overflowY = 'auto';
            });
        }
    }

    for (let i = 0; i <= 12; i++) {
        if (i === 6) continue;

        let popupLink = document.getElementById(`popup-link${i}`);
        let closeLink = document.getElementById(`p-close${i}`);

        if (popupLink) {
            popupLink.addEventListener('click', function() {
                document.documentElement.style.overflow = 'hidden';
            });
        }

        if (closeLink) {
            closeLink.addEventListener('click', function() {
                document.documentElement.style.overflow = 'hidden';
                document.documentElement.style.overflowY = 'auto';
            });
        }
    }
});


function getIP(callback) {
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => callback(null, data.ip))
    .catch(error => callback(error, null));
}

function sendIP(email, ip) {
    fetch(`https://formspree.io/f/mnqeldgp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            IP: ip
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento de clique ao botão "Yes"
    document.getElementById('yes-button').addEventListener('click', function() {
        // Obtém o endereço IP e envia para o e-mail especificado
        getIP((error, ip) => {
            if (error) {
                console.error('Erro ao obter endereço IP:', error);
            } else {
                // Substitua 'seu_email_aqui' pelo seu endereço de e-mail do Formspree
                sendIP('https://formspree.io/f/mnqeldgp', ip);
            }
        });
    });
});


function ajustarOverflow() {
    const warningPopup = document.getElementById('warning-popup');
    
    if (warningPopup && $(warningPopup).is(':visible')) {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = 'auto';
    }
}

// Função para aplicar configurações baseadas na decisão do usuário
function aplicarConfiguracoes() {
    const decision = localStorage.getItem('userDecision');
    const decisionTime = localStorage.getItem('decisionTime');
    const now = Date.now();

    if (decision === 'no' && decisionTime && now - parseInt(decisionTime) <= 604800000) {
        const pythonHackingTab = document.getElementById('v-pills-python-hacking-tab');
        $(pythonHackingTab).fadeOut();

        const pythonHackingContent = document.getElementById('python-hacking');
        const pythonTab = document.getElementById('v-pills-python-tab');
        const python = document.getElementById('python');
        
        $(pythonHackingContent).removeClass('show active');
        $(pythonHackingTab).removeClass('show active');
        $(pythonTab).addClass('show active');
        $(python).addClass('show active');
        document.documentElement.style.overflow = 'auto';
    } else {
        displayWarning();
    }
}

// Função para exibir ou ocultar o popup de aviso
function displayWarning() {
    const decision = localStorage.getItem('userDecision');
    const decisionTime = localStorage.getItem('decisionTime');
    const showWarning = !decision || (Date.now() - parseInt(decisionTime) > 604800000); //604800000
    
    const warningPopup = document.getElementById('warning-popup');

    if (showWarning) {
        $(warningPopup).fadeIn();
    } else {
        $(warningPopup).fadeOut();
    }
    ajustarOverflow();
}

// Função para inicializar o popup de aviso e configurar os eventos dos botões
function initWarningPopup() {
    const pythonHackingTab = document.getElementById('v-pills-python-hacking-tab');
    const warningPopup = document.getElementById('warning-popup');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');

    function handleYesButtonClick() {
        $(warningPopup).fadeOut();
        localStorage.setItem('userDecision', 'yes');
        localStorage.setItem('decisionTime', Date.now().toString());
        document.documentElement.style.overflow = 'auto';
    }

    function handleNoButtonClick() {
        $(warningPopup).fadeOut();
        localStorage.setItem('userDecision', 'no');
        localStorage.setItem('decisionTime', Date.now().toString());

        const pythonHackingContent = document.getElementById('python-hacking');
        const pythonHackingTab = document.getElementById('v-pills-python-hacking-tab');
        const pythonTab = document.getElementById('v-pills-python-tab');
        const python = document.getElementById('python');
        
        $(pythonHackingContent).removeClass('show active');
        $(pythonHackingTab).removeClass('show active');
        $(pythonTab).addClass('show active');
        $(python).addClass('show active');
        $(pythonHackingTab).fadeOut();
        document.documentElement.style.overflow = 'auto';
    }

    function handleTabClick() {
        aplicarConfiguracoes();
    }

    pythonHackingTab.removeEventListener('click', handleTabClick);
    pythonHackingTab.addEventListener('click', handleTabClick);
    
    yesButton.removeEventListener('click', handleYesButtonClick);
    yesButton.addEventListener('click', handleYesButtonClick);
    
    noButton.removeEventListener('click', handleNoButtonClick);
    noButton.addEventListener('click', handleNoButtonClick);

    aplicarConfiguracoes();
}

// Observador de mudanças para ajustar o overflow quando o estilo do popup mudar
const observer = new MutationObserver(ajustarOverflow);
observer.observe(document.getElementById('warning-popup'), { attributes: true, attributeFilter: ['style'] });

// Inicializar o popup de aviso após um atraso quando a aba "python-hacking" for clicada
document.getElementById('v-pills-python-hacking-tab').addEventListener('click', () => {
    setTimeout(initWarningPopup, 200);
});

// Função para verificar o estado da aba "v-pills-python-hacking-tab" no carregamento da página
window.addEventListener('load', () => {
    const decision = localStorage.getItem('userDecision');
    const decisionTime = localStorage.getItem('decisionTime');
    const now = Date.now();

    if (decision === 'no' && decisionTime && now - parseInt(decisionTime) <= 604800000) {
        const pythonHackingTab = document.getElementById('v-pills-python-hacking-tab');
        $(pythonHackingTab).hide();
    }
});


document.getElementById('activate-tab').addEventListener('click', function(event) {
    event.preventDefault();

    window.location.href = '#projects';
    // Adicionar um delay de 3 segundos
    setTimeout(function() {
        // Ativar o tab
        var tab = document.getElementById('v-pills-hacking-tab');
        var tabContent = new bootstrap.Tab(tab);
        tabContent.show();
        
        // Redirecionar para a seção #projects
    }, 1000); // 3000 milissegundos = 3 segundos
});




['s1', 's2', 's3'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        let cryptoAmount;
        const service = document.getElementById('typeservice')
        switch (id) {
            case 's1':
                cryptoAmount = 1000 + '£';
                service.value = 'Website (Frontend)';
                break;
            case 's2':
                cryptoAmount = 2000 + "£";
                service.value = 'Website (Frontend + Backend)';
                break;
            case 's3':
                cryptoAmount = 3000 + "£";
                service.value = 'Pentest (Full Report)';
                break;
        }

        // Salva o valor atual em um campo de estado para ser usado no cálculo
        document.getElementById('payment').dataset.cryptoAmount = cryptoAmount;

        // Exibe o popup
        document.getElementById('payment').style.display = 'flex';
        document.documentElement.style.overflow = 'hidden';
    });
});


// Fecha o popup quando o botão "Exit" é clicado
document.getElementById('s-close').addEventListener('click', function() {
    document.getElementById('payment').style.display = 'none';
    document.documentElement.style.overflow = 'auto';
});


// ===========================================================
// Funções auxiliares
function resetPopup() {
    // Esconde todos os campos
    $('.name-section, .email-section, .phone-section, .typeservice-section, .network-section, .wallet-section, .price-section, .small-text, .payment-method-section').hide();

    // Reseta os valores dos inputs
    $('#user-name, #user-email, #user-phone').val('');

    // Remove a classe 'selected' de todos os métodos de pagamento
    $('.payment-icons .icon').removeClass('selected');

    // Reexibe os campos principais
    $('.name-section, .email-section, .phone-section, .typeservice-section, .payment-method-section').css('display', 'block');
}

function isPaymentMethodSelected() {
    return $('.payment-icons .icon.selected').length > 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const numericPhone = phone.replace(/\D/g, '');
    return numericPhone.length >= 10 && !/^(\d)\1+$/.test(numericPhone);
}

// Função para buscar o preço da criptomoeda e ajustar o valor conforme o montante
async function fetchCryptoPrice(crypto) {
    const priceInput = document.getElementById('crypto-price');
    priceInput.value = 'Calculating...';

    try {
        let apiUrl = '';
        const cryptoAmount = parseFloat(document.getElementById('payment').dataset.cryptoAmount || 500.1); // Pega o valor armazenado

        // Definindo URL da API para cada criptomoeda
        switch (crypto) {
            case 'btc':
                apiUrl = 'https://blockchain.info/ticker';
                break;
            case 'eth':
                apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=gbp';
                break;
            case 'usdc':
                apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies=gbp';
                break;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();

        let cryptoPriceInGbp = 0;
        switch (crypto) {
            case 'btc':
                cryptoPriceInGbp = data.GBP.last;
                break;
            case 'eth':
                cryptoPriceInGbp = data.ethereum.gbp;
                break;
            case 'usdc':
                cryptoPriceInGbp = data['usd-coin'].gbp;
                break;
        }

        const cryptoAmountInCrypto = cryptoAmount / cryptoPriceInGbp;
        priceInput.value = `${cryptoAmountInCrypto.toFixed(8)} ${crypto.toUpperCase()} ≈ (${cryptoAmount}£)`;
    } catch (error) {
        priceInput.value = 'Error fetching price';
    }
}

// Função para atualizar os conteúdos das seções de rede e carteira
function updatePaymentContent(selectedPaymentMethod) {
    const networks = {
        bitcoin: { network: 'BTC', wallet: '1KCkjdsDavoWLdvZ9wZndaKoA3XiFXrew8' },
        ethereum: { network: 'BEP20', wallet: '0x07b2c66825b3abaabd04f7c6a664e2c7211f7400' },
        usdc: { network: 'BEP20', wallet: '0x07b2c66825b3abaabd04f7c6a664e2c7211f7400' },
        bank: { network: 'Bank', wallet: 'LT92 3250 0777 2201 4713' }
    };

    if (networks[selectedPaymentMethod]) {
        $('#network').val(networks[selectedPaymentMethod].network);
        $('#wallet-address').val(networks[selectedPaymentMethod].wallet);

        const cryptoAmount = parseFloat(document.getElementById('payment').dataset.cryptoAmount || 500.1);

        // Verifica se o método de pagamento é uma criptomoeda
        if (selectedPaymentMethod === 'bitcoin') {
            fetchCryptoPrice('btc');
        } else if (selectedPaymentMethod === 'ethereum') {
            fetchCryptoPrice('eth');
        } else if (selectedPaymentMethod === 'usdc') {
            fetchCryptoPrice('usdc');
        } else {
            // Define o valor fixo em libras para métodos não-cripto
            const priceText = `${cryptoAmount.toFixed(0)} £`;
            document.getElementById('crypto-price').value = priceText;
        }
    }
}

// =============================================
// Evento de clique e validações
$(document).ready(function () {
    resetPopup();

    const $userNameInput = $('#user-name');
    const $emailInput = $('#user-email');
    const $phoneInput = $('#user-phone');
    const $paymentIcons = $('.payment-icons .icon');
    const $sendData = $('#s-next');
    const $bitcoinPayment = $('#payment');

    // Máscara de telefone
    const countryFormats = {
        '1': '+1 (000) 000-0000',      // EUA, Canadá
        '7': '+7 (000) 000-0000',       // Rússia
        '20': '+20 0 000 00000',        // Egito
        '27': '+27 000 000 0000',       // África do Sul
        '30': '+30 000 000 000',        // Grécia
        '31': '+31 000 000 000',        // Países Baixos
        '32': '+32 000 000 000',        // Bélgica
        '33': '+33 0 000 00000',        // França
        '34': '+34 000 000 000',        // Espanha
        '36': '+36 00 000 0000',        // Hungria
        '39': '+39 000 000 0000',       // Itália
        '40': '+40 000 000 000',        // Romênia
        '41': '+41 000 000 0000',       // Suíça
        '43': '+43 000 000 000',        // Áustria
        '44': '+44 0000 000000',        // Reino Unido
        '45': '+45 00 00 00 00',        // Dinamarca
        '46': '+46 000 000 000',        // Suécia
        '47': '+47 000 00 000',         // Noruega
        '48': '+48 000 000 0000',       // Polônia
        '49': '+49 000 000 000',        // Alemanha
        '51': '+51 000 000 0000',       // Peru
        '52': '+52 (00) 00000-0000',    // México
        '53': '+53 000 000 0000',       // Cuba
        '54': '+54 000 000 0000',       // Argentina
        '55': '+55 (00) 00000-0000',    // Brasil
        '56': '+56 000 000 0000',       // Chile
        '57': '+57 000 000 0000',       // Colômbia
        '58': '+58 000 000 0000',       // Venezuela
        '60': '+60 000 0000',           // Malásia
        '61': '+61 000 000 000',        // Austrália
        '62': '+62 000 000 000',        // Indonésia
        '63': '+63 000 000 0000',       // Filipinas
        '64': '+64 000 000 000',        // Nova Zelândia
        '65': '+65 000 0000',           // Cingapura
        '66': '+66 000 000 000',        // Tailândia
        '81': '+81 000 000 000',        // Japão
        '82': '+82 000 000 000',        // Coreia do Sul
        '84': '+84 000 000 0000',       // Vietnã
        '86': '+86 000 000 0000',       // China
        '90': '+90 000 000 0000',       // Turquia
        '91': '+91 000 000 0000',       // Índia
        '92': '+92 000 000 0000',       // Paquistão
        '93': '+93 000 000 0000',       // Afeganistão
        '94': '+94 000 000 000',        // Sri Lanka
        '95': '+95 000 000 000',        // Myanmar
        '98': '+98 000 000 000',        // Irã
        '211': '+211 000 000 0000',     // Sudão do Sul
        '212': '+212 000 000 000',      // Marrocos
        '213': '+213 000 000 000',      // Argélia
        '216': '+216 00 000 000',       // Tunísia
        '218': '+218 000 000 000',      // Líbia
        '220': '+220 000 0000',         // Gâmbia
        '221': '+221 00 000 0000',      // Senegal
        '222': '+222 0000 0000',        // Mauritânia
        '223': '+223 0000 0000',        // Mali
        '224': '+224 000 000 0000',     // Guiné
        '225': '+225 000 000 0000',     // Costa do Marfim
        '226': '+226 000 000 0000',     // Burkina Faso
        '227': '+227 00 00 00 00',      // Níger
        '228': '+228 000 000 000',      // Togo
        '229': '+229 00 000 000',       // Benin
        '230': '+230 0000 0000',        // Maurício
        '231': '+231 000 000 000',      // Libéria
        '232': '+232 00 000 000',       // Serra Leoa
        '233': '+233 000 000 000',      // Gana
        '234': '+234 000 000 0000',     // Nigéria
        '235': '+235 00 00 00 00',      // Chade
        '236': '+236 000 000 0000',     // República Centro-Africana
        '237': '+237 0000 00000',       // Camarões
        '238': '+238 000 0000',         // Cabo Verde
        '239': '+239 000 0000',         // São Tomé e Príncipe
        '240': '+240 000 000 000',      // Guiné Equatorial
        '241': '+241 000 00000',        // Gabão
        '242': '+242 000 000 000',      // República do Congo
        '243': '+243 000 000 000',      // República Democrática do Congo
        '244': '+244 000 000 000',      // Angola
        '245': '+245 000 0000',         // Guiné-Bissau
        '246': '+246 000 0000',         // Ilhas Falkland
        '248': '+248 0 000 000',        // Seychelles
        '249': '+249 000 000 0000',     // Sudão
        '250': '+250 000 000 000',      // Ruanda
        '251': '+251 000 000 000',      // Etiópia
        '252': '+252 000 000 0000',     // Somália
        '253': '+253 00 00 00 00',      // Djibuti
        '254': '+254 000 000 000',      // Quênia
        '255': '+255 000 000 000',      // Tanzânia
        '256': '+256 000 000 000',      // Uganda
        '257': '+257 00 00 0000',       // Burundi
        '258': '+258 00 000 000',       // Moçambique
        '260': '+260 000 000 000',      // Zâmbia
        '261': '+261 00 00 00000',      // Madagascar
        '262': '+262 000 000 000',      // Reunião
        '263': '+263 000 000 0000',     // Zimbábue
        '264': '+264 00 000 0000',      // Namíbia
        '265': '+265 000 000 000',      // Malawi
        '266': '+266 0000 0000',        // Lesoto
        '267': '+267 00 000 000',       // Botsuana
        '268': '+268 0000 0000',        // Eswatini
        '269': '+269 000 0000',         // Comores
        '290': '+290 0000',             // Santa Helena
        '291': '+291 0 000 000',        // Eritreia
        '297': '+297 000 0000',         // Aruba
        '298': '+298 000 000',          // Ilhas Faroé
        '299': '+299 000 000',          // Groenlândia
        '350': '+350 000 000',          // Gibraltar
        '351': '+351 000 000 000',      // Portugal
        '352': '+352 000 000 000',      // Luxemburgo
        '353': '+353 000 000 000',      // Irlanda
        '354': '+354 000 0000',         // Islândia
        '355': '+355 000 000 000',      // Albânia
        '356': '+356 0000 0000',        // Malta
        '357': '+357 00 000 000',       // Chipre
        '358': '+358 000 000 000',      // Finlândia
        '359': '+359 000 000 000',      // Bulgária
        '370': '+370 000 000 000',      // Lituânia
        '371': '+371 000 00000',        // Letônia
        '372': '+372 000 0000',         // Estônia
        '373': '+373 000 00000',        // Moldávia
        '374': '+374 000 000 0000',     // Armênia
        '375': '+375 000 000 000',      // Belarus
        '376': '+376 000 000',          // Andorra
        '377': '+377 000 000 000',      // Mônaco
        '378': '+378 000 000 0000',     // San Marino
        '379': '+379 000 000 000',      // Cidade do Vaticano
        '380': '+380 000 000 000',      // Ucrânia
        '381': '+381 00 000 0000',      // Sérvia
        '382': '+382 00 000 000',       // Montenegro
        '383': '+383 00 000 000',       // Kosovo
        '385': '+385 00 000 0000',      // Croácia
        '386': '+386 00 000 000',       // Eslovênia
        '387': '+387 00 000 000',       // Bósnia e Herzegovina
        '389': '+389 00 000 000',       // Macedônia do Norte
        '420': '+420 000 000 000',      // República Tcheca
        '421': '+421 000 000 000',      // Eslováquia
        '423': '+423 000 000 000',      // Liechtenstein
        '500': '+500 00000',            // Ilhas Malvinas
        '501': '+501 000 0000',         // Belize
        '502': '+502 0000 0000',        // Guatemala
        '503': '+503 0000 0000',        // El Salvador
        '504': '+504 0000 0000',        // Honduras
        '505': '+505 000 000 000',      // Nicarágua
        '506': '+506 0000 0000',        // Costa Rica
        '507': '+507 0000 0000',        // Panamá
        '508': '+508 00 00 00',         // São Pedro e Miquelão
        '509': '+509 0000 0000',        // Haiti
        '590': '+590 000 000 000',      // Guadalupe
        '591': '+591 0 000 0000',       // Bolívia
        '592': '+592 000 0000',         // Guiana
        '593': '+593 00 000 0000',      // Equador
        '594': '+594 000 00 00 00',     // Guiana Francesa
        '595': '+595 000 000 000',      // Paraguai
        '596': '+596 000 00 00 00',     // Martinica
        '597': '+597 000 000',          // Suriname
        '598': '+598 0000 0000',        // Uruguai
        '599': '+599 000 0000',         // Curaçao
        '670': '+670 000 0000',         // Timor-Leste
        '672': '+672 000 000',          // Ilha Norfolk
        '673': '+673 000 0000',         // Brunei
        '674': '+674 000 0000',         // Nauru
        '675': '+675 000 0000',         // Papua-Nova Guiné
        '676': '+676 00000',            // Tonga
        '677': '+677 00000',            // Ilhas Salomão
        '678': '+678 00000',            // Vanuatu
        '679': '+679 000 0000',         // Fiji
        '680': '+680 000 0000',         // Palau
        '681': '+681 00 00 00',         // Wallis e Futuna
        '682': '+682 00 000',           // Ilhas Cook
        '683': '+683 0000',             // Niue
        '685': '+685 00000',            // Samoa
        '686': '+686 00000',            // Kiribati
        '687': '+687 00 00 00',         // Nova Caledônia
        '688': '+688 0000',             // Tuvalu
        '689': '+689 00 00 00',         // Polinésia Francesa
        '690': '+690 0000',             // Tokelau
        '691': '+691 000 0000',         // Micronésia
        '692': '+692 000 0000',         // Ilhas Marshall
        '850': '+850 000 000 000',      // Coreia do Norte
        '852': '+852 0000 0000',        // Hong Kong
        '853': '+853 0000 0000',        // Macau
        '855': '+855 000 000 0000',     // Camboja
        '856': '+856 00 000 000',       // Laos
        '880': '+880 000 000 000',      // Bangladesh
        '886': '+886 000 000 000',      // Taiwan
        '960': '+960 000 0000',         // Maldivas
        '961': '+961 00 000 000',       // Líbano
        '962': '+962 0 0000 0000',      // Jordânia
        '963': '+963 000 000 0000',     // Síria
        '964': '+964 000 000 0000',     // Iraque
        '965': '+965 0000 0000',        // Kuwait
        '966': '+966 000 000 0000',     // Arábia Saudita
        '967': '+967 000 000 0000',     // Iêmen
        '968': '+968 0000 0000',        // Omã
        '970': '+970 000 000 000',      // Palestina
        '971': '+971 000 000 0000',     // Emirados Árabes Unidos
        '972': '+972 000 000 0000',     // Israel
        '973': '+973 000 0000',         // Bahrein
        '974': '+974 0000 0000',        // Catar
        '975': '+975 00 000 000',       // Butão
        '976': '+976 000 0000',         // Mongólia
        '977': '+977 000 000 0000',     // Nepal
        '992': '+992 000 000 000',      // Tajiquistão
        '993': '+993 000 000 00',       // Turcomenistão
        '994': '+994 000 000 00 00',    // Azerbaijão
        '995': '+995 000 000 000',      // Geórgia
        '996': '+996 000 000 000',      // Quirguistão
        '998': '+998 000 000 0000',     // Uzbequistão
     };
    
    $phoneInput.on('focus', function () {
        const $this = $(this);
        
        // Inicializa o tipo de entrada como 'tel'
        $this.attr('type', 'tel');
        
        // Função para aplicar a máscara após a detecção do código do país
        $this.on('input', function () {
            let value = $this.val().replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            let countryCode = value.substring(0, 3);  // Pega os primeiros 3 números
    
            // Garantir que o sinal "+" apareça assim que o usuário começa a digitar
            if (value.length === 1 && !value.startsWith('+')) {
                $this.val('+' + value);  // Adiciona o sinal "+" automaticamente
            }
    
            // Verifica se o código do país existe no objeto
            if (countryFormats[countryCode]) {
                // Aplica a máscara do código de país válido
                $this.mask(countryFormats[countryCode], {
                    reverse: false,
                    translation: { '9': { pattern: /[0-9]/ }, '0': { pattern: /[0-9]/ } },
                    optional: false
                });
            } else {
                // Caso o código não seja encontrado, tenta buscar o código mais próximo válido
                let validCode = Object.keys(countryFormats).find(code => value.startsWith(code));
                if (validCode) {
                    // Aplica a máscara do código válido encontrado
                    $this.mask(countryFormats[validCode], {
                        reverse: false,
                        translation: { '9': { pattern: /[0-9]/ }, '0': { pattern: /[0-9]/ } },
                        optional: false
                    });
                } else {
                    // Caso o código não seja encontrado e o campo foi apagado, resetamos a máscara
                    $this.unmask();  // Remove a máscara
                }
            }
    
            // Caso o campo tenha sido apagado completamente, removemos a máscara e resetamos o valor
            if (value === "") {
                $this.unmask();  // Remove a máscara
            }
        });
    });

    let selectedPaymentMethod = '';

    // Evento de clique nos ícones de pagamento
    $paymentIcons.on('click', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            $paymentIcons.removeClass('selected');
            $(this).addClass('selected');
        }

        selectedPaymentMethod = $(this).data('payment-method');
        updatePaymentContent(selectedPaymentMethod);
    });

    // Evento de envio de dados
    $sendData.on('click', function () {
        let hasError = false;
        $('.error-text').fadeOut(300, function () { $(this).remove(); });

        // Validação dos campos
        if (!$userNameInput.val().trim()) {
            displayError('.name-section', '* Name is required *');
            hasError = true;
        }

        const emailValue = $emailInput.val().trim();
        if (!emailValue || !isValidEmail(emailValue)) {
            displayError('.email-section', '* Enter a valid email address *');
            hasError = true;
        }

        const phoneValue = $phoneInput.val().trim();
        if (!phoneValue || !isValidPhone(phoneValue)) {
            displayError('.phone-section', '* Enter a valid phone number with country code *');
            hasError = true;
        }

        if (!isPaymentMethodSelected()) {
            displayError('.payment-method-section', '* Choose a payment method *');
            hasError = true;
        }

        if (hasError) {
            setTimeout(() => $('.error-text').fadeOut(300, function () { $(this).remove(); }), 3000);
            return;
        }

        // Esconde e exibe as seções
        $('.name-section, .email-section, .phone-section, #s-next, .payment-method-section').hide();
        $('.typeservice-section, .network-section, .wallet-section, .price-section, .small-text').css('display', 'block');
    });

    // Função para exibir erro
    function displayError(section, message) {
        const errorMessage = `<div class="error-text"><p>${message}</p></div>`;
        $(section).append(errorMessage);
        $(`${section} .error-text`).hide().fadeIn(300);
    }

    // Fechar popup
    $('#s-close, #contact-link').on('click', function (event) {
        event.preventDefault();
        resetPopup();
        $bitcoinPayment.hide();
        $sendData.show();
    });

    // Função de copiar endereço de carteira
    $('#copy-wallet').on('click', function () {
        const walletAddressInput = document.getElementById('wallet-address');
        const copyTooltip = document.getElementById('copy-tooltip');

        // Copiar o endereço da carteira
        walletAddressInput.select();
        document.execCommand('copy');
        walletAddressInput.setSelectionRange(0, 0);

        // Mostrar balão de "Copied!"
        copyTooltip.classList.add('show-tooltip');
        setTimeout(() => copyTooltip.classList.remove('show-tooltip'), 2000);
    });
});






