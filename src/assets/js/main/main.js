document.addEventListener("DOMContentLoaded",(function(){if("loading"in HTMLImageElement.prototype){document.querySelectorAll("img.lazy").forEach(e=>{e.src=e.dataset.src})}else{(new LazyLoad).update()}function e(e){return 1===e.parents("body").find(".modal:visible").length}$(".menu-toggle").on("click",(function(){$(".menu-modal").fadeIn(400)})),$(".menu-modal__close").on("click",(function(){$(".menu-modal").fadeOut(400)})),$(".menu a").click((function(){$(".menu").toggleClass("_active"),$(".menu-toggle").toggleClass("_active")})),$("[data-modal-open]").on("click",(function(){const e=$(this).data("modal-open");if($("#"+e).fadeIn(500),setTimeout((function(){$("body").css("overflow","hidden")}),500),"modal-video"==e){let i;i=$(this).data("video-src")?$(this).data("video-src"):$("#"+e).find(".modal-video__box").data("video-src"),$("#"+e).find(".modal-video__frame").length?$("#"+e).find(".modal-video__frame").attr("src",i):(console.log($("#"+e).find(".modal-video__frame").length),$("#"+e).find(".modal-video__box").html(' <iframe class="modal-video__frame" src="'+i+'" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))}"modal-login"==e&&($('[data-login="'+$(this).data("login-open")+'"]').siblings(".modal-login__form").hide(),$('[data-login="'+$(this).data("login-open")+'"]').show(),$('.modal-login [data-login-open="'+$(this).data("login-open")+'"]').addClass("_active"),$('.modal-login [data-login-open="'+$(this).data("login-open")+'"]').siblings(".modal-login__toggle").removeClass("_active"))})),$(".modal__close").click((function(){const i=$(this);setTimeout((function(){i.parents(".modal").fadeOut(500)}),150),e($(this).parents(".modal"))&&$("body").css("overflow",""),setTimeout((function(){"modal-video"==i.parents(".modal")[0].id&&i.parents(".modal").find(".modal-video__frame").attr("src","")}),650)})),window.matchMedia("(min-width: 768px)").matches&&$(".modal").mouseup((function(i){const o=$(this),a=$(this).find(".modal__box");0!=o.data("modal-target")&&(a.is(i.target)||0!==a.has(i.target).length||(setTimeout((function(){o.fadeOut(500)}),150),e(o)&&$("body").css("overflow","")))})),$(".modal-login__toggle").click((function(){$(this).addClass("_active"),$(this).siblings(".modal-login__toggle").removeClass("_active"),$('[data-login="'+$(this).data("login-open")+'"]').siblings(".modal-login__form").hide(),$('[data-login="'+$(this).data("login-open")+'"]').show()})),$(".questions-item__header").on("click",(function(){"accordion"===$(this).parents(".questions").data("questions")?($(this).parent().siblings().children(".questions-item__body").slideUp(250),$(this).parent().siblings().children(".questions-item__header").removeClass("_active"),$(this).next().slideToggle(250),$(this).toggleClass("_active")):($(this).next().slideToggle(250),$(this).toggleClass("_active"))}));new Swiper(".audience-slider",{slidesPerView:1.2,spaceBetween:16,watchOverflow:!0,loop:!0,breakpoints:{1280:{slidesPerView:4.4},768:{slidesPerView:3.5},640:{slidesPerView:2.8},480:{slidesPerView:2.2}},navigation:{nextEl:".audience-slider-next",prevEl:".audience-slider-prev"},lazy:{loadPrevNext:!0,loadPrevNextAmount:2}});$(".audience-card__view-show").click((function(){$(this).parents(".audience-card").find(".audience-card__view").addClass("_active")})),$(".audience-card__view-hide").click((function(){$(this).parent(".audience-card__view").removeClass("_active")}));const i=new Swiper(".reviews-slider",{slidesPerView:1,spaceBetween:25,watchOverflow:!0,autoHeight:!0,breakpoints:{1024:{slidesPerView:2,spaceBetween:20}},loop:!0,navigation:{nextEl:".reviews-slider-next",prevEl:".reviews-slider-prev"}});window.addEventListener("load",(function(){i.update()}))}));