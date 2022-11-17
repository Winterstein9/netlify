var Router = {
    routes: {
        "/": "indexPage",
        "gallery": "galleryPage",
        "navigation": "galleryPage",
        "replace": "galleryPage",
        "/artwork/:id/": "artworkPage"
    },
    /*
    В объекте `routes` 
    непосредственно задаются маршруты: ключ — шаблон пути, а значение — название функции-контроллера.
    */ init: function() {
        this._routes = [];
        for(let route in this.routes){
            let methodName = this.routes[route];
            console.log("methodName", methodName);
            this._routes.push({
                pattern: route,
                callback: methodName
            });
        }
    //console.log(this._routes)
    },
    nav: function(path) {
        console.log("path:", path);
        let i = this._routes.length;
        while(--i){
            let args = path.match(this._routes[i].pattern);
            console.log("args", args);
            if (args) {
                //this._routes[i].callback.apply(this, args.slice(1));
                //location.hash = '9990000'
                if (args == "replace") {
                    console.log("выполнен replace");
                    window.history.go();
                } else history.pushState({
                    page: 1
                }, "title 1", `/${args}`) //?page=1 POST
                ;
            }
        }
    }
};
Router.init();
let body_A = document.querySelectorAll("body a");
console.log("--->", body_A);
for (let a of body_A)a.addEventListener("click", (e)=>{
    Router.nav(a.id);
    e.preventDefault();
});

//# sourceMappingURL=index.dfdcc61a.js.map
