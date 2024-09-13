# trailing-slash-servers

See how different servers handle serving HTML files and trailing slashes.

The format follows https://github.com/slorber/trailing-slash-guide

```
website
├── file.html
│
├── folder
│   └── index.html
│
├── both.html
└── both
    └── index.html
```

## Result

| Server                | Settings | Url                           | /file                                  | /file/                                | /file.html                            | /folder                                     | /folder/                            | /folder/index.html                            | /both                                     | /both/                              | /both.html                            | /both/index.html                            |
| --------------------- | -------- | ----------------------------- | -------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------------- | ----------------------------------- | --------------------------------------------- | ----------------------------------------- | ----------------------------------- | ------------------------------------- | ------------------------------------------- |
| express               |          | [link](http://localhost:3001) | _[💢 404](http://localhost:3001/file)_ | [💢 404](http://localhost:3001/file/) | [✅](http://localhost:3001/file.html) | [➡️ /folder/](http://localhost:3001/folder) | [✅](http://localhost:3001/folder/) | [✅](http://localhost:3001/folder/index.html) | _[➡️ /both/](http://localhost:3001/both)_ | [✅](http://localhost:3001/both/)   | [✅](http://localhost:3001/both.html) | [✅](http://localhost:3001/both/index.html) |
| sirv                  |          | [link](http://localhost:3002) | [✅](http://localhost:3002/file)       | _[✅](http://localhost:3002/file/)_   | [✅](http://localhost:3002/file.html) | _[✅](http://localhost:3002/folder)_        | [✅](http://localhost:3002/folder/) | [✅](http://localhost:3002/folder/index.html) | [✅](http://localhost:3002/both)          | _[✅](http://localhost:3002/both/)_ | [✅](http://localhost:3002/both.html) | [✅](http://localhost:3002/both/index.html) |
| http-server           |          | [link](http://localhost:3003) | [✅](http://localhost:3003/file)       | [💢 404](http://localhost:3003/file/) | [✅](http://localhost:3003/file.html) | [➡️ /folder/](http://localhost:3003/folder) | [✅](http://localhost:3003/folder/) | [✅](http://localhost:3003/folder/index.html) | _[✅](http://localhost:3003/both)_        | [✅](http://localhost:3003/both/)   | [✅](http://localhost:3003/both.html) | [✅](http://localhost:3003/both/index.html) |
| deno (file-server)    |          | [link](http://localhost:3004) | _[💢 404](http://localhost:3004/file)_ | [💢 404](http://localhost:3004/file/) | [✅](http://localhost:3004/file.html) | [➡️ /folder/](http://localhost:3004/folder) | [✅](http://localhost:3004/folder/) | [✅](http://localhost:3004/folder/index.html) | _[✅](http://localhost:3004/both)_        | [✅](http://localhost:3004/both/)   | [✅](http://localhost:3004/both.html) | [✅](http://localhost:3004/both/index.html) |
| python -m http.server |          | [link](http://localhost:3005) | _[💢 404](http://localhost:3005/file)_ | [💢 404](http://localhost:3005/file/) | [✅](http://localhost:3005/file.html) | [➡️ /folder/](http://localhost:3005/folder) | [✅](http://localhost:3005/folder/) | [✅](http://localhost:3005/folder/index.html) | _[➡️ /both/](http://localhost:3005/both)_ | [✅](http://localhost:3005/both/)   | [✅](http://localhost:3005/both.html) | [✅](http://localhost:3005/both/index.html) |
| httpd (apache)        |          | [link](http://localhost:8080) | _[💢 404](http://localhost:8080/file)_ | [💢 404](http://localhost:8080/file/) | [✅](http://localhost:8080/file.html) | [➡️ /folder/](http://localhost:8080/folder) | [✅](http://localhost:8080/folder/) | [✅](http://localhost:8080/folder/index.html) | _[➡️ /both/](http://localhost:8080/both)_ | [✅](http://localhost:8080/both/)   | [✅](http://localhost:8080/both.html) | [✅](http://localhost:8080/both/index.html) |
| nginx                 |          | [link](http://localhost:8081) | _[💢 404](http://localhost:8081/file)_ | [💢 404](http://localhost:8081/file/) | [✅](http://localhost:8081/file.html) | [➡️ /folder/](http://localhost:8081/folder) | [✅](http://localhost:8081/folder/) | [✅](http://localhost:8081/folder/index.html) | _[➡️ /both/](http://localhost:8081/both)_ | [✅](http://localhost:8081/both/)   | [✅](http://localhost:8081/both.html) | [✅](http://localhost:8081/both/index.html) |

> **Environments:**
>
> - Node: 18.20.3
> - Deno: 1.46.3
> - Python: 3.12.6
> - Apache: 2.4.62
> - Nginx: 1.27.1

## Configuration

Here are some configurations I used for my own machine locally. Yours may be different.

### httpd (apache)

`/opt/homebrew/etc/httpd/httpd.conf`:

```conf
ServerName http://localhost:8080
```

### nginx

`/opt/homebrew/etc/nginx/nginx.conf`:

```conf
http {
  server {
    listen       8081;
    server_name  localhost;

    location / {
      root   /Users/bjorn/Work/repros/trailing-slash-test/website;
    }
  }
}
```

## License

MIT
