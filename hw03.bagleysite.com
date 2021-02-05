server {
	listen 80;
	listen [::]:80;

	root /home/nickbagley/hw03/bagleysite.com/4digits;

	index index.html;

	server_name hw03.bagleysite.com;

	location / {
		try_files $uri $uri/ =404;
	}
}
