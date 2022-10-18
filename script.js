//18/10/22 показать родительскую папку subfolder

let arr = [
    {
        name: "Folder 1",
        folders: [
            {name: "Subfolder 1"},
            {name: "Subfolder 2"},
            {name: "Subfolder 3"},
        ]
    },
    {
        name: "Folder 3",
        folders: [
            {name: "Subfolder 7"},
            {name: "Subfolder 8"},
            {name: "Subfolder 9"},
        ]
    },
];

function showParentFolderName(subFolderName){
    for(let item of arr){
        for(let i = 0; i < item.folders.length; i++){
            if(subFolderName === item.folders[i].name){
                console.log(item.name);
                break; // останавливаем функцию, когда нашли subFolderName
            }
        }
    }
}

showParentFolderName("Subfolder 7");