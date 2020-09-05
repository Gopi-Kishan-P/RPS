self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./index.js","./style.css","./images/Paper.png","./images/Rock.png","./images/Scissor.png","./images/RPS_192.png","./images/RPS_512.png"]);
        })
    );
});

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    );
});