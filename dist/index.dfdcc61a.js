/*
document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault()
    console.log("DOMContentLoaded")
})
*/ let Router = {
    //объект routes
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
        // массив для путей
        this._routes = [];
        //извлекаются пути из объекта routes
        //индекс объекта
        for(let route in this.routes){
            //methodName получает значение свойства объекта routes
            //по индексу
            let methodName = this.routes[route];
            // console.log("methodName",methodName)
            //передает массиву извлекаемые свойства объекта
            this._routes.push({
                //этот объект содержит индекс свойства объекта routes
                pattern: route,
                //и значение этого индекса свойства
                callback: methodName
            });
        }
    //console.log(this._routes)
    },
    //обработчик путей
    //path получает путь в виде id от ссылки
    nav: function(path) {
        console.log("path:", path);
        //получить длинну массива с путями
        let i = this._routes.length;
        //начинаем прогонять массив
        while(--i){
            //получить проверить на совпадение полученный путь
            //с индексом которое уже свойство
            let args = path.match(this._routes[i].pattern);
            console.log("args", args);
            //если есть совпадение
            if (args) {
                //this._routes[i].callback.apply(this, args.slice(1));
                //location.hash = '9990000'
                //если повторить - выпонить повторить
                if (args == "replace") {
                    console.log("выполнен replace");
                    window.history.go();
                //иначе - перейти к странице
                } else history.pushState({
                    page: 1
                }, "title 1", `${args}`) //?page=1 POST
                ;
            }
        }
    }
};
//Router.init("/")
//получаем все ссылки
let body_A = document.querySelectorAll("body a");
//console.log("--->",body_A)
//присваиваем им
for (let a of body_A)//событие
a.addEventListener("click", (e)=>{
    //передаем их id 
    Router.nav(a.id);
    e.preventDefault();
});

//# sourceMappingURL=index.dfdcc61a.js.map
