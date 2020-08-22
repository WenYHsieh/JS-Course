// tab fotmat transformation when selected
// get tag element by id
function getId(id){
    let idElem = document.getElementById(id);
    return idElem;
}
 

function Transformation(index){
    // get ID of 3 Tab
    let basicinfo = getId('biContent');
    let experience = getId('expContent');
    let photo = getId('photoContent');
    let Bi = getId('BI');
    let Ep = getId('EXP');
    let Pt = getId('PHOTO');

    // set conditional transformation setting
    if (index==0){ // if tab is BI
        basicinfo.className='selectedContent';
        experience.className='unselectedContent';
        photo.className='unselectedContent';
        Bi.className='selectedTab';
        Ep.className='unselectedTab';
        Pt.className='unselectedTab';

    }
    if (index==1){ // if tab is EXP
        basicinfo.className='unselectedContent';
        experience.className='selectedContent';
        photo.className='unselectedContent';
        Bi.className='unselectedTab';
        Ep.className='selectedTab';
        Pt.className='unselectedTab';

    }
    if (index==2){ // if tab is PHOTOs
        basicinfo.className='unselectedContent';
        experience.className='unselectedContent';
        photo.className='selectedContent';
        Bi.className='unselectedTab';
        Ep.className='unselectedTab';
        Pt.className='selectedTab';

    }

}

