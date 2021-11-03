const fs = require('fs').promises;
async function main(){
    await findFiles('folder')
}
main ();
async function findFiles(foldername){
    const folderFiles = await fs.readdir(foldername)
    console.log(folderFiles)
}