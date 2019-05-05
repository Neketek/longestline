mkdir -p /data/db
mkdir -p /data/logs

touch /data/logs/log

chown -R mongodb:mongodb /data
chmod 777 -R /data

su -s /bin/sh mongodb -c 'mongod --dbpath /data/db --logpath /data/logs/log --port 27017 --bind_ip_all --logappend'
