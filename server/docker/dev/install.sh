apk update;
apk add postgresql-dev gcc python3-dev musl-dev
pip install -r docker/dev/requirements.txt
apk del gcc python3-dev musl-dev
ln -s /server/docker/dev/manage /usr/local/bin/manage
