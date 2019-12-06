sudo docker run -d -v /root/triip/rancher-server:/var/lib/mysql --restart=unless-stopped -p 8080:8080 rancher/server
