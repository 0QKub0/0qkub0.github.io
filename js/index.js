import stringWidth from 'string-width';
import http from 'http';
import path from 'path';
import v8 from 'v8';
const hostname = '127.0.0.1';
const port = 8888;
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello, node.js serwSer !\n');
});
server.listen(port, hostname, () => {
    console.log(v8.getHeapStatistics());
    console.log(path.basename(import.meta.url));
    console.log(path.join(process.cwd(), 'uploads', 'images'));
    console.log(stringWidth('F'));
    console.log(stringWidth('古'));
    console.log(stringWidth('ъ'));
    console.log(stringWidth('\u001B[1m古\u001B[22m'));
    console.log(`Niektóre znaki Unicode są pełnowymiarowe i zajmują podwójną szerokość w porównaniu do normalnych. 
Kody ucieczki ANSI są usuwane i nie wpływają na szerokość.
Moduł string-width pozwala na zmierzenie rzeczywistej szerokości wyjścia w wierszu poleceń
                `)
    console.log(`Server running at http://${hostname}:${port}/`);
});