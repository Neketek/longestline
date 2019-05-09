rm -rf /etc/nginx/conf.d/default.conf

cp -rf docker/dev/conf/nginx.conf /etc/nginx/nginx.conf
cp -rf docker/dev/conf/reverse-proxy.conf /etc/nginx/conf.d/reverse-proxy.conf
