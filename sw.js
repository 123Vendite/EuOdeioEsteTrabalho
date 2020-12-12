self.addEventListener('install', function(evt){
  console.log("Install SW")
)}

self.addEventListener('activate', function(evt){
  console.log("Activate SW")
)}

self.addEventListener('fetch', function(evt){
  console.log("fetch SW")
)}
