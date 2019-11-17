'use strict'
const shell = require('shelljs');
const fs = require('fs');
const s3 = require('../../worker-sqs/s3Storage.js')

module.exports.generateCypress = function(req,success,error){

    //shell.exec('npm install');
    let itemsEx = req.numberExecution;
    let path = req.path_project;
    let code = req.code;
    const codeinit = req.code;
    var item = 1;
    shell.exec('npx cypress run', function(val, stdout, stderr) {
                fs.readdir(`${path}/cypress/report/mochawesome-report`,function(err, items) {
                    let file;
                    for(var i=0;i<items.length;i++){
                        if(items[i].includes('html')){
                            file = items[i];
                            break;
                        }
                    }
                    const content = fs.readFileSync(`${path}/cypress/report/mochawesome-report/${file}`);
                    s3.saveFileToS3(`${code}`,content,()=>{
                        for(i=0;i<items.length;i++){
                            if(items[i].includes('html')){
                                fs.unlinkSync(`${path}/cypress/report/mochawesome-report/${items[i]}`);
                            }
                        }
                        if(item == itemsEx){
                            success("ok");
                        }else{
                        item = item+1;
                        resolve();
                        }
                    });
                });
    });
}
